var txtProc = require('../../model/process');
var txtCgr = require('../../model/cri_gov_res');
var txtCont = require('../../model/controls');
var txtIn = require('../../model/input');
var txtOut = require('../../model/output');
var txtCmmi = require('../../model/proc_cmmi');
var txtCrit = require('../../model/criteria');
var txtGov = require('../../model/governance');
var txtRes = require('../../model/resources');
var txtGol = require('../../model/goals');
var txtMts = require('../../model/metrics');
var txtRaci = require('../../model/raci');

var api = require('./ctrCommon');
var sendJSONresponse = api.sendJSONresponse;

var template = {
	meta: txtProc.proc_35,
	gen: '',
	crit: '',
	criteria: [txtCrit.cg_01, txtCrit.cg_02, txtCrit.cg_03, txtCrit.cg_04, txtCrit.cg_05, txtCrit.cg_06, txtCrit.cg_07],
	governance: [txtGov.gov_01, txtGov.gov_02, txtGov.gov_03, txtGov.gov_04, txtGov.gov_05],
	resources: [txtRes.rs_01, txtRes.rs_02, txtRes.rs_03, txtRes.rs_04],
	ctrl: [],
	input: '',
	output: '',
	raci: '',
	goals: '',
	metrics: '',
	cmmi: []
	};


module.exports.procsb = function (req, res) {
    var process = {'01':proc01, '02':proc02, '03':proc03, '04':proc04, '05':proc05, '06':proc06, '07':proc07, '08':proc08, '09':proc09, 
    '10':proc10, '11':proc11, '12':proc12, '13':proc13, '14':proc14, '15':proc15, '16':proc16, '17':proc17, '18':proc18, '19':proc19,
    '20':proc20, '21':proc21, '22':proc22, '23':proc23, '24':proc24, '25':proc25, '26':proc26, '27':proc27, '28':proc28, '29':proc29,
    '30':proc30, '31':proc31, '32':proc32, '33':proc33, '34':proc34};
    process[req.params.id](req, res, function(response) {
        sendJSONresponse(res, '200', response);
    });
};

/*module.exports.procs = function (req, res) {
    switch (req.params.id)
    {
        case '01':
            proc01(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '02':
            proc02(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '03':
            proc03(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '04':
            proc04(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '05':
            proc05(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '06':
            proc06(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '07':
            proc07(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        case '08':
            proc08(req, res, function(response) {
                sendJSONresponse(res, '200', response);
            })
            break;
        default:
            sendJSONresponse(res, '200', '');
    }
};*/

function proc01(req, res, callback) {
        //console.log('proc01');
	var response = template;
	response.gen = txtProc.proc_01;
	response.crit = txtCgr.cgr_01;
	response.ctrl = [txtCont.co_001, txtCont.co_002, txtCont.co_003, txtCont.co_004, txtCont.co_005, txtCont.co_006];
	response.input = txtIn.in_01;
	response.output = txtOut.ou_01;
	response.cmmi = [txtCmmi.cmmi_01, txtCmmi.cmmi_02, txtCmmi.cmmi_03, txtCmmi.cmmi_04, txtCmmi.cmmi_05, txtCmmi.cmmi_06, txtCmmi.cmmi_07];
	response.goals = [txtGol.go_01, txtGol.go_02, txtGol.go_03];
	response.metrics = [txtMts.mt_01, txtMts.mt_02, txtMts.mt_03];
	response.raci = txtRaci.rac_01;
	//sendJSONresponse(res, '200', response);
        callback(response);
};

function proc02(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_02;
	response.crit = txtCgr.cgr_02;
	response.ctrl = [txtCont.co_007, txtCont.co_008, txtCont.co_009, txtCont.co_010];
	response.input = txtIn.in_02;
	response.output = txtOut.ou_02;
	response.cmmi = [txtCmmi.cmmi_08, txtCmmi.cmmi_09, txtCmmi.cmmi_10, txtCmmi.cmmi_11, txtCmmi.cmmi_12, txtCmmi.cmmi_13, txtCmmi.cmmi_14];
	response.goals = [txtGol.go_04, txtGol.go_05, txtGol.go_06];
	response.metrics = [txtMts.mt_04, txtMts.mt_05, txtMts.mt_06];
	response.raci = txtRaci.rac_02;
	callback (response);
};

