'use strict';

exports.index = function (req, res) {
    res.json({
      type: 'Home',
      message: "This is the Record List API!",
    });
};

exports.ping = function (req, res) {
  res.json({
    type: "PING",
    message: "Ping Successful for Record List API!",
  });
};