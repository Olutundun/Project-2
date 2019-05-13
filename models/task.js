module.exports = function (sequelize, DataTypes) {
    var Tasks = sequelize.define("Tasks", {
        name: DataTypes.STRING,
        task: DataTypes.TEXT
      }, {
        score: DataTypes.INTEGER,
        defaultValue: '0'
      }, {
        completed: DataTypes.BOOLEAN,
        defaultValue: false
      }, {
        TIMESTAMPS: false
      });

      Tasks.associate = function (models) {
        //this is to say that a task belongs to a certain User
        //a task cannot be created without a user associated to it.
        Tasks.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }

        });
      }
      return Tasks;
    };