module.exports = (sequelize, DataTypes) => {
 const Ticket = sequelize.define("Ticket", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   event_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   seat_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   price: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   service_fee: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   status_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   ticket_type: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
 });
 Ticket.associate = (models) =>{
  Ticket.belongsTo(models.Event, {
    foreignKey: "event_id",
    as: "TicketEvent",
  });
  Ticket.belongsTo(models.Seat, {
    foreignKey: "seat_id",
    as: "TicketSeat",
  });
  Ticket.belongsTo(models.Status, {
    foreignKey: "status_id",
    as: "TicketStatus",
  });
}
 return Ticket;
};
