// import type model
const { Task } = require('../models/models');
const ApiError = require('../error/apiError');

// создаем одноименный класс (можно без классов, но классы группируют). Внутри функци создадим функции
class TaskController {
  async createTask(req, res, next) {
    try {
      const { title, description, due_date, priority, status, 
        // categoryId 
    } = req.body;
      const task = await Task.create({ title, description, due_date, priority, status, 
        // categoryId 
    });
      return res.json(task);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAllTask(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  }

  async getOneTask(req, res, next) {
    try {
      const { id } = req.params;
      const task = await Task.findOne({
        where: { id },
      });

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      return res.json(task);
    } catch (err) {
      next(ApiError.internal('Failed to fetch task.'));
    }
  }

  async editTask(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description, due_date, priority, status, 
        // categoryId 
    } = req.body;
      const task = await Task.findOne({
        where: { id },
      });

      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      // Обновляем поля задачи
      task.title = title;
      task.description = description;
      task.due_date = due_date;
      task.priority = priority;
      task.status = status;
    //   task.categoryId = categoryId;

      // Сохраняем обновленную задачу в базе данных
      await task.save();

      // Возвращаем обновленную задачу в ответе
      return res.json(task);
    } catch (err) {
      next(ApiError.badRequest('Failed to edit task.'));
    }
  }

  async deleteTask(req, res, next) {
    try {
      const { id } = req.params;
      const task = await Task.findOne({
        where: { id },
      });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      await task.destroy();

      return res.json({ message: 'Task deleted successfully' });
    } catch (err) {
      next(ApiError.badRequest('Failed to delete task.'));
    }
  }
}

// на выходе будет новый объект созданный на основании класса
module.exports = new TaskController();
