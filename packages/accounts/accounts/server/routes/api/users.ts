import { Router } from 'express'
import accounts from '@xarples/accounts-client'

const router = Router()
const client = accounts.createClient()

router.post('/', (req, res) => {
  const data = req.body
  const message = new accounts.messages.User()

  message.setFirstName(data.firstName)
  message.setLastName(data.lastName)
  message.setUsername(data.username)
  message.setEmail(data.email)
  message.setPassword(data.password)

  client.createUser(message, (err, user) => {
    if (err) {
      return res.status(400).send(err)
    }

    res.status(200).send(user.toObject())
  })
})

router.put('/', (req, res) => {
  const data = req.body
  const message = new accounts.messages.User()

  message.setId(data.id)
  message.setFirstName(data.firstName)
  message.setLastName(data.lastName)
  message.setUsername(data.username)
  message.setEmail(data.email)

  if (data.password) {
    message.setPassword(data.password)
  }

  client.updateUser(message, (err, user) => {
    if (err) {
      return res.status(400).send(err)
    }

    res.status(200).send(user.toObject())
  })
})

export default router
