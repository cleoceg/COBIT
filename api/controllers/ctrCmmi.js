var txtCmmi = require('../../model/cmmi');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Executive Overview
module.exports.Gcmmi = function (req, res) {
	var response = [txtCmmi.cmmi_02, txtCmmi.cmmi_03, txtCmmi.cmmi_04, txtCmmi.cmmi_05, txtCmmi.cmmi_06, txtCmmi.cmmi_07];
	sendJSONresponse(res, '200', response);
};
