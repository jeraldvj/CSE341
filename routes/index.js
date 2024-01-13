const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.ginaRoute);
routes.get('/tomy', lesson1Controller.tomyRoute);
routes.get('/gary', lesson1Controller.garyRoute);

module.exports = routes;