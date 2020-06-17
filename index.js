const express = require('express')
const app  = express();
const morgan = require('morgan')

//settings
app.set('port', process.env.PORT || 8000)


//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(require('./src/routes/index'))
app.use('/api/movies', require('./src/routes/movies'))
app.use('/api/users', require('./src/routes/users'))

//starting the server 
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})