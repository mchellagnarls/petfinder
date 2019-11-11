// 1. Cat or dog
// 2.d Where do you live? Apartment, Singlfamily
// 3. What size pet do you want, Any size up to {toy, Small, medium, Large)
// 4. Do you want a hypoallergenic animal? 
// 5. How active do you want your pet to be {Sedentary, likes walks, like runs very active
// 6. How old do you want your pet? {0-1, 2-4, 5-8}



module.exports = function (sequelize, DataTypes) {
  const Pets = sequelize.define('pets', {
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet_age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pet_breed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pet_size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hypo: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    activity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pet_picture: {
      type: DataTypes.STRING(1000),
    },
    kid_friendly:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  });

  return Pets;
};