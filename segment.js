<script>
var app = angular.module('', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.Signout=function()
	{
		  $http.get("localhost:3000/api/segments")
         .success(function(response) {
          $scope.seg=response.data;
         })
         .error(function(error){

         });
	}
   
});
</script>