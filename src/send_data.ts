import eventEmitter from "./events";

export default class SendData {

    constructor(){

    }

     send_data(data:string){
        console.log(`sending ... ${data}`); 
         
        // simulating an api call or network requestrrrrrrrrrrrrrrrrr
        setTimeout(()=>{
            eventEmitter.emit('data_sent');
         },3000)
           
    }
}