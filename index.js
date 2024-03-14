// read data from .env file
require('dotenv').config();
// Create app structure
const express = require('express');
// import object from db file
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/errorHandlerMiddlewere')

// get port from .env file (process.env.PORT) or 3000
const PORT = process.env.PORT || 3000;

// с него начинается запуск приложения
const app = express();
// CORS для возможности отправки запросов с браузера
app.use(cors())
// for parsing json format
app.use(express.json())
// первый параметр урл, вторым сам роутер
app.use('/', router)

//мидлевеер с ошибками обязательно дб в конце так как он является замыкающим
app.use(errorHandler)

// call async function to connect db (all operation with DB are asynchrone)
// все обернем в блок try catch чтобы отлавливать потенциально возможные ошибки и приложение не падало
const start = async () => {
  try {
    await sequelize.authenticate() // connect DB
    await sequelize.sync() // this function checks the state of the database against the data schema
    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

// call funct
start();
