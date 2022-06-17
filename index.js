const express = require('express');
const exphbs = require('express-handlebars');

const path = require('path');
const routes = require('./controller/index')

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.set('view engine', 'handlebars');
app.engine('handlebars', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(PORT, () => console.log('Now listening'));