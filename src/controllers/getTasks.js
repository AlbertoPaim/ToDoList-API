const { tasks } = require("../data/tasks");

const getTasks = async (req, res) => {
    try {
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(`Unexpected error ${error}`);
    }
};

module.exports = {
    getTasks
};