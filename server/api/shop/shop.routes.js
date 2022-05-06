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
  .put('/orders/:orderId', shopController.putOrder);
  
module.exports = router;
