const User = require('../models/User');
const ErrorsLogin = require('../errors/ErrorsLogin');
const { decryptPassword, encryptPassword } = require('../../helpers/passwordHelper');
const { generatorToken } = require('../../helpers/tokenHelper');

class UserController {
    async login(email, password) {
        try {
            const user = await User.findOne({ where: { email: email.toUpperCase() }})
            
            if(!user) {
                throw new ErrorsLogin() 
            } 

            if(!await decryptPassword(user.password, password)) {
                throw new ErrorsLogin() 
            } 

            user.token = await generatorToken(user)
            return user

        } catch (error) {
            return error
        }
    }

    async listAllUser() {
        try {
            return await User.findAll()

        } catch (error) {
            return error
        }
    }

    async createUser(data) {
        try {

            return await User.create({...data, password: await encryptPassword(data.password) })

        } catch (error) {
            return error
        }
    }
}    

module.exports = new UserController()