function proc03 (req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_03;
	response.crit = txtCgr.cgr_03;
	response.ctrl = [txtCont.co_011, txtCont.co_012, txtCont.co_013, txtCont.co_014, txtCont.co_015];
	response.input = txtIn.in_03;
	response.output = txtOut.ou_03;
	response.cmmi = [txtCmmi.cmmi_15, txtCmmi.cmmi_16, txtCmmi.cmmi_17, txtCmmi.cmmi_18, txtCmmi.cmmi_19, txtCmmi.cmmi_20, txtCmmi.cmmi_21];
	response.goals = [txtGol.go_07, txtGol.go_08, txtGol.go_09];
	response.metrics = [txtMts.mt_07, txtMts.mt_08, txtMts.mt_09];
	response.raci = txtRaci.rac_03;
	callback(response);
};

function proc04(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_04;
	response.crit = txtCgr.cgr_04;
	response.ctrl = [txtCont.co_016, txtCont.co_017, txtCont.co_018, txtCont.co_019, txtCont.co_020, txtCont.co_021, txtCont.co_022, txtCont.co_023, txtCont.co_024, txtCont.co_025, txtCont.co_026, txtCont.co_027, txtCont.co_028, txtCont.co_029, txtCont.co_030];
	response.input = txtIn.in_04;
	response.output = txtOut.ou_04;
	response.cmmi = [txtCmmi.cmmi_22, txtCmmi.cmmi_23, txtCmmi.cmmi_24, txtCmmi.cmmi_25, txtCmmi.cmmi_26, txtCmmi.cmmi_27, txtCmmi.cmmi_28];
	response.goals = [txtGol.go_10, txtGol.go_11, txtGol.go_12];
	response.metrics = [txtMts.mt_10, txtMts.mt_11, txtMts.mt_12];
	response.raci = txtRaci.rac_04;
	callback(response);
};

function proc05(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_05;
	response.crit = txtCgr.cgr_05;
	response.ctrl = [txtCont.co_031, txtCont.co_032, txtCont.co_033, txtCont.co_034, txtCont.co_035];
	response.input = txtIn.in_05;
	response.output = txtOut.ou_05;
	response.cmmi = [txtCmmi.cmmi_29, txtCmmi.cmmi_30, txtCmmi.cmmi_31, txtCmmi.cmmi_32, txtCmmi.cmmi_33, txtCmmi.cmmi_34, txtCmmi.cmmi_35];
	response.goals = [txtGol.go_13, txtGol.go_14, txtGol.go_15];
	response.metrics = [txtMts.mt_13, txtMts.mt_14, txtMts.mt_15];
	response.raci = txtRaci.rac_05;
	callback(response);
};

function proc06(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_06;
	response.crit = txtCgr.cgr_06;
	response.ctrl = [txtCont.co_036, txtCont.co_037, txtCont.co_038, txtCont.co_039, txtCont.co_040];
	response.input = txtIn.in_06;
	response.output = txtOut.ou_06;
	response.cmmi = [txtCmmi.cmmi_36, txtCmmi.cmmi_37, txtCmmi.cmmi_38, txtCmmi.cmmi_39, txtCmmi.cmmi_40, txtCmmi.cmmi_41, txtCmmi.cmmi_42];
	response.goals = [txtGol.go_16, txtGol.go_17, txtGol.go_18];
	response.metrics = [txtMts.mt_16, txtMts.mt_17, txtMts.mt_18];
	response.raci = txtRaci.rac_06;
	callback(response);
};

