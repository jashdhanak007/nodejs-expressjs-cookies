const express = require('express');
const routes = express.Router();
const LoginController = require('../controllers/LoginControllers')

console.log("working");

routes.get('/',LoginController.login);
routes.get('/register',LoginController.register);
routes.post('/registerData',LoginController.registerdata);
routes.post('/loginData',LoginController.logindata);
routes.get('/dashboard',LoginController.dashboard);
routes.get('/logout',LoginController.logout);

module.exports = routes;