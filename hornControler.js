var Gpio = require('onoff').Gpio;
var LED = new Gpio(17, 'out');
//var args = process.argv[2]

//console.log('Horn on for '+args+'ms');


module.exports.horn = (req, res)=>{

  let time = req.params.time1

    function fire(){
            setImmediate(() => {
            LED.writeSync(0) //Turn on LED
            });
    }
    
    fire();
    
    setTimeout(() => {
            console.log('Done');
            LED.writeSync(1); // Turn LED off
            LED.unexport(); // Unexport GPIO to free resources
      }, time||500);
      res.status(200).json({status: "success", message: "success", time});
    
}