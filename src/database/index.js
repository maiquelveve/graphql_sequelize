const { Sequelize } = require('sequelize');
const dataBaseConfig = require('../config/database');
const User = require('../app/models/User');

const models = [User];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dataBaseConfig);
        models.map(model => model.init(this.connection))
              .map( model => model.associate && model.associate(this.connection.models))
    }
}

module.exports = new Database();




/* 
yarn add sequelize-cli -D

    yarn sequelize db:create

    yarn sequelize db:migrate (EXECUTAR AS MIGRATIONS)





    -------------------------------
    yarn sequelize migration:create --name=users

*/