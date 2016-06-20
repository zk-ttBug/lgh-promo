var exec = require('child_process').exec;
exec("scrat release -coumd ./output", function(error, stdout, stderr) {
	exec("node ./output/index.js", function(error, stdout, stderr) {
		
	});
});