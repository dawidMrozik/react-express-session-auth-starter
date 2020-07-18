export const parseError = (err) => {
  if (err._original) return { message: err.details[0].message }
  return JSON.stringify(err, Object.getOwnPropertyNames(err))
}

export const sessionizeUser = (user) => {
  return { userId: user.id, username: user.username }
}
