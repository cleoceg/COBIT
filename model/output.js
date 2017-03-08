var ou_01 = {
	id: 'ou_01',
	proc: 'PO01',
	outputs: [
		['Strategic IT plan',['PO02', 'PO03', 'PO04', 'PO05', 'PO06', 'PO08', 'PO09', 'AI01', 'DS01']],
		['Tactical IT plans', ['PO02', 'PO03', 'PO04', 'PO05', 'PO06', 'PO09', 'AI01', 'DS01']],
		['IT project portfolio', ['PO05', 'PO06', 'PO10', 'AI06']],
		['IT service portfolio', ['PO05', 'PO06', 'PO09', 'DS01']],
		['IT sourcing strategy', ['DS02']],
		['IT acquisition strategy', ['AI05']]
	]
};

var ou_02 = {
	id: 'ou_02',
	proc: 'PO02',
	outputs: [
		['Data classification scheme',['AI02']],
		['Optimised business systems plan', ['PO03','AI02']],
		['Data dictionary', ['AI02', 'DS11']],
		['Information architecture', ['PO03','DS05']],
		['Assigned data classifications', ['DS01', 'DS04', 'DS05', 'DS11', 'DS12']],
		['Classification procedures and tools', ['*']]
	]
};

var ou_03 = {
	id: 'ou_03',
	proc: 'PO03',
	outputs: [
		['Technology opportunities',['AI03']],
		['Technology standards', ['AI01', 'AI03', 'AI06', 'DS05']],
		['Regular ‘state of technology’ updates', ['AI01', 'AI02', 'AI03']],
		['Technology infrastructure plan', ['AI03']],
		['Infrastructure requirements', ['PO05']]
	]
};

var ou_04 = {
	id: 'ou_04',
	proc: 'PO04',
	outputs: [
		['IT process framework',['ME04']],
		['Documented system owners', ['AI07', 'DS06']],
		['IT organisation and relationships', ['PO07']],
		['IT process framework, documented roles and ALL responsibilities', ['ALL']],
		['Document roles and responsibilities', ['PO07']]
	]
};

var ou_05 = {
	id: 'ou_05',
	proc: 'PO05',
	outputs: [
		['Cost-benefit reports',['PO01', 'AI02', 'DS06', 'ME01', 'ME04']],
		['IT budgets', ['DS06']],
		['Updated IT service portfolio', ['DS01']],
		['Updated IT project portfolio', ['PO10']]
	]
};

var ou_06 = {
	id: 'ou_06',
	proc: 'PO06',
	outputs: [
		['Enterprise IT control framework',['ALL']],
		['IT policies', ['ALL']]
	]
};

var ou_07 = {
	id: 'ou_07',
	proc: 'PO07',
	outputs: [
		['IT human resources policy and procedures',['PO04']],
		['IT skills matrix', ['PO04', 'PO10']],
		['Job descriptions', ['PO04']],
		['Users’ skills and competencies, including individual training', ['DS07']],
		['Specific training requirements', ['DS07']],
		['Roles and responsibilities', ['ALL']]
	]
};

var ou_08 = {
	id: 'ou_08',
	proc: 'PO08',
	outputs: [
		['Acquisition standards',['AI01', 'AI02', 'AI03', 'AI05', 'DS02']],
		['Development standards', ['PO10', 'AI01', 'AI02', 'AI03', 'AI07']],
		['Quality standards and metrics requirements', ['ALL']],
		['Quality improvement actions', ['PO04', 'AI06']]
	]
};

var ou_09 = {
	id: 'ou_09',
	proc: 'PO09',
	outputs: [
		['Risk assessment',['PO01', 'DS04', 'DS05', 'DS12', 'ME04']],
		['Risk reporting', ['ME04']],
		['IT-related risk management guidelines', ['PE06']],
		['IT-related risk remedial action plans', ['PE04', 'AI06']]
	]
};

var ou_10 = {
	id: 'ou_10',
	proc: 'PO10',
	outputs: [
		['Project performance reports',['ME01']],
		['Project risk management plan', ['PE09']],
		['Project management guidelines', ['AI01', 'AI02', 'AI03', 'AI04', 'AI05', 'AI06', 'AI07']],
		['Detailed project plans', ['PO08', 'AI01', 'AI02', 'AI03', 'AI04', 'AI05', 'AI06', 'AI07', 'DS06']],
		['Updated IT project portfolio', ['PO01', 'PO05']]
	]
};

