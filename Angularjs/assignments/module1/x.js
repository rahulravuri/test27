(function(){
	'use strict';
	var x= angular.module('Lu',[]);
	x.controller('datataking',datataking)
	x.controller('datashowing',datashowing)
	x.service('servicedata',servicedata);
	
	datataking.$inject=['servicedata'];
	function datataking(servicedata){
		
		
		var data= this;
		data.tobuy=servicedata.itemstobuy;
		console.log(data.tobuy);
		  var count=4;
		
		

		data.add= function(index){servicedata.getitems(index,servicedata.itemstobuy[index].name,servicedata.itemstobuy[index].quantity);
		  

				};
		
		
		
	}
	datashowing.$inject=['servicedata'];
	function datashowing(servicedata){
		var ds=this;
		this.items=servicedata.showitems();
		
	
		
	}
	
		
	
	
	function servicedata(){
		
		
		var sdata=this;
		sdata.x=[1,2,3,4];
		sdata.itemstobuy=[
		{name:'apples',quantity:30},
		{name:'banana',quantity:30},
		{name:'mango',quantity:30},
		{name:'grapes',quantity:30}
			
		];console.log(sdata.itemstobuy[1]);
		sdata.itemsbought=[]
		sdata.getitems= function(index,item_name,item_quantity){
			var item={
				name:item_name,
				quantity:item_quantity
			};
			console.log(item);
			sdata.itemsbought.push(item);
			sdata.itemstobuy.splice(index,1);

			console.log(sdata.itemsbought);

				console.log(sdata.itemstobuy);
			
			
			
		};
		sdata.showitems=function(){
			
			return sdata.itemsbought;console.log("added");
		};
		
	}
	
	
})();