const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/api')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const User=require('./controllers/userController')
dotenv.config()



const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopogy: true
}

mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
    console.log('db working');
}).catch((err) => {
    console.log('error: ' + err);
});
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept, Authorization');
    res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})

app.use('/', router);

app.listen(process.env.PORT, console.log('Project atra is runing...'));