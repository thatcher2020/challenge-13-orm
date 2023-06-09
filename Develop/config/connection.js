require('dotenv').config();

const Sequelize = require('sequelize');
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      port: "3306",
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      logging: true,
    });
sequelize.sync()
module.exports = sequelize;


