var in_01 = {
	id: 'in_01',
	proc: 'PO01',
	inputs: [
		['PO05', 'Cost-benefits reports'],
		['PO09', 'Risk assessment'],
		['PO10','Updated IT project portfolio'],
		['DS01','New/updated service requirements; updated IT service portfolio'],
		['*','Business strategy and priorities'],
		['*','Programme portfolio'],
		['ME01','Performance input to IT planning'],
		['ME04','Report on IT governance status; enterprise strategic direction for IT']
	]

};

var in_02 = {
	id: 'in_02',
	proc: 'PO02',
	inputs: [
		['PO01','Strategic and tactical IT plans'],
		['AI01','Business requirements feasibility study'],
		['AI07', 'Post-implementation review'],
		['DS03','Performance and capacity information'],
		['ME01','Performance input to IT planning']
	]
};

var in_03 = {
	id: 'in_03',
	proc: 'PO03',
	inputs: [
		['PO01','Strategic and tactical IT plans'],
		['PO02','Optimised business systems plan, information architecture'],
		['PO03','Updates for technology standards'],
		['DS03', 'Performance and capacity information']
	]
};

var in_04 = {
	id: 'in_04',
	proc: 'PO04',
	inputs: [
		['PO01','Strategic and tactical plans'],
		['PO07', 'IT human resources policy and procedures, IT skills matrix, job descriptions'],
		['PO08', 'Quality improvement actions'],
		['PO09', 'IT-related risk remedial action plans'],
		['ME01', 'Remedial action plans'],
		['ME02', 'Report on effectiveness of IT controls'],
		['ME03', 'Catalogue of legal and regulatory requirements related to IT service delivery'],
		['ME04', 'Process framework improvements']
	]
};

var in_05 = {
	id: 'in_05',
	proc: 'PO05',
	inputs: [
		['PO01','Strategic plan and tactical IT plans, project and service portfolios'],
		['PO03', 'Infrastructure requirements'],
		['PO10', 'Updated IT project portfolio'],
		['AI01', 'Business requirements feasibility study'],
		['AI07', 'Post-implementation reviews'],
		['DS03', 'Performance and capacity plan (requirements)'],
		['DS06', 'IT financials'],
		['ME04', 'Expected business outcome of IT-enabled business investments']
	]
};

var in_06 = {
	id: 'in_06',
	proc: 'PO06',
	inputs: [
		['PO01','Strategic and tactical IT plans, IT project and service portfolios'],
		['PO09', 'IT-related risk management guidelines'],
		['ME02', 'Report on effectiveness of IT controls']
	]
};

var in_07 = {
	id: 'in_07',
	proc: 'PO07',
	inputs: [
		['PO04','IT organisation and relationships; documented roles and responsibilities'],
		['AI01', 'Business requirements feasibility study']
	]
};

var in_08 = {
	id: 'in_08',
	proc: 'PO08',
	inputs: [
		['PO01','Strategic IT plan'],
		['PO10', 'Detailed project plans'],
		['ME01', 'Remedial action plans']
	]
};

var in_09 = {
	id: 'in_09',
	proc: 'PO09',
	inputs: [
		['PO01','Strategic and tactical IT plans, IT service portfolio'],
		['PO10', 'Project risk management plan'],
		['DS02', 'Supplier risks'],
		['DS04', 'Contingency test results'],
		['DS05', 'Security threats and vulnerabilities'],
		['ME01', 'Historical risk trends and events'],
		['ME04', 'Enterprise appetite for IT risks']
	]
};

var in_10 = {
	id: 'in_10',
	proc: 'PO10',
	inputs: [
		['PO01','IT project portfolio'],
		['PO05', 'Updated IT project portfolio'],
		['PO07', 'IT skills matrix'],
		['PO08', 'Development standards'],
		['AI07', 'Post-implementation review']
	]
};

var in_11 = {
	id: 'in_11',
	proc: 'AI01',
	inputs: [
		['PO01','Strategic and tactical IT plans'],
		['PO03', 'Regular ‘state of technology’ updates; technology standards'],
		['PO08', 'Acquisition and development standards'],
		['PO10', 'Project management guidelines and detailed project plans'],
		['AI06', 'Change process description'],
		['DS01', 'SLAs'],
		['DS03', 'Performance and capacity plan (requirements)']
	]
};

var in_12 = {
	id: 'in_12',
	proc: 'AI02',
	inputs: [
		['PO02','Data dictionary; data classification scheme; optimised business system plan'],
		['PO03', 'Regular ‘state of technology’ updates'],
		['PO05', 'Cost-benefits reports'],
		['PO08', 'Acquisition and development standards'],
		['PO10', 'Project management guidelines; detailed project plans'],
		['AI01', 'Business requirements feasibility study'],
		['AI06', 'Change process description']
	]
};

