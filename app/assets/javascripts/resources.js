
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

resourceApp.filter('myOrgs', function(){ return function(orgs, cats){
		var isAtLeastOneSelected = false;
		for(var k in cats){
			if(cats[k].selected)
				isAtLeastOneSelected = true;
		}
		if(!isAtLeastOneSelected)
			return orgs;

		var filtered = [];
		for(var i in orgs){
			var org = orgs[i];
			var isFound = false;
			for(var j in org.categories){
				for(var k in cats){
					if(org.categories[j] == cats[k].name && cats[k].selected)
					{
						filtered.push(org);
						isFound = true;
						break;
					}
				}
				if(isFound)
					break;
			}
		}
		return filtered;
	};
});
// the controller determines what functions to permit and defines its variables.
resourceApp.controller('ResourceCtrl', ['$scope', 'Resource', 
	function($scope, Resource) {
	// Every possible category
	$scope.categories = [{name:"Funding/In Kind", selected:false},{name:"Networking and Community", selected:false},{name:"Mentorships and Fellowships", selected:false},{name:"Research/Archives", selected:false},{name:"Education: Worskshops / Speakers / Training / Labs / Master Classes", selected:false},{name:"Shadowing", selected:false},{name:"Project Markets and Pitching Forums", selected:false},{name:"Screenings and Festivals", selected:false},{name:"Committees and Advocacy", selected:false},{name:"Artist/Resource Lists", selected:false},{name:"Fiscal Sponsorship", selected:false},{name:"Publications, Blogs, Newsletters", selected:false},{name:"Distribution", selected:false},{name:"Production Company",selected:false}];

	$scope.organizations = [{
        "id": 1,
        "organization": "American Film Institute",
        "categories": ["Mentors and Fellowships", "Education: Workshops/Speakers/Training"],
        "program": "AFI Directing Workshop",
        "gender": "Women",
        "url": "http://afi.com/dww"
    },
    {
        "id": 2,
        "organization": "Alliance of Women Directors",
        "categories": ["Shadowing", "Screenings and Festivals"],
        "program": "AWD Seminars",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 3,
        "organization": "Athena Film Festival",
        "categories": ["Publications, Blogs, Newsletters", "Screenings and Festivals"],
        "program": "Athena List",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 4,
        "organization": "CBS",
        "categories": ["Project Markets and Pitching Forums", "Screenings and Festivals"],
        "program": "CBS Directing Initiative",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 5,
        "organization": "Chicken & Egg Pictures",
        "categories": ["Publications, Blogs, Newsletters", "Screenings and Festivals"],
        "program": "Grantee-Only Mentorship",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 6,
        "organization": "HBOAccess",
        "categories": ["Committees and Advocacy"],
        "program": "Storyteller Program",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 7,
        "organization": "Creative Capital",
        "categories": ["Publications, Blogs, Newsletters", "Screenings and Festivals"],
        "program": "Award Program",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 8,
        "organization": "Film Independent",
        "categories": ["Networking and Community", "Screenings and Festivals"],
        "program": "Project Involve",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    },
    {
        "id": 9,
        "organization": "IFP",
        "categories": ["Education: Worskshops / Speakers / Training / Labs / Master Classes"],
        "program": "Fiscal Sponsorship",
        "gender": "Women",
        "url": "http://www.allianceofwomendirectors.org/"
    }

    ];
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