import express from 'express';
import {routes} from './router/routes.js'
import {isAuthenticated} from './middleware/authentication.js'

const app = express()
const PORT = 3000

app.use(express.json())
routes(app, isAuthenticated)

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(PORT, ()=>{
    console.log(`Server has started at port ${PORT}`)
})