var tasks = require('../controllers/tasks');

module.exports = (app) => {
    // api route to display all tasks
    app.get('/api/tasks', (req, res) => tasks.index(req, res));

    // api route to create a new Task
    app.post('/api/tasks', (req, res) => tasks.create(req, res));

    // api route to read a task by id
    app.get('/api/tasks/:taskId', (req, res) => tasks.read(req, res));

    // api route to update task by id
    app.put('/api/tasks/', (req, res) => tasks.update(req, res));

    // api route to delete task by id
    app.delete('/api/tasks/:taskId', (req, res) => tasks.delete(req, res));
}