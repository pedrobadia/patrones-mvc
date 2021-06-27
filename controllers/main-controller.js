const router = require("../routers/main");

const path = require('path');

const mainController = {
    index: (req, res)=> {
        res.sendFile (path.resolve(__dirname, '../views/home.html'));
    },
    about: (req, res)=> {
        res.sendFile (path.resolve(__dirname, '../views/about.html'));
    },
};

module.exports = mainController;

/* const mainController = {
    index: function (req, res) {
        res.send('Bienvenido al sitio');
    }
}; */