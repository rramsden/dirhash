var assert = require('assert'),
	dirhash = require('..'),
	createHash = require('crypto').createHash;

describe('dirhash', function() {
	var hash, expected;

	beforeEach(function() {
		hash = createHash('md5');
	});

	it('should recursive through directories and compute hash', function() {
		var expected = hash.update("very hash\nwow\n").digest('hex');
		assert.equal(dirhash('./test/fixtures'), expected);
	});

	it('should hash a single file in a directory', function() {
		var expected = hash.update("wow\n").digest('hex');
		assert.equal(dirhash('./test/fixtures/subfolder/much/very'), expected);
	});

	it('should generate a hash with a different hashing algorithm', function() {
		hash = createHash('sha1');
		var expected = hash.update("very hash\nwow\n").digest('hex');
		assert.equal(dirhash('./test/fixtures', 'sha1'), expected);
	});
});

