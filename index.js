/*jslint node: true */
"use strict";

var createHash = require('crypto').createHash,
	fs = require('fs');

var calcHash = function(dir, hash) {
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
		var stat = fs.statSync(file);

		if (stat && stat.isDirectory()) {
			calcHash(file, hash);
		} else {
			var str = fs.readFileSync(file);
			hash.update(str);
		}
    });

	return hash;
};

module.exports = function(directory, hashType) {
	var hash = createHash(hashType || 'md5');
	var result = calcHash(directory, hash);

	return result.digest('hex');
};
