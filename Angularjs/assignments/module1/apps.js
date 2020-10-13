(function(){
	'use strict';
	
	
	
	var x= angular.module('Lunch',[]);
	x.controller('fun',function($scope)
	{
	$scope.name ;
	$scope.z;
	$scope.click = function(){
	 if(!$scope.name||$scope.name==","){console.log("no"); $scope.z ="pls enter correct data";
	 document.getElementById("data").style.color='red';}
     else{
		document.getElementById("data").style.color='black';
		var x =$scope.name;
		console.log("1st");
		var y =x.split(",");
		console.log(y.length);
		var z1=0;
		var i;
		console.log("2nd");
		
		  for (i=0 ;i< y.length;i++){
            console.log("3rd");
			 if(y[i]==""){console.log("no")}
			 else{z1=z1+1;}

		  }
	       if(z1>0){
		  if (z1<=3){$scope.z="enjoy"}
		  else{$scope.z="Too much"}}
	 }
	
		
	};})

})();
