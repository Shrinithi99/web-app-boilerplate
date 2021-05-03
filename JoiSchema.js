
const Joi = require('joi')


//Joi schema to validate payload
const schema = Joi.object({
    firstname:Joi.string().min(3).required(),
    lastname:Joi.string().min(3).required(),
    email:Joi.string().email(),
    birthdate:Joi.string().isoDate(),
    age:Joi.number().min(18).max(65).required(),
    phonenumber: Joi.string().length(10).pattern(/^\d+$/).required()
  });
  module.exports = { schema };