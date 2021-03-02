/*
 *  @Soldy\initrc\2021.02.21\GPL3
 */
'use strict';

/*
 * @prototype
 */

const levelRunnerBase = function(before_in, after_in){
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.add = function(fun, level, name){
        return add(fun, level, name);
    }
    /*
     * @public
     */
    this.run = function(){
        return run();
    }
    /*
     * @private
     * @var {boolean}
     */
    let before = ()=>{};
    /*
     * @private
     * @var {boolean}
     */
    let after = ()=>{};
    /*
     * @private
     * @var {array}
     */
    let procedures = [];
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @private
     * @return {boolean}
     */
    const add = function(fun, level, name){
        if(
             ( level > procedures.length-1 ) ||
             ( 0 > level ) ||
             ( typeof fun !== 'function' )
        )
            return false;
        procedures[level].push({
            fun:fun,
            name:name
        });
        return true;
    }
    /*
     * @private
     */
    const run=async function(){
        before();
        for (let p of procedures) 
            for (let i of p) 
                await execute(i);
        after();
    };
    /*
     * @param {object} procedure
     * @private
     */
    const execute = async function(procedure){
        if(procedure.fun.constructor.name === 'AsyncFunction')
            return await procedure.fun();
        return procedure.fun();
    };
    // init
    for(let i =0; 10> i; i++)
        procedures.push([]);
    if(typeof afterIn !== 'undefined')
         after = after_in;
    if(typeof beforeIn !== 'undefined')
         before = before_in;
}

const startLevel = new levelRunnerBase();
const stopLevel = new levelRunnerBase(()=>{},process.exit);

const initBase=function(){
    /*
     * @public
     */
    this.start = startLevel;
    /*
     * @public
     */
    this.stop = stopLevel; 
};


exports.base = initBase;
exports.init = initBase;

