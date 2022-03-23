const Task = require("../model/task");
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../error/custom-error')

const getAllTask = asyncWrapper( async (req, res) => {
  const tasks = await Task.find({}); // Querieng model to find all the saved data
  res.status(200).json({ tasks });
  });

const createTask = asyncWrapper( async (req, res) => {
  // Async & Await -- Wait for the data to enter ,
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  });

const deleteTask = asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params; // find ID in params
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return next(createCustomError('No task with ID found',404)) // 404 Checks for length of arguement
    };
    res.status(200).json({task})
  })

const getSingleTask = asyncWrapper ( async (req, res,next) => {
    const { id: taskID } = req.params; //taskID is alias of req.params
    const task = await Task.findOne({ _id: taskID }); // _id : mongos ID like SQL
    if (!task) {
      // If not found then error else return same params , sometimes return null so looped it in if-else
      return next (createCustomError('No task with ID found',404))
    }
    res.status(200).json({ task }); // Cast error : Syntax error  
  });

// Put : Changing body completely , add overwrite:true as validator 
// Patch : Changing body partially

const updateTask =asyncWrapper( async (req, res) => {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID },req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return next(createCustomError('No task with ID found',404)) // 404 Checks for length of arguement
      }
      res.status(200).json({task})
    });

// Exporting multiple functions
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
