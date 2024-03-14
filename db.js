// BD connection

// import sequelize (Sequelize — самая популярная ORM для SQL баз данных)
const {Sequelize} = require('sequelize');

// На выходе экспортируем объект который создаем из класс sequelize

module.exports = new Sequelize(
    // все перемеенные окружения о БД передаем в конструктор (переменные лежат в .env)
    process.env.DB_NAME, // DB name
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    // and pass object
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
    }

);