function proc07(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_07;
	response.crit = txtCgr.cgr_07;
	response.ctrl = [txtCont.co_041, txtCont.co_042, txtCont.co_043, txtCont.co_044, txtCont.co_045, txtCont.co_046, txtCont.co_047, txtCont.co_048];
	response.input = txtIn.in_07;
	response.output = txtOut.ou_07;
	response.cmmi = [txtCmmi.cmmi_43, txtCmmi.cmmi_44, txtCmmi.cmmi_45, txtCmmi.cmmi_46, txtCmmi.cmmi_47, txtCmmi.cmmi_48, txtCmmi.cmmi_49];
	response.goals = [txtGol.go_19, txtGol.go_20, txtGol.go_21];
	response.metrics = [txtMts.mt_19, txtMts.mt_20, txtMts.mt_21];
	response.raci = txtRaci.rac_07;
	callback(response);
};

function proc08(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_08;
	response.crit = txtCgr.cgr_08;
	response.ctrl = [txtCont.co_049, txtCont.co_050, txtCont.co_051, txtCont.co_052, txtCont.co_053, txtCont.co_054];
	response.input = txtIn.in_08;
	response.output = txtOut.ou_08;
	response.cmmi = [txtCmmi.cmmi_50, txtCmmi.cmmi_51, txtCmmi.cmmi_52, txtCmmi.cmmi_53, txtCmmi.cmmi_54, txtCmmi.cmmi_55, txtCmmi.cmmi_56];
	response.goals = [txtGol.go_22, txtGol.go_23, txtGol.go_24];
	response.metrics = [txtMts.mt_22, txtMts.mt_23, txtMts.mt_24];
	response.raci = txtRaci.rac_08;
	callback(response);
};

function proc09(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_09;
	response.crit = txtCgr.cgr_09;
	response.ctrl = [txtCont.co_055, txtCont.co_056, txtCont.co_057, txtCont.co_058, txtCont.co_059, txtCont.co_060];
	response.input = txtIn.in_09;
	response.output = txtOut.ou_09;
	response.cmmi = [txtCmmi.cmmi_57, txtCmmi.cmmi_58, txtCmmi.cmmi_59, txtCmmi.cmmi_60, txtCmmi.cmmi_61, txtCmmi.cmmi_62, txtCmmi.cmmi_63];
	response.goals = [txtGol.go_25, txtGol.go_26, txtGol.go_27];
	response.metrics = [txtMts.mt_25, txtMts.mt_26, txtMts.mt_27];
	response.raci = txtRaci.rac_09;
	callback(response);
};

function proc10(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_10;
	response.crit = txtCgr.cgr_10;
	response.ctrl = [txtCont.co_061, txtCont.co_062, txtCont.co_063, txtCont.co_064, txtCont.co_065, txtCont.co_066, txtCont.co_067, txtCont.co_068, txtCont.co_069, txtCont.co_070, txtCont.co_071, txtCont.co_072, txtCont.co_073, txtCont.co_074];
	response.input = txtIn.in_10;
	response.output = txtOut.ou_10;
	response.cmmi = [txtCmmi.cmmi_64, txtCmmi.cmmi_65, txtCmmi.cmmi_66, txtCmmi.cmmi_67, txtCmmi.cmmi_68, txtCmmi.cmmi_69, txtCmmi.cmmi_70];
	response.goals = [txtGol.go_28, txtGol.go_29, txtGol.go_30];
	response.metrics = [txtMts.mt_28, txtMts.mt_29, txtMts.mt_30];
	response.raci = txtRaci.rac_10;
	callback(response);
};

