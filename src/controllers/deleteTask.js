let { tasks } = require("../data/tasks");

const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {

        let indexOfTask;
        let task = tasks.find((task, index) => {
            indexOfTask = index
            return task.id === Number(id)
        })

        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        };

        if (!task.done) {
            return res.status(400).json({ message: "Cannot delete an unfinished task!" });
        }

        tasks.splice(indexOfTask, 1)

        return res.status(200).json({ message: "A task been deleted" });
    } catch (error) {
        res.status(500).json(`Unexpected error ${error}`);
    }
}
module.exports = {
    deleteTask
};