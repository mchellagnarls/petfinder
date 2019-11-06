module.exports = function(sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Pets;
  };