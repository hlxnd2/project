const Router = require('@koa/router');
const ShopController = require('./shop.controller');

const shopController = new ShopController();

const router = new Router({
  prefix: ''
});

router
  .get('/products', shopController.getAll)
  .post('/orders', shopController.createOrder)
  .put('/orders/:orderId');
  
module.exports = router;
