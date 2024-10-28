module.exports = (sequelize, DataTypes) => {
 const Customer = sequelize.define("Customer", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   first_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   last_name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   phone: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   hashed_password: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   birth_date: {
     type: DataTypes.DATE,
     allowNull: false,
   },
   gender: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   lang_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   hashed_refresh_token: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });
 Customer.associate = (models) =>{
  Customer.hasMany(models.Card, {
    foreignKey: "customer_id",
    as: "cardcustomer",
  });
  Customer.hasMany(models.Customer_address, {
    foreignKey: "customer_id",
    as: "customer_addresscustomer",
  });
}
Customer.associate = (models) =>{
  Customer.belongsTo(models.Language, {
    foreignKey: "lang_id",
    as: "customerLanguage",
  });
}
 return Customer;
};
