const bcrypt = require('bcryptjs');
const { CustomValidationError } = require('../errors/validationErrors');


function isValidDate(dateString) {
    // Check if the string follows the format YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(dateString)) {
        return false;
    }

    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);
    const date = new Date(year, month, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    );
}


export const setHashedValues = (req, _res, next) => {
    const phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    try {
        let {
            password,
            phone,
            birthDate,
            q1,
            q2,
            q3,
            q4,
            q5
        } = req.body;

        // password hash
        if (!password){
            throw new CustomValidationError("Must pass in a valid password.", 400);
        } else{
            password = bcrypt.hashSync(password);
        }
        // phone hash
        if (!phone || !phoneNumberRegex.test(phone)){
            throw new CustomValidationError("Must pass in a valid phone number.", 400);
        } else {
            phone = bcrypt.hashSync(phone);
        }

        // birthdate hash
        if (!birthDate || !isValidDate(birthDate)){
            throw new CustomValidationError("Must pass in a valid birthdate.", 400);
        } else {
            birthDate = bcrypt.hashSync(birthDate);
        }

        // q1 hash
        if (!q1 || q1.startsWith(" ") || q1.endsWith(" ")) {
            throw new CustomValidationError("Answer to question must be valid, and not start or end with spaces.", 400);
        } else {
            q1 = bcrypt.hashSync(q1);
        }
        // q2 hash
        if (!q2 || q2.startsWith(" ") || q2.endsWith(" ")) {
            throw new CustomValidationError("Answer to question must be valid, and not start or end with spaces.", 400);
        } else {
            q2 = bcrypt.hashSync(q2);
        }
        // q3 hash
        if (!q3 || q3.startsWith(" ") || q3.endsWith(" ")) {
            throw new CustomValidationError("Answer to question must be valid, and not start or end with spaces.", 400);
        } else {
            q3 = bcrypt.hashSync(q3);
        }
        // q4 hash
        if (!q4 || q4.startsWith(" ") || q4.endsWith(" ")) {
            throw new CustomValidationError("Answer to question must be valid, and not start or end with spaces.", 400);
        } else {
            q4 = bcrypt.hashSync(q4);
        }
        // q5 hash
        if (!q5 || q5.startsWith(" ") || q5.endsWith(" ")) {
            throw new CustomValidationError("Answer to question must be valid, and not start or end with spaces.", 400);
        } else {
            q5 = bcrypt.hashSync(q5);
        }

        next();

    } catch (error) {
        next(error);
    }
}
