// получаем роутер из экспресса
const Router = require('express');
// осздаем обьект этого роута
const router = new Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask)
router.get('/', taskController.getAllTask)
// получить конкретный таск
router.get('/:id', taskController.getOneTask)
router.patch('/:id', taskController.editTask)
router.delete('/:id', taskController.deleteTask)

// router.patch('/:id/edit', TaskController.editTask)

module.exports = router;