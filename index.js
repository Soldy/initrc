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
        return _start.add(fun, level, name);
    };
    /*
     * @public
     */
    this.startRun = async function(){
        return await _start.run();
    };
    /*
     * @param {function} func
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.stopAdd = function(fun, level, name){
        return _stop.add(fun, level, name);
    };
    /*
     * @public
     */
    this.stopRun = async function(){
        return await _stop.run();
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
     * 3 = shotdown 
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
     * @orivate
     */
    const _stop = new $levelRunner(
        function(){
            _status = 3;
        },
        process.exit,
        10
    );
    /*
     * @public
     */
    this.start = _start;
    /*
     * @public
     */
    this.stop = _stop;
};


exports.Base = Init;
exports.base = Init; // compatibility
exports.init = Init; // compatibility
exports.Init = Init; // compatibility

