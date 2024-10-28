const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const setupSwagger = require("./swagger/swagger")
const admin = require("./routes/admin.Rout")
const seat = require("./routes/seat_type.Rout")
const seatt = require("./routes/seat.Rout")
const venue = require("./routes/venue.Rout")
const venue_photo = require("./routes/venue_photo.Rout")
const event = require("./routes/event.Rout")
const human = require("./routes/human.Rout")
const customer_card = require("./routes/customer_card")
const customer = require("./routes/customer")
const ticket = require("./routes/ticket.Rout");
const booking = require('./routes/booking.Rout');
const Card = require('./routes/card.Rout');
const Customer_address = require('./routes/cusromer_address.Rout');
const Eventt = require('./routes/eventt.Rout');
const Venuee = require('./routes/venuee.Rout');
const Diskrict = require('./routes/diskrict.Rout');
const Country = require('./routes/country.Rout');
const Region = require('./routes/region.Rout');
const Status = require('./routes/status.Rout');
const Gender = require('./routes/genger.Rout');
const Language = require('./routes/language.Rout');
const Sector = require('./routes/sector.Rout');
const Delivery = require('./routes/delivery.Rout');
const DisCount = require('./routes/DisCount.Rout');
const Flat = require('./routes/Flat.Rout');
const Ticket_type = require('./routes/Ticket_type.Rout');
const Payment = require('./routes/payment.Rout');
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api", admin);
app.use("/api", seat);
app.use("/api", seatt);
app.use("/api", venue);
app.use("/api", event);
app.use("/api", human);
app.use("/api", venue_photo);
app.use("/api", customer_card);
app.use("/api", customer);
app.use("/api", ticket);
app.use("/api", booking);
app.use("/api", Card);
app.use("/api", Customer_address);
app.use("/api", Eventt);
app.use("/api", Venuee);
app.use("/api", Diskrict);
app.use("/api", Country);
app.use("/api", Region);
app.use("/api", Status);
app.use("/api", Gender);
app.use("/api", Language);
app.use("/api", Sector);
app.use("/api", Delivery);
app.use("/api", DisCount);
app.use("/api", Flat);
app.use("/api", Ticket_type);
app.use("/api", Payment);

setupSwagger(app);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() =>{
 app.listen(PORT, () => {
  console.log(sequelize.models);
  console.log(`Server is running on port ${PORT}`);
 });
});
