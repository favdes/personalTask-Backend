const express = require('express');
const router = express.Router();
const {create_task,getAll_tasks, update_task, delete_task, single_page} = require('../controller/taskController')


// post users, C -- for create
router.post('/api/user',create_task)

// get users, R -- read
router.get('/api/user', getAll_tasks)

// update user, U -- for update

router.patch('/api/user/:id', update_task)

// Delete user, D -- for Delete

router.delete('/api/user/:id', delete_task)

//  params for single page


router.get('/api/user/:id',single_page);




module.exports = router;