function proc11(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_11;
	response.crit = txtCgr.cgr_11;
	response.ctrl = [txtCont.co_075, txtCont.co_076, txtCont.co_077, txtCont.co_078];
	response.input = txtIn.in_11;
	response.output = txtOut.ou_11;
	response.cmmi = [txtCmmi.cmmi_71, txtCmmi.cmmi_72, txtCmmi.cmmi_73, txtCmmi.cmmi_74, txtCmmi.cmmi_75, txtCmmi.cmmi_76, txtCmmi.cmmi_77];
	response.goals = [txtGol.go_31, txtGol.go_32, txtGol.go_33];
	response.metrics = [txtMts.mt_31, txtMts.mt_32, txtMts.mt_33];
	response.raci = txtRaci.rac_11;
	callback(response);
};

function proc12(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_12;
	response.crit = txtCgr.cgr_12;
	response.ctrl = [txtCont.co_079, txtCont.co_080, txtCont.co_081, txtCont.co_082, txtCont.co_083, txtCont.co_084, txtCont.co_085, txtCont.co_086, txtCont.co_087, txtCont.co_088];
	response.input = txtIn.in_12;
	response.output = txtOut.ou_12;
	response.cmmi = [txtCmmi.cmmi_78, txtCmmi.cmmi_79, txtCmmi.cmmi_80, txtCmmi.cmmi_81, txtCmmi.cmmi_82, txtCmmi.cmmi_83, txtCmmi.cmmi_84];
	response.goals = [txtGol.go_34, txtGol.go_35, txtGol.go_36];
	response.metrics = [txtMts.mt_34, txtMts.mt_35, txtMts.mt_36];
	response.raci = txtRaci.rac_12;
	callback(response);
};

function proc13(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_13;
	response.crit = txtCgr.cgr_13;
	response.ctrl = [txtCont.co_089, txtCont.co_090, txtCont.co_091, txtCont.co_092];
	response.input = txtIn.in_13;
	response.output = txtOut.ou_13;
	response.cmmi = [txtCmmi.cmmi_85, txtCmmi.cmmi_86, txtCmmi.cmmi_87, txtCmmi.cmmi_88, txtCmmi.cmmi_89, txtCmmi.cmmi_90, txtCmmi.cmmi_91];
	response.goals = [txtGol.go_37, txtGol.go_38, txtGol.go_39];
	response.metrics = [txtMts.mt_37, txtMts.mt_38, txtMts.mt_39];
	response.raci = txtRaci.rac_13;
	callback(response);
};

function proc14(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_14;
	response.crit = txtCgr.cgr_14;
	response.ctrl = [txtCont.co_093, txtCont.co_094, txtCont.co_095, txtCont.co_096];
	response.input = txtIn.in_14;
	response.output = txtOut.ou_14;
	response.cmmi = [txtCmmi.cmmi_92, txtCmmi.cmmi_93, txtCmmi.cmmi_94, txtCmmi.cmmi_95, txtCmmi.cmmi_96, txtCmmi.cmmi_97, txtCmmi.cmmi_98];
	response.goals = [txtGol.go_40, txtGol.go_41, txtGol.go_42];
	response.metrics = [txtMts.mt_40, txtMts.mt_41, txtMts.mt_42];
	response.raci = txtRaci.rac_14;
	callback(response);
};

function proc15(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_15;
	response.crit = txtCgr.cgr_15;
	response.ctrl = [txtCont.co_097, txtCont.co_098, txtCont.co_099, txtCont.co_100];
	response.input = txtIn.in_15;
	response.output = txtOut.ou_15;
	response.cmmi = [txtCmmi.cmmi_99, txtCmmi.cmmi_100, txtCmmi.cmmi_101, txtCmmi.cmmi_102, txtCmmi.cmmi_103, txtCmmi.cmmi_104, txtCmmi.cmmi_105];
	response.goals = [txtGol.go_43, txtGol.go_44, txtGol.go_45];
	response.metrics = [txtMts.mt_43, txtMts.mt_44, txtMts.mt_45];
	response.raci = txtRaci.rac_15;
	callback(response);
};

