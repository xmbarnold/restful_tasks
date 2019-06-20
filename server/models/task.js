var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {type: String, required: 'Please enter a title for the task', minlength: 3},
    description: {type: String, default: ''},
    completed: {type: Boolean, default: false},
}, {timestamps: true})

mongoose.model('Task', TaskSchema);