module.exports = (sequelize, DataTypes) => {
 const Event = sequelize.define("Event", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   photo: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   start_date: {
     type: DataTypes.DATE,
     allowNull: false,
   },
   start_time: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   finish_date: {
     type: DataTypes.DATE,
     allowNull: false,
   },
   finish_time: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   info: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   event_type_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   human_category_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   venue_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   lang_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   release_date: {
     type: DataTypes.DATE,
     allowNull: false,
   },
 });
 Event.associate = (models) =>{
  Event.belongsTo(models.Event_type, {
    foreignKey: "event_type_id",
    as: "eventevent_type",
  });
  Event.belongsTo(models.Human_type, {
    foreignKey: "human_category_id",
    as: "eventhuman_category",
  });
  Event.belongsTo(models.Venue, {
    foreignKey: "venue_id",
    as: "eventvenue",
  });
  Event.belongsTo(models.Language, {
    foreignKey: "lang_id",
    as: "eventlanguage",
  });
  Event.hasMany(models.Ticket, {
    foreignKey: "event_id",
    as: "TicketEvent",
  });
}
 return Event;
};
