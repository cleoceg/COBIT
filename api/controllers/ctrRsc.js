var txtRsc = require('../../model/resources');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Governance Intro
module.exports.RscIntro = function (req, res) {
    sendJSONresponse(res, '200', txtRsc.rs_00);
};

// all resources
module.exports.Resources = function (req, res) {
	var response = {
		gen: txtRsc.rs_00,
		items: [txtRsc.rs_01, txtRsc.rs_02, txtRsc.rs_03, txtRsc.rs_04]
	};
	sendJSONresponse(res, '200', response);
};
