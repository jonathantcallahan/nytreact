const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema ({
    title: String,
    date: String,
    href: String
})

const Article = mongoose.model('Articlce', articleSchema)

module.exports = Article