module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'mathlion',
    require: ['timelion'],
    init: function (server) {
      server.plugins.timelion.nop = require('./functions/nop');
      server.plugins.timelion.math = require('./functions/math');
    }
  });
};
