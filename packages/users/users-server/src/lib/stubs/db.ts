import utils from '@xarples/utils'
import fixtures from '../fixtures/index'

const users = [
  fixtures.user.random(),
  fixtures.user.random(),
  fixtures.user.random(),
  fixtures.user.fixed
]

const User = {
  async create(user: any) {
    user.password = utils.encrypt(user.password)

    return user
  },
  async findByPk(id: string) {
    return users.find(u => u.id === id)
  },
  async findOne(options: any) {
    const param = Object.keys(options.where)[0] as 'username' | 'email'

    return users.find(u => u[param] === options.where[param])
  },
  async findAll() {
    return users
  }
}

export default { User }
