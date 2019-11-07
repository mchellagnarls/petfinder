module.exports = function(sequelize, DataTypes) {
    var Home = sequelize.define("Home", {
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        residence: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        hypo: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        activity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Home;
};