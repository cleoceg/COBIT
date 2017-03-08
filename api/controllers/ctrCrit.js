var txtCrit = require('../../model/criteria');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Criteria Intro
module.exports.RscIntro = function (req, res) {
    sendJSONresponse(res, '200', txtCrit.rs_00);
};

// all criteria
module.exports.Criteria = function (req, res) {
	var response = {
		gen: txtCrit.cg_00,
		items: [txtCrit.cg_01, txtCrit.cg_02, txtCrit.cg_03, txtCrit.cg_04, txtCrit.cg_05, txtCrit.cg_06, txtCrit.cg_07]
	};
	sendJSONresponse(res, '200', response);
};
