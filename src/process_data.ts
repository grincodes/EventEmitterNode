import eventEmitter from "./events";

export default class ProcessData {

    constructor(){

    }

     process_data(data:string){
        console.log(`Processing ... ${data}`); 
         
        // simulating an api call or network requestrrrrrrrrrrrrrrrrr
        setTimeout(()=>{
            // emits after 3 seconds 
            // the data is passed to the events
            eventEmitter.emit('processing_complete',data);
         },3000)
           
    }
}