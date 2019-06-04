const express = require('express');
const authRoutes = express.Router();
const routes = express.Router();

const authMiddleware = require('./auth/middlewares/auth');


const UserController = require('./controllers/authController');
//^ Chamando o Controller de autenticação



routes.get('/', UserController.index);
routes.post('/register', UserController.store);
routes.post('/authenticate', UserController.auth);
