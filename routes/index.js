// получаем роутер из экспресса
const Router = require('express');
// осздаем обьект этого роута
const router = new Router();

// импортируем все роуты
const taskRouter = require('./taskRouter')
const userRouter = require('./userRouter')

// так как все остальные роутеры это подроуты нужно это указать
// сопоставляем маршруты ('/user') с роутами
router.use('/user', userRouter);
router.use('/task', taskRouter);

//-1 мы объеденили все роуты в один, но наш сервер об этом не знает, поэтому ему надо это сообщить. Идем в корневой index.js 

module.exports = router;