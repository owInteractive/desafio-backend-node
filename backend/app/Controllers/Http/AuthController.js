'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    const data = request.only(['username', 'email', 'password'])

    await User.create(data)

    return User
  }

  async authenticate({ request, auth }) {
    const { email, password} = request.all();

    const token = await auth.attempt(email, password)

    return token
  }

  async index() {
    const users = await User.all();

    return users;
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id);

    return user;
  }

  async destroy ({ params, auth, response }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }
}

module.exports = AuthController
