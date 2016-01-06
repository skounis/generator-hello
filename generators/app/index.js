var _ = require('lodash');

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('coffee'); // This method adds support for a `--coffee` flag

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    this.appname = _.camelCase(this.appname);
    this.log('Appname set to: ' + this.appname);
    this.log('Options passed (coffee): ', this.options.coffee);
  },
  //
  // our initialization methods (checking current project state, getting configs, etc)
  initializing: {
    method1: function () {
      var s = this.sourceRoot();
      var r = this.destinationRoot();
      this.log('Default paths:')
      this.log(' Source root: ' + s);
      this.log(' Destination root: ' + r);
      this.log('initializing method 1 just ran');
    },
    method2: function () {
      this.log('initializing method 2 just ran');
    }
  },
  //
  // Where you prompt users for options (where you'd call this.prompt())
  prompting: {
    method1: function () {
      this.log('prompting method 1 just ran');
    },
    method2: function () {
      var done = this.async();
      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname, // Default to current folder name
        store: true
      }, function (answers) {
        this.log(answers.name);
        done();
      }.bind(this));
    }
  },
  //
  // Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring:{
    method1: function () {
      this.log('configuring method 1 just ran');
    },
    method2: function () {
      this.log('configuring method 2 just ran');
    }
  },
  //
  // If the method name doesn't match a priority, it will be pushed to this group.
  default: {
    method1: function () {
      this.log('default method 1 just ran');
    },
    method2: function () {
      this.log('default method 2 just ran');
    }
  },
  //
  // Where you write the generator specific files (routes, controllers, etc)
  writing: {
    method1: function () {
      this.log('writing method 1 just ran');
    },
    method2: function () {
      this.log('writing method 2 just ran');
    },
    index: function () {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('dist/index.html'),
        { title: this.appname }
      );
      this.log('index.html file created.')
    },
    gruntfile: function(){
      this.gruntfile.insertConfig("compass", "{ watch: { watch: true } }");
      this.log('Config inserted in gruntfile.')
    }
  },
  //
  // Where conflicts are handled (used internally)
  conflicts: {
    method1: function () {
      this.log('conflicts method 1 just ran');
    },
    method2: function () {
      this.log('conflicts method 2 just ran');
    }
  },
  //
  // Where installation are run (npm, bower)
  install: {
    method1: function () {
      this.log('install method 1 just ran');
      // this.spawnCommand('composer', ['install']);
    },
    method2: function () {
      this.log('install method 2 just ran');
    },
    installingLodash: function() {
      this.log('install lodash dependency');
      this.npmInstall(['lodash'], { 'saveDev': true });
    },
    installingBower: function(){
      this.log('install bower libraries');
      this.bowerInstall();
    }
  },
  //
  // Called last, cleanup, say good bye, etc
  end: {
    method1: function () {
      this.log('end method 1 just ran');
    },
  }

});
