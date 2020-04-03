const express = require('express');
// Créer un nouvel objet "Router"
const blogRouter = express.Router();
// Modèle Article, Auteur et Category
const Article = require('./models/Article.model');
const Auteur = require('./models/Author.model');
const Category = require('./models/Category.model');

// Quand le routeur get /
blogRouter.get('/', (request, response) => {
    Article.find().populate('author category').exec().then(articles => {
        response.render('index', {articles});
    }).catch(err => response.send(err.message));
});

// Quand le routeur get /admin
blogRouter.get('/admin', (request, response) => {
    Article.find().populate('author category').exec().then(articles => {
        response.render('./admin/admin.pug', {articles});
    }).catch(err => response.send(err.message));
});

// Quand le routeur get /write
blogRouter.get('/write', (request, response) => {
    Promise.all([
        Auteur.find().sort('name'),
        Category.find().sort('title')
    ])
    .then(([authors, categories]) => response.render('admin/write', { authors, categories}))
    .catch(error => response.send(error.message))
});

// Quand le routeur post /write, récupère les données du formulaire et crée l'article dans la base
blogRouter.post('/write', (request, response) => {
    console.log('Les données de formulaire envoyées en POST sont :');
    //console.log('<input name="title"> -->', request.body.title);
    /*console.log('<textarea name="contenu"> -->', request.body.contenu);
    console.log('<select name="categorie"> -->', request.body.categorie);
    console.log('<select name="auteur"> -->', request.body.auteur);*/
});

// Quand le routeur get /edit
blogRouter.get('/edit/:id', (request, response) => {
    response.render('/admin/edit');
});

// Quand le routeur get /article/id
blogRouter.get('/article/:id', (request, response) => {
    console.log(request.params.id);
    /*Article.findById(request.params.id).exec().then(article => {
        response.render('article', article);
    }).catch(err => response.send(err.message));*/
})
// Exporte l'objet Router créé
module.exports = blogRouter;