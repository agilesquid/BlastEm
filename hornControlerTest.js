
module.exports.horn = (req, res)=>{
    console.log('this is a test');
        if (req.params.time1 == "favicon.ico"){
                res.status(400).json({status: "", message: ""});
        }
                var validate = parseInt(req.params.time1);
                var Gpio = require('onoff').Gpio;
                var LED = new Gpio(17, 'out');
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