function proc16(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_16;
	response.crit = txtCgr.cgr_16;
	response.ctrl = [txtCont.co_101, txtCont.co_102, txtCont.co_103, txtCont.co_104, txtCont.co_105];
	response.input = txtIn.in_16;
	response.output = txtOut.ou_16;
	response.cmmi = [txtCmmi.cmmi_106, txtCmmi.cmmi_107, txtCmmi.cmmi_108, txtCmmi.cmmi_109, txtCmmi.cmmi_110, txtCmmi.cmmi_111, txtCmmi.cmmi_112];
	response.goals = [txtGol.go_46, txtGol.go_47, txtGol.go_48];
	response.metrics = [txtMts.mt_46, txtMts.mt_47, txtMts.mt_48];
	response.raci = txtRaci.rac_16;
	callback(response);
};

function proc17(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_17;
	response.crit = txtCgr.cgr_17;
	response.ctrl = [txtCont.co_106, txtCont.co_107, txtCont.co_108, txtCont.co_109, txtCont.co_110, txtCont.co_111, txtCont.co_112, txtCont.co_113, txtCont.co_114];
	response.input = txtIn.in_17;
	response.output = txtOut.ou_17;
	response.cmmi = [txtCmmi.cmmi_113, txtCmmi.cmmi_114, txtCmmi.cmmi_115, txtCmmi.cmmi_116, txtCmmi.cmmi_117, txtCmmi.cmmi_118, txtCmmi.cmmi_119];
	response.goals = [txtGol.go_49, txtGol.go_50, txtGol.go_51];
	response.metrics = [txtMts.mt_49, txtMts.mt_50, txtMts.mt_51];
	response.raci = txtRaci.rac_17;
	callback(response);
};

function proc18(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_18;
	response.crit = txtCgr.cgr_18;
	response.ctrl = [txtCont.co_115, txtCont.co_116, txtCont.co_117, txtCont.co_118, txtCont.co_119, txtCont.co_120];
	response.input = txtIn.in_18;
	response.output = txtOut.ou_18;
	response.cmmi = [txtCmmi.cmmi_120, txtCmmi.cmmi_121, txtCmmi.cmmi_122, txtCmmi.cmmi_123, txtCmmi.cmmi_124, txtCmmi.cmmi_125, txtCmmi.cmmi_126];
	response.goals = [txtGol.go_52, txtGol.go_53, txtGol.go_54];
	response.metrics = [txtMts.mt_52, txtMts.mt_53, txtMts.mt_54];
	response.raci = txtRaci.rac_18;
	callback(response);
};

function proc19(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_19;
	response.crit = txtCgr.cgr_19;
	response.ctrl = [txtCont.co_121, txtCont.co_122, txtCont.co_123, txtCont.co_124];
	response.input = txtIn.in_19;
	response.output = txtOut.ou_19;
	response.cmmi = [txtCmmi.cmmi_127, txtCmmi.cmmi_128, txtCmmi.cmmi_129, txtCmmi.cmmi_130, txtCmmi.cmmi_131, txtCmmi.cmmi_132, txtCmmi.cmmi_133];
	response.goals = [txtGol.go_55, txtGol.go_56, txtGol.go_57];
	response.metrics = [txtMts.mt_55, txtMts.mt_56, txtMts.mt_57];
	response.raci = txtRaci.rac_19;
	callback(response);
};

function proc20(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_20;
	response.crit = txtCgr.cgr_20;
	response.ctrl = [txtCont.co_125, txtCont.co_126, txtCont.co_127, txtCont.co_128, txtCont.co_129];
	response.input = txtIn.in_20;
	response.output = txtOut.ou_20;
	response.cmmi = [txtCmmi.cmmi_134, txtCmmi.cmmi_135, txtCmmi.cmmi_136, txtCmmi.cmmi_137, txtCmmi.cmmi_138, txtCmmi.cmmi_139, txtCmmi.cmmi_140];
	response.goals = [txtGol.go_58, txtGol.go_59, txtGol.go_60];
	response.metrics = [txtMts.mt_58, txtMts.mt_59, txtMts.mt_60];
	response.raci = txtRaci.rac_20;
	callback(response);
};

