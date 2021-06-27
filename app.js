let express = require('express');

let rutasMain = require('./routers/main.js');

const path = require('path');

let app = express();

const publicPath = path.resolve(__dirname, './public');
app.use (express.static (publicPath) );

app.listen(3000, () => console.log('Servidor Local 3000 On Line'));

app.use ('/', rutasMain);