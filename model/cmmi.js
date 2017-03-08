var cmmi_00 = {
	id: 'cmmi_00',
	title: 'Maturity Models',
	stitle: 'overview',
	comment: [
		'Senior managers in corporate and public enterprises are increasingly asked to consider how well IT is being managed. In response to this, business cases require development for improvement and reaching the appropriate level of management and control over the information infrastructure. While few would argue that this is not a good thing, they need to consider the cost-benefit balance and these related questions:',
		'• What are our industry peers doing, and how are we placed in relation to them?',
		'• What is acceptable industry good practice, and how are we placed with regard to these practices?',
		'• Based upon these comparisons, can we be said to be doing enough?',
		'• How do we identify what is required to be done to reach an adequate level of management and control over our IT processes?',
		'It can be difficult to supply meaningful answers to these questions. IT management is constantly on the lookout for benchmarking and self-assessment tools in response to the need to know what to do in an efficient manner. Starting from COBIT’s processes, the process owner should be able to incrementally benchmark against that control objective. This responds to three needs:',
		'1. A relative measure of where the enterprise is',
		'2. A manner to efficiently decide where to go',
		'3. A tool for measuring progress against the goal',
		'Maturity modelling for management and control over IT processes is based on a method of evaluating the organisation, so it can be rated from a maturity level of non-existent (0) to optimised (5). This approach is derived from the maturity model that the Software Engineering Institute (SEI) defined for the maturity of software development capability. Although concepts of the SEI approach were followed, the COBIT implementation differs considerably from the original SEI, which was oriented toward software product engineering principles, organisations striving for excellence in these areas and formal appraisal of maturity levels so that software developers could be ‘certified’. In COBIT, a generic definition is provided for the COBIT maturity scale, which is similar to CMM but interpreted for the nature of COBIT’s IT management processes. A specific model is provided from this generic scale for each of COBIT’s 34 processes. Whatever the model, the scales should not be too granular, as that would render the system difficult to use and suggest a precision that is not justifiable because, in general, the purpose is to identify where issues are and how to set priorities for improvements. The purpose is not to assess the level of adherence to the control objectives.',
		'The maturity levels are designed as profiles of IT processes that an enterprise would recognise as descriptions of possible current and future states. They are not designed for use as a threshold model, where one cannot move to the next higher level without having fulfilled all conditions of the lower level. With COBIT’s maturity models, unlike the original SEI CMM approach, there is no intention to measure levels precisely or try to certify that a level has exactly been met. A COBIT maturity assessment is likely to result in a profile where conditions relevant to several maturity levels will be met, as shown in the example graph in figure 11.',
		'This is because when assessing maturity using COBIT’s models, it will often be the case that some implementation will be in place at different levels even if it is not complete or sufficient. These strengths can be built on to further improve maturity. For example, some parts of the process can be well defined, and, even if it is incomplete, it would be misleading to say the process is not defined at all.'
	],
	image: '../images/figure11.png'
};

var cmmi_01 = {
	id: 'cmmi_01',
	title: 'Management',
	stitle: 'Management',
	comment: [
		'Using the maturity models developed for each of COBIT’s 34 IT processes, management can identify:',
		'• The actual performance of the enterprise—Where the enterprise is today',
		'• The current status of the industry—The comparison',
		'• The enterprise’s target for improvement—Where the enterprise wants to be',
		'• The required growth path between ‘as-is’ and ‘to-be’',
		'To make the results easily usable in management briefings, where they will be presented as a means to support the business case for future plans, a graphical presentation method needs to be provided (figure 12).',
		'The development of the graphical representation was based on the generic maturity model descriptions shown in figure 13.',
		'COBIT is a framework developed for IT process management with a strong focus on control. These scales need to be practical to apply and reasonably easy to understand. The topic of IT process management is inherently complex and subjective and, therefore, is best approached through facilitated assessments that raise awareness, capture broad consensus and motivate improvement. These assessments can be performed either against the maturity level descriptions as a whole or with more rigour against each of the individual statements of the descriptions. Either way, expertise in the enterprise’s process under review is required.',
		'The advantage of a maturity model approach is that it is relatively easy for management to place itself on the scale and appreciate what is involved if improved performance is needed. The scale includes 0 because it is quite possible that no process exists at all. The 0-5 scale is based on a simple maturity scale showing how a process evolves from a non-existent capability to an optimised capability.',
		'However, process management capability is not the same as process performance. The required capability, as determined by business and IT goals, may not need to be applied to the same level across the entire IT environment, e.g., not consistently or to only a limited number of systems or units. Performance measurement, as covered in the next paragraphs, is essential in determining what the enterprise’s actual performance is for its IT processes.',
		''
	],
	image: '../images/figure12.png'
};

var cmmi_02 = {
	id: 'cmmi_02',
	title: 'Non-Existent',
	comment: [
		'0 - <b>Non-existent</b> - Complete lack of any recognisable processes. The enterprise has not even recognised that there is an issue to be addressed.'
	]
};

var cmmi_03 = {
	id: 'cmmi_03',
	title: 'Initial/Ad Hoc',
	comment: [
		'1 - <b>Initial/Ad Hoc</b> - There is evidence that the enterprise has recognised that the issues exist and need to be addressed. There are, however, no standardised processes; instead, there are ad hoc approaches that tend to be applied on an individual or case-by-case basis. The overall approach to management is disorganised.'
	]
};

var cmmi_04 = {
	id: 'cmmi_04',
	title: 'Repeatable but Intuitive',
	comment: [
		'2 - <b>Repeatable but Intuitive</b> - Processes have developed to the stage where similar procedures are followed by different people undertaking the same task. There is no formal training or communication of standard procedures, and responsibility is left to the individual. There is a high degree of reliance on the knowledge of individuals and, therefore, errors are likely.'
	]
};

