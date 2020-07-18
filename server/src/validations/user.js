import Joi from 'joi'

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
  ),
})

const signupSchema = signinSchema.keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
})

export { signinSchema, signupSchema }
