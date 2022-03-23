const express = require('express')
const router = express.Router()

const {getAllTask, createTask,getSingleTask,updateTask,deleteTask} = require('../controllers/tasks')   //Making seperate directories because this will make easy & modular


router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)  //patch used for update



module.exports = router
