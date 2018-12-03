var mod = require('./index');

var fs = require('fs');

var data = fs.readFileSync('products.csv');

data = JSON.stringify(data);

var done = mod(data);

for(let i = 0; i < done.length; i++){
	var value = JSON.parse(done[i]);
	console.log(value);
	console.log('Type of the variable is ',typeof value);
}