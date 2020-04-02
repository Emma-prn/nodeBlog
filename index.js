require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const blogRouter = require('./blog.router');

app.set('view engine', 'pug');
app.set('views', './views');

const PORT = 9000;
const HOST = 'localhost';

app.use('/', blogRouter);
app.use(express.static('./public'));

// Démarrage application

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, options)
        .then(() => console.log(`Mongoose : Connexion établie à Atlas !`))
        .then(() => {
            app.listen(PORT, HOST, () => {
                console.log(`Express : Le serveur écoute sur http://${HOST}:${PORT}`);
            });
        })
        .catch((err) => console.log(err));