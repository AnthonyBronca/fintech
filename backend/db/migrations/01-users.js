'use strict';

let options = {};
options.tableName = "Users"


if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName:{
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            lastName:{
                type: Sequelize.STRING(30),
                allowNull: false
            },
            username: {
                type: Sequelize.STRING(15),
                allowNull: false,
                unique: true
            },
            email: {
                type: Sequelize.STRING(70),
                allowNull: false,
                unique: true
            },
            hashedPassword: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            hashedPhone: {
                type: Sequelize.STRING.BINARY,
                allowNull: false,
            },
            hashedBirthDate:{
                type: Sequelize.STRING.BINARY,
                allowNull: false,
            },
            hashedQ1: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            hashedQ2: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            hashedQ3: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            hashedQ4: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            hashedQ5: {
                type: Sequelize.STRING.BINARY,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        }, options);
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "Users";
        return queryInterface.dropTable(options);
    }
};
