const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/api')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())

//if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')))
//}

app.use('/api/article',routes)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact')

app.listen(PORT, () => {console.log(`Listening on port ${PORT}...`)})