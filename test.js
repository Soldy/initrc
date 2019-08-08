const init = new (require('./index.js').init)();

init.start.add(function(){
    console.log('start')
},1,"test")
init.start.run();
init.stop.add(function(){
    console.log('stop')
},1,"test")
init.stop.run();





