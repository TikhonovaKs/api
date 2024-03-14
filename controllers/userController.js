const ApiError = require('../error/apiError')
// создаем одноименный класс (можно без классов, но классы группируют). Внутри функци создадим функции
class UserController {
  async signup(req, res) {}

  async login(req, res) {}

  async editProfile(req, res) {}

  async check(req, res, next) { 
    const {id} = req.query
    if(!id) {
      return next(ApiError.badRequest('ID not specified'))
    }
    res.json(id)
  }
}

// на выходе будет новый объект созданный на основании класса
module.exports = new UserController();
