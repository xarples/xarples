```js
import faker from 'faker'
import sequelize from '../lib/sequelize'
import User from '../models/user'

const queryInterface = sequelize.getQueryInterface()

export default {
  up(): Promise<User[]> {
    return queryInterface.bulkInsert('users', [
      {
        id: faker.random.uuid(),
        username: 'glopez',
        password: 'test',
        email: 'glopez@test.com',
        firstName: 'Guillermo',
        lastName: 'Lopez',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down() {
    return queryInterface.bulkDelete('users', {})
  }
}
```
