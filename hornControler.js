

//var args = process.argv[2]

//console.log('Horn on for '+args+'ms');
//LED.writeSync(1);

module.exports.horn = (req, res)=>{
        
        var validate = parseInt(req.params.time1);
        var time;
        
        if (isNaN(validate) === false) {

                time = validate;
               
        }else{  time = 500;  
        }
        validate = undefined;
        delete(validate);
        var Gpio = require('onoff').Gpio;
        var LED = new Gpio(17, 'out');
        
        console.log(time);
        LED.writeSync(0) //Turn on LED
  

   // LED.writeSync(0);
    setTimeout(() => {
            console.log('Done', time);
            LED.writeSync(1); // Turn LED off
            LED.unexport(); // Unexport GPIO to free resources
      }, time);
      res.status(200).json({status: "success", message: "success", time});


}