const User = {
  async create (user: object) {
    return {
      toJSON () {
        return user
      }
    }
  },
  findOne () {},
  findAll () {},
  update () {},
  destroy () {}
}

export default { User }
