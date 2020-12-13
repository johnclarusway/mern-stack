
const { check } = require('express-validator');

exports.registerValidation = [
    check('password', 'Please enter a password with 6 and more chars').isLength({ min: 8, }),
    check('email', 'Please enter a valid e-mail').isEmail(),
]

exports.loginValidation = [
    check('password', 'Please enter a password with 6 and more chars').isLength({ min: 8, }),
    check('email', 'Please enter a valid e-mail').isEmail(),
]