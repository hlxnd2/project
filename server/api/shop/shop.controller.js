const shopService = require('./shop.service');

class ShopController {
  getAll = (ctx) => {
    try {
      const shop = shopService.getAllProducts();

      ctx.status = 200;
      ctx.body = shop;
    } catch (error) {
      console.error(error)
      ctx.status = 500;
      ctx.body = { error };
    }
  };

  createOrder = (ctx) => {
    const order = ctx.request.body

    try {
      const newOrder = shopService.createOrder(order);

      ctx.status = 201;
      ctx.body = newOrder;
    } catch (error) {
      console.error(error)
      ctx.status = 500;
      ctx.body = { error };
    }
  };
}

module.exports = ShopController;
