import faker from 'faker'
import encrypt from '../encrypt'

const user = {
  fixed: {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: encrypt(faker.internet.password()),
    async update(data: any) {
      const _data = { ...user.fixed, ...data, id: user.fixed.id }

      _data.password = encrypt(_data.password)

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
    password: encrypt(faker.internet.password()),
    async update(data: any) {
      const _data = { ...user.fixed, ...data, id: user.fixed.id }

      data.password = encrypt(data.password)

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
