import express from 'express'
import User from '../models/user'
import { signupSchema } from '../validations/user'
import { parseError, sessionizeUser } from '../util/helpers'

const userRoutes = express.Router()

userRoutes.post('', async (req, res) => {
  try {
    const { username, email, password } = req.body
    const { error, value } = signupSchema.validate({
      username,
      email,
      password,
    })
    if (error) return res.status(400).send(parseError(error))

    const newUser = new User(value)
    const sessionUser = sessionizeUser(newUser)
    await newUser.save()

    req.session.user = sessionUser
    return res.send(sessionUser)
  } catch (err) {
    return res.status(400).send(parseError(err))
  }
})

export default userRoutes
