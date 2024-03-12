// Timezone.js
const { DataTypes } = require('sequelize');
const sequelize = require('../configDatabase/database');
const Jours = require('./Jours');

const Timezone = sequelize.define('Timezone', {
   id_timezone:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true
   },
   nom:{
    type:DataTypes.STRING,
    unique:true,
   },
   heure_entree:{
    type:DataTypes.TIME
   },
   heure_sortie:{
    type:DataTypes.TIME
   },
});

// Associez la Timezone à Jours
Timezone.belongsToMany(Jours, {
    through: 'TimezoneJours',
    foreignKey: 'id_timezone'
});
Jours.belongsToMany(Timezone, {
    through: 'TimezoneJours',
    foreignKey: 'id_jours'
});

module.exports = Timezone;
