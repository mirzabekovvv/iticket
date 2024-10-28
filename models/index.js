const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

const Admin = require("./Admin.model")(sequelize, Sequelize);
const Seat_type = require("./seat_type")(sequelize, Sequelize);
const Venue_photo = require("./venue_photo")(sequelize, Sequelize);
const Venue_type = require("./venue_type.model")(sequelize, Sequelize);
const Event_type = require("./event_type")(sequelize, Sequelize);
const Human = require("./human.maodel")(sequelize, Sequelize);
const Customer_card = require("./customer_card.model")(sequelize, Sequelize);
const Customer = require("./customer")(sequelize, Sequelize);
const Seat = require("./seat.model")(sequelize, Sequelize);
const Ticket = require("./ticket.model")(sequelize, Sequelize);
const Booking = require("./booking")(sequelize, Sequelize);
const Card = require("./card.models")(sequelize, Sequelize);
const Customer_address = require("./customer_address")(sequelize, Sequelize);
const Eventt = require("./event.models")(sequelize, Sequelize);
const Venuee = require("./venue")(sequelize, Sequelize);
const Diskrict = require("./distric.model")(sequelize, Sequelize);
const Country = require("./country.model")(sequelize, Sequelize);
const Region = require("./region.model")(sequelize, Sequelize);
const Status = require("./status.model")(sequelize, Sequelize);
const Gender = require("./gender.model")(sequelize, Sequelize);
const Language = require("./lenguage.model")(sequelize, Sequelize);
const Sector = require("./sector.model")(sequelize, Sequelize);
const Delivery = require("./delivery.model")(sequelize, Sequelize);
const DisCount = require("./DisCount.model")(sequelize, Sequelize);
const Flat = require("./flat.model")(sequelize, Sequelize);
const Ticket_type = require("./ticket_type.model")(sequelize, Sequelize);
const Payment = require("./payment.model")(sequelize, Sequelize);

Seat.associate(sequelize.models);
Seat_type.associate(sequelize.models);
Booking.associate(sequelize.models);
Card.associate(sequelize.models);
Ticket.associate(sequelize.models);
Customer.associate(sequelize.models);
Customer_address.associate(sequelize.models);
Country.associate(sequelize.models);
Region.associate(sequelize.models);
Diskrict.associate(sequelize.models);
Event_type.associate(sequelize.models);
Eventt.associate(sequelize.models);
Venuee.associate(sequelize.models);
Delivery.associate(sequelize.models);
DisCount.associate(sequelize.models);
Status.associate(sequelize.models);
Language.associate(sequelize.models);
Venue_type.associate(sequelize.models);
Payment.associate(sequelize.models);
Venue_photo.associate(sequelize.models);
Human.associate(sequelize.models);
Gender.associate(sequelize.models);

const models = {
  sequelize,
  Admin,
  Seat_type,
  Venue_type,
  Venue_photo,
  Event_type,
  Human,
  Customer_card,
  Customer,
  Seat,
  Ticket,
  Booking,
  Card,
  Customer_address,
  Eventt,
  Venuee,
  Diskrict,
  Country,
  Region,
  Status,
  Gender,
  Language,
  Sector,
  Delivery,
  DisCount,
  Flat,
  Ticket_type,
  Payment,
};

module.exports = models;
