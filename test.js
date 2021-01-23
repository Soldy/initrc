const initrc = new (require('./index.js').init)();

initrc.start.add(function(){
    console.log('start');
},1,'test');
initrc.start.run();
initrc.stop.add(function(){
    console.log('stop');
},1,'test');
initrc.stop.run();





