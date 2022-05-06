const shopService = require('./shop.service');

class ShopController {
  getAll = async (ctx) => {
    try {
      const products = await shopService.getAllProducts();
      ctx.status = 200;
      ctx.body = products;
    } catch (error) {
      console.error(error)
      ctx.status = 500;
      ctx.body = { error };
    }
  };

  createOrder = async (ctx) => {
    const order = ctx.request.body
    
    try {
      const newOrder = await shopService.createOrder(order);
      ctx.status = 201;
      ctx.body = newOrder;
    } catch (error) {
      console.error(error)
      if ('errorCode' in error) {
        ctx.status = error.errorCode;
        ctx.body = error.errorMessage;  
      }
      else {
        ctx.status = 500;
        ctx.body = { error };
      }
    }
  };

  putOrder = async (ctx) => {
    let order = ctx.request.body;
    console.log(order);

    try {
      const newOrder = await shopService.updateOrder(parseInt(ctx.params.orderId),order);
      ctx.status = 200;
      ctx.body = newOrder;
    } catch (error) {
      console.error(error)
      ctx.status = 500;
      ctx.body = { error };
    }
  }; 
  
  getOrder = async (ctx) => {
    try {
      const order = await shopService.getOrder(parseInt(ctx.params.orderId));
      ctx.status = 200;
      ctx.body = order;
    } catch (error) {
      console.error(error)
      ctx.status = 500;
      ctx.body = { error };
    }
  }; 
}

module.exports = ShopController;
