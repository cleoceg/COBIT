var functions = {
	Roles: [
	{
		code: 'CEO',
		name: 'Chief Executive Officer'
	},
	{
		code: 'CFO',
		name: 'Chief Financial Officer'
	},
	{
		code: 'BE',
		name: 'Business Executive'
	},
	{
		code: 'CIO',
		name: 'Chief Information Officer'
	},
	{
		code: 'BPO',
		name: 'Business Process Owner'
	},
	{
		code: 'HO',
		name: 'Head Operations'
	},
	{
		code: 'CA',
		name: 'Chief Architect'
	},
	{
		code: 'HD',
		name: 'Head Development'
	},
	{
		code: 'HIA',
		name: 'Head IT Administration'
	},
	{
		code: 'PMO',
		name: 'Project Management Office'
	},
	{
		code: 'PBM',
		name: 'Problem Manager'
	},
	{
		code: 'CARS',
		name: 'Compliance, Audit, Risk and Security'
	},
        {
		code: 'DT',
		name: 'Deployment Team'
	},
        {
		code: 'TD',
		name: 'Training Department'
	},
        {
		code: 'SM',
		name: 'Service Manager'
	},
        {
		code: 'SDIM',
		name: 'Service Desk/Incident Manager'
	},
        {
		code: 'CM',
		name: 'Configuration Manager'
	},
        {
		code: 'BD',
		name: 'Board'
	}
    ]
};