var cmmi_05 = {
	id: 'cmmi_05',
	title: 'Defined Process',
	comment: [
		'3 - <b>Defined Process</b> - Procedures have been standardised and documented, and communicated through training. It is mandated that these processes should be followed; however, it is unlikely that deviations will be detected. The procedures themselves are not sophisticated but are the formalisation of existing practices.'
	]
};

var cmmi_06 = {
	id: 'cmmi_06',
	title: 'Managed and Measurable',
	comment: [
		'4 -  <b>Managed and Measurable</b> - Management monitors and measures compliance with procedures and takes action where processes appear not to be working effectively. Processes are under constant improvement and provide good practice. Automation and tools are used in a limited or fragmented way.'
	]
};

var cmmi_07 = {
	id: 'cmmi_07',
	title: 'Optimised',
	comment: [
		'5 - <b>Optimised</b> - Processes have been refined to a level of good practice, based on the results of continuous improvement and maturity modelling with other enterprises. IT is used in an integrated way to automate the workflow, providing tools to improve quality and effectiveness, making the enterprise quick to adapt.'
	]
};

var cmmi_08 = {
	id: 'cmmi_08',
	title: 'Maturity',
	comment: [
		'Although a properly applied capability already reduces risks, an enterprise still needs to analyse the controls necessary to ensure that risk is mitigated and value is obtained in line with the risk appetite and business objectives. These controls are guided by COBIT’s control objectives. Appendix III provides a maturity model on internal control that illustrates the maturity of an enterprise relative to establishment and performance of internal control. Often this analysis is initiated in response to external drivers, but ideally it should be instituted as documented by COBIT processes PO6 Communicate management aims and directions and ME2 Monitor and evaluate internal control.',
		'Capability, coverage and control are all dimensions of process maturity, as illustrated in figure 14.',
		'The maturity model is a way of measuring how well developed management processes are, i.e., how capable they actually are. How well developed or capable they should be primarily depends on the IT goals and the underlying business needs they support. How much of that capability is actually deployed largely depends on the return an enterprise wants from the investment. For example, there will be critical processes and systems that need more and tighter security management than others that are less critical. On the other hand, the degree and sophistication of controls that need to be applied in a process are more driven by the enterprise’s risk appetite and applicable compliance requirements.',
		'The maturity model scales will help professionals explain to managers where IT process management shortcomings exist and set targets for where they need to be. The right maturity level will be influenced by the enterprise’s business objectives, the operating environment and industry practices. Specifically, the level of management maturity will depend on the enterprise’s dependence on IT, its technology sophistication and, most important, the value of its information.',
		'A strategic reference point for an enterprise to improve management and control of IT processes can be found by looking at emerging international standards and best-in-class practices. The emerging practices of today may become the expected level of performance of tomorrow and, therefore, are useful for planning where an enterprise wants to be over time.',
		'The maturity models are built up starting from the generic qualitative model (see figure 13) to which principles from the following attributes are added in an increasing manner through the levels:',
		'• Awareness and communication',
		'• Policies, plans and procedures',
		'• Tools and automation',
		'• Skills and expertise',
		'• Responsibility and accountability',
		'• Goal setting and measurement',
		'The maturity attribute table shown in figure 15 lists the characteristics of how IT processes are managed and describes how they evolve from a non-existent to an optimised process. These attributes can be used for more comprehensive assessment, gap analysis and improvement planning.'
	],
	image: '../images/figure14.png'
};

var cmmi_09 = {
	id: 'cmmi_09',
	title: 'Summary',
	comment: [
		'In summary, maturity models provide a generic profile of the stages through which enterprises evolve for management and control of IT processes. They are:',
		'• A set of requirements and the enabling aspects at the different maturity levels',
		'• A scale where the difference can be made measurable in an easy manner',
		'• A scale that lends itself to pragmatic comparison',
		'• The basis for setting as-is and to-be positions',
		'• Support for gap analysis to determine what needs to be done to achieve a chosen level',
		'• Taken together, a view of how IT is managed in the enterprise',
		'The COBIT maturity models focus on maturity, but not necessarily on coverage and depth of control. They are not a number for which to strive, nor are they designed to be a formal basis for certification with discrete levels that create thresholds that are difficult to cross. However, they are designed to be always applicable, with levels that provide a description an enterprise can recognise as best fitting its processes. The right level is determined by the enterprise type, environment and strategy.',
		'Coverage, depth of control, and how the capability is used and deployed are cost-benefit decisions. For example, a high level of security management may have to be focused only on the most critical enterprise systems. Another example would be the choice between a weekly manual review and a continuous automated control.',
		'Finally, whilst higher levels of maturity increase control over the process, the enterprise still needs to analyse, based on risk and value drivers, which control mechanisms it should apply. The generic business and IT goals defined in this framework will help with this analysis. The control mechanisms are guided by COBIT’s control objectives and focus on what is done in the process; the maturity models primarily focus on how well a process is managed. Appendix III provides a generic maturity model showing the status of the internal control environment and the establishment of internal controls in an enterprise.',
		'A properly implemented control environment is attained when all three aspects of maturity (capability, coverage and control) have been addressed. Improving maturity reduces risk and improves efficiency, leading to fewer errors, more predictable processes and a cost-efficient use of resources.'
	]
};

exports.cmmi_01 = cmmi_01;
exports.cmmi_02 = cmmi_02;
exports.cmmi_03 = cmmi_03;
exports.cmmi_04 = cmmi_04;
exports.cmmi_05 = cmmi_05;
exports.cmmi_06 = cmmi_06;
exports.cmmi_07 = cmmi_07;
exports.cmmi_08 = cmmi_08;
exports.cmmi_09 = cmmi_09;