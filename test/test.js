/* eslint-disable */
'use strict';
/* eslint-enable */


// teste para saber se está no browser
if (typeof module === 'object' && module.nodeName !== 'string') {
  /* eslint global-require: off */
  const chai = require('chai');
  const math = require('mathjs');
  const calculadora = require('../src/calculadora.js')(math);
  require('./browser-test.js')(calculadora, chai);
}

