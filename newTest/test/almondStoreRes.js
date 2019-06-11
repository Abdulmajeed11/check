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
 	 })
 	 it('5)should be equal to two',function(){
 	 	let temp1 = MS.increment(true)
 	 	assert.deepEqual(temp1,2)
    })
 	})

    describe('MS.hset',function(){
     it('should give the value',function(){
     	var socket = {'abd':"ul"}

       socket.destroy = function(){
        console.log("delete socket")
         delete socket;
         }
       let temp2 = MS.hset(25,socket)
      console.log(temp2)
       assert.deepEqual(temp2,undefined)
      })
     it('should give the value now',function(){
        let socket = {'abd':"ul"}   
                 socket.destroy = function(){
        console.log("delete socket")
         delete socket;  
     }
     	let temp2 =  MS.hset(25,socket)
     //	let temp3 = MS.hset(25,socket)
     	let temp4 = MS.hget(25,socket)
        // let temp2 = MS.hset(25,socket)
        // console.log(temp2);
        assert.deepEqual(temp4,{ abd: 'ul', destroy: [Function], almondMAC: 25, markClose: true } )
       /*      AssertionError [ERR_ASSERTION]: { abd: 'ul', almondMAC: 25, destroy: [Function] }
              deepEqual { abd: 'ul', almondMAC: 25, destroy: [ [Function: Function] ] } */
     })
     })
     
     describe('MS.hget',function(){
     	it('should give the value',function(){
        let socket = {'maj':"eed"}   
        socket.destroy = function(){
        console.log("delete socket")
         delete socket;  
     }
     	let temp2 =  MS.hset(27,socket)
     	let temp4 = MS.hget(27,socket)
        assert.deepEqual(temp4,{ maj:'eed',destroy:[Function],almondMAC:27})
  /*AssertionError [ERR_ASSERTION]: { maj: 'eed', destroy: [Function], almondMAC: 27 }
   deepEqual { maj: 'eed', destroy: [ [Function: Function] ], almondMAC: 27 }  */


     	})
     })
 
        describe('MS.Remove',function(){
     	it('should give the value',function(){
         let socket = {'abd':"ul"} 
        socket.destroy = function(){
        console.log("delete socket")
         delete socket;  
     }
     	let temp2 =  MS.hset(27,socket)
       assert.deepEqual(temp2,undefined)

     	let temp3 = MS.hget(27,socket)
     	assert.deepEqual(temp3,{ abd: 'ul', destroy: [Function], almondMAC: 27 })
     	
     	let temp4 = MS.remove(socket,false)
        assert.deepEqual(temp4,undefined)

 	})
     })
    })
