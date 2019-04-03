const package = require('../package.json');

module.exports = {
  myApi: {
    name: package.name,
    url: 'http://localhost',
    port: process.env.PORT,
    version: package.version
  },
  mysql: {
    host: process.env.mysqlhost,
    user: process.env.mysqluser,
    database: process.env.mysqldatabase,
    password: process.env.mysqlpassword,
    port: +process.env.mysqlport
  }
};