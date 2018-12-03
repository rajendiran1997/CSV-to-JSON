var fun = function(file) {

	var data = Buffer.from(JSON.parse(file).data);

	var data2 = data.toString('utf-8');

	var array_of_data = data2.split('\r\n');

	if(array_of_data.length == 1) array_of_data = data2.split('\n');

	var fields = array_of_data[0].split(',');

	var arr = [];

	for (var i = 1; i < array_of_data.length; i++) {
		var done = array_of_data[i].split(',');

		var obj = '{\"';

		for (var j = 0; j < fields.length; j++) {
			var word = ''+done[j];

			var num = word.length-1;

			if(j == fields.length-1){
					if(word[num] == '\"')
						obj += fields[j] + '\": ' + done[j];
					else
						obj += fields[j] + '\": \"' + done[j] + '\"';
			}
			else {
					if(word[num] == '\"')
						obj += fields[j] + '\": ' + done[j] + ',\"';
					else
						obj += fields[j] + '\": \"' + done[j] + '\",\"';

			}

		}
		obj += '}';

		arr.push(obj);
		obj = '';
	}
	return arr;
}

module.exports = fun;