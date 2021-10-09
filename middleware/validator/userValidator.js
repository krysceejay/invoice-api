const {check, validationResult} = require('express-validator')

exports.regUserVal = [
    check('firstName', 'First Name is required').notEmpty().trim().escape(),
    check('lastName', 'Last Name is required').notEmpty().trim().escape(),
    check('phone', 'Phone Number is required').notEmpty().trim().escape(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'must be at least 8 chars long').isLength({ min: 8 }),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({err: errors.array()})
    next()
  },
]

exports.updateUserVal = [
    check('firstName', 'First Name is required').notEmpty().trim().escape(),
    check('lastName', 'Last Name is required').notEmpty().trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty())
      return res.status(400).json({err: errors.array()})
    next()
  },
]