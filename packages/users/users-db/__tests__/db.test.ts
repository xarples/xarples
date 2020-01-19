import anyTest, { TestInterface } from 'ava'
import faker from 'faker'
import utils from '@xarples/utils'

import { User, sequelize } from '../src'

const test = anyTest as TestInterface<{User: User}>

test.beforeEach(async t => {
  await sequelize.sync({ force: true })
})

test.afterEach(async t => {
  await sequelize.drop()
})

test.serial('Should be create an user', async t => {
  const data = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password())
  }

  const user = await User.create(data)

  t.truthy(user.id)
  t.truthy(user.createdAt)
  t.truthy(user.updatedAt)
  t.is(user.firstName, data.firstName)
  t.is(user.lastName, data.lastName)
  t.is(user.username, data.username)
  t.is(user.email, data.email)
  t.is(user.password, data.password)
})

test.todo('Should be find an user by id')
test.todo('Should be find an user by username')
test.todo('Should be find an user by email')
test.todo('Should be update an user')
test.todo('Should be delete an user')
