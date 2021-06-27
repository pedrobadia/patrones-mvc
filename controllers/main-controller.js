let mainController = {

};


app.get('/', (req, res)=> {
    res.sendFile (path.resolve(__dirname, './views/home.html'));
})

module.exports = mainController;