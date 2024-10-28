module.exports = (sequelize, DataTypes) => {
 const Card = sequelize.define("Card", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   ticket_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   customer_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   createdAt: {
     type: DataTypes.DATE,
     allowNull: false,
   },
   finishedAt: {
    type: DataTypes.DATE,
  },
   status_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
 });

 Card.associate = (models) =>{
  Card.hasMany(models.Booking, {
    foreignKey: "cart_id",
    as: "booking",
  });
}
Card.associate = (models) =>{
  Card.belongsTo(models.Ticket, {
    foreignKey: "ticket_id",
    as: "cardticket",
  });
  Card.belongsTo(models.Customer, {
    foreignKey: "customer_id",
    as: "cardcustomer",
  });
  Card.belongsTo(models.Status, {
    foreignKey: "status_id",
    as: "cardstatus",
  });
}
 return Card;
};
