#!/usr/bin/env node

const { args, options } = require('./arguments');
const { get_all, get_summary } = require('./get');

if (options) {
  // If the user used an option, execute the request with the option's arguments
  get_summary(options[0], options[1]);
} else {
  get_all(args[0], args[1]);
}
