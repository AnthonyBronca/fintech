'use strict';

const { Model, Validator } = require('sequelize');
const {CustomValidationError} = require('../../errors/validationErrors');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            // define association here
        }
    };

    User.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3,30],
                    isAlpha: true,
                    noSpaces(value) {
                        if (value.startsWith(" ")) {
                            throw new CustomValidationError("Name can not start with spaces.", 400);
                        }
                        if (value.endsWith(" ")) {
                            throw new CustomValidationError("Name can not end with spaces.", 400);
                        }
                    },
                    isNotEmail(value) {
                        if (Validator.isEmail(value)) {
                            throw new CustomValidationError("Cannot be an email.", 400);
                        }
                    }
                }
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3, 30],
                    isAlpha: true,
                    isNotEmail(value) {
                        if (Validator.isEmail(value)) {
                            throw new CustomValidationError("Cannot be an email.", 400);
                        }
                    },
                    noSpaces(value){
                        if(value.startsWith(" ")){
                            throw new CustomValidationError("Name can not start with spaces.", 400);
                        }
                        if(value.endsWith(" ")){
                            throw new CustomValidationError("Name can not end with spaces.", 400);
                        }
                    }
                }
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [4, 15],
                    isNotEmail(value) {
                        if (Validator.isEmail(value)) {
                            throw new CustomValidationError("Cannot be an email.", 400);
                        }
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    len: [3, 70],
                    isEmail: true
                }
            },
            hashedPassword: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60],
                }
            },
            hashedPhone: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedBirthDate: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedQ1: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedQ2: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedQ3: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedQ4: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
            hashedQ5: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
                validate: {
                    len: [60, 60]
                }
            },
        }, {
        sequelize,
        modelName: 'User',
        defaultScope: {
            attributes: {
                exclude: [
                    "lastName",
                    "email",
                    "hashedPassword",
                    "hashedQ1",
                    "hashedQ2",
                    "hashedQ3",
                    "hashedQ4",
                    "hashedQ5",
                    "hashedBirthDate",
                    "hashedPhone",
                    "createdAt",
                    "updatedAt",
                    ]
            }
        }
    }
    );
    return User;
};
