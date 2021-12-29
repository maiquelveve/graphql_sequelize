module.exports = {
    Query: {
        async login(_, { email, password }, { dataSources }) {
            return await dataSources.usersController.login(email, password) 
        }, 
        
        async users(_, __, { dataSources, authUser }) {
            await authUser()
            return await dataSources.usersController.listAllUser() 
        },
        
    },

    Mutation: {
        async createUser(_, { data }, { dataSources }) {
            return await dataSources.usersController.createUser(data) 
        },  
    }
}