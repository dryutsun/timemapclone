'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.event.belongsTo(models.project)
    }
  };
  event.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    timeStart: DataTypes.TIME,
    locationLat: DataTypes.FLOAT,
    locationLon: DataTypes.FLOAT,
    association: DataTypes.STRING,
    sourcedata: DataTypes.STRING,
    comments: DataTypes.STRING,
    entityId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};