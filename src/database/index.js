import Sequelize from 'sequelize';
import Coronavirus from '../app/models/Coronavirus';
import databaseConfig from '../config/database'

const models = [Coronavirus];

class Database {
  constructor(){
    this.init();
  }
  init(){
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();