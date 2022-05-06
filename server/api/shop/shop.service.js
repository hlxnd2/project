const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function getAllProducts() {

  const data = await prisma.products.findMany();

  return data.map(e => {
    return {
      ...e,
      size: 'M',
      color: 'Orange',
      img_src : e.image
    };
  });
}

async function createOrder(order) {
  if (!('products' in order && 'total' in order && 'discount' in order)) {
    throw ({ errorCode: 401, errorMessage: 'Error in POST request...' });
  }

  let newOrder = await prisma.orders.create({data: {
    json_content: JSON.stringify(order)}
  });

  return newOrder;
}

async function getOrder(orderId) {
  let order = await prisma.orders.findUnique({ 
    where: {
      id: orderId 
    }
  });
  return order;
}


async function updateOrder(orderId, newOrder) {
  let order = await prisma.orders.findUnique({ 
    where: {
      id: orderId 
    }
  });

  let orderData = JSON.parse(order.json_content);

  let newOrderData = {
    ...orderData,
    ...newOrder
  };

  let json_content = JSON.stringify(newOrderData);

  let newOrderDB = await prisma.orders.update({
    where: { id: orderId },
    data: { json_content },
  });

  return newOrderDB;
}

module.exports = {
  getAllProducts,
  createOrder,
  getOrder,
  updateOrder
};
