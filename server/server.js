console.log('Hello backend!');
const express = require('express');
const db = require('./db');
const router = require('./network/routes');
const app = express();


// nos conectamos a la base de datos sarBolivia
db('mongodb+srv://ariel:proyectodegrado@proyectodegrado.rwfyrql.mongodb.net/sarBolivia?retryWrites=true&w=majority');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

router(app);

app.listen(4000, () => {
    console.log(`La aplicación está escuchando en http://localhost:4000`);
});