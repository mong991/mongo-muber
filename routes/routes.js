const DriversContoller = require('../controllers/drivers_controller');

module.exports = (app) => {
  // wactch for incoming requests of method GET
  // to the route http://locahost:3050/api
  app.get('/api', DriversContoller.greeting);

  app.post('/api/drivers', DriversContoller.create);
  app.put('/api/drivers/:id', DriversContoller.edit); // '/api/drivers/23456'
  app.delete('/api/drivers/:id', DriversContoller.delete);
};
