/*
 * 基础service
 */
 'use strict';
let request = require('request');

let SuperService = {
  requ: (url, method, data) => {
    let params = {
      url: url,
      method: method || 'GET',
      data: data || []
    };
    console.log('=====>params<=====', params);
    return new Promise((resolve, reject) => {

      request(params, function(error, response, body) {
        console.log('-->e:%s\n-->r:%s\n-->b:%s', error, response, body);
        console.log('=====>response<=====', JSON.stringify(response));
        if (error) {
          return reject(error);
        } else if (response.statusCode != 200) {
          if (response.headers.location) { // 未登录
            console.log('--->----');
            return reject({ symbol: 'no-login'});
          }
          return reject(response.headers);
        } else if (response.statusCode == 200) {
          return resolve(body);
        }
      });

    });
  },

/*  get: (url) => {
    return this.requ(url);
  },

  post: (url, data) => {
    return this.requ(url, 'POST', data);
  },

  put: (url, data) => {
    return this.requ(url, 'PUT', data);
  }*/

};


module.exports = SuperService;
