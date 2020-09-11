import Sequelize, { Model } from 'sequelize';

class Coronavirus extends Model {
  static init(sequelize){
    super.init({
      alpha2:  Sequelize.STRING,
      alpha3:  Sequelize.STRING,
      country:  Sequelize.STRING,
      numeric:  Sequelize.INTEGER,
      latitude:  Sequelize.FLOAT,
      longitude:  Sequelize.FLOAT,
      country_ptbr:  Sequelize.STRING,
      cases:  Sequelize.INTEGER,
      confirmed:  Sequelize.INTEGER,
      deaths:  Sequelize.INTEGER,
      recovered:  Sequelize.INTEGER,
      updated:  Sequelize.STRING,
    },{
      sequelize,
      tableName: 'coronavirus'
    })
  }
}
export default Coronavirus;