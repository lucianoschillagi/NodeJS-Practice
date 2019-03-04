// Event
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener 👂
emitter.on('messageLogged', function() {
 console.log('Listener called');
 console.log(1000 * 1000);
});

// Raise an event 🗣
emitter.emit('messageLogged');


