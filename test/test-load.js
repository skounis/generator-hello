/*global describe, it, beforeEach */
'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('Hello sample test', function () {
  before(function (done) {
    // Mock the options, set up an output folder and run the generator
    helpers.run(path.join( __dirname, '../generators/app'))
    .withOptions({ coffee: 'cappuccino' })    // Mock options passed in
    .withArguments(['coffee-machine'])      // Mock the arguments
    .withPrompts({ name: "The project" }) // Mock the prompt answers
    .on('ready', function (generator) {
      // This is called right before `generator.run()` is called
    })
    .on('end', done);
  });

  it('should create dist/index.html', function () {
    assert.file(['dist/index.html']);
  });
});
