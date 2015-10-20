var path = require('path');

var taskConfig = {

  component: {
    name: 'react-jstree',
    scripts: {
      entry: './src/index.js',
      output: {
        library: 'ReactJstree'
      },
      externals: {
        react: {
          root: 'React',
          commonjs2: 'react',
          commonjs: 'react',
          amd: 'react'
        }
      }
    },
    less: {
      entry: ''
    }
  },

  example: {
    src: './examples/src',
    dist: './examples/dist',
    index: 'index.html',
    script: 'index.js',
    alias: {
      'react-jstree': path.resolve(__dirname, './src')
    },
    files: []
  }

};

module.exports = taskConfig;