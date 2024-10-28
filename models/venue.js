module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    schema: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Venue.associate = (models) => {
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seats",
    });
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "eventvenue",
    });
    Venue.hasMany(models.Venue_photo, {
      foreignKey: "venue_id",
      as: "Venue_type",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "VenueRegion",
    });
    Venue.belongsTo(models.Diskrict, {
      foreignKey: "district_id",
      as: "VenueDistrict",
    });
    Venue.belongsTo(models.Venue_type, {
      foreignKey: "venue_type_id",
      as: "VenueVenue_type",
    });
  };
  return Venue;
};
