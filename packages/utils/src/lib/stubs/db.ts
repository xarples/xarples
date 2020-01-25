import encrypt from '../encrypt'
import fixtures from '../fixtures/index'

const users = [
  fixtures.user.random(),
  fixtures.user.random(),
  fixtures.user.random(),
  fixtures.user.fixed
]

const User = {
  async create(user: any) {
    const values = Object.values(user)

    if (!values.every(value => !!value)) {
      return null
    }

    user.password = encrypt(user.password)

    return user
  },
  async findByPk(id: string) {
    if (!id) {
      return null
    }

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
