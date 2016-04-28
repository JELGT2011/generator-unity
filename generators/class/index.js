'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'classname',
        message: 'Class Name (it will automatically inherit from ' + this.config.get('baseclassname') + ')'
      },
      {
        type: 'input',
        name: 'namespace',
        message: 'Namespace (it will automatically be put in namespace' + this.config.get('projectname') + ')'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('class.cs'),
      this.destinationPath('class.cs'),
      _.merge(this.props, this.config.getAll())
    );
  }

});
