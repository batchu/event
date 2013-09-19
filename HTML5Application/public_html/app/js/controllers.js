 event.controller('eventCtrl', function($scope,eventService) {
     
     $scope.init = function(){
           $scope.schemaList=eventService.getSchemaList();
   $scope.schemaIndex=eventService.getSchemaIndex();
   $scope.newFieldIndex=eventService.getNewFieldIndex();
     $scope.newSchema={name:null,id:parseInt(Math.floor(Math.random() * 10000 + 1)),schema:[]};
//   console.log(JSON.stringify($scope.schemaList));
//   $scope.newField =  $scope.schemaList[0].schema[0];
   // $scope.schemaListLength = $scope.schemaList.length;
//Check if the top element of the schema array is empty using jQuery
//if(!jQuery.isEmptyObject($scope.schemaList[$scope.schemaIndex].schema[ $scope.schemaList[$scope.schemaIndex].schema.length-1])){
//var isLastEleOfSchemaEmpty = jQuery.isEmptyObject($scope.schemaList[$scope.schemaIndex].schema[ $scope.schemaList[$scope.schemaIndex].schema.length-1]);
//if(!isLastEleOfSchemaEmpty){
//    $scope.schemaList[$scope.schemaIndex].schema.push({});
//}
$scope.newField = { order: 0 };
$scope.newSchemaName;//eventService.getNewSchemaName();
//   $scope.newField =  $scope.schemaList[$scope.schemaIndex].schema[$scope.schemaList[$scope.schemaIndex].schema.length-1];
//   $scope.newField =  $scope.schemaList[$scope.schemaIndex].schema[$scope.newFieldIndex];
//    $scope.fields = $scope.schemaList[$scope.schemaIndex].schema;
    $scope.fields =[]; $scope.schemaList[$scope.schemaIndex].schema;
     };
 $scope.init();
    $scope.editing = false;
    $scope.editingSchema = false;
    $scope.userData=angular.copy($scope.fields);
    $scope.userDataArray=[];
    $scope.tokenize = function(slug1, slug2) {
        var result = slug1;
        result = result.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
        result = result.replace(/-/gi, "_");
        result = result.replace(/\s/gi, "-");
        if (slug2) {
            result += '-' + $scope.token(slug2);
        }
        return result;
    };
//    $scope.addSchemaToSchemaList = function(){
//        $scope.
//        $scope.init();
////        $scope.schemaList.push(angular.copy($scope.fields));
////        $scope.fields=[];
//        
//    };
    $scope.saveField = function() {
        if ($scope.newField.type === 'checkboxes') {
            $scope.newField.value = {};
        }
        if ($scope.editing !== false) {
            $scope.fields[$scope.editing] = $scope.newField;
            $scope.editing = false;
        } else {
            $scope.fields.push($scope.newField);
            $scope.userData.push(angular.copy($scope.newField));
        }
        $scope.newField = { order: 0 };
//        $scope.schemaList[$scope.schemaIndex].schema.push(angular.copy($scope.newField));
//        $scope.newField =  $scope.schemaList[$scope.schemaIndex].schema[$scope.schemaList[$scope.schemaIndex].schema.length-1];
//         $scope.userData=angular.copy($scope.fields);
    };
    $scope.editField = function(field) {
        $scope.editing = $scope.fields.indexOf(field);
        $scope.newField = field;
    };
    $scope.splice = function(field, fields) {
        fields.splice(fields.indexOf(field), 1);
    };
    $scope.addOption = function() {
        if ($scope.newField.options === undefined) {
            $scope.newField.options = [];
        }
        $scope.newField.options.push({ order: 0 });
    };
    $scope.typeSwitch = function(type) {
        var field_ar = ['checkboxes','select','radio'];
        if (field_ar.indexOf(type) === -1)
            return type;
        return 'multiple';
    };
    $scope.addToUserData = function() {
       $scope.userDataArray.push(angular.copy($scope.userData));
       $scope.userData = { order: 0 };
        $scope.userData=angular.copy($scope.fields);
    };

  $scope.saveSchema=function(){
    
//      newSchema.name=$scope.newSchemaName;
      $scope.newSchema.schema=angular.copy($scope.fields);
      $scope.schemaList.push(angular.copy($scope.newSchema));
       $scope.fields = [];//$scope.schemaList[$scope.schemaIndex].schema
      $scope.newSchema={name:null,id:parseInt(Math.floor(Math.random() * 100 + 1)),schema:[]};
//      eventService.setNewSchemaName("");
//      $scope.newSchemaName="";//eventService.getNewSchemaName();
  };
  $scope.setupEditSchema=function(schemaId){
      $scope.editSchemaIndex=null;
      $scope.editingSchema=true;
      for(var i = 0; i <  $scope.schemaList.length; i++)
{
  if( $scope.schemaList[i].id ===schemaId)
  {
//       $scope.newField =  $scope.schemaList[$scope.schemaIndex].schema[$scope.schemaList[$scope.schemaIndex].schema.length-1];
//   $scope.newField =  $scope.schemaList[$scope.schemaIndex].schema[$scope.newFieldIndex];
 $scope.editSchemaIndex=i;
    $scope.fields = $scope.schemaList[i].schema;
    $scope.editSchema=$scope.schemaList[i];
  }
}
  };
  $scope.setupDeleteSchema=function(schemaId){
      
  };
});