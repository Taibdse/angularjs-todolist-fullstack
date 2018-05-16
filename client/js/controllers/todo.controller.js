
myapp.controller('todoController', ['$scope','queryData','$window','$timeout','$interval', function($scope, queryData, $window, $timeout, $interval) {
    $scope.todolist = [];
    $scope.curTodo = {
        name:'',
        level:'1',
        note:'',
        done:0
    };
    $scope.slider = {
        options: {
            floor: 0,
            ceil: 100,
            step: 1
        }
    };
    $scope.nameSearched = '';
    $scope.levelSearched = '';
    $scope.toTodoDone = '';
    $scope.fromTodoDone = '';
    $scope.todoViewDetails = {};
    
    function getAllData(){
        queryData.getAllData()
        .then(response => {
            const { success, todolist } = response.data;
            if(success)
            $scope.todolist = todolist;
        })
        .catch(err => console.log(err));
    }

    getAllData();

    $scope.handleSubmit = function(e){
        e.preventDefault();
        let { name, done, level, note, _id } = $scope.curTodo

        $scope.curTodo.level = parseInt(level); 
        $scope.curTodo.done = parseInt(done); 

        if(name == '' || name.trim() == '') 
        return swal( "Oops" ,  "Todo name must be filled!" ,  "error" );

        if(_id == '' || _id == undefined){
            name = name.trim();
            note = note.trim();

            let newTodo = {name, done, level, note};
            queryData.add(newTodo).then(response => {
                const {success} = response.data;
                if(success) {
                    if(success) {
                        swal({
                            title: "Added successfully!",
                            text: "You have added 1 todo!",
                            icon: "success",
                            button: "Close!",
                            timer:2000
                          }).then(() => {
                            getAllData();
                            $scope.reset();
                          })
                          .catch(timer => {
                            getAllData();
                            $scope.reset();
                          })
                    }
                }
            })
            .catch(err => console.log(err));
        }else{
            let edittedTodo = {name, done, level, note};
            queryData.update(_id, edittedTodo)
            .then(response => {
                const {success} = response.data;
                if(success) {
                    swal({
                        title: "Updated successfully!",
                        text: "You have updated 1 todo!",
                        icon: "success",
                        button: "Close!",
                        timer:2000
                      }).then(() => {
                        getAllData();
                        $scope.reset();
                      })
                      .catch(timer => {
                        getAllData();
                        $scope.reset();
                      })
                }
            }).catch(err => console.log(err));
        }
    }

    $scope.delete = function(_id){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                queryData.delete(_id)
                .then(res => {
                    const { success } = res.data;
                    if(success) {
                        swal("Awee! Have deleted 1 todo!", {
                            icon: "success",
                          })
                        getAllData();
                        $scope.reset();
                    }
                })
                .catch(err => console.log(err));
              
            } else {
              swal("Not deleted!");
            }
          });
    }

    function scrolltoTop(){
        // if($window.scrollY <= 0) return;
        // $window.scrollTo(0, $window.scrollY - 20);
        // $timeout(() => {
        //     scrolltoTop();
        // }, 1);

        let v = $window.scrollY / 50;
        var interval = $interval(() => {
            if($window.scrollY <= 0) {
                $interval.cancel(interval);
            };
            $window.scrollTo(0, $window.scrollY - v);
        }, 1);

    }
   

    $scope.edit = function(todo){
        $scope.curTodo = todo;
        $scope.curTodo.level = $scope.curTodo.level + '';
        scrolltoTop();
    }

     $scope.reset = function(){
        $scope.curTodo = {
            name:'',
            level:'1',
            note:'',
            done:0
        };
        document.getElementById('txt-note-todo').textContent = '';
    }

    $scope.viewDetails = function(todo){
        $scope.todoViewDetails = todo;
    }

}])

