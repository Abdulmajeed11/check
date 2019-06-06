// var RB = require("./test/reponseBuilder.js")
module.exports = {
	almondHelloJSON : function(err) {
    if (err){
        return JSON.stringify({
            CommandType: "AlmondHelloResponse",
            Success: false,
            ReasonCode: 2,
            Reason: "No Affiliation"
        });
    }
    else{
   var data = {
        CommandType: "AlmondHelloResponse",
        Success: true,
        Reason: "Almondplus Added for connection tracking"
    
    };

//  return console.log(JSON.stringify(data));
     return  JSON.stringify(data);
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
    return JSON.stringify(res);
},

  
    affiliation : function(out, rows) {
    rows.Payload = JSON.stringify({
        CommandType: "AffiliationUserCompleteResponse",
        Success: "true",
        AlmondMAC: out.AlmondMAC,
        AlmondName: out.AlmondName,
        WifiSSID: out.WifiSSID,
        WifiPassword: out.WifiPassword
    });
    return rows.Payload;
}
}