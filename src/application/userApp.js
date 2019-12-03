const uuidv1 = require('uuid/v1')
const redisRepo = require('../repository/redisRepo')

module.exports = {
  generateCache: async (req, res, next) => {
    let token = uuidv1();
    await redisRepo.set(token, req.body.values);
    obj = {
      token
    };
    res.send(obj);
    next();
  },
  getUser: function (req, res, next) {
    redisRepo.get(req.params.u1).then((resp) => {
      if (resp) {
        res.set('Contet-Type', 'application/json');
        res.send(resp);
        next();
      } else {
        res.send('Not Found');
        next();
      }
    });
  }
}
