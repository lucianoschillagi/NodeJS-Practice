// todos los objetos definidos en este archivo (módulo)
// son privados

var url = 'http://mylogger.io/log';

function log(message) {
 // Send an HTTP request
 console.log(message);
}

module.exports.log = log;
 