module.exports = (sequelize, DataTypes) => {
 const Human_type = sequelize.define("Human_type", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   start_age: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   finish_age: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   gender_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
   },
 });
 Human_type.associate = (models) =>{
  Human_type.hasMany(models.Event, {
    foreignKey: "human_category_id",
    as: "eventhuman_category",
  });
  Human_type.belongsTo(models.Gender, {
    foreignKey: "gender_id",
    as: "human_categoryGender",
  });
}
 return Human_type;
};
