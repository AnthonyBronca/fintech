'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
options.tableName = "Users"
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}



module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        firstName: "demo",
        lastName: "user",
        username: 'demo-user',
        email: 'demo@user.io',
        hashedPassword: bcrypt.hashSync('password'),
        hashedPhone: bcrypt.hashSync("555-123-0123"),
        hashedBirthDate: bcrypt.hashSync("2000-09-10"),
        hashedQ1: bcrypt.hashSync("demo first pet"),
        hashedQ2: bcrypt.hashSync("demo first car"),
        hashedQ3: bcrypt.hashSync("demo food"),
        hashedQ4: bcrypt.hashSync("demo highschool"),
        hashedQ5: bcrypt.hashSync("demo mom's maiden name"),
      },
    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['demo-user'] }
    }, {});
  }
};
