/**
 * QuickCheckService
 *
 * @description :: Server-side logic for managing Quickchecks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

'use strict';
/*let request = require('request');*/

/*let apiUrl = `${sails.config.globals.apiHost}`;*/

let QuickCheckService = {
  getList: () => {
    console.log(`${API.QuickCheck.getList}`);
    return new Promise((resolve, reject) => {
      SuperService.requ(`${API.QuickCheck.getList}`, 'POST').then((res, err) => {
        console.log('-------->', res, err);
        if (err) {
          if(err.symbol) {
            return reject({ code: 403, msg: '未登录，没有访问权限'});
          }
          return reject({ code: 500,  msg: err });
        }

        return resolve({ code: 200, data: res });

      });

    });

  }
};

module.exports = QuickCheckService;
