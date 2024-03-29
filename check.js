var MS = require("./almondStore.js"); 
var RP = require("./middleware/redis.js");
var sqlConnection =  require("./middleware/sql.js")
var ZEN = require("./middleware/model/zenLog.js")
var RM = require("./middleware/redisManager.js")
var RB = require("./controller/responseBuilder.js")

 =======AlmondStore.js===========

 ------MS.add------

var socket = {'abd':"ul"}
socket.destroy = function(){
    console.log("delete socket")
    delete socket;
}

MS.add(25,socket,false)
MS.add(25,socket,true)


 -------hset,hget,remove and check-------

var socket = {'abd':"ul"}
var socket2 = {'maj':'eed'}
socket.destroy = function(){
    console.log("delete socket")
    delete socket;
}
 
    MS.hset(25,socket)
   setTimeout(function(){
    MS.hset(25,socket)
    console.log(MS.hget(25),'---------www----------')},3000)         //working
 // MS.hset(10,socket2)
console.log(MS.remove(socket,false),"this is to show that ms.remove got called");
 setTimeout(function(){
MS.hset(10,socket2)

 console.log (MS.hget(10),'-------yyy--------')},5000)

setTimeout(function(){console.log(MS.check(25),"----------zzzz-------")},7000)


------addAff,getAff,removeAff---------

var socket = {'abc':'def'};
var socket2 = {'maj':'eed'}
socket.destroy = function(){
    console.log("delete socket")
    delete socket;
}

MS.addAff(10,socket)
 setTimeout(function(){
MS.addAff(10,socket)
 console.log (MS.getAff(10),'-----2----------')},3000)
setTimeout(function(){console.log(MS.removeAff(10),"This is the MS.removeAff"),5000})
setTimeout(function(){
	MS.addAff(20,socket2)
 console.log (MS.getAff(10),'-------yyy--------')},5000)


-----MS.setUsers------

 var payload = {"UserID":"12","Action":"add"};
 JSON.stringify(payload)
 console.log(payload.UserID)                              //working
 var sock = {users : []}

MS.setUsers(sock,payload)


 var payload = {"UserID":"12","Action":"remove"};
 JSON.stringify(payload)
 console.log(payload.UserID)                              //working
 var sock = {users : []}

MS.setUsers(sock,payload)


----MS.increment----

MS.increment(true)
MS.increment(false)

-------MS.writeToAlmond-----------

var callback = function(error){
	return
}
var socket = {'abc':'def'};
 var res = "<root><KeepAlive>KEEP_ALIVE</KeepAlive></root>";
     MS.writeToAlmond(null,{id: 104,res: res,len: 16},socket,false,callback);


 ==========Sql.js ============

function callback(err,output){
console.log(output,"---------")
    return 
}
 sqlConnection.query("select * from AlmondUsers limit 1", [], callback)
sqlConnection.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", [], callback)
sqlConnection.query("INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')", [], callback)
 sqlConnection.query("SELECT * FROM customers", [], callback)



 ===========Redis.js==============

function callback(e,output){
    console.log(e,output,"---1--")
    return
}

 connectToClient("master", "hmset", ["test", 1], callback)
 connectToClient("replica", "hgetall", null, callback);

 RP.initMaster(callback)
 connectToClient("master", "hmset", ["test", 1], callback);

RP.initReplica(callback)
connectToClient("replica", "hgetall", null, callback)

setTimeout(function(){RP.query('hmset','AL_AlmondMAC',"{'type':'testData'}",callback,Date.now())},5000)

setTimeout(function(){RP.query('hgetall','AL_AlmondMAC',null,callback)},5000)

connectToClient("master", "hmset", ["test", 1], callback)
setTimeout(function(){RP.multi()},3000)



 ===========ZenLog.js============

//changed values (Query, Execute )
    var query ="CREATE TABLE IF NOT EXISTS dummy (A Number, B Number, C Number)";
    var query = "INSERT INTO dummy(A, B, C) VALUES ('1','2',3)";
    var query = "SELECT * FROM dummy";


 loggerPointM.execute(query,[[value],mac], { prepare:true },function(error,result){}

var callback = function(error,result){
    return
}


ZEN.insertPing(1234,1,callback)


 ===========RedisManager.js==================  (Didnt complete it yet)

function callback(e,output){
    console.log(e,output,"---1--")
    return
 }
RP.initMaster(callback) 
connectToClient("master", "hmset", ["test", 1], callback)
//setTimeout(function(){RM.addPrimaryAlmond(21,2555,{'abd':"ul"})},5000)
setTimeout(function(){RP.multi()},7000)



 ==============ResponseBuilder.js===============

RB.sendCode(true,{'abc':'def'})
RB.sendCode(false,{'abc':'def'})

RB.sendCodeXML(null,'<Hello></Hello>')
RB.sendCodeXML(true,'<Hello></Hello>')

RB.dynamicAlmondDelete({AlmondMAC:'2454'})

RB.checkAllHash(null,{CommandType:'Hash'})

RB.resetXML(true)
RB.resetXML(false)

RB.validate(true)
RB.validate(false)

RB.modeChange({AlmondMAC:'1234'})

RB.nameChange({AlmondMAC:"12345"})

RB.dynamicAlmondAdd({AlmondMAC:"2343"})

RB.almondHelloXML(true)
RB.almondHelloXML(false)

RB.almondHelloJSON(true)
RB.almondHelloJSON(false)
