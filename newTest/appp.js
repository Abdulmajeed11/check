// var RB = require("./test/reponseBuilder.js")
module.exports = {
	almondHelloJSON : function(err) {
    if (err){
        return {
            CommandType: "AlmondHelloResponse",
            Success: false,
            ReasonCode: 2,
            Reason: "No Affiliation"
        };
    }
    else{
   var data = {
        CommandType: "AlmondHelloResponse",
        Success: true,
        Reason: "Almondplus Added for connection tracking"
    
    };

//  return console.log(JSON.stringify(data));
     return  data;
}
},
    dynamicAlmondAdd : function(request) {
    var res = {
        AlmondMAC: request.AlmondMAC,
        Payload: {
            CommandType: "DynamicAlmondAdd",
            Success: "true",
            AlmondMAC: request.AlmondMAC,
            AlmondName: request.AlmondName,
            FirmwareVersion: request.FirmwareVersion,
            Ownership: "P",
            Mode: request.Mode
        },
        Command: 1113
    };
    return res;
},

  
    affiliation : function(out, rows) {
    rows.Payload = {
        CommandType: "AffiliationUserCompleteResponse",
        Success: "true",
        AlmondMAC: out.AlmondMAC,
        AlmondName: out.AlmondName,
        WifiSSID: out.WifiSSID,
        WifiPassword: out.WifiPassword
    };
    return rows;
},
  almondHelloXML : function(error) {
    if (error) return '<root><AlmondHelloResponse success="false"><ReasonCode>2</ReasonCode><Reason>No Affiliation</Reason></AlmondHelloResponse></root>';
    return '<root><AlmondHelloResponse success="true"><Reason>Almondplus Added for connection tracking</Reason></AlmondHelloResponse></root>';
}
}
