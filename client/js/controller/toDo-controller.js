

app.controller('myController',['$scope', '$resource', function($scope,$resource){
    
    var ToDo = $resource('/api/todos');
    
    
    ToDo.query(function(results){
       
        $scope.todos = results;
        
    });
    $scope.todos = []
    
    $scope.createToDo = function(){
        var todo = new ToDo();
        todo.subject = $scope.todoSubject;
        todo.$save(function(result){
            $scope.todos.push(result);
            $scope.todoSubject = '';
        });
    }
}]);