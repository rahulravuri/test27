(function(){
	
	'use strict';
	
	
	angular.module('mainapp')
	.controller('menucontroller',menucontroller)
	.controller('categoriescontroller',categoriescontroller);
	
	
	
	menucontroller.$inject=['values','categories']
	function menucontroller(values,categories){
		
		var menu=this;
		menu.a="apple";
		var promise=values.data();
		
		promise.then(function(response){
			
			menu.items=response.data;
		
			
		});
		

		
		
		
		
		
	}
	
	
	categoriescontroller.$inject=['$stateParams','values','categories'];
	
	
	function  categoriescontroller($stateParams,values,categories){
		
		var cc=this;
		
		cc.item= $stateParams.sn;
	
		var promise=values.data();
		
		promise.then(function(response){
			
			var items=response.data;
	
			var promise2= categories.data(items[cc.item].short_name);
		
		promise2.then(function(response){
		
		cc.x=response.data.menu_items;
		

		
		
		
		
		});
			
		});
		
		
		
		
		
		
	}
	
	
	
	
	
	})()