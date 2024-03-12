// TimezoneJours.js
const { DataTypes } = require('sequelize');
const sequelize = require('../configDatabase/database');

const TimezoneJours = sequelize.define('TimezoneJours', {
    id_timezone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_jours: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = TimezoneJours;
