(function(){
	
	'use strict';
	angular.module('data',[])
	.service('values',values)
	.service('categories',categories)
	;
	
	
	
	values.$inject=['$http'];
	function values($http){
		
		
		var v =this;
		
		v.data=function(){
			
			var def =$http.get(" https://davids-restaurant.herokuapp.com/categories.json").then(function(response){return response;});
			
			return def;
			
						
		};
		
		
	}
	
	
	
	categories.$inject=['$http'];
	
	
	
	function categories($http){
		
		var cat=this;
		
		cat.data=function(sname){
			
			var link = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+sname;
			
			var def =$http.get(link).then(function(response){return response;});
			
			return def;
			
						
		};
			
			
		}
		
		
	

	
	
		
})()