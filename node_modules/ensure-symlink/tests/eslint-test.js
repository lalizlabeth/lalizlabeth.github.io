'use strict';

const lint = require('mocha-eslint');
const path = require('path');

lint([
  path.join(__dirname, '../*.js'),
  path.join(__dirname, '../lib/**/*.js'),
  path.join(__dirname, '**/*-test.js'),
]);
