const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 20.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Shoes',
    price: 100.00,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'Baseball Hat',
    price: 20.00,
    stock: 20,
    category_id: 4,
  },
  {
    product_name: 'CD Player',
    price: 10.00,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'Shorts',
    price: 25.00,
    stock: 20,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