var in_13 = {
	id: 'in_13',
	proc: 'AI03',
	inputs: [
		['PO03','Technology infrastructure plan, standards and opportunitites; regular ‘state of technology’ updates'],
		['PO08', 'Acquisition and development standards'],
		['PO10', 'Project management guidelines and detailed project plans'],
		['AI01', 'Business requirements feasibility study'],
		['AI06', 'Change process description'],
		['DS03', 'Performance and capacity plan (requirements)']
	]
};

var in_14 = {
	id: 'in_14',
	proc: 'AI04',
	inputs: [
		['PO10','Project management guidelines and detailed project plans'],
		['AI01', 'Business requirement feasibility study'],
		['AI02', 'Application and package software knowledge'],
		['AI03', 'Infrastructure knowledge'],
		['AI07', 'Known and accepted errors'],
		['DS07', 'Required documentation updates']
	]
};

var in_15 = {
	id: 'in_15',
	proc: 'AI05',
	inputs: [
		['PO01','IT acquisition strategy'],
		['PO08', 'Acquisition standards'],
		['PO10', 'Project management guidelines and detailed project plans'],
		['AI01', 'Business requirement feasibility study'],
		['AI02', 'Procurement decision'],
		['AI03', 'Procurement decision'],
		['DS02', 'Supplier catalogue']
	]
};

var in_16 = {
	id: 'in_16',
	proc: 'AI06',
	inputs: [
		['PO01','IT project portfolio'],
		['PO08', 'Quality improvement actions'],
		['PO09', 'IT-related risk remedial action plans'],
		['PO10', 'Project management guidelines and detailed project plan'],
		['DS03', 'Required changes'],
		['DS05', 'Required security changes'],
		['DS08', 'Service requests/requests for change'],
		['DS09', 'Requests for change (where and how to apply the fix)'],
		['DS10', 'Requests for change (where and how to apply the fix)'],
		['DS10', 'Problem records']
	]
};

var in_17 = {
	id: 'in_17',
	proc: 'AI07',
	inputs: [
		['PO03','Technology standards'],
		['PO04', 'Documented system owners'],
		['PO08', 'Development standards'],
		['PO10', 'Project management guidelines and a detailed project plan'],
		['AI03', 'Configured system to be tested/installed'],
		['AI04', 'User, operational, support, technical and administration manuals'],
		['AI05', 'Procured items'],
		['AI06', 'Change authorisation']
	]
};

var in_18 = {
	id: 'in_18',
	proc: 'DS01',
	inputs: [
		['PO01','Strategic and tactical IT plans, IT service portfolio'],
		['PO02', 'Assigned data classifications'],
		['PO05', 'Updated IT service portfolio'],
		['AI02', 'Initial planned SLAs'],
		['AI03', 'Initial planned OLAs'],
		['DS04', 'Disaster service requirements, including roles and responsibilities'],
		['ME01', 'Performance input to IT planning']
	]
};

var in_19 = {
	id: 'in_19',
	proc: 'DS02',
	inputs: [
		['PO01','IT sourcing strategy'],
		['PO08', 'Acquisition standards'],
		['AI05', 'Contractual arrangements, third-party relationship management requirements'],
		['DS01', 'SLAs, contract review report'],
		['DS04', 'Disaster service requirements, including roles and responsibilities']
	]
};

var in_20 = {
	id: 'in_20',
	proc: 'DS03',
	inputs: [
		['AI02','Availability, continuity and recovery specification'],
		['AI03', 'System monitoring requirements'],
		['DS01', 'SLAs']
	]
};

var in_21 = {
	id: 'in_21',
	proc: 'DS04',
	inputs: [
		['PO02','Assigned data classifications'],
		['PO09','Risk assessment'],
		['AI02', 'Availability, continuity and recovery specification'],,
		['DS01', 'SLAs and OLAs']
	]
};

var in_22 = {
	id: 'in_22',
	proc: 'DS05',
	inputs: [
		['PO02','Information architecture; assigned data classifications'],
		['PO03', 'Technology standards'],
		['PO09', 'Risk assessment'],
		['AI02', 'Application security controls specification'],
		['DS01', 'OLAs']
	]
};

var in_23 = {
	id: 'in_23',
	proc: 'DS06',
	inputs: [
		['PO04','Documented system owners'],
		['PO05', 'Cost-benefit reports, IT budgets'],
		['PO10', 'Detailed project plans'],
		['DS01', 'SLAs and OLAs']
	]
};

var in_24 = {
	id: 'in_24',
	proc: 'DS07',
	inputs: [
		['PO07','Users’ skills and competencies, including individual training; specific training requirements'],
		['AI04','Training materials, knowledge transfer requirements for solutions implementation'],
		['DS01', 'OLAs'],
		['DS05', 'Specific training requirements on security awareness'],
		['DS08', 'User satisfaction reports']
	]
};