var ou_11 = {
	id: 'ou_11',
	proc: 'AI01',
	outputs: [
		['Business requirements feasibility study',['PO02', 'PO05', 'PO07', 'AI02', 'AI03', 'AI04', 'AI05']]
	]
};

var ou_12 = {
	id: 'ou_12',
	proc: 'AI02',
	outputs: [
		['Application security controls specification',['DS05']],
		['Application and package software knowledge', ['AI04']],
		['Procurement decisions', ['AI05']],
		['Initial planned SLAs', ['DS01']],
		['Availability, continuity and recovery specification', ['DS03', 'DS04']],
	]
};

var ou_13 = {
	id: 'ou_13',
	proc: 'AI03',
	outputs: [
		['Procurement decisions',['AI05']],
		['Configured system to be tested/installed', ['AI07']],
		['Physical environment requirements', ['DS12']],
		['Updates for technology standards', ['PO03']],
		['System monitoring requirements', ['DS03']],
		['Infrastructure knowledge', ['AI04']],
		['Initial planned operating level agreements (OLAs)', ['DS01']]
	]
};

var ou_14 = {
	id: 'ou_14',
	proc: 'AI04',
	outputs: [
		['User, operational, support, technical and administration manuals',['AI07', 'DS04', 'DS08', 'DS09', 'DS11', 'DS13']],
		['Knowledge transfer requirements for a solution’s implementation', ['DS07']],
		['Training materials', ['DS07']]
	]
};

var ou_15 = {
	id: 'ou_15',
	proc: 'AI05',
	outputs: [
		['Third-party relationship management requirements',['DS02']],
		['Procured items', ['AI07']],
		['Contractual arrangements', ['DS02']]
	]
};

var ou_16 = {
	id: 'ou_16',
	proc: 'AI06',
	outputs: [
		['Change process description',['AI01', 'AI02', 'AI03']],
		['Change status reports', ['ME01']],
		['Change authorisation', ['AI07', 'DS08', 'DS10']]
	]
};

var ou_17 = {
	id: 'ou_17',
	proc: 'AI07',
	outputs: [
		['Released configuration items',['DS08', 'DS09']],
		['Known and accepted errors', ['AI04']],
		['Promotion to production', ['DS13']],
		['Software release and distribution plan', ['DS13']],
		['Post-implementation review', ['PO02', 'PO05', 'PO10']],
		['Internal control monitoring', ['ME02']]
	]
};

var ou_18 = {
	id: 'ou_18',
	proc: 'DS01',
	outputs: [
		['Contract review report',['DS02']],
		['Process performance reports', ['ME01']],
		['New/updated service requirements', ['PO01']],
		['SLAs', ['AI01', 'DS02', 'DS03', 'DS04', 'DS06', 'DS08', 'DS13']],
		['OLAs', ['DS04', 'DS05', 'DS06', 'DS07', 'DS08', 'DS11', 'DS13']],
		['Updated IT service portfolio', ['PO01']]
	]
};

var ou_19 = {
	id: 'ou_19',
	proc: 'DS02',
	outputs: [
		['Process performance reports',['ME01']],
		['Supplier catalogue', ['AI05']],
		['Supplier risks', ['PO09']]
	]
};

var ou_20 = {
	id: 'ou_20',
	proc: 'DS03',
	outputs: [
		['Performance and capacity information',['PO02', 'PO03']],
		['Performance and capacity plan (requirements)', ['PO05', 'AI01', 'AI03', 'ME01']],
		['Required changes', ['AI06']],
		['Process performance reports', ['ME01']]
	]
};

var ou_21 = {
	id: 'ou_21',
	proc: 'DS04',
	outputs: [
		['Contingency test results',['PO09']],
		['Criticality of IT configuration items', ['DS09']],
		['Backup storage and protection plan', ['DS11', 'DS13']],
		['Incident/disaster thresholds', ['DS08']],
		['Disaster service requirements, including roles and responsibilities', ['DS01', 'DS02']],
		['Process performance reports', ['ME01']]
	]
};

var ou_22 = {
	id: 'ou_22',
	proc: 'DS05',
	outputs: [
		['Security incident definition',['DS08']],
		['Specific training requirements on security awareness', ['DS07']],
		['Process performance reports', ['ME01']],
		['Required security changes', ['AI06']],
		['Security threats and vulnerabilities', ['PO09']],
		['IT security plan and policies', ['DS11']]
	]
};

