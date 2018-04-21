const router = require('express').Router()
const controller = require('./../controllers/articlesController')


router.route('/')
    .get(controller.findAll)
    .post(controller.saveArticle)

router.route('/:id')
    .delete(controller.deleteArticle)

module.exports = router;