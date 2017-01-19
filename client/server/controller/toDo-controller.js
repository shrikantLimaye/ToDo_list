var Todo = require('../models/todo.js')


module.exports.create = function(req, res){
    console.log(req.body);
    var todo = new Todo(req.body);
    todo.save(function(err, result){
        res.json(result);
    });
    
}

module.exports.list = function(req, res){
    
    Todo.find({},function(err, results){
        res.json(results);
        
    });
    
}