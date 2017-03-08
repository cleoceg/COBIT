var txtGov = require('../../model/governance');
var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

// Governance Intro
module.exports.GovIntro = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_00);
};

// Governance Strategic alignment
module.exports.Gov_sa = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_01);
};

// Governance Value delivery
module.exports.Gov_vd = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_02);
};

// Governance Resource management
module.exports.Gov_rm = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_03);
};

// Governance Risk management
module.exports.Gov_rkm = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_04);
};

// Governance Performance measurement
module.exports.Gov_pm = function (req, res) {
    sendJSONresponse(res, '200', txtGov.gov_05);
};

// Governance : all items
module.exports.Governance = function (req, res) {
	var response = {
		gen: txtGov.gov_00,
		items: [txtGov.gov_01, txtGov.gov_02, txtGov.gov_03, txtGov.gov_04, txtGov.gov_05]
	}
    sendJSONresponse(res, '200', response);
};