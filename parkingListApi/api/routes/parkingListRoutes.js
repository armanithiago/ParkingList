'use strict';
module.exports = function(app) {
  const parkingList = require('../controllers/parkingListController');


  // todoList Routes
  app.route('/list')
    .get(parkingList.list_all_user)
    .post(parkingList.create_user);


  app.route('/list/:userId')
    .get(parkingList.read_user)
    .put(parkingList.update_user)
    .delete(parkingList.delete_user);
};
