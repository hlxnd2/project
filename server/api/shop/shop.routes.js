const Router = require('@koa/router');
const ShopController = require('./shop.controller');

const shopController = new ShopController();

const router = new Router({
  prefix: ''
});

router
  .get('/products', shopController.getAll)
  .post('/orders', shopController.createOrder)
  .get('/orders/:orderId', shopController.getOrder)
  .get('/orders/:orderId/products', shopController.getOrderProducts)
  .post('/orders/:orderId/products/:productId', shopController.addProductToOrderById)
  .put('/orders/:orderId', shopController.putOrder);
  
module.exports = router;
