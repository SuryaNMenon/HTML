const EventEmitter = require('events');

// Create a class
class myEmitter extends EventEmitter{}

// Init object
const emitterObj = new myEmitter();

// Event listener
emitterObj.on('event', () => console.log('event fired'));

// Init event
emitterObj.emit('event');