/**
 * QuickCheckController
 *
 * @description :: Server-side logic for managing Quickchecks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

'use strict';

let QuickCheckController = {

  getList: (req, res) => {
    
    QuickCheckService.getList().then((result) => {
      res.json(result);
    }).catch((error) => {
      res.json(error);
    });
  }

};

module.exports = QuickCheckController;