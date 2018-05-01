'use strict';

SystemJS.import('modules:app.js').then(function(m){
	var app = new m.App();

	app.loadPlugins();
});