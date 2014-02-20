dirhash
=======

Hashes the content of a specified directory given a hashing algorithm.

Install
-------

	npm install dirhash --save
	
Example
-------

    var dirhash = require('dirhash');
	
    dirhash('./some/directory'); // md5 string #=> "9cdfb439c7876e703e307864c9167a15"
    dirhash('./some/directory', 'sha1'); // see nodejs crypto module for supported types
