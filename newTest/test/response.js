var assert = require('assert');
var RB = require('../appp.js');
 describe('first',function(){
 	describe('almondHelloJSON',function(){
 	 	it('should return the true json',function(){
 		let temp1 = RB.almondHelloJSON(true)
 		assert.equal(temp1,'{"CommandType":"AlmondHelloResponse","Success":false,"ReasonCode":2,"Reason":"No Affiliation"}')
 	})
 
  it('should return the false json',function(){
  	let temp2 = RB.almondHelloJSON(false)
  	assert.equal(temp2,'{"CommandType":"AlmondHelloResponse","Success":true,"Reason":"Almondplus Added for connection tracking"}')
   })	
 	})
    describe('dynamicAlmondAdd',function(){
    	it('should give the right vlaue',function(){
     	let temp3 = RB.dynamicAlmondAdd({AlmondMAC:"2343"})
        assert.equal(temp3,'{"AlmondMAC":"2343","Payload":{"CommandType":"DynamicAlmondAdd","Success":"true","AlmondMAC":"2343","Ownership":"P"},"Command":1113}')
     })

     it('should give error',function(){
     	let temp4 = RB.dynamicAlmondAdd({AlmondMAC:"23"})
        assert.equal(temp4,'{"AlmondMAC":"2343","Payload":{"CommandType":"DynamicAlmondAdd","Success":"true","AlmondMAC":"2343","Ownership":"P"},"Command":1113}')
     })
    })

    describe('Affiliation',function(){
    	it('should give the right value',function(){
    	//  var payload = JSON.stringify(Paylaod)
    	let temp5 = RB.affiliation(1,{AlmondMAC:'2345',AlmondName:'Abdul',WifiSSID:'23',WifiPassword:'NotSecure'}) 	
        assert.equal(temp5,'{"CommandType":"AffiliationUserCompleteResponse","Success":"true"}' )
    	})
    })

 })