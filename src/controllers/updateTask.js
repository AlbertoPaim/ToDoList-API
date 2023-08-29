let { tasks } = require("../data/tasks");

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, done } = req.body;
    try {
        let task = tasks.find(task => task.id === Number(id));

        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        };

        if (typeof done !== 'boolean') {
            return res.status(400).json({ message: "done must be a boolean value!" });
        };

        task.id = task.id;
        task.title = title || task.title;
        task.done = done;

        return res.status(200).json({ message: "task has been update!" });

    } catch (error) {
        res.status(500).json(`Unexpected error ${error}`);
    }
}
module.exports = {
    updateTask
};