var rac_01 = {
	id: 'rac_01',
	proc: 'PO01',
	activities: [
		{
			ac: 'Link business goals to IT goals.',
			raci: [{it:'C'}, {it:'I'}, {it:'A/R'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}]
		},
		{
			ac: 'Identify critical dependencies and current performance.',
			raci: [{it:'C'}, {it:'C'}, {it:'R'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Build an IT strategic plan.',
			raci: [{it:'A'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}]
		},
		{
			ac: 'Build IT tactical plans.',
			raci: [{it:'C'}, {it:'I'}, {it:''}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'I'}]
		},
		{
			ac: 'Analyse programme portfolios and manage project and service portfolios.',
			raci: [{it:'C'}, {it:'I'}, {it:'I'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'I'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_02 = {
	id: 'rac_02',
	proc: 'PO02',
	activities: [
		{
			ac: 'Create and maintain corporate/enterprise information model.',
			raci: [{it:''}, {it:'C'}, {it:'I'}, {it:'A'}, {it:'C'}, {it:''}, {it:'R'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Create and maintain corporate data dictionary(ies).',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:''}, {it:'A/R'}, {it:'R'}, {it:''}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Establish and maintain a data classification scheme.',
			raci: [{it:'I'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'R'}]
		},
		{
			ac: 'Provide data owners with procedures and tools for classifying information systems.',
			raci: [{it:'I'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'R'}]
		},
		{
			ac: 'Utilise the information model, data dictionary and classification scheme to plan optimised business systems.',
			raci: [{it:'C'}, {it:'C'}, {it:'I'}, {it:'A'}, {it:'C'}, {it:''}, {it:'R'}, {it:'C'}, {it:''}, {it:''}, {it:'I'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_03 = {
	id: 'rac_03',
	proc: 'PO03',
	activities: [
		{
			ac: 'Create and maintain a technology infrastructure plan.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'A'}, {it:''}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Create and maintain technology standards.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'I'}]
		},
		{
			ac: 'Publish technology standards.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'A'}, {it:''}, {it:'I'}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}]
		},
		{
			ac: 'Monitor technology evolution.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'A'}, {it:''}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Define (future) (strategic) use of new technology.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:''}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_04 = {
	id: 'rac_04',
	proc: 'PO04',
	activities: [
		{
			ac: 'Establish IT organisational structure, including committees and linkages to the stakeholders and vendors.',
			raci: [{it:'C'}, {it:'C'}, {it:'C'}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'I'}]
		},
		{
			ac: 'Design an IT process framework.',
			raci: [{it:'C'}, {it:'C'}, {it:'C'}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Identify system owners.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}]
		},
		{
			ac: 'Identify data owners.',
			raci: [{it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'C'}]
		},
		{
			ac: 'Establish and implement IT roles and responsibilities, including supervision and segregation of duties',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'A'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_05 = {
	id: 'rac_05',
	proc: 'PO05',
	activities: [
		{
			ac: 'Maintain the programme portfolio.',
			raci: [{it:'A'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}]
		},
		{
			ac: 'Maintain the project portfolio.',
			raci: [{it:'I'}, {it:'C'}, {it:'A/R'}, {it:'A/R'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}, {it:'I'}]
		},
		{
			ac: 'Maintain the service portfolio.',
			raci: [{it:'I'}, {it:'C'}, {it:'A/R'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}]
		},
		{
			ac: 'Establish and maintain the IT budgeting process.',
			raci: [{it:'I'}, {it:'C'}, {it:'C'}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		},
		{
			ac: 'Identify, communicate and monitor IT investments, cost and value to the business.',
			raci: [{it:'I'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_06 = {
	id: 'rac_06',
	proc: 'PO06',
	activities: [
		{
			ac: 'Establish and maintain an IT control environment and framework.',
			raci: [{it:'I'}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Develop and maintain IT policies.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Communicate the IT control framework and IT objectives and direction.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:''}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_07 = {
	id: 'rac_07',
	proc: 'PO07',
	activities: [
		{
			ac: 'Identify IT skills, position descriptions, salary ranges and personal performance benchmarks.',
			raci: [{it:''}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		},
		{
			ac: 'Execute HR policies and procedures relevant to IT (recruit, hire, vet, compensate, train, appraise, promote and dismiss).',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_08 = {
	id: 'rac_08',
	proc: 'PO08',
	activities: [
		{
			ac: 'Define a QMS.',
			raci: [{it:'C'}, {it:''}, {it:'C'}, {it:'A/R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'C'}]
		},
		{
			ac: 'Establish and maintain a QMS.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Build and communicate quality standards through the organisation.',
			raci: [{it:''}, {it:'I'}, {it:''}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Build and manage the quality plan for continuous improvement.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Measure, monitor and review compliance with the quality goals.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_09 = {
	id: 'rac_09',
	proc: 'PO09',
	activities: [
		{
			ac: 'Determine risk management alignment (e.g., assess risk).',
			raci: [{it:'A'}, {it:'R/A'}, {it:'C'}, {it:'C'}, {it:'R/A'}, {it:'I'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		},
		{
			ac: 'Understand relevant strategic business objectives.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'R/A'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Understand relevant business process objectives.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'R/A'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Identify internal IT objectives, and establish risk context.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'R/A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Identify events associated with objectives (some events are business-oriented [business is A]; some are IT-oriented [IT is A, business is C]).',
			raci: [{it:'I'}, {it:''}, {it:''}, {it:'A/C'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Assess risk associated with events.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/C'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Evaluate and select risk responses.',
			raci: [{it:'I'}, {it:'I'}, {it:'A'}, {it:'A/C'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Prioritise and plan control activities.',
			raci: [{it:'C'}, {it:'C'}, {it:'A'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Approve and ensure funding for risk action plans.',
			raci: [{it:''}, {it:'A'}, {it:'A'}, {it:''}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Maintain and monitor a risk action plan.',
			raci: [{it:'A'}, {it:'C'}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_10 = {
	id: 'rac_10',
	proc: 'PO10',
	activities: [
		{
			ac: 'Define a programme/portfolio management framework for IT investments.',
			raci: [{it:'C'}, {it:'C'}, {it:'A'}, {it:'R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Establish and maintain an IT project management framework.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Establish and maintain an IT project monitoring, measurement and management system.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}]
		},
                {
			ac: 'Build project charters, schedules, quality plans, budgets, and communication and risk management plans.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}]
		},
                {
			ac: 'Assure the participation and commitment of project stakeholders.',
			raci: [{it:'I'}, {it:''}, {it:'A'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Assure the effective control of projects and project changes.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'A/R'}, {it:'C'}]
		},
                {
			ac: 'Define and implement project assurance and review methods.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'A/R'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_11 = {
	id: 'rac_11',
	proc: 'AI01',
	activities: [
		{
			ac: 'Define business functional and technical requirements.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:''}, {it:'A/R'}, {it:'I'}]
		},
		{
			ac: 'Establish processes for integrity/currency of requirements.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:''}, {it:'A/R'}, {it:'C'}]
		},
                {
			ac: 'Identify, document and analyse business process risk.',
			raci: [{it:''}, {it:''}, {it:'A/R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:''}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Conduct a feasibility study/impact assessment in respect of implementing proposed business requirements.',
			raci: [{it:''}, {it:''}, {it:'A/R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Assess IT operational benefits of proposed solutions.',
			raci: [{it:''}, {it:'I'}, {it:'R'}, {it:'A/R'}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:''}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Assess business benefits of proposed solutions.',
			raci: [{it:''}, {it:''}, {it:'A/R'}, {it:'R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Develop a requirements approval process.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Approve and sign off on solutions proposed.',
			raci: [{it:''}, {it:'C'}, {it:'A/R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_12 = {
	id: 'rac_12',
	proc: 'AI02',
	activities: [
		{
			ac: 'Translate business requirements into high-level design specifications.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'C'}]
		},
		{
			ac: 'Prepare detailed design and technical software application requirements.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Specify application controls within the design.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:'C'}, {it:''}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'R'}]
		},
                {
			ac: 'Customise and implement acquired automated functionality.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:''}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Develop formalised methodologies and processes to manage the application development process.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Create a software QA plan for the project.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'C'}, {it:'R'}, {it:''}, {it:'A/R'}, {it:'C'}]
		},
                {
			ac: 'Track and manage application requirements.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:''}, {it:'A/R'}, {it:''}]
		},
                {
			ac: 'Develop a plan for the maintenance of software applications.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:''}, {it:'A/R'}, {it:''}, {it:'C'}, {it:''}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_13 = {
	id: 'rac_13',
	proc: 'AI03',
	activities: [
		{
			ac: 'Define the acquisition procedure/process.',
			raci: [{it:''}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}, {it:'I'}]
		},
		{
			ac: 'Discuss infrastructure requirements with (approved) vendors.',
			raci: [{it:''}, {it:'C/I'}, {it:''}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Define strategy and plan maintenance for infrastructure.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}]
		},
                {
			ac: 'Configure the infrastructure components.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_14 = {
	id: 'rac_14',
	proc: 'AI04',
	activities: [
		{
			ac: 'Develop a strategy to operationalise the solution.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'A'}, {it:'R'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:'I'}, {it:'R'}, {it:'C'}]
		},
		{
			ac: 'Develop a knowledge transfer methodology.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'R'}]
		},
                {
			ac: 'Develop end-user procedure manuals.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:''}]
		},
                {
			ac: 'Develop technical support documentation for operations and support staff.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:'C'}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:''}]
		},
                {
			ac: 'Develop and deliver training.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}]
		},
                {
			ac: 'Evaluate training results and enhance documentation as required.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:'A'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:'R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'DT',
                'TD'
	]	
};

var rac_15 = {
	id: 'rac_15',
	proc: 'AI05',
	activities: [
		{
			ac: 'Develop IT procurement policies and procedures aligned with procurement policies at the corporate level.',
			raci: [{it:'I'}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}, {it:''}, {it:'C'}]
		},
		{
			ac: 'Establish/maintain a list of accredited suppliers.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}]
		},
                {
			ac: 'Evaluate and select suppliers through a request for proposal (RFP) process.',
			raci: [{it:'C'}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Develop contracts that protect the organisation’s interests.',
			raci: [{it:'R'}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Procure in compliance with established procedures.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_16 = {
	id: 'rac_16',
	proc: 'AI06',
	activities: [
		{
			ac: 'Develop and implement a process to consistently record, assess and prioritise change requests.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Assess impact and prioritise changes based on business needs.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'R'}, {it:'A/R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Assure that any emergency and critical change follows the approved process.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'R'}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Authorise changes.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Manage and disseminate relevant information regarding changes.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_17 = {
	id: 'rac_17',
	proc: 'AI07',
	activities: [
		{
			ac: 'Build and review implementation plans.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Define and review a test strategy (entry and exit criteria) and an operational test plan methodology.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Build and maintain a business and technical requirements repository and test cases for accredited systems.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Perform system conversion and integration tests on test environment.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'I'}, {it:'C'}]
		},
                {
			ac: 'Deploy a test environment and conduct final acceptance tests.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'R'}, {it:'A'}, {it:'C'}, {it:'A/R'}, {it:''}, {it:'I'}, {it:'C'}]
		},
                {
			ac: 'Recommend promotion to production based on agreed-upon accreditation criteria.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'R'}, {it:'A'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:''}, {it:'I'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_18 = {
	id: 'rac_18',
	proc: 'DS01',
	activities: [
		{
			ac: 'Create a framework for defining IT services.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'R'}]
		},
		{
			ac: 'Build an IT service catalogue.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Define SLAs for critical IT services.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'A/R'}]
		},
                {
			ac: 'Define OLAs for meeting SLAs.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'A/R'}]
		},
                {
			ac: 'Monitor and report end-to-end service level performance.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'R'}, {it:''}, {it:'I'}, {it:'I'}, {it:''}, {it:'I'}, {it:'A/R'}]
		},
                {
			ac: 'Review SLAs and UCs.',
			raci: [{it:''}, {it:'I'}, {it:''}, {it:'I'}, {it:'C'}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}, {it:'A/R'}]
		},
                {
			ac: 'Review and update IT service catalogue.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Create service improvement plan.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'SM'
	]	
};

var rac_19 = {
	id: 'rac_19',
	proc: 'DS02',
	activities: [
		{
			ac: 'Identify and categorise third-party service relationships.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'A/R'}, {it:'C'}, {it:'C'}]
		},
		{
			ac: 'Define and document supplier management processes.',
			raci: [{it:''}, {it:'C'}, {it:''}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Establish supplier evaluation and selection policies and procedures.',
			raci: [{it:''}, {it:'C'}, {it:''}, {it:'A'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Identify, assess and mitigate supplier risks.',
			raci: [{it:''}, {it:'I'}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Monitor supplier service delivery.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'R'}, {it:'A'}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Evaluate long-term goals of the service relationship for all stakeholders.',
			raci: [{it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_20 = {
	id: 'rac_20',
	proc: 'DS03',
	activities: [
		{
			ac: 'Establish a planning process for the review of performance and capacity of IT resources.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}]
		},
		{
			ac: 'Review current IT resources’ performance and capacity.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}]
		},
                {
			ac: 'Conduct IT resources’ performance and capacity forecasting.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}]
		},
                {
			ac: 'Conduct gap analysis to identify IT resources mismatches.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'I'}]
		},
                {
			ac: 'Conduct contingency planning for potential IT resources unavailability.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}]
		},
                {
			ac: 'Continuously monitor and report the availability, performance and capacity of IT resources.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_21 = {
	id: 'rac_21',
	proc: 'DS04',
	activities: [
		{
			ac: 'Develop an IT continuity framework.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'R'}]
		},
		{
			ac: 'Conduct a business impact analysis and risk assessment.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Develop and maintain IT continuity plans.',
			raci: [{it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Identify and categorise IT resources based on recovery objectives.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'I'}]
		},
                {
			ac: 'Define and execute change control procedures to ensure that the IT continuity plan is current.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'A/R'}, {it:''}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Regularly test the IT continuity plan.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'I'}]
		},
                {
			ac: 'Develop a follow-on action plan from test results.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Plan and conduct IT continuity training.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'R'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'I'}]
		},
                {
			ac: 'Plan IT services recovery and resumption.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'C'}]
		},
                {
			ac: 'Plan and implement backup storage and protection.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'I'}]
		},
                {
			ac: 'Establish procedures for conducting post-resumption reviews.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:''}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_22 = {
	id: 'rac_22',
	proc: 'DS05',
	activities: [
		{
			ac: 'Define and maintain an IT security plan.',
			raci: [{it:'I'}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'R'}]
		},
		{
			ac: 'Define, establish and operate an identity (account) management process.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:'I'}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Monitor potential and actual security incidents.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'I'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'R'}]
		},
                {
			ac: 'Periodically review and validate user access rights and privileges.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}]
		},
                {
			ac: 'Establish and maintain procedures for maintaining and safeguarding cryptographic keys.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Implement and maintain technical and procedural controls to protect information flows across networks.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'R'}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Conduct regular vulnerability assessments.',
			raci: [{it:''}, {it:'I'}, {it:''}, {it:'A'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_23 = {
	id: 'rac_23',
	proc: 'DS06',
	activities: [
		{
			ac: 'Map the IT infrastructure to services provided/business processes supported.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		},
		{
			ac: 'Identify all IT costs (e.g., people, technology) and map them to IT services on a unit cost basis.',
			raci: [{it:''}, {it:'C'}, {it:''}, {it:'A'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		},
                {
			ac: 'Establish and maintain an IT accounting and cost control process.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		},
                {
			ac: 'Establish and maintain charging policies and procedures.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_24 = {
	id: 'rac_24',
	proc: 'DS07',
	activities: [
		{
			ac: 'Identify and characterise users’ training needs.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}]
		},
		{
			ac: 'Build a training programme.',
			raci: [{it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Conduct awareness, education and training activities.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Perform training evaluation.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Identify and evaluate best training delivery methods and tools.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'A/R'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'TD'
	]	
};

var rac_25 = {
	id: 'rac_25',
	proc: 'DS08',
	activities: [
		{
			ac: 'Create classification (severity and impact) and escalation procedures (functional and hierarchical).',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}, {it:'A/R'}]
		},
		{
			ac: 'Detect and record incidents/service requests/information requests.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}]
		},
                {
			ac: 'Classify, investigate and diagnose queries.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'I'}, {it:'A/R'}]
		},
                {
			ac: 'Resolve, recover and close incidents.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}, {it:''}, {it:'C'}, {it:'A/R'}]
		},
                {
			ac: 'Inform users (e.g., status updates).',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}]
		},
                {
			ac: 'Produce management reporting.',
			raci: [{it:'I'}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'I'}, {it:'A/R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'SDIM'
	]	
};

var rac_26 = {
	id: 'rac_26',
	proc: 'DS09',
	activities: [
		{
			ac: 'Develop configuration management planning procedures.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:''}, {it:'C'}, {it:'R'}]
		},
		{
			ac: 'Collect initial configuration information and establish baselines.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'I'}, {it:'A/R'}]
		},
                {
			ac: 'Verify and audit configuration information (includes detection of unauthorised software).',
			raci: [{it:''}, {it:'I'}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'I'}, {it:'A/R'}]
		},
                {
			ac: 'Update configuration repository.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'R'}, {it:'R'}, {it:'R'}, {it:''}, {it:''}, {it:'I'}, {it:'A/R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'CM'
	]	
};

var rac_27 = {
	id: 'rac_27',
	proc: 'DS10',
	activities: [
		{
			ac: 'Identify and classify problems.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'C'}, {it:'A'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'I'}, {it:'R'}]
		},
		{
			ac: 'Perform root cause analysis.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:''}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:'A/R'}]
		},
                {
			ac: 'Resolve problems.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:''}, {it:'R'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Review the status of problems.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:'R'}]
		},
                {
			ac: 'Issue recommendations for improvement, and create a related RFC.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:'I'}, {it:'I'}, {it:''}, {it:'I'}, {it:''}, {it:'R'}]
		},
                {
			ac: 'Maintain problem records.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:''}, {it:'I'}, {it:''}, {it:''}, {it:'I'}, {it:'A/R'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'PBM'
	]	
};

var rac_28 = {
	id: 'rac_28',
	proc: 'DS11',
	activities: [
		{
			ac: 'Translate data storage and retention requirements into procedures.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'I'}, {it:'C'}, {it:'R'}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Define, maintain and implement procedures to manage the media library.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'I'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Define, maintain and implement procedures for secure disposal of media and equipment.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'C'}, {it:'R'}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Back up data according to scheme.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Define, maintain and implement procedures for data restoration.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'I'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_29 = {
	id: 'rac_29',
	proc: 'DS12',
	activities: [
		{
			ac: 'Define the required level of physical protection.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Select and commission the site (data center, office, etc.).',
			raci: [{it:'I'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:''}, {it:'C'}, {it:'C'}, {it:'C'}]
		},
                {
			ac: 'Implement physical environment measures.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'I'}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Manage the physical environment (maintaining, monitoring and reporting included).',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Define and implement procedures for physical access authorisation and maintenance.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'C'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:''}, {it:'C'}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_30 = {
	id: 'rac_30',
	proc: 'DS13',
	activities: [
		{
			ac: 'Create/modify operations procedures (including manuals, checklists, shift planning, handover documentation, escalation procedures, etc.).',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Schedule workload and batch jobs.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Monitor infrastructure and processing, and resolve problems.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Manage and secure physical output (e.g., paper, media).',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Manage and secure physical output (e.g., paper, media).',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Implement/establish a process for safeguarding authentication devices against interference, loss and theft.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:'I'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Schedule and perform preventive maintenance.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_31 = {
	id: 'rac_31',
	proc: 'ME01',
	activities: [
		{
			ac: 'Establish the monitoring approach.',
			raci: [{it:''}, {it:'A'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'I'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:'I'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Identify and collect measureable objectives that support the business objectives.',
			raci: [{it:''}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:''}, {it:'R'}, {it:''}, {it:''}, {it:''}]
		},
                {
			ac: 'Create scorecards.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}]
		},
                {
			ac: 'Assess performance.',
			raci: [{it:''}, {it:''}, {it:'I'}, {it:'I'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:''}]
		},
                {
			ac: 'Report performance.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:'I'}]
		},
                {
			ac: 'Identify and monitor performance improvement actions.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:'R'}, {it:'R'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:''}, {it:'C'}]
		}
	],
	functions: [
                'BD',
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_32 = {
	id: 'rac_32',
	proc: 'ME02',
	activities: [
		{
			ac: 'Monitor and control IT internal control activities.',
			raci: [{it:''}, {it:''}, {it:''}, {it:''}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'R'}]
		},
                {
			ac: 'Monitor the self-assessment process.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Monitor the performance of independent reviews, audits and examinations.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'I'}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Monitor the process to obtain assurance over controls operated by third parties.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'A'}, {it:''}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Monitor the process to identify and assess control exceptions.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'A'}, {it:'I'}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Monitor the process to identify and remediate control exceptions.',
			raci: [{it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'A'}, {it:'I'}, {it:'R'}, {it:''}, {it:'R'}, {it:'R'}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Report to key stakeholders.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:''}, {it:'A/R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'I'}]
		}
	],
	functions: [
                'BD',
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS'
	]	
};

var rac_33 = {
	id: 'rac_33',
	proc: 'ME03',
	activities: [
		{
			ac: 'Define and execute a process to identify legal, contractual, policy and regulatory requirements.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'C'}, {it:'I'}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Evaluate compliance of IT activities with IT policies, plans and procedures.',
			raci: [{it:'I'}, {it:'I'}, {it:'I'}, {it:'A/R'}, {it:'I'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'R'}, {it:'I'}]
		},
                {
			ac: 'Report positive assurance of compliance of IT activities with IT policies, plans and procedures.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Provide input to align IT policies, plans and procedures in response to compliance requirements.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:'R'}, {it:''}]
		},
                {
			ac: 'Integrate IT reporting on regulatory requirements with similar output from other business functions.',
			raci: [{it:''}, {it:''}, {it:''}, {it:'A/R'}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}, {it:'I'}, {it:'R'}, {it:''}]
		}
	],
	functions: [
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
                'BD'
	]	
};

var rac_34 = {
	id: 'rac_34',
	proc: 'ME04',
	activities: [
		{
			ac: 'Establish executive and board oversight and facilitation over IT activities.',
			raci: [{it:'A'}, {it:'R'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Review, endorse, align and communicate IT performance, IT strategy, and resource and risk management with business strategy.',
			raci: [{it:'A'}, {it:'R'}, {it:'I'}, {it:'I'}, {it:'R'}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:''}, {it:'C'}]
		},
                {
			ac: 'Obtain periodic independent assessment of performance and compliance with policies, plans and procedures.',
			raci: [{it:'A'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: "Resolve findings of independent assessments, and ensure management's implementation of agreed-upon recommendations.",
			raci: [{it:'A'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'C'}, {it:''}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'R'}]
		},
                {
			ac: 'Generate an IT governance report.',
			raci: [{it:'A'}, {it:'C'}, {it:'C'}, {it:'C'}, {it:'R'}, {it:'C'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'I'}, {it:'C'}]
		}
	],
	functions: [
                'BD',
		'CEO',
		'CFO',
		'BE',
		'CIO',
		'BPO',
		'HO',
		'CA',
		'HD',
		'HIA',
		'PMO',
		'CARS',
	]	
};

exports.rac_01 = rac_01;
exports.rac_02 = rac_02;
exports.rac_03 = rac_03;
exports.rac_04 = rac_04;
exports.rac_05 = rac_05;
exports.rac_06 = rac_06;
exports.rac_07 = rac_07;
exports.rac_08 = rac_08;
exports.rac_09 = rac_09;
exports.rac_10 = rac_10;
exports.rac_11 = rac_11;
exports.rac_12 = rac_12;
exports.rac_13 = rac_13;
exports.rac_14 = rac_14;
exports.rac_15 = rac_15;
exports.rac_16 = rac_16;
exports.rac_17 = rac_17;
exports.rac_18 = rac_18;
exports.rac_19 = rac_19;
exports.rac_20 = rac_20;
exports.rac_21 = rac_21;
exports.rac_22 = rac_22;
exports.rac_23 = rac_23;
exports.rac_24 = rac_24;
exports.rac_25 = rac_25;
exports.rac_26 = rac_26;
exports.rac_27 = rac_27;
exports.rac_28 = rac_28;
exports.rac_29 = rac_29;
exports.rac_30 = rac_30;
exports.rac_31 = rac_31;
exports.rac_32 = rac_32;
exports.rac_33 = rac_33;
exports.rac_34 = rac_34;
