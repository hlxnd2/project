const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, './data.json');

function getAllProducts() {
  const data = fs.readFileSync(dataPath, 'utf-8');

  return JSON.parse(data);
}

function createOrder(order) {
  // const shop = getAllMessages();
  // shop.push(message);
  // fs.writeFileSync(dataPath, JSON.stringify(shop));
  return order;
}

module.exports = {
  getAllProducts,
  createOrder,
};
