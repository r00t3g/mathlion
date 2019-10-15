module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'mathlion',
    require: ['timelion'],
    init: function (server) {
      server.plugins.timelion.functions.nop = require('./functions/nop');
      server.plugins.timelion.functions.math = require('./functions/math');
    }
  });
};
