// Event
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listener 👂
emitter.on('messageLogged', (arg) => { // e, eventArg
 console.log('Listener called', arg);
 console.log(1000 * 1000);
});

// Raise an event 🗣
emitter.emit('messageLogged', { id: 1, url:'https://'}); 