function proc21(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_21;
	response.crit = txtCgr.cgr_21;
	response.ctrl = [txtCont.co_130, txtCont.co_131, txtCont.co_132, txtCont.co_133, txtCont.co_134, txtCont.co_135, txtCont.co_136, txtCont.co_137, txtCont.co_138, txtCont.co_139];
	response.input = txtIn.in_21;
	response.output = txtOut.ou_21;
	response.cmmi = [txtCmmi.cmmi_141, txtCmmi.cmmi_142, txtCmmi.cmmi_143, txtCmmi.cmmi_144, txtCmmi.cmmi_145, txtCmmi.cmmi_146, txtCmmi.cmmi_147];
	response.goals = [txtGol.go_61, txtGol.go_62, txtGol.go_63];
	response.metrics = [txtMts.mt_61, txtMts.mt_62, txtMts.mt_63];
	response.raci = txtRaci.rac_21;
	callback(response);
};

function proc22(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_22;
	response.crit = txtCgr.cgr_22;
	response.ctrl = [txtCont.co_140, txtCont.co_141, txtCont.co_142, txtCont.co_143, txtCont.co_144, txtCont.co_145, txtCont.co_146, txtCont.co_147, txtCont.co_148, txtCont.co_149, txtCont.co_150];
	response.input = txtIn.in_22;
	response.output = txtOut.ou_22;
	response.cmmi = [txtCmmi.cmmi_148, txtCmmi.cmmi_149, txtCmmi.cmmi_150, txtCmmi.cmmi_151, txtCmmi.cmmi_152, txtCmmi.cmmi_153, txtCmmi.cmmi_154];
	response.goals = [txtGol.go_64, txtGol.go_65, txtGol.go_66];
	response.metrics = [txtMts.mt_64, txtMts.mt_65, txtMts.mt_66];
	response.raci = txtRaci.rac_22;
	callback(response);
};

function proc23(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_23;
	response.crit = txtCgr.cgr_23;
	response.ctrl = [txtCont.co_151, txtCont.co_152, txtCont.co_153, txtCont.co_154];
	response.input = txtIn.in_23;
	response.output = txtOut.ou_23;
	response.cmmi = [txtCmmi.cmmi_155, txtCmmi.cmmi_156, txtCmmi.cmmi_157, txtCmmi.cmmi_158, txtCmmi.cmmi_159, txtCmmi.cmmi_160, txtCmmi.cmmi_161];
	response.goals = [txtGol.go_67, txtGol.go_68, txtGol.go_69];
	response.metrics = [txtMts.mt_67, txtMts.mt_68, txtMts.mt_69];
	response.raci = txtRaci.rac_23;
	callback(response);
};

function proc24(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_24;
	response.crit = txtCgr.cgr_24;
	response.ctrl = [txtCont.co_155, txtCont.co_156, txtCont.co_157];
	response.input = txtIn.in_24;
	response.output = txtOut.ou_24;
	response.cmmi = [txtCmmi.cmmi_162, txtCmmi.cmmi_163, txtCmmi.cmmi_164, txtCmmi.cmmi_165, txtCmmi.cmmi_166, txtCmmi.cmmi_167, txtCmmi.cmmi_168];
	response.goals = [txtGol.go_70, txtGol.go_71, txtGol.go_72];
	response.metrics = [txtMts.mt_70, txtMts.mt_71, txtMts.mt_72];
	response.raci = txtRaci.rac_24;
	callback(response);
};

function proc25(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_25;
	response.crit = txtCgr.cgr_25;
	response.ctrl = [txtCont.co_158, txtCont.co_159, txtCont.co_160, txtCont.co_161, txtCont.co_162];
	response.input = txtIn.in_25;
	response.output = txtOut.ou_25;
	response.cmmi = [txtCmmi.cmmi_169, txtCmmi.cmmi_170, txtCmmi.cmmi_171, txtCmmi.cmmi_172, txtCmmi.cmmi_173, txtCmmi.cmmi_174, txtCmmi.cmmi_175];
	response.goals = [txtGol.go_73, txtGol.go_74, txtGol.go_75];
	response.metrics = [txtMts.mt_73, txtMts.mt_74, txtMts.mt_75];
	response.raci = txtRaci.rac_25;
	callback(response);
};

