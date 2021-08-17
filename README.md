![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #3: The Heiss App </h1>

![homepage](https://user-images.githubusercontent.com/71145696/128992805-ee70c808-82e9-47f5-a3d1-d10e2fae250d.png)
![Screenshot 2021-08-13 at 19 02 07](https://user-images.githubusercontent.com/71145696/129400663-4113f634-c08e-4b64-8585-551bb9739acb.png)


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
<p>You can also use the following credentials to explore the app:</p>

* Email: tade@email.com
* Password: tade1@


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


<h1>Setting Up</h1>
<p>Repository link: https://github.com/victoriaolanipekun/SEI56-Project-3</p>

To download the source code click the clone button. Run the following commands in the terminal:

* From your root folder run `yarn seed`
* To run the app in your localhost, in the frontend terminal run `yarn start`


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

* For our collection, we specified model using Mongoose which provides a built in Schema class. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

A Drink Schema: Each key in our code `drinkSchema` defines a property in our documents which will be cast to its associated SchemaType (Mongoose converts our schema paths into SchemaTypes automatically).

```javascript

    const drinkSchema = new mongoose.Schema({
      drink: { type: String, required: true, unique: true },
      type: { type: String, required: true },
      country: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
      funFact: { type: String, maxlength: 300 },
      price: { type: Number, required: true },
      countInStock: { type: Number, required: true },
      origin: { type: String, required: true },
      owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
    })
```

<h4>Router</h4>

In the `config` folder we created a `router.js` file to define our API endpoints for calling each collection

```javascript

    router.route('/drinks')
      .get(getAllDrinks)
      .post(createDrink)

    router.route('/drinks/:id')
      .get(displayDrink)
      .put(editDrink)
      .delete(deleteDrink)

```
To retrive data from the database, each of these defined endpoints relies on a separate function in the files in our `Controllers` folder
<h4>Controllers</h4>

* We implemented functions that will enable access to the collection
* We implemented specific functions to access all of the data in the database or to find a specific drink by ID.
* The controller holds functionality to add new drinks, edit and delete them.
* The example below shows the process of adding a new drink to the database by a registered owner identified by `req.currentUser._id `, using the create method.

```javascript
    
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


<h3>User</h3>
Our approach to the User model was to allow more functionality in the app once a person is registered to the website, including suggesting drinks, commenting on suggested drinks, rating drinks. Let me take you through the step by step approach on how we built this:
<h4>Models</h4>

* For our MongoDB to store individual users successfully, the User had to have its own model.

A User Schema: The `userSchema` defines a property in our documents which will be used in the registeration and login (authentication process).

```javascript

    const userSchema = new mongoose.Schema({
      username: { type: String, required: true, maxLength: 30, unique: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
      image: { type: String, required: true }
    })
    
```
Mongoose has some incredibly powerful in-built methods which we also used in conjunction with Bcrypt for passwords hashing. Using the `pre` method, we were able to access Mongoose Schema’s lifecycle methods and run functions when users either register or login:

* The first function we built was to check the password and passwordConfirmation field match from the user input during registration. If these were not to match, it would be invalid and halts the user from registering.

* If during registration the first function is passed and accepted, the password entered uses bcrypt to encrypt the password before being stored into the database.Thisencryption protects the users paswords from hacker, so we were security focused. 

* The final function checks the credentials of a user at login. The function checks the user inputted password against the hashed password in db, to ensure they match, else the user won't be able to login.

<h4>Router</h4>

In the `config` folder we created a `router.js` file to define our API endpoints built specifically for users

```javascript

    router.route('/register')
      .post(registerUser)

    router.route('/login')
      .post(loginUser)

```
<h4>User Controller</h4>

* The controller holds functionalities that will enable users to register and login through the `auth.js` file
* The example below shows the process of registering a new user to the database, using the create method.

```javascript
    
    export const registerUser = async (req, res) => {
      try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        return res.status(202).json({ message: `Welcome ${newUser.username}` })

      } catch (err) {
        console.log(err)
        return res.status(422).json(err)
      }
    }


```
<h3>Secure Route</h3>

The secureRoute is an entirely separate file created with middleware to identify if a user is truly logged in. For the suggest a drink route which is only accessible for users stored in the database i.e already registered, we have specified the `secureRoute` function to run intially.


```javascript
    
    export const secureRoute = async (req, res, next) => {
      try {
        // check token exists in header
        if (!req.headers.authorization) throw new Error('Missing headers')
        //Remove unwanted characters from header
        const token = req.headers.authorization.replace('Bearer ', '')
        console.log('token', token)
        //Payload 
        const payload = jwt.verify(token, secret)
        console.log('payload', payload)
        //find user based on id in payload 
        const userToVerify = await User.findById(payload.sub)
        //check user exists
        if (!userToVerify) throw new Error('User not found')

        console.log(userToVerify)

        req.currentUser = userToVerify 

        next()
      } catch (err) {
        console.log(err)
        return res.status(401).json({ message: 'Unauthorized' })
      }
    }

```
<h3>Seeding the database</h3>

Finally we went ahead to seed the database through the `seed.js` file, with the drink.js file containing hard-coded drink data which were planted into our MongoDB. An example is given below:

```javascript

    drink: 'Turkish coffee, Türk kahvesi',
    type: 'Coffee',
    country: 'Turkey ',
    description: ' Very finely ground coffee brewed by boiling.' ,
    image: ' https://www.thespruceeats.com/thmb/z0dysGil3bQVHw7sgWFmACfC_pc=/4000x2667/filters:fill(auto,1)/turkish-coffee-recipe-2355497-hero-02-b14bd83fe6114322af9d8040801e8391.jpg' ,
    funFact: 'First appearing in the Ottoman Empire, under the strictest interpretations of the Quran the strong coffee was considered a drug and its consumption was forbidden ' ,
    price: 2,
    countInStock: 20,
    origin: 'Asia',
    longitude: 100.619652,
    latitude: 34.047863,
    icon: '🇹🇷'
  
  
```
<h2>My Individual Contribution</h2>
Once we were done with the backend as a group we set out on our individual tasks. My tasks was to build the homepage, basket(cart) and the map functionalities. I successfully did two of the tasks while the map wasn't completely finished due to limited time and I'd delve into more details of my contribution now.

<h3>Backend (Cart/Basket) </h3>
<h4>Model</h4>

shoppedDrinkSchema: The very first step I took toward the cart build was to specify the basket model, with the newly selected (shopped) drink having a new unique ID `drinkId`, and this is in a bid to ensure that when the drink that might be added to the cart by the user is deleted the original drink in the database is still intact so hence the new ID for this.  Also for a better user experience, it was okay for a user to shop our drinks without necessarily being registered so the authentication process wasn't needed here. 

```javascript

    // Define the basket schema
    const shoppedDrinkSchema = new mongoose.Schema({
      drinkId: { type: String, required: true, unique: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
      total: { type: Number, required: true }
    })
```

<h4>Router</h4>

In the `router.js` file I defined our API endpoints for the cart

```javascript

    router.route('/shopped-drinks')
      .get(getAllShoppedDrinks)

    router.route('/shopped-drinks/:id')
      .get(displayShoppedDrink)
      .delete(deleteShoppedDrink)
      .post(postShoppedDrink)

```

<h4>Controllers</h4>

Next I created controllers to enable the user add and delete drinks from the cart. The code snippet below shows the function used to add a drink to the cart. The `findById` method was used to find a single drink by its id.

```javascript

    // CREATE CART - to add drink to cart 
    export const postShoppedDrink = async (req, res) => {
      try {
        const { id } = req.params
        const drink = await Drink.findById(id)
        if (!drink) throw new Error('No drinker found')
        const drinkToAdd = { ...req.body }
        const shoppedDrink = await ShoppedDrink.create(drinkToAdd)
        console.log(shoppedDrink)
        return res.status(200).json(shoppedDrink)
      } catch (err) {
        console.log(err) 
        return res.status(404).json({ message: err.message })
      }
    }
```

<h3>Frontend(homepage, cart/basket)</h3>
Having successfully built our API and tested it through Insomnia, we were ready to move onto the React frontend. I focused on designing the homepage, building the cart, map functionalities. 

<h4>Homepage:</h4> 
<P> I styled the homepage using the React Bootstrap CSS Framework, CSS3 + SCSS. I also was open to other team members contributions such as font styling so as to carry everyone along. You can watch the video below that shows the homepage.</p>


https://user-images.githubusercontent.com/71145696/129399555-fcf92c4b-411d-4838-980c-706100dc6b52.mov

<h4>Cart/Basket:</h4> 

I wanted the user to be able to select the quantity of the drinks they were shopping for, and see the price displayed before 'Adding to basket', so in the drink's show page (that had been fundamentally built and styled by another team member) i.e the `Drink.js` file I implemented the `handleChange` function that sets the quantity of drinks selected by the user and also the `handleCart` function which includes a formdata for the drink's ID, quantity, price and total.

![Screenshot 2021-08-13 at 20 40 11](https://user-images.githubusercontent.com/71145696/129410753-8a2c3e54-7bc4-4f73-a7f2-ed23d4ba35de.png)

An Axios POST request is made to the 'shopped-drinks by ID' API.

```javascript

    const handleChange = (event) => {
      console.log('changed=>', event.target.value)
      setQuantity(event.target.value)
    }

    const handleCart = async (event) => {
      event.preventDefault()
      const total = quantity * drink.price
      const formData = {
        drinkId: drink._id,
        quantity: parseInt(quantity),
        price: drink.price,
        total: total,
      }

      console.log('My form data=>', formData)

      try {
        await axios.post(
          `/api/shopped-drinks/${drink._id}`,
          formData
        )
        history.push('/shop-drink')
      } catch (err) {
        console.log(err)
      }
    }
  
```
<p>I built the cart page such that the shopped drink is displayed on the page, and users are able to view the price, their inputed quantity and the subtotal price of the drink. The user can also delete the drink from the cart. I built the cart page using the React.js and styled using React Bootstrap CSS Framework, CSS3 + SCSS. </p>

![Screenshot 2021-08-13 at 20 41 36](https://user-images.githubusercontent.com/71145696/129410820-a1f5312f-d989-4db8-b34b-cec69d91581d.png)

On the cart's page to display the cart data that had been stored in the database I used an Axios GET request to the shopped-drinks API. This returns an array of drinks, that has been initially selected by the user and then display the shopped drinks with the information in the cart page for the user.

```javascript

    // gets data from shopped drink api
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios.get('/api/shopped-drinks')
        console.log('DATA', data)
        setShoppedDrinks(data)
      }
      getData()
    }, [])
```

The handleDelete: this is the delete function that removes(deletes) a drink on click of the 'Delete-Button'

```javascript

    const handleDelete = (event) => {
    console.log('changed=>', event.target.value)
    const getDelete = async () => {
      const { data } = await axios.delete(`/api/shopped-drinks/${event.target.value}`)
      console.log('MYDATA', data)
      if (data === 'success') {
        const { data } = await axios.get('/api/shopped-drinks')
        console.log('RESULT', data)
        setShoppedDrinks(data)
      }
    }
    getDelete()
  }

```


<h1>Screenshots of other parts of the Application </h1>

Our Drinks page(Index/products page)

![Screenshot 2021-08-14 at 13 31 00](https://user-images.githubusercontent.com/71145696/129446409-fe5d50a2-0ac4-4d6c-994d-6507f9eb5f24.png)

![Screenshot 2021-08-14 at 13 33 27](https://user-images.githubusercontent.com/71145696/129446475-8c8529a0-44a6-4b27-a472-ef1bee1e0583.png)

Suggestion form

![Screenshot 2021-08-14 at 13 29 37](https://user-images.githubusercontent.com/71145696/129446376-be1a038c-0305-482e-a2fe-2ad01369be1a.png)

Heiss room (Suggestion page)

![Screenshot 2021-08-14 at 13 29 01](https://user-images.githubusercontent.com/71145696/129446366-792de559-f3ad-4296-b817-2b429417d7c5.png)

User-Profile page

![Screenshot 2021-08-14 at 13 30 12](https://user-images.githubusercontent.com/71145696/129446392-989f46e4-e9c0-4a66-ab66-5ab2669b0a8f.png)


<h1>Challenges</h1>

My main challenge on this project was for the map functionality, I wanted users to be able to select drinks on the map based on the drink's place of origin without having to go on our drinks page. I had worked on the map functionalities but due to time constraint it wasn't completed so it couldn't be part of the MVP.

I started out by updating the drink schema on the backend with each drink latitude and longitude with the country of orign icons, before moving on to work on the frontend. However the data wasn't translating on the homepage although it was seen in the google chrome developer tool while console logging, I even tried to hardcode the coordinates as seen below but it wasn't still responsive on the homepage. I also got feedback while at it and it was said that the problem had to do with styling, however due to limited time I had to priotise other functons since we already had the Drinks page that was similar in use when user had to shop our drinks. 

```javascript

     const AnimatedMap = () => {

      const reactMapToken = process.env.REACT_APP_MAPBOX_TOKEN

      console.log('react-map-token', reactMapToken)
      const [locationData, setLocationData] = useState([])
      //const typesOfLocation = ['All']
      const [viewport, setNewViewport] = useState({
        latitude: 21.521757,
        longitude: -77.781166,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      })
      const [hasError, setHasError] = useState(false)

      // request to Api on the first render
      useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get('/api/drinks')
            setLocationData(data)
            console.log('Test Me=>', data)
          } catch (err) {
            setHasError(true)
            console.log(err)
          }
        }
        getData()
      }, [])

      const MapController = ({ onClick }) => {
        return (
          <div className="map-controller">
            <div className="buttons">
              {locationData.map(location => (
                <button
                  key={location.id}
                  className="button is-small is-rounded is-info"
                  onClick={() => onClick(location)}
                >
                  {location.icon}
                </button>
              ))
              }
            </div>
          </div>
        )
      }

      console.log('Location Data=>', locationData)

```


<h1>Wins</h1>

<li>Building a functional application in 9 days is definitely a win for me</li>
<li>Working as a team which involved collaborating, ensuring everyone was heard and individual opinions mattered</li>
<li>Despite our different approach to ideas working towards a consensus as a team and achieving our goals was a win</li>
<li>Lastly, the functionalities I built are something I'm glad I accomplished as they were a good sign of my learnings and growth</li>


<h1>Key Learnings</h1>

This was a great learning experience as I was able to build full stack features, work with third party APIs while working in a larger group. One of the most important lesson was the experience of working in feature branches and merging into development branch. This meant as a team we had to be super clear and communicate while we individually ensured any merge conflicts were resolved without an loss of work. Then also finally moving the application from development into production was another key learning for me that I cherish.

<h1>Future Features</h1>

<li>Work on complete responsiveness as the styling on some pages isn’t showing properly on large screens.</li>

<li>Complete the map feature functionality so that users can pick their drinks based on the drink's origin from the map.</li>

<li>More stying, lol😅 because styling never finishes really.</li>




