![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #3: The Heiss App </h1>

![homepage](https://user-images.githubusercontent.com/71145696/128992805-ee70c808-82e9-47f5-a3d1-d10e2fae250d.png)

<h1>Brief & Timeframe</h1>

<li>As a team build a fullstack MERN (MongoDB, Express, React, Node) application using your own RESTful API</li>
<li>Have CRUD functionality on at least one model</li>
<li>Time-frame: 9 days</li>

<h1>Team</h1>

<li><a href="https://github.com/simplythebex" target="_top">Bex Jones</a></li>
<li><a href="https://github.com/daria-kafler" target="_top">Daria Kafler</a></li>
<li><a href="https://github.com/eintrittfrei" target="_top">Ole Nascimento</a></li>
<li><a href="https://github.com/victoriaolanipekun" target="_top">Victoria Olanipekun</a></li>

<h1>Deployment</h1>
<p>Please follow the link to explore the application: https://heissapp.herokuapp.com/</p>
<p>Repository link: https://github.com/victoriaolanipekun/SEI56-Project-3</p>

<h1>Technologies used</h1>
<li>HTML5</li>
<li>CSS3 + SCSS</li>
<li>JavaScript(ES6)
  <ul>
    <li>ECMAScript6</li>
    <li>React.js</li>
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB</li>
  </ul>
</li>
<li>JWT</li>
<li>Axios</li>
<li>Bcrypt</li>
<li>MapBox</li>
<li>Insomnia</li>
<li>Git & GitHub</li>
<li>react-router-dom</li>
<li>React Bootstrap CSS Framework</li>

<h1>Motivation & Introduction</h1>
<p>This project was my third project for the Software Engineering Immersive course, which was done in a team of 4. The aim was to build a fullstack MERN application using your own RESTful API. As a team we started out brainstorming on several ideas and interests, we all wanted an ecommerce app but yet wanted it to be based on a unique product, we soon realised we all had a common interest in hot drinks either tea or coffee so we decided to build an application that allows users to shop and suggest hot drink. We decided on the name 'Heiss' (heiß) which is 'hot' in German for the app.
  
The market fit of our application is that most professionals start out their day with a hot drink, either tea or coffee. One of the health benefit of taking hot drinks is that it may temporarily improve circulation by causing the arteries and veins to expand. The cultural fit also is something we considered. 
</p>

<h1>Preparation & Organisation</h1>
<h3>Application Structural Sketch</h3>
<p>After deliberating on the functionalities and design direction we wanted to go as a group, I started out with a sketch of the app's models and functionality in order for me to understand how our app would work at a fundamental level.</p>


![Screenshot 2021-08-11 at 20 16 45](https://user-images.githubusercontent.com/71145696/129089588-15696847-b326-4e44-81bf-bebfefb90c83.png)

![Screenshot 2021-08-11 at 19 51 35](https://user-images.githubusercontent.com/71145696/129088092-d86ce368-b4f8-4e65-8d83-1f9b35694b40.png)

<h3>Wireframe</h3>Then I went ahead to create a UI wireframe for the project based on the team's design direction. The main components are the home page, index page, profile page, basket(cart) page. Basket is accessed through the show page displaying each product.</p>

![Wireframe ](https://user-images.githubusercontent.com/71145696/129054420-65edf8fd-79cb-49a9-89a3-46f52966cadb.png)

<h3>Project Management</h3>
<p>We decided to manage the project sprints and development using Trello. Tasks were delegated amidst ourselves and we also indicated tasks we chose to execute as a group.</p>

![Screenshot 2021-08-11 at 18 06 21](https://user-images.githubusercontent.com/71145696/129072659-a7cd92f1-e1cb-4b60-81e9-c91f0ab9a319.png)


<h1>Process</h1>
<h3>Backend</h3>
<p>As soon as we were happy with our wireframes, we began working on our backend in Node.js, creating models, controllers, and routes. I created an initial seeds file to work with. We had just 9 days to build our application, so we decided to build the fundamental backend as a group with each member of the team screen-sharing and taking turns and then go full stack individual developers for the other features we needed to develop independently. Any blockers a team member struggled to overcome, we would all troubleshoot collaboratively to sort them out as efficiently as possible.

This created an environment in which every member of the team knew the details of the fundamental backend, which came in especially useful when buiding the React frontend. We then later took time to explain other features we had individually built as a group. I will give an overview of the app's architecture and go into more details on some of the features that we built as a group and those that were built by me.
</p>

<h3>Collections</h3>
<h4>Models</h4>

* For our collections, we specified models using Mongoose which provides a built in Schema class. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

A Drink Schema: Each key in our code `drinkSchema` defines a property in our documents which will be cast to its associated SchemaType (Mongoose converts our schema paths into SchemaTypes automatically).

```
    const drinkSchema = new mongoose.Schema({
      drink: { type: String, required: true, unique: true },
      type: { type: String, required: true },
      country: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      funFact: { type: String, maxlength: 300 }
    })
```

A User Schema: The `userSchema` defines a property in our documents which will be used in the registeration and login (authentication process).

```
    const userSchema = new mongoose.Schema({
      username: { type: String, required: true, maxLength: 30, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
      image: { type: String, required: true }
    })
```
A Virtual User Schema: The `userSchema.virtual` defines reverse relationship that shows all drinks related to current user.

``` 
    userSchema.virtual('createdDrinks', {
      ref: 'Drink', // references the Drink model
      localField: '_id',
      foreignField: 'owner'
    })
```

<h4>Router</h4>

In the `config` folder we created a `router.js` file to define our API endpoints for calling each collection

```
    router.route('/drinks')
      .get(getAllDrinks)
      .post(createDrink)

    router.route('/drinks/:id')
      .get(displayDrink)
      .put(editDrink)
      .delete(deleteDrink)
      
    router.route('/register')
      .post(registerUser)

    router.route('/login')
      .post(loginUser)

```
To retrive data from the database, each of these defined endpoints relies on a separate function in the files in our `Controllers` folder
<h4>Controllers</h4>

* We implemented functions that will enable access to the collection
* We implemented specific functions to access all of the data in the database or to find a specific drink by ID.
* The controller holds functionality to add new drinks, edit and delete them.
* The example below shows the process of adding a new drink to the database by a registered owner identified by `req.currentUser._id `, using the create method.

```
    
    export const createDrink = async (req, res) => {
      try {
        const drinkWithOwner = { ...req.body, owner: req.currentUser._id }
        console.log(drinkWithOwner)
        const drinkToAdd = await Drink.create(drinkWithOwner)
        console.log('DRINK TO ADD', drinkToAdd)
        return res.status(201).json(drinkToAdd)
      } catch (err) {
        console.log(err)
        return res.status(422).json(err)
      }
    }

```

























