
// we are defining a varialbe resourceApp that will allow us t use angular in the app.
var resourceApp = angular.module('resource-app', ['ngResource', 'mm.foundation']).config(
	['$httpProvider', function($httpProvider) {
	var authToken = angular.element("meta[name=\"csrf-token\"]").attr("content");
	var defaults = $httpProvider.defaults.headers;
		defaults.common["X-CSRF-TOKEN"] = authToken;
		defaults.patch = defaults.patch || {};
		defaults.patch['Content-Type'] = 'application/json';
		defaults.common['Accept'] = 'application/json';
}]);

// resourceApp.filter("byCategory", function(){
//	return function()
// });

resourceApp.factory('User', ['$resource', function($resource) {
	return $resource('/users/:id',
		{id: '@id'},
		{update: { method: 'PATCH'}});
}]);

resourceApp.factory('Resource', ['$resource', function($resource) {
	return $resource('/resources/:id',
		{id: '@id'},
		{update: { method: 'PATCH'}});
}]);

resourceApp.factory('Resource', ['$resource', function($resource) {
	return $resource('/resources/:id',
		{id: '@id'},
		{update: { method: 'PATCH'}});
}]);

// the controller determines what functions to permit and defines its variables.
resourceApp.controller('ResourceCtrl', ['$scope', 'Resource', 
	function($scope, Resource) {
	// Every possible category
	$scope.categories = ["Funding/In Kind","Networking and Community","Mentorships and Fellowships","Research/Archives","Education: Worskshops / Speakers / Training / Labs / Master Classes","Shadowing","Project Markets and Pitching Forums","Screenings and Festivals","Committees and Advocacy","Artist/Resource Lists","Fiscal Sponsorship","Publications, Blogs, Newsletters","Distribution","Production Company"];

	// test
	$scope.tests =
[
    {
        "ID": 1,
        "Organization": "Alliance of Women Directors",
        "Category": ["Networking and Community", "Screenings and Festivals"],
        "Gender": "Women",
        "URL": "http://www.allianceofwomendirectors.org/"
    }
]
	// the app begins with an empty array
	$scope.resources= [];
	//the app creates a new resource within the array.
	$scope.newResource = new Resource();

	Resource.query(function(resources) {
		$scope.resources = resources;
	});

	$scope.saveResource = function () {
		$scope.newResource.$save(function(resource) {
			$scope.resources.unshift(resource)
			$scope.newResource = new Resource();
		});
	}

	$scope.deleteResource = function(resource) {
		resource.$delete(function() {
			position = $scope.resources.indexOf(resource);
			$scope.resources.splice(position, 1);
		});
	}

	$scope.showResource = function(resource) {
		resource.details = true;
	}

	$scope.hideResource = function(resource) {
		resource.details = false;
	}

	$scope.editResource = function(resource) {
		resource.editing = true;
		resource.details = false;
	}
	$scope.backResource = function(resource) {
		resource.editing = false;
		// resource.details = false;
	}

	$scope.updateResource = function(resource) {
		resource.$update(function(){
			resource.editing = false;
		});
	};
}]);