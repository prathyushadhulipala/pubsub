var mqtt = require('mqtt');

/*var orgname = "7n0n2o";
var authkey = "use-token-auth";

// These are device specific values with the same organisation
var authtoken = "apple001";
var deviceTypeId = "iphone1";
var deviceId = "923a3c785b38";
// end - device specific values*/

//var clientId = "d"+ ":" + orgname + ":" + deviceTypeId + ":" + deviceId; 

// event id definition
var event_id = "/node/smarthell/fromNode";

var options = {
	host:"m10.cloudmqtt.com",
  port: 16019,
  username:"nodemcu",
  password:"pass01@23"
};

var client  = mqtt.connect(options);
/*var client = mqtt.connect("mqtts://" + orgname + '.messaging.internetofthings.ibmcloud.com:8883', 
      {
        "clientId" : clientId,
        "keepalive": 30,
        "username" : authkey,
        "password" : authtoken  
      });*/
	
		
		 client.publish(event_id, JSON.stringify("Alert Recieved"), function() {
			 console.log("God you are great");
      });
		//client.publish('messages', 'Current time is: ' + new Date() + " :count is:" + i);
