
const Inscription = sequelize.define('inscription', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullname: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phone: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    dni: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    player: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: true
    },
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },{
    timestamps: false,
    tableName: 'inscriptions',
    underscored: true
  });
   
  module.exports = Inscription;