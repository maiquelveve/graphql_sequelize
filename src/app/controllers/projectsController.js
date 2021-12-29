const Project = require('../models/Project');

class ProjectsController {
    async listAllProjects() {
        try {
            return await Project.findAll({ include: { association: 'user' } })

        } catch (error) {
            return error
        }
    }

    async createProject(data, user_id) {
        try {
            return await Project.create({...data, user_id})

        } catch (error) {
            return error
        }
    }
}    

module.exports = new ProjectsController()