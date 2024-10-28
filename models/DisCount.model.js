module.exports = (sequelize, DataTypes) => {
 const DisCount = sequelize.define("DisCount", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   discount: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   finish_date: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });
 DisCount.associate = (models) =>{
  DisCount.hasMany(models.Booking, {
    foreignKey: "discount_coupon_id",
    as: "bookingDisCount",
  });
}
 return DisCount;
};
