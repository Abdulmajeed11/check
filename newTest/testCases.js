var assert = require('assert')
var RB = require('./test/responseBuilder.js')

console.log(RB.almondHelloJSON(false))
/*
describe('ffirst', function() {
	it("should give response in return",function(){
    let tp = JSON.stringify(RB.almondHelloJSON(false))
		assert.equal(tp,"{CommandType:'AlmondHelloResponse',Success:false,ReasonCode:2,Reason:'No Affiliation'}")
   //  assert.equal(tp,'{CommandType:\'AlmondHelloResponse\',Success:false,ReasonCode:2,Reason:\'No Affiliation\'}')  
	})
})*/

describe('second', function() {
	it("should give response in return",function(){
    let to = JSON.stringify(RB.almondHelloJSON(true))
		assert.equal(to,"{CommandType:'AlmondHelloResponse',Success:false,ReasonCode:2,Reason:'No Affiliation'}")
   //  assert.equal(tp,'{CommandType:\'AlmondHelloResponse\',Success:false,ReasonCode:2,Reason:\'No Affiliation\'}')  
	})
})