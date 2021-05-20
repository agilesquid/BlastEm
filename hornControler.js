

//var args = process.argv[2]

//console.log('Horn on for '+args+'ms');
//LED.writeSync(1);

module.exports.horn = (req, res)=>{
        
        var validate = parseInt(req.params.time1);
        console.log(isNaN(validate), validate);
        function timeValidation(){
        if (isNaN(validate) === false) {

               time = req.params.time1
              return time;

              }else{  time = 500; 
                return time;
        }
        }
         time = timeValidation();
          var Gpio = require('onoff').Gpio;
          var LED = new Gpio(17, 'out');
    function fire(){
            setImmediate(() => {
            LED.writeSync(0) //Turn on LED
            });
    
        }
    fire();
   // LED.writeSync(0);
    setTimeout(() => {
            console.log('Done', time);
            LED.writeSync(1); // Turn LED off
            LED.unexport(); // Unexport GPIO to free resources
      }, time);
      res.status(200).json({status: "success", message: "success", time});

}

