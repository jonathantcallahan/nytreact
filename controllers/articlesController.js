const db = require('../models/article')

module.exports = {
    findAll: function(req, res){
        db.Article
            .findAll()
            .then(data => res.json(data) )
            .catch(err => res.status(422).json(err))
    },
    saveArticle: function(req, res){
        db.Article
            .create(req.body)
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    },
    deleteArticle: function(req, res){
        db.Article
            .remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}