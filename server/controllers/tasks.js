var mongoose = require('mongoose');
require('../models/task');

var Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find({}, function (err, data) {
            if(err){
                console.log('Error retrieving all tasks from database');
                res.json({message: 'Error:', error: err});
            }
            else{
                console.log('Successfully retrieved all tasks from database');
                res.json({message: 'Success', tasks: data});
            }
        })
    },
    create: function (req, res) {
        var createTask = new Task({
            title: req.body.title,
            description: req.body.description,
        })
        createTask.save(function (err) {
            if(err){
                console.log('Error creating new Task');
                res.json({message: 'Error:', error: err});
            }
            else{
                console.log('Successfully created new Task');
                res.json({message: 'Success', task: createTask});
            }
        });
    },
    read: function (req, res) {
        Task.findById(req.params.taskId, function (err, data){
            if(err){
                console.log('No Task with that ID');
                res.json({message: 'Error:', error: err})
            }
            else{
                console.log('Found Task', data);
                res.json({message: 'Success:', task: data})
            }
        })
    },
    update: function (req, res) {
        Task.findById(req.body._id, function (err, data) {
            if(err){
                console.log('No Task with that ID');
                res.json({message: 'Error:', error: err});
            }
            else{
                console.log('Retrieved Task from DB');
                updateTask = data;
                updateTask.title = req.body.title;
                updateTask.description = req.body.description;
                updateTask.save(function (err) {
                    if(err){
                        console.log('Could not update Task');
                        res.json({message: 'Error:', error: err});
                    }
                    else{
                        console.log('Successfully updated Task');
                        res.json({message: 'Success:', task: updateTask});
                    }
                });
            }
        })
    },
    delete: function (req, res) {
        // console.log(req.body._id);
        // Task.findById(req.body._id), function (err, data) {
        //     if(err){
        //         console.log('new delete');
        //         res.json({message: 'Error:', error: err});
        //     }
        //     else{
        //         data.remove(function (err) {
        //             if(err){
        //                 console.log('not deleting')
        //                 res.json({message: 'Error:', error: err});
        //             }
        //             else{
        //                 console.log('deleted', req.body._id);
        //                 res.json({message: 'Success:'});
        //             }
        //         })
        //     }
        // }
        console.log(req.params.taskId); //saying undefined
        Task.findByIdAndDelete(req.params.taskId, function (err, data) {
            console.log(req.params.taskId);
            // console.log();
            if(err){
                console.log('Error deleting task, Task does not exist');
                res.json({message: 'Error:', error: err});
            }
            else{
                console.log('Successfully deleted task')
                res.json({message: 'Success: Task deleted', task: data});
            }
        })
    },
}