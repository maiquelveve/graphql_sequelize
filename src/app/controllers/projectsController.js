class ProjectsController {
    async listAllProjects() {
        try {
            const name = "teste"
            const price = "12.23"
            const user = {
                id: "1",
                email: "maiquelveve@gmail.com",
                name: "maiquel",
            }

            return [{ name, price, user }]

        } catch (error) {
            return error
        }
    }

    async createProject(data) {
        try {
            return data

        } catch (error) {
            return error
        }
    }
}    

module.exports = new ProjectsController()