function proc26(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_26;
	response.crit = txtCgr.cgr_26;
	response.ctrl = [txtCont.co_163, txtCont.co_164, txtCont.co_165];
	response.input = txtIn.in_26;
	response.output = txtOut.ou_26;
	response.cmmi = [txtCmmi.cmmi_176, txtCmmi.cmmi_177, txtCmmi.cmmi_178, txtCmmi.cmmi_179, txtCmmi.cmmi_180, txtCmmi.cmmi_181, txtCmmi.cmmi_182];
	response.goals = [txtGol.go_76, txtGol.go_77, txtGol.go_78];
	response.metrics = [txtMts.mt_76, txtMts.mt_77, txtMts.mt_78];
	response.raci = txtRaci.rac_26;
	callback(response);
};

function proc27(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_27;
	response.crit = txtCgr.cgr_27;
	response.ctrl = [txtCont.co_166, txtCont.co_167, txtCont.co_168, txtCont.co_169];
	response.input = txtIn.in_27;
	response.output = txtOut.ou_27;
	response.cmmi = [txtCmmi.cmmi_183, txtCmmi.cmmi_184, txtCmmi.cmmi_185, txtCmmi.cmmi_186, txtCmmi.cmmi_187, txtCmmi.cmmi_188, txtCmmi.cmmi_189];
	response.goals = [txtGol.go_79, txtGol.go_80, txtGol.go_81];
	response.metrics = [txtMts.mt_79, txtMts.mt_80, txtMts.mt_81];
	response.raci = txtRaci.rac_27;
	callback(response);
};

function proc28(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_28;
	response.crit = txtCgr.cgr_28;
	response.ctrl = [txtCont.co_170, txtCont.co_171, txtCont.co_172, txtCont.co_173, txtCont.co_174, txtCont.co_175];
	response.input = txtIn.in_28;
	response.output = txtOut.ou_28;
	response.cmmi = [txtCmmi.cmmi_190, txtCmmi.cmmi_191, txtCmmi.cmmi_192, txtCmmi.cmmi_193, txtCmmi.cmmi_194, txtCmmi.cmmi_195, txtCmmi.cmmi_196];
	response.goals = [txtGol.go_82, txtGol.go_83, txtGol.go_84];
	response.metrics = [txtMts.mt_82, txtMts.mt_83, txtMts.mt_84];
	response.raci = txtRaci.rac_28;
	callback(response);
};

function proc29(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_29;
	response.crit = txtCgr.cgr_29;
	response.ctrl = [txtCont.co_176, txtCont.co_177, txtCont.co_178, txtCont.co_179, txtCont.co_180];
	response.input = txtIn.in_29;
	response.output = txtOut.ou_29;
	response.cmmi = [txtCmmi.cmmi_197, txtCmmi.cmmi_198, txtCmmi.cmmi_199, txtCmmi.cmmi_200, txtCmmi.cmmi_201, txtCmmi.cmmi_202, txtCmmi.cmmi_203];
	response.goals = [txtGol.go_85, txtGol.go_86, txtGol.go_87];
	response.metrics = [txtMts.mt_85, txtMts.mt_86, txtMts.mt_87];
	response.raci = txtRaci.rac_29;
	callback(response);
};

