const initrc = new (require('./index.js')).base();

initrc.startAdd(function(){
    console.log('start');
},1,'test');
initrc.startRun();
initrc.stopAdd(function(){
    console.log('stop');
},1,'test');
initrc.stopRun();





