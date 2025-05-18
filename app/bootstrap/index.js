const express = require("express")
const exphbs = require('express-handlebars');
const path = require("path");

module.exports = app => {

    app.engine('hbs', exphbs.engine({
        defaultLayout: 'main',
        extname: 'hbs'
  }));
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'))
    app.use(express.static(path.join(__dirname, "../../public")))
};