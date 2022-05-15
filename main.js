import express from 'express';
import router from './routes/catbin.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

const app = express();

//Loading Env
//loadENV
dotenv.config({
    path: './config.env'
});

const port = process.env.PORT;

app.use(bodyParser.json());
//logger middleware
if (process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'));
};

// Routers 
app.use('/', router)

//runserver
app.listen(port, () => {
    console.log(`app is running at ${port}`)
})