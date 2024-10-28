module.exports = (sequelize, DataTypes) => {
 const Status = sequelize.define("Status", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   status: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });
 Status.associate = (models) =>{
  Status.hasMany(models.Booking, {
    foreignKey: "status_id",
    as: "bookingStatus",
  });
  Status.hasMany(models.Card, {
    foreignKey: "status_id",
    as: "cardstatus",
  });
  Status.hasMany(models.Ticket, {
    foreignKey: "status_id",
    as: "TicketStatus",
  });
}
 return Status;
};
