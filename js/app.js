/*global angular */
/*jshint unused:false */
'use strict';

/**
<<<<<<< HEAD
* The main TodoMVC app module
*
* @type {angular.Module}
*/
var todomvc = angular.module('todomvc', ['firebase', 'ngStorage']);
=======
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
var todomvc = angular.module('todomvc', ['firebase']);

todomvc.filter('todoFilter', function ($location) {
	return function (input) {
		var filtered = {};
		angular.forEach(input, function (todo, id) {
			var path = $location.path();
			if (path === '/active') {
				if (!todo.completed) {
					filtered[id] = todo;
				}
			} else if (path === '/completed') {
				if (todo.completed) {
					filtered[id] = todo;
				}
			} else {
				filtered[id] = todo;
			}
		});
		return filtered;
	};
});
>>>>>>> 0ff53ee00163ddef1c048dcc029b9de79bf842bc
