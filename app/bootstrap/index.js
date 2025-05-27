const express = require("express")
const exphbs = require('express-handlebars');
const path = require("path");
const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.engine('hbs', exphbs.engine({
        defaultLayout: 'main',
        extname: 'hbs'
  }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'))
    app.use(express.static(path.join(__dirname, "../../public")))
};