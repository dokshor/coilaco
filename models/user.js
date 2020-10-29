
const User = sequelize.define('user', {
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
  serie: {
    type: Sequelize.STRING,
    unique: false,
    allowNull: true,
    validate: {
      notEmpty: false,
    },
  },
  message: {
    type: Sequelize.TEXT,
    unique: false,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  created_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
},{
  timestamps: false,
  tableName: 'users',
  underscored: true
});
 
module.exports = User;