// API router for all routes
var express = require('express');
var router = express.Router();

var ctrGov = require('../controllers/ctrGov');
var ctrRsc = require('../controllers/ctrRsc');
var ctrCrit = require('../controllers/ctrCrit');
var ctrOvw = require('../controllers/ctrOverview');
var ctrCmmi = require('../controllers/ctrCmmi');
var ctrProc = require('../controllers/ctrProcess');

// Overview
router.get('/overview', ctrOvw.Overview);

// Governance
router.get('/gov_gen', ctrGov.GovIntro);
router.get('/gov_sa', ctrGov.Gov_sa);
router.get('/gov_vd', ctrGov.Gov_vd);
router.get('/gov_rm', ctrGov.Gov_rm);
router.get('/gov_rkm', ctrGov.Gov_rkm);
router.get('/gov_pm', ctrGov.Gov_pm);

router.get('/governance', ctrGov.Governance);

// Resources
router.get('/resources', ctrRsc.Resources);

// Criteria
router.get('/criteria', ctrCrit.Criteria);

// CMMI
router.get('/gcmmi', ctrCmmi.Gcmmi);

// Processus
router.get('/:id', ctrProc.procsb);


module.exports = router; 