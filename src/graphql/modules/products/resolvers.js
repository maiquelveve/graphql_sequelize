module.exports = {
    Query: {
        async projects(_, __, { dataSources, authUser }) {
            await authUser()
            return await dataSources.projectsController.listAllProjects() 
        },  
    },

    Mutation: {
        async createProject(_, { data }, { dataSources, authUser }) {
            await authUser()
            return await dataSources.projectsController.createProject(data) 
        },  
    }
}