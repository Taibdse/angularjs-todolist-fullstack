
myapp.service('queryData', function($http) {
    const url = 'http://localhost:4000';


    this.getAllData = function(){
        return $http.get(`${url}/getAllTodo`);
    }

    this.delete = function(_id){
       return $http({
           url:`${url}/delete`,
           method:'POST',
           data:{ _id }
       })
    }

    this.update = function(_id, content){
        return $http({
            url:`${url}/update`,
            method:'POST',
            data:{_id, content}
        })
    }

    this.add = function(todo){
        return $http({
           url:`${url}/add`,
           method:'POST',
           data: todo 
       })
    }
})
 