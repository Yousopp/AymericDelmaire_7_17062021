'use strict';

// pilote les models que tu ajoutes dans le dossier model

const fs = require('fs'); // gestionnaire de fichiers
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize(process.env.DB_NAME_DEV, process.env.DB_USER, process.env.DB_PASS, {
host: 'localhost',
dialect: 'mysql'
});

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;