var ou_23 = {
	id: 'ou_23',
	proc: 'DS06',
	outputs: [
		['IT financials',['PO05']],
		['Process performance reports', ['ME01']]
	]
};

var ou_24 = {
	id: 'ou_24',
	proc: 'DS07',
	outputs: [
		['Process performance reports',['ME01']],
		['Required documentation updates', ['EI04']]
	]
};

var ou_25 = {
	id: 'ou_25',
	proc: 'DS08',
	outputs: [
		['Service requests/request for change (RFC)',['AI06']],
		['Incident reports', ['DS10']],
		['Process performance reports', ['ME01']],
		['User satisfaction reports', ['DS07', 'ME01']]
	]
};

var ou_26 = {
	id: 'ou_26',
	proc: 'DS09',
	outputs: [
		['IT configuration/asset details',['DS08', 'DS10', 'DS13']],
		['RFC (where and how to apply the fix)', ['AI06']],
		['Process performance reports', ['ME01']]
	]
};

var ou_27 = {
	id: 'ou_27',
	proc: 'DS10',
	outputs: [
		['Requests for change (where and how to apply the fix)',['AI06']],
		['Problem records', ['AI06']],
		['Process performance reports', ['ME01']],
		['Known problems, known errors and workarounds', ['DS08']]
	]
};

var ou_28 = {
	id: 'ou_28',
	proc: 'DS11',
	outputs: [
		['Process performance reports',['ME1']],
		['Operator instructions for data management', ['DS13']]
	]
};

var ou_29 = {
	id: 'ou_29',
	proc: 'DS12',
	outputs: [
		['Process performance reports',['ME01']]
	]
};

var ou_30 = {
	id: 'ou_30',
	proc: 'DS13',
	outputs: [
		['Incident tickets',['DS08']],
		['Error logs', ['DS10']],
		['Process performance reports', ['ME01']]
	]
};

var ou_31 = {
	id: 'ou_31',
	proc: 'ME01',
	outputs: [
		['Performance input to IT planning',['PO01', 'PO02', 'DS01']],
		['Remedial action plans', ['PO04', 'PO08']],
		['Historical risk trends and events', ['PO09']],
		['Process performance report', ['ME02']]
	]
};

var ou_32 = {
	id: 'ou_32',
	proc: 'ME02',
	outputs: [
		['Report on effectiveness of IT controls',['PE04', 'PE06', 'ME01', 'ME04']]
	]
};

var ou_33 = {
	id: 'ou_33',
	proc: 'ME03',
	outputs: [
		['Catalogue of legal and regulatory requirements related to IT service delivery',['PO04', 'ME04']],
		['Report on compliance of IT activities with external legal and regulatory requirements', ['ME01']]
	]
};

var ou_34 = {
	id: 'ou_34',
	proc: 'ME04',
	outputs: [
		['Process framework improvements',['PO04']],
		['Report on IT governance status', ['PO01', 'ME01']],
		['Expected business outcome of IT-enabled business investments', ['PO05']],
		['Enterprise strategic direction for IT', ['PO01']],
		['Enterprise appetite for IT risks', ['PO09']]
	]
};

exports.ou_01 = ou_01;
exports.ou_02 = ou_02;
exports.ou_03 = ou_03;
exports.ou_04 = ou_04;
exports.ou_05 = ou_05;
exports.ou_06 = ou_06;
exports.ou_07 = ou_07;
exports.ou_08 = ou_08;
exports.ou_09 = ou_09;
exports.ou_10 = ou_10;
exports.ou_11 = ou_11;
exports.ou_12 = ou_12;
exports.ou_13 = ou_13;
exports.ou_14 = ou_14;
exports.ou_15 = ou_15;
exports.ou_16 = ou_16;
exports.ou_17 = ou_17;
exports.ou_18 = ou_18;
exports.ou_19 = ou_19;
exports.ou_20 = ou_20;
exports.ou_21 = ou_21;
exports.ou_22 = ou_22;
exports.ou_23 = ou_23;
exports.ou_24 = ou_24;
exports.ou_25 = ou_25;
exports.ou_26 = ou_26;
exports.ou_27 = ou_27;
exports.ou_28 = ou_28;
exports.ou_29 = ou_29;
exports.ou_30 = ou_30;
exports.ou_31 = ou_31;
exports.ou_32 = ou_32;
exports.ou_33 = ou_33;
exports.ou_34 = ou_34;