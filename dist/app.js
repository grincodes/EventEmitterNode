"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const eventEmitter = new events_1.EventEmitter();
// listen to event
eventEmitter.on('myEvent', () => {
    console.log('Data Recived');
});
// publish event
eventEmitter.emit('myEvent');
//# sourceMappingURL=app.js.map