const express = require('express');
const home = express.Router();
const routes = express.Router();

const authMiddleware = require('./auth/middlewares/auth');


const UserController = require('./controllers/authController');
const TagsController = require('./controllers/tagsController');
const CommentsController = require('./controllers/commentsController');
const PostController = require('./controllers/postController');


routes.get('/', UserController.index);
routes.post('/register', UserController.store);
routes.post('/authenticate', UserController.auth);

home.use(authMiddleware);
// Posts

home.get('/post', PostController.index)
home.get('/post/:id', PostController.show)
home.post('/post', PostController.store)
home.put('/post/:id', PostController.update)
home.delete('/post/:id', PostController.destroy)

// Comments 
home.get('/comments', CommentsController.index)
home.post('/comments', CommentsController.store)
home.put('/comments/:id', CommentsController.update)
home.delete('/comments/:id', CommentsController.destroy)

// Tags
home.get('/tags', TagsController.index)
home.post('/tags', TagsController.store)
home.delete('/tags/:id', TagsController.destroy)

module.exports = {
    routes,
    home
}