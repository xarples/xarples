import faker from 'faker'
import sequelize from '../lib/sequelize'
import User from '../models/user'
import { encrypt } from '@xarples/utils'

const queryInterface = sequelize.getQueryInterface()

export default {
  up(): Promise<User[]> {
    return queryInterface.bulkInsert('users', [
      {
        id: faker.random.uuid(),
        username: 'glopez',
        password: encrypt('test'),
        email: 'glopez@test.com',
        first_name: 'Guillermo',
        last_name: 'Lopez',
        gender: 'male',
        picture: '',
        birth_date: new Date(),
        phone_number: 18091112222,
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down() {
    return queryInterface.bulkDelete('users', {})
  }
}
