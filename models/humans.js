module.exports = function(sequelize, DataTypes) {
    var Human = sequelize.define("Human", {
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
        },
        pet_breed: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Human;
};