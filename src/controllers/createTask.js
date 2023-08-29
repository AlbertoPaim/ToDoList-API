let { idGenerator, tasks } = require("../data/tasks");

const createTask = async (req, res) => {
    const { title, done } = req.body;
    try {

        if (!title) {
            return res.status(400).json({ message: "Title is required!" });
        }

        const newTask = {
            id: idGenerator++,
            title,
            done: done || false
        };

        tasks.push(newTask);

        return res.status(201).json({ message: "A task has been created." });
    } catch (error) {
        res.status(500).json(`Unexpected error ${error}`);
    }
}
module.exports = {
    createTask
};