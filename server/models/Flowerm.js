

module.exports = (sequelize, DataTypes) => {
    const Flowerm = sequelize.define("Flowerm",{

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        meaning: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });
    return Flowerm;
};