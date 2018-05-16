myapp.filter('filterTodoName', function(){
    return function(todolist, name){
        if(name == '' || name == undefined) 
        return todolist;
        return todolist.filter(todo => todo.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
    }
})
myapp.filter('filterLevelTodo', function(){
    return function(todolist, level){
        if(level == '' || level == undefined) return todolist;
        return todolist.filter(todo => todo.level == level);
    }
})
myapp.filter('filterDone', function(){
    return function(todolist, from, to){
        if(!checkNum(from) || !checkNum(to)) return todolist;
        return todolist.filter(todo => todo.done >= parseInt(from) && todo.done <= parseInt(to));
    }
})

function checkNum(val){
    if(!/^[0-9]+$/.test(val)) return false;
    if(parseInt(val) > 100) return false;
    return true; 
}