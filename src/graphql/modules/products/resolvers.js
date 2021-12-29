module.exports = {
    Query: {
        async projects(_, __, { dataSources, authUser }) {
            await authUser()
            return await dataSources.projectsController.listAllProjects() 
        },  
    },

    Mutation: {
        async createProject(_, { data }, { dataSources, authUser }) {
            const user_id = await authUser()
            return await dataSources.projectsController.createProject(data, user_id) 
        },  
    }
}