'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the polished ' + chalk.red('generator-unity') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project? (e.g. MyProject)'
      },
      {
        type: 'input',
        name: 'baseclassname',
        message: 'Base class name? (e.g. MyProjectBehavior)'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  config: function () {
    this.config.set('projectname', this.props.projectname);
    this.config.set('baseclassname', this.props.baseclassname);
  },

  writing: function () {
    // this.fs.copy(
    //   this.templatePath('dummyfile.txt'),
    //   this.destinationPath('dummyfile.txt')
    // );
  }

});
