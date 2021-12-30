const Project = require('../models/Project');
const { createProjectValidations } = require('../../validations/projectsValidations');
const { serializeString, serializePrice } = require('../../helpers/serializeHelpers');

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
            const project = serializeProjects(data)
            await createProjectValidations(project)

            return await Project.create({...project, user_id})

        } catch (error) {
            return error
        }
    }
}    

function serializeProjects(project) {
    return {
        name: serializeString(project.name),
        price: serializePrice(project.price),
    }
}

module.exports = new ProjectsController()