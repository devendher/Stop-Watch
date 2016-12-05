// Code goes here

var app=angular.module('myapp',[]);
app.controller('myctrl',function($scope,$interval){
  
  $scope.sec=0;
  $scope.minute=0;
  $scope.hour=0;
  $scope.buttonText="Start";
  $scope.test=0;
  
  var interval = $interval(function() {
  $scope.test=$scope.test+1;
}, 1000);

  
  
  $scope.startTimer=function(){
   
    if($scope.buttonText=="Start"){
       $scope.buttonText="Stop";
       $scope.intervalsetup=$interval(function(){
       $scope.sec=$scope.sec+1;
         if($scope.sec>60){
           $scope.sec=0;
           $scope.IncrementMin();
            }
           },1000);
  
    
    }
    else{
      $scope.buttonText="Start"
      $interval.cancel($scope.intervalsetup);
    }
    
 
  };
  

 
 
 $scope.IncrementMin=function(){
   $scope.minute=$scope.minute+1;
   if($scope.minute>60){
     $scope.IncrementHour();
     $scope.minute=0;
   }
 };
 
 $scope.IncrementHour=function(){
   $scope.hour=$scope.hour+1;
 }
  
$scope.ResetTimer=function(){
  $scope.sec=0;
  $scope.minute=0;
  $scope.hour=0;
  $interval.cancel($scope.intervalsetup);
  $interval.cancel(intervalsetup);
}  
   $scope.$on('$destroy', function() {
      $scope.stop();
    });
});
