// discribe data models (как данные будет хранится в БД)

// import sequelize which we create in db file
const sequelize = require('../db');

// из пакета sequelize нам потребуется импортировать класс с помощью которого описываются типы того или иного поля
const { DataTypes } = require('sequelize');

// user model. call sequelize's function define, pfss there object, а первым параметром указываем название этой модели
// внутри обьекта описываем поля , которые будут у этой модели (primaryKey - ключ и он с каждым новым юзером будет инкрементироваться)
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

const Task = sequelize.define('task', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  due_date: { type: DataTypes.DATE },
  priority: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, allowNull: false  },
});

const Category = sequelize.define('category', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  color: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING, allowNull: false },
});

// describe connection beetween models
// обращаемся к модели и вызываем соответсвующую функцию

User.hasMany(Task);
Task.belongsTo(User);

User.hasMany(Category);
Category.belongsTo(User);

Task.hasOne(Category);
Category.belongsTo(Task);

Task.belongsTo(Category); // Добавляем связь "Task принадлежит категории"

module.exports = {
  User,
  Task,
  Category,
};
