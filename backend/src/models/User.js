  const { DataTypes, Sequelize } = require('sequelize');
  const sequelize = require('../configDatabase/database');

  const Carte = require('./Carte');


  let User = sequelize.define('User', {
    id_user: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    alias: {
      type: Sequelize.STRING(255),
      allowNull: false,
      unique: true,
    },
    cin: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique:true
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
      
    },
    telephone: {
      type: Sequelize.INTEGER,
      allowNull: false,
    
    },
    photo:{
      type:Sequelize.STRING,
    },
    nombre_carte: {
      type:Sequelize.SMALLINT,
      validate :{
        isInt:true,
        min:1
      }
    },
    carte_numero: {
      type: Sequelize.STRING,
      allowNull: false,
     
  }
  
  
  });

  User.hasMany(Carte, {
    foreignKey: 'id_user', 
   
  });


  module.exports = User;
