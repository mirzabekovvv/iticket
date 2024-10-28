module.exports = (sequelize, DataTypes) => {
 const customer_card = sequelize.define("customer_card", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   phone: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   number: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   year: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   month: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   is_active: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
   },
   is_main: {
     type: DataTypes.BOOLEAN,
     allowNull: false,
   },
 });

 return customer_card;
};
