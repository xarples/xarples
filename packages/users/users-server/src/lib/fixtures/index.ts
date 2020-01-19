import faker from 'faker'
import utils from '@xarples/utils'

const user = {
  fixed: {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password()),
    async update (data: object) { return user.fixed },
    async destroy () { return user.fixed }
  },
  random: () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password()),
    async update (data: object) { return user.fixed },
    async destroy () { return user.fixed }
  })
}

const users = [
  user.random(),
  user.random(),
  user.random(),
  user.fixed
]

async function update (data: object) {
  return { ...user.fixed, ...data, id: user.fixed.id }
}

async function destroy () {
  return user.fixed
}

user.fixed.update = update
user.fixed.destroy = destroy

export default {
  user,
  users
}
