// Jours.js
const { DataTypes } = require('sequelize');
const sequelize = require('../configDatabase/database');

const Jours = sequelize.define('Jours', {
    id_jours: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_jours: {
        type: DataTypes.ENUM('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche')
    }
});


module.exports = Jours;
