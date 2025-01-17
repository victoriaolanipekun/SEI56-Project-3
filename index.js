import express from 'express'
import mongoose from 'mongoose'
// import Drink from './models/drink.js'
import { dbURI, port  } from './config/environment.js'
import router from './config/router.js'

const app = express()

// setup the server
const startServer = async () => {
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🚀 Database has connected successfully')

    // logger
    app.use((req, _res, next) => {
      console.log(`🚨 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })

    app.use(express.json())

    app.use('/api', router)

    app.listen(port, () => console.log(`🚀 Express is up and running on port ${port}`))
    
  } catch (err) {
    console.log(err, 'something has gone wrong')
  }
}

startServer()


