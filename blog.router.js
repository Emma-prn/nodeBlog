const express = require('express');
// Créer un nouvel objet "Router"
const blogRouter = express.Router();
// Modèle Article
const Article = require('./models/Article.model');
const Auteur = require('./models/Author.model');
const Category = require('./models/Category.model');

blogRouter.get('/', (request, response) => {
    Article.find().populate('author category').exec().then(articles => {
        response.render('index', {articles});
    }).catch(err => response.send(err.message));
});

blogRouter.get('/admin', (request, response) => {
    response.render('./admin/admin.pug');
});

blogRouter.get('/write', (request, response) => {
    response.render('./admin/write.pug');
});

blogRouter.get('/edit', (request, response) => {
    response.render('./admin/edit.pug');
});

blogRouter.get('/article', (request, response) => {
    response.render('./article.pug');
})
// Exporte l'objet Router créé
module.exports = blogRouter;