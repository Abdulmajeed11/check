var assert = require('assert');
var MS = require('../../almondStore.js');
 describe('AlmondStore',function(){
 	 describe('MS.increment - CASE 1',function(){
 	 	it('1)should be equal to zero',function(){
 		let temp1 = MS.increment(true)
 		assert.deepEqual(temp1,0)                  // passes
 	})
 	 	it('2)should be equal to one',function(){
 		let temp1 = MS.increment(true)
 		assert.deepEqual(temp1,1)                 //passes
 	})
 	 it('3)should be equal to zero',function(){
 		let temp1 = MS.increment(false) 
 		assert.deepEqual(temp1,0)                //passes
 	})
 	})

  describe('CASE 2',function(){
  	 	it('1)should be equal to zero',function(){
 		let temp1 = MS.increment(false)
 		assert.deepEqual(temp1,0)                 
 	})
 	 	it('2)should be equal to zero',function(){
 		let temp1 = MS.increment(true)
 		assert.deepEqual(temp1,0)               
 	})
 	 it('3)should be equal to one',function(){
 		let temp1 = MS.increment(true)
 		assert.deepEqual(temp1,1)               
 	})
 	 it('4)should be equal to one',function(){
 	 	let temp1 = MS.increment(false)
 	 	assert.deepEqual(temp1,1)
 	 })s
 	 it('5)should be equal to two',function(){
 	 	let temp1 = MS.increment(true)
 	 	assert.deepEqual(temp1,2)
    })
 	})
 	})