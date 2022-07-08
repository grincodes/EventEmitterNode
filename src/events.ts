import {EventEmitter} from 'events';
import SendData from "./send_data";


const eventEmitter = new EventEmitter();
const sdata = new SendData();

// Define all events

eventEmitter.on('processing_complete',(data:string)=>{
    console.log('processing done i would call send data now');
    
    sdata.send_data(data)
})

eventEmitter.on('data_sent',()=>{
    console.log('Thanks for waiting your file is ready and has been sent');
    
})

export default eventEmitter;