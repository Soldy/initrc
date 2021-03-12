/*
 *  @Soldy\initrc\2021.02.21\GPL3
 */
'use strict';
const $levelRunner = (require('levelrunnerrc')).Base;

/*
 * @prototype
 */
const initBase=function(){
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
    this.start = _start;
    /*
     * @public
     */
    this.stop = _stop;
    /*
     * @public
     * @return {integer}
     */
    this.status = function(){
        return _status;
    };
};


exports.Base = initBase;
exports.base = initBase; // compatibility
exports.init = initBase; // coompatibility

