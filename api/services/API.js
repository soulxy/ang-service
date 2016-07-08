/*
 * api 访问路径统一管理
 */

'use strict';


let apiUrl = `${sails.config.globals.apiHost_defect}`;

let API = {
  //快速检测
  QuickCheck: {
    getList: `${apiUrl}quickcheck/list`,
  }
};

module.exports = API;