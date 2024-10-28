module.exports = (sequelize, DataTypes) => {
 const Gender = sequelize.define("Gender", {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.STRING,
     allowNull: false,
   },
 });
 Gender.associate = (models) =>{
  Gender.hasMany(models.Human_type, {
    foreignKey: "gender_id",
    as: "human_categoryGender",
  });
}
 return Gender;
};
