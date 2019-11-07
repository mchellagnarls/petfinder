// 1. Cat or dog
// 2.d Where do you live? Apartment, Singlfamily
// 3. What size pet do you want, Any size up to {toy, Small, medium, Large)
// 4. Do you want a hypoallergenic animal? 
// 5. How active do you want your pet to be {Sedentary, likes walks, like runs very active
// 6. How old do you want your pet? {0-1, 2-4, 5-8}



module.exports = function(sequelize, DataTypes) {
    var Pets = sequelize.define("Pets", {
      Animal:{

        
      } DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Pets;
  };

