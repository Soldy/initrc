/*
 *  @Soldy\initrc\2021.02.21\GPL3
 */
'use strict';
const $levelRunner = (require('levelrunnerrc')).base;

/*
 * @prototype
 */
const Init=function(){
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.startAdd = function(fun, level, name){
        _check(fun, level, name);
        const out = _start.add(fun, level, name);
        return out;
    };
    /*
     * @public
     */
    this.startRun = async function(){
        const out = await _start.run();
        return out;
    };
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.stopAdd = function(fun, level, name){
        _check(fun, level, name);
        const out = _stop.add(fun, level, name);
        return out;
    };
    /*
     * @public
     */
    this.stopRun = async function(){
        const out = await _stop.run();
        return out;
    };
    /*
     * @public
     * @return {integer}
     */
    this.status = function(){
        return parseInt(_status);
    };
    /*
     * init status
     * 0 = init
     * 1 = boot
     * 2 = main
     * 3 = shutdown
     *
     * @private
     * @var {integer}
     */
    let _status = 0;
    /*
     * @private
     */
    const _start = new $levelRunner(
        function(){
            _status = 1;
        },
        function(){
            _status = 2;
        },
        10
    );
    /*
     * Last exit step.
     * We close the gracefull shut down with the process.exit.
     * That won't be graceful. But in theory,
     * we already did all the necessary exit steps.
     *
     * @private
     */
    const _stop = new $levelRunner(
        function(){
            _status = 3;
        },
        process.exit,
        10
    );

    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {null}
     */
    const _check = function(fun, level, name){
        if (typeof fun !== 'function')
            throw Error('The first variable is not a function ');
        if (typeof level !== 'number')
            throw Error('Run level is not a number');
        if (!Number.isInteger(level))
            throw Error('Run level is not an integer');
        if (0 > level)
            throw Error('Run level is smaller than 0');
        if (level > 9)
            throw Error('Run level is higher than 9');
        if (typeof name !== 'string')
            throw Error('Task name is not a string');
    };
};


exports.Base = Init;
exports.base = Init; // compatibility
exports.init = Init; // compatibility
exports.Init = Init; // compatibility

