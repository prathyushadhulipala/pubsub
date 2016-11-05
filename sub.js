var mqtt = require('mqtt');

/*var orgname = "7n0n2o";

//client specific values
var authkey = "a-7n0n2o-wq7wuiuhyj";
var authtoken = "?vTf0yQ3cbTW6Jw8(Q";
var appId = "localsub";*/
// end - client specific values

//var clientId = "a"+ ":" + orgname + ":" + appId; 

// device specific values for topic subscription
//var deviceTypeId = "iphone1";
var event_id = "/node/smarthell/fromNode";

var options = {
	host:"m10.cloudmqtt.com",
  port: 16019,
  username:"nodemcu",
  password:"pass01@23"
};

var client  = mqtt.connect(options);
// end




/*var client = mqtt.connect("mqtts://" + orgname + '.messaging.internetofthings.ibmcloud.com:8883', 
      {
        "clientId" : clientId,
        "keepalive": 30,
        "username" : authkey,
        "password" : authtoken  
      });*/

client.subscribe(event_id,0);


client.on('message', function(topic, message){
     console.log('>>>>> inside on message + ' + topic + message);
	 	 
	 var dataObj = JSON.parse(message);
	 console.log(">>>> deviceId from the message is:" + dataObj);
	 
		// use the device id to call twilio service
	 
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

/*

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
*/