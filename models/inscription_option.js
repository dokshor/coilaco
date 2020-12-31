
const InscriptionOption = sequelize.define('inscription_option', {
    inscription_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: false,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    day: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  },{
    timestamps: false,
    tableName: 'inscriptions_options',
    underscored: true
  });
   
  module.exports = InscriptionOption;