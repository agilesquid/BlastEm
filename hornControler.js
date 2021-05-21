

//var args = process.argv[2]

//console.log('Horn on for '+args+'ms');
//LED.writeSync(1);

module.exports.horn = (req, res)=>{
        
        var validate = parseInt(req.params.time1);
        
        if (isNaN(validate) === false) {

                var validTime = req.params.time1
            
  
                }else{  var validTime = 500; 
             
                  
          }
        
        
        let time = validTime;
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