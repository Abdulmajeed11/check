var RB = {};
RB.sendCode = function(error, result) {
    if (error)
        return console.log({
            CommandType: "AffiliationAlmondResponse",
            Success: false,
            Reason: error
        });
    return console.log({
        CommandType: "AffiliationAlmondResponse",
        Success: true,
        Code: result
    });
};

//RB.sendCode(true,{'abc':'def'})
//RB.sendCode(false,{'abc':'def'})

RB.sendCodeXML = function(err, res) {
    if (err) return console.log('<root><AffiliationAlmondResponse success="false"><Reason>' + err + "</Reason></AffiliationAlmondResponse></root>");
    return console.log('<root><AffiliationAlmondResponse success="true"><Code>' + res + "</Code></AffiliationAlmondResponse></root>");
};

// RB.sendCodeXML(null,'<Hello></Hello>')
// RB.sendCodeXML(true,'<Hello></Hello>')

RB.dynamicAlmondDelete = function(request) {
    var res = {
        AlmondMAC: request.AlmondMAC,
        Payload: {
            CommandType: "DynamicAlmondDelete",
            Success: "true",
            AlmondMAC: request.AlmondMAC
        },
        Command: 1113
    };

    return console.log(res);
};

//RB.dynamicAlmondDelete({AlmondMAC:'2454'})

RB.affiliation = function(out, rows) {
    rows.Payload = JSON.stringify({
        CommandType: "AffiliationUserCompleteResponse",
        Success: "true",
        AlmondMAC: out.AlmondMAC,
        AlmondName: out.AlmondName,
        WifiSSID: out.WifiSSID,
        WifiPassword: out.WifiPassword
    });
    return console.log(rows);
};

//B.affiliation({AlmondMAC:'2345',AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'},1)

RB.checkAllHash=function(er,out){
    //console.log('out',out)
    out.CommandType=out.CommandType+'Response';
    return console.log(out);
}

//RB.checkAllHash(null,{CommandType:'Hash'})

RB.nameChangeXML = function() {
    return console.log('<root><DynamicAlmondNameChangeResponse success="true"></DynamicAlmondNameChangeResponse></root>');
};

//RB.nameChangeXML()

RB.modeChangeXML = function() {
    return '<root><DynamicAlmondModeChangeResponse success="true"><Reason>Almond Mode Added successfully</Reason></DynamicAlmondModeChangeResponse></root>';
};
RB.resetXML = function(err) {
    if (err) return  console.log('<root><CloudResetResponse success="false"><ReasonCode>1</ReasonCode><Reason>' + err + "</Reason></CloudResetResponse></root>");
    return console.log('<root><CloudResetResponse success="true"></CloudResetResponse></root>');
};

//RB.resetXML(true)
//RB.resetXML(false)

RB.validate = function(er) {
    if (er) return console.log('<root><AlmondValidationResponse success="false"><ReasonCode>1</ReasonCode><Reason>' + er + "</Reason></AlmondValidationResponse></root>");
    return console.log('<root><AlmondValidationResponse success="true"><Reason>Almond Verified</Reason></AlmondValidationResponse></root>');
};

//RB.validate(true)
//RB.validate(false)

RB.modeChange = function(request) {
    return  console.log({
        AlmondMAC: request.AlmondMAC,
        Payload:   "<root><AlmondplusMAC>" +request.AlmondMAC + '</AlmondplusMAC><DynamicAlmondMode success="true"><AlmondMode>' + request.Mode + "</AlmondMode><ModeSetBy>" + request.ModeSetBy + "</ModeSetBy></DynamicAlmondMode></root>",
        Command: 89
    })
};

//RB.modeChange({AlmondMAC:'1234'})

RB.nameChange = function(request) {
    return  console.log({
        AlmondMAC: request.AlmondMAC,
        Payload: '<root><DynamicAlmondNameChange><AlmondplusMAC>'+request.AlmondMAC+'</AlmondplusMAC><AlmondplusName>'+request.Name+'</AlmondplusName></DynamicAlmondNameChange></root>',
        Command: 85
    })
};

//RB.nameChange({AlmondMAC:"12345"})

RB.dynamicAlmondAdd = function(request) {
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
    return console.log(res);
};

//RB.dynamicAlmondAdd({AlmondMAC:"2343"})

RB.almondHelloXML = function(error) {
    if (error) return console.log('<root><AlmondHelloResponse success="false"><ReasonCode>2</ReasonCode><Reason>No Affiliation</Reason></AlmondHelloResponse></root>');
    return console.log('<root><AlmondHelloResponse success="true"><Reason>Almondplus Added for connection tracking</Reason></AlmondHelloResponse></root>');
};

// RB.almondHelloXML(true)
// RB.almondHelloXML(false)

RB.almondHelloJSON = function(err) {
    if (err){
        return console.log({
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
     return  console.log(data);
};
};

 //RB.almondHelloJSON(true)
 RB.almondHelloJSON(false)

module.exports = RB;
