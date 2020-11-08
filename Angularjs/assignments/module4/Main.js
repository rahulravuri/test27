(function(){
	
	'use strict';
	angular.module('mainapp',['data','ui.router'])
		.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('Home',{
	  
	  
	  url:'/',

	  templateUrl:'Templates/Home.html'
	  
	  
})
.state('Menu',{
	  
	  
	  url:'/Menu',
	 
	  templateUrl:'Templates/Menu.html',
	  
	  controllers:'menu as menucontroller',
	  
	  
	  
})
.state('Categories',{
	  
	  
	  url:'/Categories/{sn}',
	 
	  templateUrl:'Templates/categories.html',
	  
	 resolve:{
	  items1:['$stateParams',function($stateParams){
		  console.log("h")
		  console.log($stateParams.sn);
		  return $stateParams.sn;
		  
		  
	 }]},
	   controller:'categoriescontroller as cc'
	  
	  
	  
	  
})





}


	

		
})()