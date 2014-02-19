dirhash
=======

Hashes the content of a specified directory given a hashing algorithm.

Install
-------

	npm install dirhash --save
	
Example
-------

	var dirhash = require('dirhash');
	
	dirhash('./some/directory'); // defaults md5
	dirhash('./some/directory', 'sha1'); // see nodejs crypto module for supported types