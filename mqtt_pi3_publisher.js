var mqtt = require('mqtt');

var orgname = "7n0n2o";
var authtoken = "apple007";
var deviceTypeId = "iphone";
var deviceId = "3440cc154dda";
var clientId = "d"+ ":" + orgname + ":" + deviceTypeId + ":" + deviceId; 



var client = mqtt.connect("mqtts://" + orgname + '.messaging.internetofthings.ibmcloud.com:8883', 
      {
        "clientId" : clientId,
        "keepalive": 30,
        "username" : "use-token-auth",
        "password" : authtoken  
      });

//client.subscribe('iot-2/cmd/passion/fmt/format_string');
for(var i = 0; i < 30 ; i++ )
{
		console.log("inside for loop" + i);
		
		 var data = {
                   "d": {
                     "name":"nagesh",
					 "count":i
                    }
                  };	
		
		 client.publish('iot-2/evt/passion/fmt/json', JSON.stringify(data), function() {
			 console.log("God you are great");
      });
		//client.publish('messages', 'Current time is: ' + new Date() + " :count is:" + i);
}

client.on('message', function(topic, message){
     console.log('>>>>> inside on message + ' + topic + message);
});
 
client.on('connect', function(){
    console.log('>>>>>>> inside on connect. Connected to MQTT IBM IoT Cloud.');
});

client.on('close', function() {
    console.log('>>>>>>> inside on close.');
    process.exit(1);
});

client.on('error', function(err) {
     console.log('>>>>> inside on error' + err);
     process.exit(1);
});