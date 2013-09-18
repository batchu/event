event.factory('eventService',function(){
   var factory = {};
   
var schemaList=[[{"type":"text","name":"Name","placeholder":"John Doe","order":10},{"name":"Name","type":"text","placeholder":"Event Name"},{"order":0,"name":"Packages","type":"select","options":[{"order":0,"name":"Starter","value":"s"},{"order":0,"name":"Intermediate","value":"i"},{"order":0,"name":"Advanced","value":"a"}]},{"order":0,"name":"Are you Single?","type":"radio","options":[{"order":0,"name":"Yes","value":"yes"},{"order":0,"name":"No","value":"no"}]},{"order":0,"type":"phone","name":"Phone Number"},{"order":0,"name":"Email","type":"email"},{"order":0,"type":"text","name":"Special Instructions"}]];

var submissions=[];
 factory.getSchemaList=function(){
     return schemaList;
 };
 factory.setSchemaList=function(_schemaList){
    this.schemaList=_schemaList;
 };
 
  factory.getSubmissions=function(){
     return submissions;
 };
 
 return factory;
});

