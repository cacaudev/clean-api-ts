module.exports = {
  up: (queryInterface, Sequelize) => {
    const userSchema = {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING(256),
        allowNull: false,
        unique: true,
      },
      name: Sequelize.STRING(128),
      surname: Sequelize.STRING(128),
      password: Sequelize.STRING(288),
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    };
    return queryInterface.createTable('users', userSchema);
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('users');
  },
};
