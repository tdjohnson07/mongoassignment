angular.module('assignmentApp', []);
angular.module('assignmentApp').controller('MainController', function($http){
  var vm = this;
  vm.getAssignments = function(){
    $http.get('/assign').then(handleGetSuccess, handleGetFailure);
  }
  function handleGetSuccess(response){
    vm.assignments= response.data;
    console.log(vm.assignments);
  }
  function handleGetFailure(response){
    console.log('get failure', response);
  }
  vm.submitAssignment = function(){
    var sendData = {};
    sendData.student_name = vm.student_name;
    sendData.assignment_number = vm.assignment_number;
    sendData.score = vm.score;
    vm.student_name=undefined;
    vm.assignment_number=undefined;
    vm.score=undefined;
    $http.post('/assign/makeAssignment', sendData).then(handlePostSuccess, handlePostFailure);
  }
  function handlePostSuccess(response){
    console.log('post success', response);
  }
  function handlePostFailure(response){
    console.log('post fail', response);
  }
  vm.getAssignments();
})
