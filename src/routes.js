const express = require('express');
const home = express.Router();
const routes = express.Router();

const authMiddleware = require('./auth/middlewares/auth');


const UserController = require('./controllers/authController');
const TagsController = require('./controllers/tagsController');




routes.get('/', UserController.index);
routes.post('/register', UserController.store);
routes.post('/authenticate', UserController.auth);

home.use(authMiddleware);




// Tags
home.get('/tags', TagsController.index)
home.post('/tags', TagsController.store)
home.delete('/tags/:id', TagsController.destroy)