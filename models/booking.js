module.exports = (sequelize, DataTypes) => {
 const Booking = sequelize.define("Booking", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   cart_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   createdAt: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   fineshed: {
     type: DataTypes.DATE,
     allowNull: false,
   },
   payment_method_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   delivery_method_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   discount_coupon_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   status_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
 });
 Booking.associate = (models) =>{
  Booking.belongsTo(models.Card, {
    foreignKey: "cart_id",
    as: "bookingcard",
  });
  Booking.belongsTo(models.Delivery, {
    foreignKey: "delivery_method_id",
    as: "bookingDelivery",
  });
  Booking.belongsTo(models.DisCount, {
    foreignKey: "discount_coupon_id",
    as: "bookingDisCount",
  });
  Booking.belongsTo(models.Status, {
    foreignKey: "status_id",
    as: "bookingStatus",
  });
  Booking.belongsTo(models.Payment, {
    foreignKey: "payment_method_id",
    as: "bookingPayment",
  });
}
 return Booking;
};
