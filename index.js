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
    let _before = ()=>{};
    /*
     * @private
     * @var {boolean}
     */
    let _after = ()=>{};
    /*
     * @private
     * @var {array}
     */
    let _procedures = [];
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @private
     * @return {boolean}
     */
    const add = function(fun, level, name){
        if(
             ( level > _procedures.length-1 ) ||
             ( 0 > level ) ||
             ( typeof fun !== 'function' )
        )
            return false;
        _procedures[level].push({
            fun:fun,
            name:name
        });
        return true;
    }
    /*
     * @private
     */
    const run=async function(){
        _before();
        for (let p of _procedures) 
            for (let i of p) 
                await execute(i);
        _after();
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
        _procedures.push([]);
    if(typeof afterIn !== 'undefined')
         _after = after_in;
    if(typeof beforeIn !== 'undefined')
         _before = before_in;
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

