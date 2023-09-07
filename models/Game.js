const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Game extends Model {}

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        metaScore: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        platform: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageFile: {
            type: DataTypes.STRING,
        },
        gameWebsite: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);


module.exports = Game;