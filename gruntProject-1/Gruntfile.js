'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt)

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files:['jssrc/*.js','less/**/*.less'],
            tasks:['default']
        },
        uglify: {
            build: {
                expand: true,
                cwd: 'jssrc/',
                src: '*.js',
                dest: 'js/',
                ext: '.min.js',
                extDot: 'last'
            }
        },
        less: {
            options: {
                compress:true
            },
            build: {
                expand: true,
                cwd: 'less/',
                src: ['*.less','!global.less','!mixins.less','!variables.less'],
                dest: 'css/',
                ext: '.min.css',
                extDot: 'last'
            }
        }
    });

    // 默认被执行的任务列表。
    grunt.registerTask('default', ['uglify','less']);

};