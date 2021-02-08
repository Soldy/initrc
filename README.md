
# initrc

## What is this.

initrc a simple tool which helps to build a software (backend/ frontend) with designed start and graceful shutdown.

## install

```bash
npm i initrc

```

## init 


```javascript

const initrc = new (require('initrc')).init();

```

frontend


```javascript

window.onload = initrc.start.run;

```

backend

```javascript

initrc.start.run();

```



## add process

```javascript

initrc.start.add(
    function(){
        something
    },
    runlevel,
    name
);


```


