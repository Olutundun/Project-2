module.exports = function(sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
      name: DataTypes.STRING,
      task: DataTypes.TEXT},
      {
      score: DataTypes.INTEGER,
      defaultValue: '0'
    }, {
      completed: DataTypes.BOOLEAN,
      defaultValue: false
    }, {
      TIMESTAMPS: false
    });
    return Tasks;
  };
  