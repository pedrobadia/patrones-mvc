const express = require('express');
const app = express();

let rutasMain = require('./routers/main.js');

app.listen(3000, ()=>{
    console.log('Servidor Local 3000 On Line');
});

app.use ('/', rutasMain)