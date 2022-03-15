const EventEmitter = require('events');
const uuid = require('uuid');

class logger extends EventEmitter{
    log(msg){
        // Call event
        this.emit('message', {id:uuid.v4(), msg});
    }
}

module.exports = logger;

// Stuff

const logger = new Log();

logger.on('message', data => console.log("Called Listener:", data));

logger.log('Hello World');