var in_25 = {
	id: 'in_25',
	proc: 'DS08',
	inputs: [
		['AI04','User, operational, support, technical and administration manuals'],
		['AI06', 'Change authorisation'],
		['AI07', 'Released configuration items'],
		['DS01', 'SLAs and OLAs'],
		['DS04', 'Incident/disaster thresholds'],
		['DS05', 'Security incident definition'],
		['DS09', 'IT configuration/asset details'],
		['DS10', 'Known problems, known errors and workarounds'],
		['DS13', 'Incident tickets']
	]
};

var in_26 = {
	id: 'in_26',
	proc: 'DS09',
	inputs: [
		['AI04','User, operational, support, technical and administration manuals'],
		['AI07', 'Released configuration items'],
		['DS04', 'Criticality of IT configuration items']
	]
};

var in_27 = {
	id: 'in_27',
	proc: 'DS10',
	inputs: [
		['AI06','Change authorisation'],
		['DS08', 'Incident reports'],
		['DS09', 'IT configuration/asset details'],
		['DS13', 'Error logs']
	]
};

var in_28 = {
	id: 'in_28',
	proc: 'DS11',
	inputs: [
		['PO02','Data dictionary; assigned data classifications'],
		['AI04', 'User, operational, support, technical and administration manuals'],
		['DS01', 'OLAs'],
		['DS04', 'Backup storage and protection plan'],
		['DS05', 'IT security plan and policies']
	]
};

var in_29 = {
	id: 'in_29',
	proc: 'DS12',
	inputs: [
		['PO02','Assigned data classifications'],
		['PO08', 'Risk assessment'],
		['AI03', 'Physical environment requirements']
	]
};

var in_30 = {
	id: 'in_30',
	proc: 'DS13',
	inputs: [
		['AI04','User, operational, support, technical and administration manuals'],
		['AI07', 'Promotion to production and software release and distribution plans'],
		['DS01', 'SLAs and OLAs'],
		['DS04', 'Backup storage and protection plan'],
		['DS09', 'IT configuration/assets details'],
		['DS11', 'Operator instructions for data management']
	]
};

var in_31 = {
	id: 'in_31',
	proc: 'ME01',
	inputs: [
		['PO05', 'Cost-benefit reports'],
		['PO10', 'Project performance reports'],
		['AI06', 'Change status reports'],
		['DS01', 'Process performance reports'],
		['DS03', 'Peformance and capacity plan (requirements)'],
		['DS08', 'User satisfaction reports'],
		['DS13', 'Process performance reports'],
		['ME02', 'Report on effectiveness of IT controls'],
		['ME03', 'Report on compliance of IT activities with external legal and regulatory requirements']
		['ME04', 'Report on IT governance status']
	]
};

var in_32 = {
	id: 'in_32',
	proc: 'ME02',
	inputs: [
		['AI07','Internal control monitoring'],
		['ME01', 'Process performance report']
	]
};

var in_33 = {
	id: 'in_33',
	proc: 'ME03',
	inputs: [
		['*','Legal and regulatory compliance requirements'],
		['PE06', 'IT policies']
	]
};

var in_34 = {
	id: 'in_34',
	proc: 'ME04',
	inputs: [
		['PE04','IT process framework'],
		['PE05', 'Cost-benefit reports'],
		['PE09', 'Risk assessment and reporting'],
		['ME02', 'Report on effectiveness of IT controls'],
		['ME03', 'Catalogue of legal and regulatory requirements related to IT service delivery']
	]
};

exports.in_01 = in_01;
exports.in_02 = in_02;
exports.in_03 = in_03;
exports.in_04 = in_04;
exports.in_05 = in_05;
exports.in_06 = in_06;
exports.in_07 = in_07;
exports.in_08 = in_08;
exports.in_09 = in_09;
exports.in_10 = in_10;
exports.in_11 = in_11;
exports.in_12 = in_12;
exports.in_13 = in_13;
exports.in_14 = in_14;
exports.in_15 = in_15;
exports.in_16 = in_16;
exports.in_17 = in_17;
exports.in_18 = in_18;
exports.in_19 = in_19;
exports.in_20 = in_20;
exports.in_21 = in_21;
exports.in_22 = in_22;
exports.in_23 = in_23;
exports.in_24 = in_24;
exports.in_25 = in_25;
exports.in_26 = in_26;
exports.in_27 = in_27;
exports.in_28 = in_28;
exports.in_29 = in_29;
exports.in_30 = in_30;
exports.in_31 = in_31;
exports.in_32 = in_32;
exports.in_33 = in_33;
exports.in_34 = in_34;