'use strict';
module.exports = function (app) {
    var recordData = require('../controllers/recordController');
    const auth = require('../middleware/auth');

    // recordList Routes
    app.route('/records')
        .get(auth, recordData.list_all_records)
        .post(recordData.create_a_record);


    app.route('/records/:recordId')
        .get(recordData.read_a_record)
        .put(recordData.update_a_record)
        .delete(recordData.delete_a_record);
};