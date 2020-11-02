(function(){
	
	'use strict';
	var x= angular.module('check',[]);
	x.controller("datachecking",datachecking);
	x.service('httpservice',httpservice);

		x.directive('foundItems',FoundItems);
	
	
	
	
	
	function FoundItems(){
		
		var ddo = {
			
			templateUrl: 'loader.html'
		};
		return ddo;
		
		
	}
	
	datachecking.$inject=['httpservice','$scope'];
	

function datachecking(httpservice,$scope){
	var xdc=this;
	xdc.datainfo =[
	
	
	
	
	
	
	];
	xdc.dis="";

	
	xdc.remove =function(index){
		
		xdc.datainfo.splice(index,1);
	}
	
	
	xdc.getdata = function(){
	var promise = httpservice.data();
	
	promise.then(function(json){//console.log(json.menu_items[9]  );
	
	 
	// console.log(xdc.dis);
	 if(xdc.dis!= ""){
		 xdc.error=
		 false;
		 console.log("data is ",xdc.dis);
		 
		 xdc.datainfo =[];
		 var disdata =xdc.dis.split(",");
		 
		 for(var i=0;i<json.menu_items.length;i++){
			 var x = true;
			 var test=[];
			 
			 for (var z=0;z<disdata.length;z++){console.log(disdata[z]);
			 
			  test[z]=json.menu_items[i].description.includes(disdata[z]) ;
			  console.log(test[z]);
			 
			 if( x && test[z]){ x = true;}
			 else{x=false;}
			 
			 
			 }console.log(xdc.datainfo.length);
		    
			
		      if(x){
                           var p;				  
			       if(xdc.datainfo.length > 0){
					    p=true;
					for(var z=0;z<xdc.datainfo.length;z++ ){
						console.log("not oka");
						if(xdc.datainfo[z].id==json.menu_items[i].id){console.log("not oka");
						p=false;}
					}if(p){xdc.datainfo.push(json.menu_items[i]) ;}
				   }
				   else{xdc.datainfo.push(json.menu_items[i]) ;}
			   //var b=xdc.datainfo.id.includes(json.menu_items[i].id);
			   console.log(xdc.datainfo);
			  if(true){console.log("yes");} }
		 }
		
	 }
	 else{xdc.error=
		 true;
	      xdc.datainfo =[];
		 console.log("Nothing found")
		 
	 }
	 
	 
	 
	 

	
	});
	};
	
	
}

httpservice.$inject=['$http','$q']
function httpservice($http,$q){
	
	var http=this;
	var defer =$q.defer()
	
	http.data =function(){ $http.get("https://davids-restaurant.herokuapp.com/menu_items.json").then(function(response){    return defer.resolve(response.data);
	
	
	
	})
	

	;
	return defer.promise
	
	
};}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})()
