const productsRouter = require('./products.router');
// const categoriesRouter = require('./categories.router');
// const usersRouter = require('./categories.router');

//archivo donde serán declaradas todas las rutas
const routerApi = (app) => {

  app.use('/products', productsRouter);
  // app.use('/categories', categoriesRouter);
  // app.use('/users', usersRouter);
}

module.exports = routerApi;
