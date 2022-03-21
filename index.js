/*
 *  @Soldy\initrc\2021.02.21\GPL3
 */
'use strict';
const $levelRunner = (require('levelrunnerrc')).base;

/*
 * @prototype
 */
const initBase=function(){
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
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.startdel = function(level, name){
        return _start.del(level, name); 
    }
    /*
     * @public
     */
    this.startRun = function(){
        return _start.run();
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
     * @param {integer} level
     * @param {string} name
     * @public
     * @return {boolean}
     */
    this.stopdel = function(level, name){
        return _stop.del(level, name); 
    }
    /*
     * @public
     */
    this.stopRun = function(){
        return _stop.run();
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
        }
    );
    /*
     * @orivate
     */
    const _stop = new $levelRunner(
        function(){
            _status = 3;
        },
        process.exit
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


exports.Base = initBase;
exports.base = initBase; // compatibility
exports.init = initBase; // compatibility

