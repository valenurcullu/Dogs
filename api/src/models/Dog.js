const { DataTypes, INTEGER } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type : DataTypes.UUID,
      defaultValue : DataTypes.UUIDV4,
      allowNull : false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    height_max: {
      type : DataTypes.INTEGER,
      allowNull : false
    },

    weight_min: {
      type: DataTypes.INTEGER,
      allowNull: false
},
    weight_max: {
      type: DataTypes.INTEGER,
      allowNull: false
},

    lifeTime: {
      type: DataTypes.STRING
},

  image : {
    type :DataTypes.STRING,
    defaultValue: 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
  },
  createdInDb : {
    type:  DataTypes.BOOLEAN,
    allowNull : false,
    defaultValue : true
   }
  });
};

