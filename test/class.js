'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-unity:class', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/class'))
      .withPrompts({someAnswer: true})
      .on('end', done);
  });

  it('creates a class file', function () {
    assert.file([
      'class.cs'
    ]);
  });
});
