import { Router } from 'express'
import accounts from '@xarples/accounts-api'

const router = Router()
const client = accounts.services.user.createClient()

router.post('/', (req, res) => {
  const data = req.body
  const message = new accounts.services.user.messages.UserRequest()

  message.setFirstName(data.firstName)
  message.setLastName(data.lastName)
  message.setUsername(data.username)
  message.setEmail(data.email)
  message.setPassword(data.password)

  client.create(message, (err, user) => {
    if (err) {
      return res.status(400).send(err)
    }

    res.status(200).send(user.toObject())
  })
})

router.put('/', (req, res) => {
  const data = req.body
  const message = new accounts.services.user.messages.UserRequest()

  message.setId(data.id)
  message.setFirstName(data.firstName)
  message.setLastName(data.lastName)
  message.setUsername(data.username)
  message.setEmail(data.email)

  if (data.password) {
    message.setPassword(data.password)
  }

  client.update(message, (err, user) => {
    if (err) {
      return res.status(400).send(err)
    }

    res.status(200).send(user.toObject())
  })
})

export default router
