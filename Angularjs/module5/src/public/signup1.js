(function () {
"use strict";

  angular.module('public')

  .controller('signiingup',signiingup)
        .controller('infodetails',infodetails)
  .service("datacollection",datacollection)

  
  
  ;
  function datacollection(){
	  
	  var data=this;
	  data.info={
		  "username":"",
	  "email":"",
	  "phone":"",
	  "category":""
	  
	  };
	  console.log(data.info);
	  
  }
  
  
  signiingup.$inject=['datacollection','MenuService'];
  
  function signiingup(datacollection,MenuService){
	  
	  
	  
	  var x= this;
	  
	  x.user={
	  "username":"",
	  "email":"",
	  "phone":"",
	  "category":""
	  
	  
	  };
	  
	  x.null1="not now";
	  x.null2="not now";
 var s=MenuService.getsingleMenuItems('L');
		  console.log(s);
		  if (s="NOt found"){
			  
			  console.log("issue");
			  
		  }

	   
	 
	  x.submit = function(){
		  
		 MenuService.getsingleMenuItems(x.user.category).then(function(response){
			  console.log(response);
			  x.check = response;
			  if (x.check!="NOt found"){
			   x.null1="found";
			   x.null2="";
			  console.log("found");
			 
			  x.category1=x.user.category;
		  datacollection.info = x.user;
		  console.log("doing");
		  console.log(datacollection.info);
			  
		  }
		 
		 else{
			 x.null2="found";
			 x.null1="";
			 datacollection.info.username="";
			 
		 }
			  
		  });
		  
		  
		  
	  
  }
  
  }
  infodetails.$inject=['datacollection'];
  
  function infodetails(datacollection){
	  
	  console.log("working");
	  
	  var info = this;
	  info.error="";
	  if(datacollection.info.username!=""){
		  info.error="";
		  info.name=datacollection.info.username;
		  info.email=datacollection.info.email;
		  info.phone=datacollection.info.phone;
		  info.category=datacollection.info.category;
		  
		  console.log("working2");
		 
	  }
	  else{
		  
		  
		  info.error="Not yet signedup";
		  console.log("working3");
	  }
	  
	  
	  
  }
  
  
  
  
  
  
})()

