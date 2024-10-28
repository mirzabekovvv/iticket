module.exports = (sequelize, DataTypes) => {
 const Diskrict = sequelize.define("Diskrict", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   region_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
 });
 Diskrict.associate = (models) =>{
  Diskrict.hasMany(models.Customer_address, {
    foreignKey: "district_id",
    as: "customer_addressdistrict",
  });
  Diskrict.hasMany(models.Venue, {
    foreignKey: "district_id",
    as: "VenueDistrict",
  });
}
Diskrict.associate = (models) =>{
  Diskrict.belongsTo(models.Region, {
    foreignKey: "region_id",
    as: "diskrictregion",
  });
}
 return Diskrict;
};
