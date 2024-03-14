// получаем роутер из экспресса
const Router = require('express');
// осздаем обьект этого роута
const router = new Router();
const UserController = require('../controllers/userController')

// methods to work with user, втоорым параметром передаем как обьект (т.е без скобок) соотвествующу функцию из контроллера
router.post('/signup', UserController.signup)
router.post('/login', UserController.login)
router.patch('/edit', UserController.editProfile)
router.get('/auth', UserController.check)

module.exports = router;