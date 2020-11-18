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
  
  
  signiingup.$inject=['datacollection'];
  
  function signiingup(datacollection){
	  
	  
	  
	  var x= this;
	  
	  x.user={
	  "username":"",
	  "email":"",
	  "phone":"",
	  "category":""
	  
	  
	  };

	  
	 
	  x.submit = function(){
		  x.category1=x.user.category;
		  datacollection.info = x.user;
		  console.log("doing");
		  console.log(datacollection.info);
	  };
	  
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

