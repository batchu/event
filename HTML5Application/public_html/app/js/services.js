event.factory('eventService',function(){
   var factory = {};
var schemaList=[];

 factory.getSchemaList=function(){
     return schemaList;
 };
 factory.setSchemaList=function(_schemaList){
    this.schemaList=_schemaList;
 };
 
 return factory;
});