function proc30(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_30;
	response.crit = txtCgr.cgr_30;
	response.ctrl = [txtCont.co_181, txtCont.co_182, txtCont.co_183, txtCont.co_184, txtCont.co_185];
	response.input = txtIn.in_30;
	response.output = txtOut.ou_30;
	response.cmmi = [txtCmmi.cmmi_204, txtCmmi.cmmi_205, txtCmmi.cmmi_206, txtCmmi.cmmi_207, txtCmmi.cmmi_208, txtCmmi.cmmi_209, txtCmmi.cmmi_210];
	response.goals = [txtGol.go_88, txtGol.go_89, txtGol.go_90];
	response.metrics = [txtMts.mt_88, txtMts.mt_89, txtMts.mt_90];
	response.raci = txtRaci.rac_30;
	callback(response);
};

function proc31(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_31;
	response.crit = txtCgr.cgr_31;
	response.ctrl = [txtCont.co_186, txtCont.co_187, txtCont.co_188, txtCont.co_189, txtCont.co_190, txtCont.co_191];
	response.input = txtIn.in_31;
	response.output = txtOut.ou_31;
	response.cmmi = [txtCmmi.cmmi_211, txtCmmi.cmmi_212, txtCmmi.cmmi_213, txtCmmi.cmmi_214, txtCmmi.cmmi_215, txtCmmi.cmmi_216, txtCmmi.cmmi_217];
	response.goals = [txtGol.go_91, txtGol.go_92, txtGol.go_93];
	response.metrics = [txtMts.mt_91, txtMts.mt_92, txtMts.mt_93];
	response.raci = txtRaci.rac_31;
	callback(response);
};

function proc32(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_32;
	response.crit = txtCgr.cgr_32;
	response.ctrl = [txtCont.co_192, txtCont.co_193, txtCont.co_194, txtCont.co_195, txtCont.co_196, txtCont.co_197, txtCont.co_198];
	response.input = txtIn.in_32;
	response.output = txtOut.ou_32;
	response.cmmi = [txtCmmi.cmmi_218, txtCmmi.cmmi_219, txtCmmi.cmmi_220, txtCmmi.cmmi_221, txtCmmi.cmmi_222, txtCmmi.cmmi_223, txtCmmi.cmmi_224];
	response.goals = [txtGol.go_94, txtGol.go_95, txtGol.go_96];
	response.metrics = [txtMts.mt_94, txtMts.mt_95, txtMts.mt_96];
	response.raci = txtRaci.rac_32;
	callback(response);
};

function proc33(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_33;
	response.crit = txtCgr.cgr_33;
	response.ctrl = [txtCont.co_199, txtCont.co_200, txtCont.co_201, txtCont.co_202, txtCont.co_203];
	response.input = txtIn.in_33;
	response.output = txtOut.ou_33;
	response.cmmi = [txtCmmi.cmmi_225, txtCmmi.cmmi_226, txtCmmi.cmmi_227, txtCmmi.cmmi_228, txtCmmi.cmmi_229, txtCmmi.cmmi_230, txtCmmi.cmmi_231];
	response.goals = [txtGol.go_97, txtGol.go_98, txtGol.go_99];
	response.metrics = [txtMts.mt_97, txtMts.mt_98, txtMts.mt_99];
	response.raci = txtRaci.rac_33;
	callback(response);
};

function proc34(req, res, callback) {
	var response = template;
	response.gen = txtProc.proc_34;
	response.crit = txtCgr.cgr_34;
	response.ctrl = [txtCont.co_204, txtCont.co_205, txtCont.co_206, txtCont.co_207, txtCont.co_208, txtCont.co_209, txtCont.co_210];
	response.input = txtIn.in_34;
	response.output = txtOut.ou_34;
	response.cmmi = [txtCmmi.cmmi_232, txtCmmi.cmmi_233, txtCmmi.cmmi_234, txtCmmi.cmmi_235, txtCmmi.cmmi_236, txtCmmi.cmmi_237, txtCmmi.cmmi_238];
	response.goals = [txtGol.go_100, txtGol.go_101, txtGol.go_102];
	response.metrics = [txtMts.mt_100, txtMts.mt_101, txtMts.mt_102];
	response.raci = txtRaci.rac_34;
	callback(response);
};