var assert = require('assert');
var RB = require('../appp.js');
 describe('first',function(){
 	 describe('almondHelloJSON',function(){
 	 	it('should return the true json',function(){
 		let temp1 = RB.almondHelloJSON(true)
 		assert.deepEqual(temp1,{CommandType:'AlmondHelloResponse',Success:false,ReasonCode:2,Reason:'No Affiliation'})
 	})
 
  it('should return the false json',function(){
  	let temp2 = RB.almondHelloJSON(false)
  	assert.deepEqual(temp2,{"CommandType":"AlmondHelloResponse","Success":true,"Reason":"Almondplus Added for connection tracking"})
   })	
 	})
    describe('dynamicAlmondAdd',function(){
    	it('should give the right vlaue',function(){
     	let temp3 = RB.dynamicAlmondAdd({AlmondMAC:'2343',AlmondName:'abdul',FirmwareVersion:1,Mode:'add'})
     //	console.log(temp3)
        assert.deepEqual(temp3,{AlmondMAC:'2343',Payload:{ CommandType: 'DynamicAlmondAdd',Success: 'true',AlmondMAC: '2343', AlmondName: 'abdul',FirmwareVersion: 1,Ownership: 'P',Mode: 'add' },Command:1113})
     })

     it('should give error',function(){
     	let temp4 = RB.dynamicAlmondAdd({AlmondMAC:'23',AlmondName:'abdul',FirmwareVersion:1,Mode:'add'})
     //	console.log(temp4)
        assert.deepEqual(temp4,{AlmondMAC:'2323',Payload:{ CommandType: 'DynamicAlmondAdd',Success: 'true',AlmondMAC: '2323', AlmondName: 'abdul',FirmwareVersion: 1,Ownership: 'P',Mode: 'add' },Command:1113})
     })
     })

    describe('Affiliation',function(){
    	it('should give the right value',function(){
    	let temp5 = RB.affiliation({AlmondMAC:2345,AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'},{Payload:{AlmondMAC:'2345',AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'}}) 	
      //  console.log(temp5);
        assert.deepEqual(temp5,{Payload:{CommandType:'AffiliationUserCompleteResponse',Success:'true',AlmondMAC: 2345,AlmondName:'Abdul',WifiSSID:'23', WifiPassword:'NotSecure'}})
    	})
        it('should give an error',function(){
    	let temp6 = RB.affiliation({AlmondMAC:24,AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'},{Payload:{AlmondMAC:'24',AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'}}) 	
      //  console.log(temp6);
        assert.deepEqual(temp6,{Payload:{CommandType:'AffiliationUserCompleteResponse',Success:'true',AlmondMAC: 2345,AlmondName:'Abdul',WifiSSID:'23', WifiPassword:'NotSecure'}})
    	})

    })
    describe('almondHelloXML',function(){
    	it('should not give the error response',function(){
    	let temp7 = RB.almondHelloXML(false);
    //	console.log(temp7);
    	assert.deepEqual(temp7,'<root><AlmondHelloResponse success="true"><Reason>Almondplus Added for connection tracking</Reason></AlmondHelloResponse></root>')
    	})
    
    it('should give the error response',function(){
    	let temp8 = RB.almondHelloXML(true);
    //	console.log(temp8);
    	assert.deepEqual(temp8,'<root><AlmondHelloResponse success="false"><ReasonCode>2</ReasonCode><Reason>No Affiliation</Reason></AlmondHelloResponse></root>')
    })
    })
 })
