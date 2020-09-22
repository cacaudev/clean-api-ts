const path = require('path');

module.exports = {
  development: {
    databaseName: 'clean_api_db',
    dialect: 'sqlite',
    operatorsAliases: false,
    storage: path.resolve(__dirname, './database.sqlite3'),
    logging: false,
  },
};
