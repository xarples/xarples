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
    async update(data: any) {
      const _data = { ...user.fixed, ...data, id: user.fixed.id }

      _data.password = utils.encrypt(_data.password)

      return _data
    },
    async destroy() {
      return user.fixed
    }
  },
  random: () => ({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: utils.encrypt(faker.internet.password()),
    async update(data: any) {
      const _data = { ...user.fixed, ...data, id: user.fixed.id }

      data.password = utils.encrypt(data.password)

      return _data
    },
    async destroy() {
      return user.fixed
    }
  })
}

const users = [user.random(), user.random(), user.random(), user.fixed]

export default {
  user,
  users
}
