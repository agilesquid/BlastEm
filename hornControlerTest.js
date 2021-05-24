
module.exports.horn = (req, res)=>{
    if (req.params.time1 == "favicon.ico"){
            return res.status(400).json({status: "Error", message: "Error"});
    }
        var Gpio = require('onoff').Gpio;
        var LED = new Gpio(4, 'out'); //change to 17
        var validate = parseInt(req.params.time1);
        var time;
                if (isNaN(validate) == false) {
                        time = parseInt(req.params.time1);
                }else if (isNaN(validate) == true){
                        time = 500
                };
            console.log('Horn on for ', time, 'ms');
            LED.writeSync(0); //Turn on LED
                    setTimeout(() => {
                            LED.writeSync(1); // Turn LED off
                            LED.unexport(); // Unexport GPIO to free resources
                        }, time);
                        
                        res.status(200).json({status: "success", message: "Horn on for " + time + "ms"});
}