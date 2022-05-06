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

module.exports = {
  getAllProducts,
  createOrder,
};
