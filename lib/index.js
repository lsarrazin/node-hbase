// Generated by CoffeeScript 1.8.0
var hbase;

hbase = module.exports = function(config) {
  return new hbase.Client(config);
};

hbase.Client = require('./client');

hbase.Connection = require('./connection');

hbase.Table = require('./table');

hbase.Row = require('./row');

hbase.Scanner = require('./scanner');

hbase.utils = require('./utils');
