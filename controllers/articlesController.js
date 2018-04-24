const db = require('../models/article')

module.exports = {
    findAll: function(req, res){
        db
            .find()
            .then(data => res.json(data) )
            .catch(err => res.status(422).json(err))
    },
    saveArticle: function(req, res){
        db
            .create(req.body)
            .then(data => {
                console.log('request recieved')
                res.json(data)
            })
            .catch(err => res.status(422).json(err))
    },
    deleteArticle: function(req, res){
        db
            .remove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err))
    }
}