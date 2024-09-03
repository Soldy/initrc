# initrc

## What is this.

initrc a simple tool which helps to build a software (backend/ frontend) with designed start and graceful shutdown.

## install

```bash
npm i initrc

```

## init 


```javascript

const initrc = new (require('initrc')).Base();

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

## boot 

### frontend


```javascript

window.onload = initrc.start.run;

```

### backend

```javascript

initrc.start.run();

```


# :(

## Personal Note:

There was a similar code in the main part of my software a long time ago (2007). Due to the designed start steps, all my software started quickly, with everything happening at once without chaos or mistakes, unlike the dependency-based design boot. I used a 10-level boot and created the boot sequence manually with no fantasy level names, just numbers 1-10 or 0-9. At that time, I had a debug status report code that worked after every boot function. I used this on web frontends and backends. It might have been an odd idea or just a unique ecosystem that is not good, but it provided an easily debuggable situation when I knew what was happening inside the system. It made my life so much easier and grew close to my heart.


## What do I think about the future?

I'm not sure. I don't use this tool anymore. It's simply not compatible with React and looks ugly with TypeScript. It may go to the archive soon. I have a similar code with ADA, RUST, C++, and Python (no point in doing it in PHP).

