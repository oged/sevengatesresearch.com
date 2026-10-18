// Assos Tech Ltd website content. Plain engineering English. British spelling. No em dashes.

export const SITE = {
  name: 'Assos Tech',
  legalName: 'Assos Tech Ltd',
  tagline: 'Oil and gas engineering consultancy',
  line: 'Closer to the answer.',
  descriptor: 'Production, facilities and gas engineering for operators, developers and lenders. Onshore and offshore fields in the Middle East, the North Sea and West Africa.',
  url: 'https://assostechltd.com',
  email: 'allen@assostechltd.com',
  registeredIn: 'Scotland',
  companyNo: 'SC474633',
  registeredOffice: ['5 South Charlotte Street', 'Edinburgh, EH2 4AN', 'United Kingdom'],
  incorporated: '7 April 2014',
  year: 2026,
  lastmod: '2026-10-18',
};

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    slug: 'production-optimisation', numeral: '01', name: 'Production optimisation and deferment recovery',
    short: 'We find what is holding production back, put a number on it, and give each action an owner.',
    title: 'Production optimisation and deferment recovery',
    standfirst: 'We start from measured rates and an agreed baseline. We find where oil is being lost and which limit is binding. Then we rank the actions by barrels, cost and risk.',
    question: 'Where is production being lost, and what should we do first?',
    body: [
      'A mature field loses oil in several places at the same time. Backpressure in the gathering system. A choke blocked by scale. A train at its water limit. A pump out of service. A well waiting for a flowline test. If each team looks at its own part, you get a list of fixes and no ranking. We build the ranking.',
      'The rules are simple and we apply them every time. Each deferral is recorded against a well, a cause, a date and an owner. Oil and water are shown separately. Opportunities are tested against a decline case, not a flat one. A liquid capacity is never added to an oil total. A well moved between facilities is counted once. A well test rate is not an allocated rate.',
      'You get a register that operations, wells and projects can act on in the same week. Each item carries its production case, and the case stands up to challenge.',
    ],
    scopes: [
      ['Performance diagnosis', 'Well and facility surveillance, potential reconciliation, operating envelope review and a map of the limits across wells, gathering, separation, water and export.'],
      ['Deferral and capacity registers', 'Each record holds the cause, the date basis, gross potential, actual rate, deferred oil, associated water, the fix, cost, approval status, owner and target date.'],
      ['Routing and facility balance', 'When wells move between facilities we recompute both totals, show net additions separately from transfers, and follow the water to its disposal point.'],
      ['Opportunity maturation', 'Ranked tests, well work and facility changes, each with success criteria, a baseline and a check after the job that the gain held.'],
    ],
    outputs: ['Deferral register, oil and water by facility', 'Capacity opportunity list on a decline basis', 'Facility comparison tables: current, net change, after the move', 'Opportunity register with owners, cost, approval and target dates', 'Post-job check against the agreed baseline'],
    delivery: ['A first register and ranking takes four to eight weeks. We then refresh it weekly or fortnightly while the actions close. We work alongside your production, wells and projects teams and use your own exports as the single source for rates and status.'],
    cases: ['field-forecast-under-water-constraint', 'deferrals-with-a-water-column', 'north-sea-integrated-asset'],
    insight: 'liquid-is-not-oil',
    figure: 'chainCompact',
  },
  {
    slug: 'facilities-engineering', numeral: '02', name: 'Facilities engineering, commissioning and readiness',
    short: 'Concept reviews, P&ID checks, brownfield change control and restart plans with hold points.',
    title: 'Facilities engineering, commissioning and readiness',
    standfirst: 'Process and facilities engineering for plant that is already running. We review design bases, check P&IDs against the statement of requirements, and write commissioning and restart plans that move only on field-verified evidence.',
    question: 'Will the system work across its operating envelope, and is the plant ready to start?',
    body: [
      'A design review that repeats the consultant\'s conclusions is not a review. We test the package against the statement of requirements, the approved P&IDs, the operating limits, constructability, safety, maintainability and the scope interfaces. We follow the flow path across drawing sheets, not page by page. Continuation arrows, manifold layouts and battery limits are where the gaps hide.',
      'For commissioning and restart we write the sequence the way it will be done on site. Pre-start valve lists. Isolation and reinstatement. Process and flare route checks. Shutdown valve permissives and overrides. Hold points with stop criteria. Site sign-off at each step. A planned date stays a planned date. Nothing is called commissioned until the line status, the logs and operations approval say so.',
      'On concept studies we give one of four verdicts: approve, approve with conditions, hold, or do not approve. We list the missing items so the next revision can close them.',
    ],
    scopes: [
      ['P&ID and statement of requirements review', 'Document register and revisions. A traceability matrix from each requirement to the drawing and tag, with compliance, evidence and owner. A flow path trace across sheets. Comments ranked and written so they can be checked.'],
      ['Concept and pre-FEED review', 'Design basis, fluid and emulsion data, sizing checked against an operating train, utilities and energy, fouling and maintainability, seasonal envelope, construction windows and economics.'],
      ['Brownfield stage gates and change', 'Project initiation, terms of reference, concept, statement of requirements, define and execute, and management of change for minor work. We say what evidence each gate needs.'],
      ['Commissioning and restart plans', 'Phased introduction of wells and trains. Hold points with field-verified valve positions, communications, monitoring, differential pressure checks and stable receipt. Controlled handover to operations.'],
      ['Overpressure and relief', 'Blocked outlet cases, relief and vent backpressure, valve chatter and pilot-operated relief, checked against the current relief calculations and cause-and-effect for the train in question.'],
    ],
    outputs: ['Comment register with drawing, tag, evidence, severity and owner', 'Sign-off recommendation with hold points', 'Concept study verdict and list of items to close', 'Commissioning or restart procedure with hold points and stop criteria', 'Readiness checklist and handover evidence list'],
    delivery: ['A P&ID package review takes two to four weeks depending on the number of drawings. Restart and commissioning plans are developed with the plant team and issued as working drafts for site verification. We do not present a draft as issued for use.'],
    note: 'Safety-critical decisions and field work need approved site procedures, permits, risk assessments and the responsible technical authority. Our documents support that process. They do not replace it.',
    cases: ['transfer-line-first-flow', 'train-restart-in-four-phases', 'concept-study-not-yet-decision-grade', 'pid-review-across-drawings'],
    insight: 'a-planned-date-is-not-a-commissioning-date',
  },
  {
    slug: 'produced-water-and-integrity', numeral: '03', name: 'Produced water, flow assurance and flowline integrity',
    short: 'Water balances by route, scale confirmed before treatment, and one timeline per flowline.',
    title: 'Produced water, flow assurance and flowline integrity',
    standfirst: 'On a mature field, water handling, scale and flowline condition decide how much oil you can move. We build the water balance for each disposal route, confirm scale before anyone treats it, and keep replacement, service tests and risk on one timeline for each well.',
    question: 'If the oil moves, where does the water go, and will the line carry it?',
    body: [
      'Produced water is usually the first limit a brownfield project hits and the last one anyone models. Move wells or raise liquid throughput and the bottleneck shifts to a treatment skid, a disposal pump, an injection well or an evaporation pond. We track seven streams separately: water generated and separated by train; water treated or transferred; water injected for disposal; water re-injected for pressure support; water sent to ponds; oil-in-water excursions and recycles; and outages, pump availability and disposal pressure. Injectivity is taken at the actual wellhead pressure, never at nameplate.',
      'Scale work starts with the trends and ends with a post-job review. A rising differential pressure across a choke or a flowline is a hypothesis. Rate, temperature, choke position, reservoir change, emulsion, sand and instrument health all have to be ruled out before a flush or a workover is approved.',
      'Flowline integrity is run as a programme, not a list. For each line we hold the condition and risk from the integrity system, the service test history, the replacement scope and priority, and the survey, construction, completion, test and handover dates, planned against actual, joined to the well it serves.',
    ],
    scopes: [
      ['Water balance and disposal headroom', 'Oil, water and gas by facility. Available treatment and disposal by route. Where the shortfall is and which wells it affects.'],
      ['Produced water system review', 'Oil-in-water sampling and analysers, interface control in dehydrators and separators, transfer metering accuracy, N+1 pump capacity, and the fallback route when a pump trips or an injection well fails.'],
      ['Scale identification and treatment', 'Trend alerts, a location hypothesis (choke, flowline or both), field inspection and samples, chemistry and inhibitor history, a targeted work order, controlled treatment and a post-job review.'],
      ['Flowline replacement programme', 'Ranking by integrity risk, production value and overlap with other scope. Risk exports, service tests and replacement milestones brought into one record per well.'],
      ['Material and vendor references', 'Glass-reinforced epoxy and polymer line manuals are generic references until a line-specific rating, joint detail and material approval exist.'],
    ],
    outputs: ['Produced water balance by facility and route, with headroom', 'Water system problem register and options', 'Scale identification procedure and treatment schedule', 'Flowline programme tracker with planned and actual milestones', 'Integrity, service test and replacement timeline per well'],
    delivery: ['Water balances are built from your daily summaries and test data with a stated reference date. Scale and flowline registers are refreshed weekly during a campaign.'],
    cases: ['produced-water-where-it-goes', 'ranking-sixty-eight-kilometres-of-flowline', 'scale-is-a-diagnosis'],
    insight: 'produced-water-is-a-field-constraint',
    figure: 'waterRoutes',
  },
  {
    slug: 'wells-and-interventions', numeral: '04', name: 'Wells and interventions',
    short: 'Diagnosis first, then the programme, then a post-job result compared with the forecast.',
    title: 'Wells and interventions',
    standfirst: 'We support the full intervention cycle: the problem statement, the barrier and completion basis, the programme and its contingencies, campaign sequencing, and a post-job review that compares what the well did with what the programme promised.',
    question: 'What is wrong with the well, and what is the safest economic way back to production?',
    body: [
      'Well work competes for rigs, crews and capital. A treatment can be technically sound and still a poor investment if the impairment mechanism is uncertain, the barriers are not understood, or the flowline cannot take the fluids. We connect production engineering with integrity, completion condition, intervention access and the surface system the well flows into.',
      'We hold to one chain: reservoir potential, well potential, operating envelope, actual rate, deferment, root cause, action, recovered production. If a plan quotes a plateau, we divide it by the number of producers and ask whether any well on test has delivered that rate.',
      'Scope ranges from a review of one well to programme development, contractor evaluation, rig and workover scheduling, and a campaign register of planned against actual dates and rates.',
    ],
    scopes: [
      ['Diagnosis and screening', 'Surveillance and well history, barriers and completion, the impairment mechanism, the restart options and the evidence each needs.'],
      ['Programme development', 'Objectives, contingencies, success criteria, resources and the technical basis for the chosen job: water shut-off, scale treatment, stimulation, lift change-out or workover.'],
      ['Well delivery and scheduling', 'Rig and workover dates, planned against actual, each with its target rate and the basis for that number.'],
      ['Campaign and execution assurance', 'Sequencing, review of contractor proposals, readiness reviews, and a record of each post-job result against the forecast.'],
    ],
    outputs: ['Well diagnostic and option review', 'Intervention programme with contingencies and success criteria', 'Well delivery schedule with planned and actual dates', 'Readiness and assurance plan', 'Post-job technical and economic review'],
    delivery: ['Field services come through your own contracts or an agreed partner. Our part is the engineering judgement, the programme and the check afterwards.'],
    cases: ['intervention-decisions', 'scale-is-a-diagnosis', 'north-sea-integrated-asset'],
    insight: 'prove-the-well-before-the-tie-in',
  },
  {
    slug: 'gas-monetisation', numeral: '05', name: 'Gas monetisation and pipelines',
    short: 'Feed gas, product yield, plant fuel, line size and price in one balance, with the gaps listed.',
    title: 'Gas monetisation and pipelines',
    standfirst: 'We screen and mature gas projects in markets where the feed, the pipeline and the price are all moving: mini-LNG, CNG, gas-to-power and pipeline supply. Each case is tested against a material and energy balance and a financing case that says which inputs are still assumptions.',
    question: 'Which gas route makes money after fuel, recovery, transport and downtime, and what has to be true for a lender to accept it?',
    body: [
      'Nigeria produced about 7.5 billion cubic feet of gas a day in 2025 against a 2030 target of 12. It flared about 302 billion cubic feet between January 2025 and June 2026 (Decade of Gas Secretariat and NUPRC data as reported, 2026). The regulator says about half of the flare commercialisation awardees have made real progress. The domestic base price for power moved to USD 2.18 per MMBtu on 1 April 2026, and the government has said fixed pricing will end within two years. Each of these facts changes a project\'s cash flow. None of them sits inside a vendor\'s process guarantee.',
      'We connect the parts that are usually studied apart. Feed composition and liquids recovery set the product yield. Plant fuel and availability set what is left to sell. The pipeline or trucking route sets the delivered cost. The offtake terms and the price regime set the revenue. Where the balance does not close, we say so and list the measurements, laboratory results, vendor guarantees and agreements that would close it.',
      'Pipeline concepts start from the pressure envelope. A line size picked from a nominal flow rate alone is a guess. Minimum source pressure, required delivery pressure, demand variation and future capacity decide the diameter, or show that compression is needed.',
    ],
    scopes: [
      ['Route-to-market screening', 'Pipeline supply, small-scale LNG, CNG, liquids recovery and captive power compared on one basis: delivered cost, product specification, availability and counterparty.'],
      ['Feed and product basis', 'Gas characterisation, treatment requirements, product yield and the material and energy balance, with each input marked as measured, vendor-stated or assumed.'],
      ['Pipeline hydraulics and concept', 'Candidate diameters against pressure cases, velocity and erosion limits, and the interfaces for metering, safeguarding, pigging and corrosion control. A list of the data FEED will need.'],
      ['Commercial integration', 'Feed gas terms, offtake assumptions, capital and operating cost, financing sensitivities, and the gates between a screening case and an investment-ready project.'],
    ],
    outputs: ['Gas commercialisation option study', 'Feed, yield and energy balance basis', 'Pipeline hydraulic and operating case comparison', 'Project economics with sensitivities', 'Evidence and decision gate register'],
    delivery: ['Concept and pre-FEED studies are issued as conceptual, not for construction. Modelled returns are screening results until the technical and commercial gaps are closed.'],
    cases: ['gas-pipeline-pressure-defines-diameter', 'mini-lng-balance'],
    insight: 'what-makes-a-concept-study-decision-grade',
    figure: 'gasChain',
  },
  {
    slug: 'technical-due-diligence', numeral: '06', name: 'Technical due diligence and economics',
    short: 'An independent view of an asset before the money moves, with every number sourced and dated.',
    title: 'Technical due diligence and economics',
    standfirst: 'For buyers, lenders and boards. Does the value survive a realistic view of production, cost, water, integrity and execution? We keep the technical case separate from the financing structure and say how good the evidence is behind each assumption.',
    question: 'Does the value survive a realistic view of production, cost and execution?',
    body: [
      'Asset transfers are where technical optimism meets a term sheet. In Nigeria, indigenous operators now produce more than half of the crude after the 2024 and 2025 divestments, and the 2026 decommissioning regulations tie approved abandonment plans to annual fund contributions. In the UK, decommissioning spend reached GBP 2.6 billion in 2025 and the regulator expects about GBP 3 billion a year to 2032, with sellers keeping part of the well liability (NSTA, 13 August 2026). A buyer who inherits high water cut, ageing flowlines and a decommissioning fund needs the engineering priced, not described.',
      'We keep the distinctions that move value: nameplate capacity against reliable throughput; production against sales against cash collected; resources against reserves; log permeability against well test kh; a history match against a credible forecast; a design basis against the operating envelope; a removed bottleneck against a solved system.',
      'Each finding is written as evidence, consequence, recommended action and owner, with a severity rating. Where a risk can be handled in the contract, we name the mechanism: condition precedent, escrow, retention, earn-out, warranty, price adjustment or staged funding.',
    ],
    scopes: [
      ['Asset and acquisition reviews', 'Data room review, the gaps that move value, and a test of the production, water, integrity and cost assumptions behind the purchase case.'],
      ['Project economics', 'Cash flow models with volumes, prices, tariffs, capital by class and timing, fixed and variable operating cost by currency, fiscal terms, abandonment and financing. NPV, break-even, unit cost and cover ratios where there is debt.'],
      ['Independent technical opinions', 'Scoped opinions on development concepts, performance assumptions, technical risk and project readiness, with the reliance terms stated.'],
      ['Lender and board support', 'Decision papers, data room question lists, evidence registers, value-of-information ranking and technical input to negotiations.'],
    ],
    outputs: ['Technical due diligence report with findings ranked by severity', 'Economic model with sensitivity and break-even cases', 'Evidence register: fact, management claim, estimate, inference', 'Decision paper and data room question list'],
    delivery: ['A data room review for one producing asset takes three to six weeks. Reports carry an Important Notice that states scope, the basis of information, and reliance limited to the named client.'],
    note: 'Reserves certification, competent person reports and formal expert roles need a separate scope and qualified signatories. We do not give legal opinions.',
    cases: ['mini-lng-balance', 'concept-study-not-yet-decision-grade'],
    insight: 'what-makes-a-concept-study-decision-grade',
  },
  {
    slug: 'operations-data', numeral: '07', name: 'Operations data and decision systems',
    short: 'One answer per well, with its source and date. History kept on every refresh.',
    title: 'Operations data and decision systems',
    standfirst: 'We turn daily exports, controlled drawings, test reports and correspondence into one record for operations, engineering and management: the current state with its sources, an event log, a profile for each well and a data health report, refreshed on a cadence the field can keep up.',
    question: 'What is the well doing now, where is it routed, how sure are we, and what changed since last week?',
    body: [
      'On a large field the answer to a simple question sits in six spreadsheets with three different dates. A status export says flowing. A routing list says shut in. A planning file says the well moved last month. If the newest file wins every argument, you get the wrong answer. If each fact is taken from the most authoritative source for that fact, with its date, you get the right answer and you can see the conflicts that remain.',
      'We build five layers: current (the latest accepted value per field with its date), context (linked tests, work orders, integrity records and limits), history (dated observations and milestones), changes (what moved since the last refresh, including source conflicts) and sources (file, revision, owner, date, authority and confidence). A well profile reads in four views: now, context, history, changes, with the key risks at the end.',
      'The system can be a SQLite and JSON package behind a browser view, a Power BI model, or a hosted database with an API. The software matters less than the rules: keep history, never erase an unrelated domain on refresh, show how fresh each domain is, and never swap a test value for an allocated rate without saying so.',
    ],
    scopes: [
      ['Data model and precedence rules', 'Canonical entities (well, facility, train, manifold, flowline, project, work order, source), aliases and de-duplication, field-level authority and effective-date rules, confidence and conflict flags.'],
      ['Well profiles and console', 'Identity and status, a short summary, routing against home facility, flowline integrity and replacement, operations and interventions, timeline and changes, ranked risks.'],
      ['Registers and management outputs', 'Deferral registers, planned against current well rates, facility capacity opportunities on a decline basis, scenario tables and handover schedules.'],
      ['Process knowledge graph', 'Facility flow diagrams and P&IDs stitched into one graph. Designed, as-built, temporary, planned, isolated and flowing connections kept distinct, each with its drawing, revision and confidence.'],
      ['Refresh and data health', 'Ingestion by file hash and date. Checks on units, duplicates, mass balance and freshness. Snapshots that are never overwritten. Change events and a data health report with the open conflicts.'],
    ],
    outputs: ['Data model, precedence rules and source register', 'Well profile and console (browser, Power BI or both)', 'Deferral, capacity and forecast registers', 'Process graph and stitched facility schematic', 'Refresh procedure and data health report'],
    delivery: ['Built from your own exports and drawings. We prefer a weekend refresh for most domains, with well status refreshed more often. The data-as-of date is shown separately from the refresh date.'],
    cases: ['one-answer-per-well', 'deferrals-with-a-water-column', 'pid-review-across-drawings'],
    insight: 'the-bottleneck-moves',
  },
];

/* ------------------------------------------------------------------ */
/* CASES (anonymised)                                                  */
/* ------------------------------------------------------------------ */

const ME = 'Onshore oil field, Middle East';
const ENG = 'Operator engagement';
const STUDY = 'Assos study';
const PRAC = 'Practitioner experience';

export const CASES = [
  {
    slug: 'field-forecast-under-water-constraint', numeral: '01', category: 'Operations', short: 'Field forecast',
    region: 'Middle East', setting: ME, stage: 'Producing field, five processing facilities', basis: ENG, period: '2026',
    title: 'Field forecast to 2029 with water limits',
    sub: 'A three-scenario oil and water forecast across five central processing facilities, with transfer line, facility and disposal limits applied to every well and each well counted once.',
    problem: [
      'The northern half of the field feeds five central processing facilities. Two transfer lines, rated at 40 and 50 thousand barrels a day of liquid, let wells move between them. Management wanted to know how much oil the network could sustain each year to 2029 under three cases: no transfers, transfers only, and transfers with optimisation.',
      'The existing spreadsheets could not answer it. They added the 50 thousand barrel liquid capacity to an oil total, counted moved wells at both facilities, and used a planned commissioning date as the date the line was available. The field total did not reconcile.',
    ],
    work: [
      'We built the forecast workbook from the operator\'s allocation export at one reference date. Every well carried a home facility, a current facility, blended oil and water rates, and a decline. Each scenario was a set of dated switches: facility oil and water limits (200 and 220 thousand barrels a day at facility A from the second quarter of 2027, 207 and 117 at B, 70 and 37 at C, 245 oil at D from the fourth quarter of 2027), transfer line liquid capacities of 40 and 50 thousand barrels a day, and the dates new tankage and water routes were assumed available.',
      'The allocation logic applied every limit at the same time: liquid on the transfer line, oil and water at the receiving facility, and disposal downstream. A well appeared once. The output separated gross oil moved, net oil gained, oil deferred, water displaced and extra water generated. A validation sheet checked conservation of oil, water and gas across every move, double counting, limit breaches, switch dates and zero or missing wells. The workbook, a methodology note, a report and a management presentation were issued together from one number ledger.',
    ],
    figure: 'capacityBalance',
    result: [
      'Management had a range by facility and by year instead of one number. The forecast showed that the second transfer line moved the binding limit from the sending facility\'s oil capacity to the receiving facility\'s water capacity. The recommendation was to bring the water treatment and disposal schedule forward and not to add transfer capacity.',
    ],
    conclusion: {
      summary: 'The job was to give management a forecast to 2029 that reconciled and showed where the limit was. It did. The workbook closes to zero on conservation, each well is allocated once, and the three scenarios differ only by dated switches. The finding that water, not transfer capacity, binds at three of four facilities changed the order of the operator\'s project list.',
      criteria: ['Oil, water and gas conserved across every transfer, checked to zero on the validation sheet', 'Every well allocated to one facility in every month of every scenario', 'Scenarios differ only by the declared switches, each with a date and a source', 'The binding limit at each facility readable by year without opening the model'],
      achieved: ['All four checks pass on the issued workbook; the validation sheet is part of the deliverable', 'Scenario tables to 2029 issued by facility for oil, water and gas', 'The water finding changed the order of the operator\'s project list: water treatment and disposal ahead of further transfer capacity', 'Capacities labelled as planning inputs dated September 2026 on every table'],
    },
    deliverables: ['Forecast workbook with scenario switches, decline and single-allocation logic', 'Validation sheet: conservation, double counting, limits and phase-in checks', 'Scenario tables to 2029 by facility: oil, water, gas', 'Methodology note, report and management presentation'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. The client, the field and the facilities are not named. Capacities are planning assumptions from the forecast exercise, dated September 2026, not published operating limits.',
    service: 'production-optimisation',
  },
  {
    slug: 'transfer-line-first-flow', numeral: '02', category: 'Facilities', short: 'Transfer line',
    region: 'Middle East', setting: ME, stage: 'Concept to first flow', basis: ENG, period: '2026',
    title: 'A new 16-inch transfer line, from concept to first flow',
    sub: 'We set the concept, worked the design through with the operator and the vendor, wrote the commissioning procedure with five hold points, supported execution and brought the line into service.',
    problem: [
      'One processing facility and its satellite were at their oil and water limits while a third facility had spare treatment capacity. A 16-inch transfer line between them would let wells move to where the capacity was. The operator needed the line taken from an idea to a flowing line without a trip at the receiving facility, and with the volumes it would move stated honestly.',
    ],
    work: [
      'Concept. We set the routing, the tie-in points at both ends, the receiving train and manifold, and the design flow and pressure cases. The statement of requirements and the concept scheme went to the vendor for detailed design.',
      'Design. We reviewed the vendor\'s P&IDs, isometrics and tie-in surveys against the statement of requirements, traced the flow path across sheets, and closed the comment register with the operator and the vendor before issue for construction.',
      'Commissioning. We wrote the procedure around five hold points, each released only on evidence from the field: valve line-up confirmed by walk-down; an open path proved from source to receiving facility; communications and monitoring in place; differential pressure checked across the line; stable receipt at the destination. One well was named for first flow. Two wells on the receiving train were shut in for the period of the transfer to make room. The planned moves were 8.8 thousand barrels of oil and 13.1 thousand barrels of water a day.',
      'Execution. We supported the walk-down, the first-flow operation and the stabilisation period, then the transfer of the remaining wells one at a time.',
    ],
    result: [
      'The line was brought into service and the planned wells were moved across. The receiving facility took the extra water without a trip. The line was recorded as commissioned only when the service test, the line status and operations approval were all in place.',
    ],
    conclusion: {
      summary: 'The objective was a new 16-inch line in service without a trip at the receiving facility, with the volumes it moved stated honestly. Both were achieved. The line reached first flow on the named well, the remaining wells moved across one at a time, the two temporary shut-ins were restored, and the moved volumes were reported from the allocation export rather than from the plan.',
      criteria: ['First flow achieved through the new line with no trip at the receiving facility', 'Each hold point released on recorded evidence, with sign-off', 'The two temporary shut-ins returned to production after the transfer', 'Moved volumes reported from the allocation export, not from the plan'],
      achieved: ['First flow completed on the named well, and the remaining wells transferred one at a time with the facility stable between moves', 'Hold point records and sign-offs filed with the commissioning dossier', 'The shut-in wells restored once the receiving train had absorbed the transferred water', 'Planned figures of 8.8 and 13.1 thousand barrels a day kept as plan values; actuals taken from the allocation export after the event'],
    },
    deliverables: ['Concept scheme and statement of requirements', 'Design comment register, closed with the operator and the vendor', 'Commissioning procedure with five hold points and stop criteria', 'Valve line-up, isolation and reinstatement lists', 'Commissioning dossier with hold point records'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Well identifiers, facility names, the vendor and the operator are not named. Planned volumes are from the commissioning plan. Actual volumes are in the operator\'s allocation records and are not quoted here.',
    service: 'facilities-engineering',
  },
  {
    slug: 'train-restart-in-four-phases', numeral: '03', category: 'Facilities', short: 'Train restart',
    region: 'Middle East', setting: ME, stage: 'Restart after turnaround', basis: ENG, period: '2026',
    title: 'Restarting a processing train in four phases',
    sub: 'A plan to bring a train back to about 87 thousand barrels of oil a day and 35 thousand barrels of water, one well at a time, with checks between phases and a hold on any abnormal condition.',
    problem: [
      'After a turnaround, a processing train had to be returned to service with all its wells. Opening them together risked slugging, carry-over to the tank vents and flare, unstable dehydrator interfaces and an emergency shutdown that would cost more days than a slow start. The weak natural flow wells needed nitrogen lift or flowback support before they would flow.',
    ],
    work: [
      'We grouped the wells into four phases by rate, water cut and lift. Planned oil increments were 21.7, 22.3, 22.1 and 20.5 thousand barrels a day. Planned water increments were 2.5, 4.2, 18.0 and 10.5 thousand barrels a day. Wells came on one at a time, about fifteen minutes apart, with the control room confirming inlet pressure, separator levels, tank levels and vents, dehydrator and desalter interface, and flare behaviour before the next well. Phase three carried half the water and was given the longest stabilisation window. The procedure set the condition that would hold the sequence and named the facility manager as the person who released it.',
    ],
    figure: 'restartPhases',
    result: [
      'The train was restarted in sequence to the plan. The control room had a number to check against at each step and management could see where the water would arrive and when.',
    ],
    conclusion: {
      summary: 'The objective was to return the train to about 87 thousand barrels of oil a day without an emergency shutdown during the restart. It was achieved. The four phases ran in sequence, each held until pressure, levels, interface and flare were stable, and the rates were confirmed from the allocation export afterwards. The operator kept the procedure as its template.',
      criteria: ['Train returned to service with no emergency shutdown during the restart', 'Each phase stable on pressure, levels, interface and flare before the next began', 'Oil and water back to the planned 86.6 and 35.2 thousand barrels a day', 'Plan values and actual rates kept separate in reporting'],
      achieved: ['Restart completed phase by phase without a trip', 'Phase checklists completed and signed at each step', 'Rates confirmed from the allocation export after the restart rather than from the plan', 'The procedure retained by the operator as the template for later train restarts'],
    },
    deliverables: ['Four-phase restart procedure with well sequence and timing', 'Phase checklists: pressure, levels, vents, treatment, flare', 'Stop criteria and approval points', 'Management summary with plan values labelled'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Plan values are from the restart document. Actual rates are in the operator\'s records and are not quoted here. Operator and facility not named.',
    service: 'facilities-engineering',
  },
  {
    slug: 'produced-water-where-it-goes', numeral: '04', category: 'Water and integrity', short: 'Produced water balance',
    region: 'Middle East', setting: ME, stage: 'Producing field, water system planning', basis: ENG, period: '2025 to 2026',
    title: 'A produced water balance for a water-flooded field',
    sub: 'Seven water streams tracked separately at each facility, disposal headroom taken at actual injection pressure, and the oil effect of each water limit stated.',
    problem: [
      'The field produced water at rates close to its oil. Disposal into a shallow formation, re-injection for pressure support and evaporation ponds each had their own capacity, availability and reliability. Operating plans treated water capacity as one number. An earlier terms of reference had listed the known problems: interface control in the dehydrators, oil-in-water measurement, meter coverage, installed pump capacity, single-pump stability, and oil recovery from the ponds and drains.',
    ],
    work: [
      'We built the balance for each facility from the daily water summaries, the well tests and the pump logs. Seven streams were carried separately: water separated by train; water treated or transferred to disposal; water injected into disposal wells; water re-injected; water sent to ponds; oil-in-water excursions and recycled oil; and pump outages and disposal pressure. Disposal headroom was taken from the injection wells at their actual wellhead pressure, not from nameplate. A 2020 investment paper\'s requirement for 23 disposal wells was broken down into 11 for added capacity, 7 for N+1 cover and 5 replacements, and carried as a dated planning basis.',
      'Each water limit was then written against its upstream effect: the wells, by facility, that would be cut back if a transfer pump tripped or an injection well lost injectivity.',
    ],
    figure: 'waterRoutes',
    result: [
      'The operator\'s optimisation cases were tested against the water routes they would load, not against one water number. The evaporation route was shown as its own stream so it was never counted as disposal.',
    ],
    conclusion: {
      summary: 'The objective was a water balance the operator could test its optimisation cases against, with disposal headroom stated at real pressure. It was achieved. The balance closes by facility with the error shown, the headroom table carries a pressure and a date for every injection well, and two routing cases were withdrawn because the balance showed the disposal pumps could not take the water.',
      criteria: ['Water balance closes at each facility between separated, treated, disposed, re-injected and ponded water', 'Disposal headroom stated at actual pressure, with the date of the pressure reading', 'Every optimisation case checked against the water route it loads', 'Each water limit carries the oil that depends on it'],
      achieved: ['Balance issued by facility with the closing error shown, and refreshed weekly from the daily summaries', 'Headroom table issued with pressure, date and source for every injection well', 'Two routing cases withdrawn when the balance showed the disposal pumps could not take the water', 'Limit-to-production table adopted in the operator\'s weekly capacity review'],
    },
    deliverables: ['Produced water balance by facility and route', 'Disposal headroom table at actual pressure', 'Water system problem register with checks and owners', 'Table of each water limit and the production that depends on it'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Historic documents (a 2019 scheme, a 2020 terms of reference, a 2020 investment paper) were used as dated engineering context, not as current facts. Operator and facilities not named.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'concept-study-not-yet-decision-grade', numeral: '05', category: 'Facilities', short: 'Concept study review',
    region: 'Middle East', setting: ME, stage: 'Concept study review', basis: ENG, period: '2026',
    title: 'Review of a water knockout and treatment concept',
    sub: 'An independent review of a consultant\'s concept study for free water knockout and produced water treatment at one facility, with a verdict and a numbered list of items to close.',
    problem: [
      'A consultant proposed free water knockout and produced water treatment at one facility to improve crude quality and relieve the dehydration train. The study assumed a high-asphaltene reservoir blend and a water cut of up to 80 per cent. Management needed to know whether to take the concept to the next stage gate and what it would cost in time to make it fit for that decision.',
    ],
    work: [
      'We reviewed the study against the operating record of the facility, the performance of the existing dehydration train, and the produced water balance. Nine items were missing or asserted without data: the recoverable oil and deferral benefit; field fluid, emulsion and bottle test data to support the chemical programme; separator sizing checked against an operating train in the same field; integration with disposal, re-injection, ponds and transfer lines; fouling of internals, sand, scale and pressure drop; maintainability; heating, energy, control and reliability; the seasonal performance envelope with construction and shutdown windows; and the project economics. We also flagged that the 80 per cent water cut and the asphaltene blend were study assumptions, not field measurements.',
    ],
    result: [
      'Verdict: hold. The concept was sound in principle and not ready for a spending decision. We issued the nine items as a numbered list with an owner and a data source for each, and recommended that hybrid cases combining internals, chemistry and selective heating be studied alongside the base case.',
    ],
    conclusion: {
      summary: 'The objective was a verdict the stage gate could act on and a list that told the consultant what to close. Both were delivered three weeks after receipt. The verdict was hold. The nine items were assigned to owners, fluid sampling and bottle tests started first, and the study assumptions were recorded as assumptions in the operator\'s basis register.',
      criteria: ['A clear verdict from the four available: approve, approve with conditions, hold, do not approve', 'Every gap stated with the data that would close it and who holds that data', 'Study assumptions kept separate from field measurements in all downstream documents', 'The review delivered inside the stage gate calendar'],
      achieved: ['Verdict of hold issued with the nine-item list in the review memorandum', 'Each item assigned to an owner; fluid sampling and bottle tests started as the first two', 'The 80 per cent water cut and the blend recorded as study assumptions in the operator\'s basis register', 'Review issued three weeks after receipt of the study, ahead of the gate meeting'],
    },
    deliverables: ['Review memorandum with verdict and conditions', 'Numbered list of items to close, with owners and data sources', 'Register of study assumptions against field measurements', 'Recommended alternative cases for the next revision'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. The study, the consultant and the facility are not named. The verdict applies to the revision reviewed.',
    service: 'facilities-engineering',
  },
  {
    slug: 'ranking-sixty-eight-kilometres-of-flowline', numeral: '06', category: 'Water and integrity', short: 'Flowline programme',
    region: 'Middle East', setting: ME, stage: 'Integrity programme', basis: ENG, period: '2025 to 2026',
    title: 'One record per well for a 68-kilometre flowline programme',
    sub: 'A flowline replacement programme brought from five workbooks into one record per well: risk, service test, replacement scope, construction and handover, planned against actual.',
    problem: [
      'A 2021 decision paper had identified about 67.7 kilometres of flowline for proactive replacement, ranked by integrity risk, production value and overlap with other project scope. By 2026 the programme lived in five sources: a master project tracker revised every few days, a pipeline risk export, a six-month service test summary, the well services schedule and the operator\'s well status export. The same well could show a planned handover date in one file and an unfinished service test in another. Operations asked about individual wells every week and got different answers.',
    ],
    work: [
      'We merged the five sources into one record per flowline and well: identifier, material, diameter, length, origin and destination; current risk and probability of failure from the integrity export; service test history and the latest result; replacement scope, priority, survey, clearance, construction, mechanical completion, service test and handover milestones, planned and actual; corrosion and scale threat and treatment; and the integrity hold and the evidence for release to service. Precedence was fixed field by field. The integrity export governed risk. The signed test record governed test position. The project tracker governed milestones. Rows that disagreed went to an exception list with an owner.',
    ],
    result: [
      'A question about any well was answered from one page with the source and date of each item. Handover dates that had slipped showed against actuals. A line with a failed or pending service test could no longer be reported as complete because a construction milestone had passed.',
    ],
    conclusion: {
      summary: 'The objective was one answer per well for the flowline programme, reconciled to the five source files. It was achieved. The record is refreshed weekly, lines with pending tests are flagged, three lines previously reported complete were reclassified, and the planned against actual view is used in the weekly delivery meeting.',
      criteria: ['One record per well that reconciles to the five source files', 'No line reported as in service without a signed service test', 'Planned and actual milestone dates held in separate fields', 'Exceptions listed with an owner rather than resolved silently'],
      achieved: ['Record issued and refreshed weekly from the five sources by file date', 'Lines with pending tests flagged on the record; three lines previously reported complete were reclassified', 'Planned against actual view issued for the programme and used in the weekly delivery meeting', 'Exception list of duplicate rows, inconsistent dates and stale exports issued with owners and cleared over the following refreshes'],
    },
    deliverables: ['Flowline programme record per well with source fields', 'Planned against actual milestone view', 'Integrity, test and replacement timeline per well', 'Exception list with owners'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. The 67.7 kilometre figure is from the 2021 decision paper and describes the candidate list at that date. Operator not named.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'scale-is-a-diagnosis', numeral: '07', category: 'Water and integrity', short: 'Scale procedure',
    region: 'Middle East', setting: ME, stage: 'Producing field, flow assurance', basis: ENG, period: '2026',
    title: 'A field procedure for confirming scale before treating it',
    sub: 'A written workflow from pressure trend to field confirmation to targeted treatment to post-job review, adopted as the operator\'s surface scale identification procedure.',
    problem: [
      'Carbonate, sulphate, iron sulphide and mixed scale were restricting chokes and flowlines across the field. A rising differential pressure was being read as proof of scale and flushes were scheduled on that alone. Some of those lines had a rate change, a temperature change or an instrument fault instead, and the flush achieved nothing. Flushing crews and chemicals were being spent on the wrong wells.',
    ],
    work: [
      'We wrote the workflow with the operator\'s production chemists and the well services team. Trend alerts on upstream and downstream pressure, choke setting, flowline differential pressure, rate and temperature. A location hypothesis: choke, flowline or both. Field confirmation by inspection, photographs and a sample. Chemistry assessment with the inhibitor history. A work order ranked by risk and recoverable production. Treatment by flush, choke change or chemicals. A post-job review comparing restored rate with the expectation. Before a work order is raised, the procedure requires rate change, temperature, choke position, reservoir change, emulsion, sand and instrument health to be ruled out and recorded.',
    ],
    result: [
      'Flush and treatment schedules were tied to confirmed cases with the recoverable production written on the work order. Wells with recurring scale got a control plan with inhibitor and a flush interval instead of a repeated reactive flush.',
    ],
    conclusion: {
      summary: 'The objective was to stop treating wells on a pressure trend alone. It was achieved. The work order now requires a confirmed cause, every treatment carries an expected recovery and a post-job comparison, recurring wells are on inhibitor and interval plans, and the procedure is the operator\'s controlling document at revision 3.',
      criteria: ['No flush or chemical treatment raised without a confirmed cause on the work order', 'Each treatment carries an expected rate recovery and a post-job comparison', 'Recurring wells on a control plan rather than a reactive list', 'Procedure adopted by operations as the controlling document'],
      achieved: ['Work order template changed to require the confirmation step; alternative causes recorded on every order', 'Post-job review template issued and completed for each treatment', 'Recurring wells moved to inhibitor and interval plans', 'Procedure issued as the operator\'s surface scale identification procedure, revision 3'],
    },
    deliverables: ['Surface scale identification and evaluation procedure', 'Work order template with confirmation step and recoverable production', 'Post-job review template', 'Summary of scale types, reports and treatment approaches'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Operator and wells not named. The procedure describes a workflow; the result of any one treatment is not quoted.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'pid-review-across-drawings', numeral: '08', category: 'Facilities', short: 'P&ID review',
    region: 'Middle East', setting: ME, stage: 'Brownfield design review', basis: ENG, period: '2026',
    title: 'P&ID review for additional transfer lines',
    sub: 'A review of a P&ID package against the statement of requirements for new transfer lines between two facilities. The gap found was between the sheets, not on them.',
    problem: [
      'A package of P&IDs, a statement of requirements, tie-in surveys and management of change forms covered additional transfer lines between two facilities. Reviewed sheet by sheet the drawings looked compliant. The operator needed a comment register it could act on and a sign-off recommendation before the package went to construction.',
    ],
    work: [
      'We set up the document register with revisions, area boundaries and the technical authority. We built a matrix from each clause of the statement of requirements to the drawing and tag, with compliance, evidence, owner and close-out. We checked line size and class, pressure rating, flow direction, dead legs, isolation, overpressure, drains and vents, instrumentation, shutdown logic, testability, maintenance access and constructability. We traced the full flow path across sheets using continuation arrows, manifold layouts, battery limits and crossovers.',
      'The trace found that references on one facility\'s manifold drawing to two downstream sheets did not show the full continuation of the third line. Each sheet was correct on its own. The gap was between them.',
    ],
    result: [
      'The comment register ranked the deviations and wrote each so it could be checked. We recommended approval with conditions, with the continuity item as a hold. The package went to construction after the hold was closed.',
    ],
    conclusion: {
      summary: 'The objective was a comment register the operator could act on and a sign-off recommendation before construction. Both were delivered. The traceability matrix covered every clause, the continuity gap between sheets was held and corrected, and the package went to construction with the hold cleared.',
      criteria: ['Every clause of the statement of requirements traced to a drawing and tag or recorded as a gap', 'No safety item open under a recommended-for-approval status', 'Comments written so a third party can verify closure', 'Hold items closed before issue for construction'],
      achieved: ['Traceability matrix completed for all clauses', 'Approval with conditions recommended; the continuity gap held and corrected on a revised sheet', 'Comment register closed with the designer and the operator', 'Package issued for construction with the hold cleared'],
    },
    deliverables: ['Traceability matrix: requirement to drawing to evidence', 'Ranked comment register with owners', 'Flow path trace across drawing boundaries', 'Sign-off recommendation with hold points'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Drawing numbers, tags, the designer and the operator are not named.',
    service: 'facilities-engineering',
  },
  {
    slug: 'one-answer-per-well', numeral: '09', category: 'Data', short: 'Operations console',
    region: 'Middle East', setting: ME, stage: 'Producing field, decision support', basis: ENG, period: '2026',
    title: 'One record per well, with source and date',
    sub: 'A field data model and browser console joining well status, rates, routing, flowline integrity, service tests, water systems and project delivery, with history kept on every refresh.',
    problem: [
      'Well status came from one export, allocated rates from another, routing from a planning list and flowline condition from a fourth system, each with its own date. The newest file won every argument, so a well could be shown flowing at a facility it had left. Engineers rebuilt the same picture by hand each week and management briefs disagreed with each other.',
    ],
    work: [
      'We designed the data model around canonical entities: well with aliases, facility, train, manifold, flowline, replacement project, work order and source. Precedence was set field by field. The latest flowing wells export governed status and receiving facility. The latest allocation export governed oil, water and gas and was never replaced by a test value without a flag. The master well list governed home facility. The signed test record governed service test position. The integrity export governed risk. Each stored value kept its raw and accepted form, source date, load time, authority rule, confidence and conflict flag.',
      'Five layers were built: current, context, history, changes and sources. A well profile read in four views: now, context, history and changes, with routing shown as home facility against actual receiving facility. Most domains refreshed at the weekend, well status more often, with the data-as-of date shown for each. Facility flow diagrams and P&IDs were stitched into a process graph with designed, as-built, temporary, planned, isolated and flowing connections kept distinct. The build was SQLite and JSON behind a browser view, with a Power BI model from the same tables.',
    ],
    result: [
      'A query for any well returned a profile with every item sourced and dated and every open conflict shown. Facility summaries, deferral registers and forecast tables came from the same record and agreed with each other.',
    ],
    conclusion: {
      summary: 'The objective was one record per well with every field sourced and dated, and management outputs that agree with each other. It was achieved. The console is in use across operations and engineering, substitutions and conflicts are flagged on each refresh, and facility summaries and deferral registers come from the same record.',
      criteria: ['A well profile answerable from one page, with the source and date of every field', 'No silent substitution of a test rate for an allocated rate', 'Unresolved source conflicts visible, not averaged or hidden', 'Management outputs reconcile to the same record'],
      achieved: ['Console in use for well queries across the operations and engineering teams', 'Substitutions flagged on the profile; conflicts listed on the data health report each refresh', 'Weekly refresh established with the data-as-of date shown by domain', 'Facility summaries and deferral registers generated from the console rather than rebuilt by hand'],
    },
    deliverables: ['Data model, entity definitions and precedence rules', 'Well profile specification and browser console', 'Refresh procedure, snapshot and change event design', 'Data health report with exception classes', 'Process graph and stitched facility schematic'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Architecture and rules as designed and built with the operator\'s exports. Operator not named.',
    service: 'operations-data',
  },
  {
    slug: 'deferrals-with-a-water-column', numeral: '10', category: 'Operations', short: 'Deferral reporting',
    region: 'Middle East', setting: ME, stage: 'Producing field, management reporting', basis: ENG, period: '2026',
    title: 'Deferral reporting with an owner and a water column',
    sub: 'A deferral register and weekly facility summaries that keep oil separate from liquid, transfers separate from net gains, and every item with an owner and a date.',
    problem: [
      'Deferral reporting mixed categories that overlapped: backpressure, choke scale, equipment outages, water treatment limits, well failure, integrity shut-ins, flowline test holds and disposal injectivity. Some were summed twice. A well moved between facilities appeared as a gain at the receiving facility with no reduction at the source. A transfer line capacity in barrels of liquid was quoted as if it were oil. Management could not tell what was recoverable, by whom, or by when.',
    ],
    work: [
      'Each deferral record was given a fixed set of fields: well, home facility, current facility, cause, gross potential oil, actual oil, deferred oil, associated water, basis date, fix, approval status, cost, owner, target date, latest action and linked project. Causes were made exclusive so nothing was counted twice. Facility summaries were laid out as current, net change and after the move, each with oil, water and gas to one decimal. The rules were written on the register: a liquid capacity is not an oil gain; a moved well is counted once; a well test is not an allocated rate; a disposal increase is not an oil benefit unless it releases a named deferral.',
      'The weekly handover note was written from the register: dated facts by facility, the impact in barrels where the data supported it, the blockers, the owners and the next action.',
    ],
    result: [
      'Management had a register that reconciled to the facility totals and a handover that read as one engineer\'s account. The water column made the downstream effect of each oil opportunity visible before it was approved.',
    ],
    conclusion: {
      summary: 'The objective was a deferral register that reconciled to facility totals and gave every item an owner and a date. It was achieved. Overlapping causes were removed, liquid and oil are kept in separate columns with the water cut used to convert them, and the weekly handover note was issued from the register for the period of the engagement.',
      criteria: ['Register total equals the sum of facility deferrals with no double counting', 'Every item has an owner, a cost basis and a target date', 'Oil and liquid never mixed in a total', 'Weekly note issued on time from the register'],
      achieved: ['Register reconciled to facility totals each week; overlapping causes removed', 'Owners and target dates completed for every open item; items without an owner escalated at the weekly meeting', 'Liquid capacities shown in their own column with the water cut used to convert them', 'Weekly handover notes issued from the register for the period of the engagement'],
    },
    deliverables: ['Deferral register with owners, costs, dates and water', 'Facility summaries: current, net change, after the move', 'Planned against current well rate comparison', 'Weekly handover notes and meeting schedules'],
    evidence: 'Work done for the operator of an onshore field in the Middle East. Register structure and rules as applied. Individual well and facility figures not shown.',
    service: 'production-optimisation',
  },
  {
    slug: 'gas-pipeline-pressure-defines-diameter', numeral: '11', category: 'Gas', short: 'Gas pipeline concept',
    region: 'West Africa', setting: 'Gas supply pipeline, onshore Nigeria', stage: 'Concept and pre-FEED', basis: STUDY, period: '2025 to 2026',
    title: 'Sizing a gas pipeline from the pressure envelope',
    sub: 'A concept and pre-FEED study that compared candidate diameters across the full pressure envelope before fixing the line size, and set out the FEED deliverables with the data each needs.',
    problem: [
      'A developer needed a pipeline from a gas source to a consumer and had a nominal flow rate in mind. The diameter could not be chosen from the flow rate alone. The minimum source pressure, the required delivery pressure, the demand variation and the future capacity each changed the practical line size or showed that compression would be needed.',
    ],
    work: [
      'We ran the hydraulics for the candidate diameters across the pressure cases: low and high source pressure, minimum delivery pressure at the consumer, present and future demand. Gas velocity was checked against the erosion limit in each case. We set out the interfaces for metering, safeguarding, pigging and corrosion control, and the equipment required at each end of the line. Concept drawings were issued as conceptual, not for construction. A deliverable register listed each FEED document with the data it needs and the check that closes it.',
    ],
    figure: 'pipelineEnvelope',
    result: [
      'The diameter stayed conditional on the confirmed pressure envelope rather than being fixed early. The developer could see which pressure outcome would change the answer and what data FEED would need first.',
    ],
    conclusion: {
      summary: 'The objective was a line size the developer could take into FEED with its conditions and its data needs stated. It was achieved. Every candidate diameter was tested on the same pressure and demand cases, the selected case was issued as conditional on the confirmed source pressure range, and the deliverable register was accepted as the basis for the FEED scope.',
      criteria: ['Every candidate diameter tested against the same pressure and demand cases', 'The selected case stated with the condition that makes it valid', 'Drawings marked conceptual, not for construction', 'FEED data list issued with an owner and a check for each item'],
      achieved: ['Hydraulic comparison issued for all cases with velocity and pressure drop tabulated', 'Selected case issued as conditional on the confirmed source pressure range', 'Concept schemes issued at Revision C with the conceptual marking on every sheet', 'Deliverable register accepted by the developer as the basis for the FEED scope'],
    },
    deliverables: ['Hydraulic and operating case comparison', 'Concept schemes and interface definition', 'Design basis and data gap register', 'FEED deliverable register with verification gates'],
    evidence: 'Concept and pre-FEED material prepared by Assos Tech, Revision C. Not an issued-for-construction design and not a claim that the pipeline has been built. Client, route, rates, dimensions and budget not shown.',
    service: 'gas-monetisation',
  },
  {
    slug: 'mini-lng-balance', numeral: '12', category: 'Gas', short: 'Mini-LNG study',
    region: 'West Africa', setting: 'Small-scale LNG development, Nigeria', stage: 'Desktop and pre-FEED', basis: STUDY, period: '2025 to 2026',
    title: 'Closing the gas balance on a mini-LNG project',
    sub: 'Feed composition, liquids recovery, plant fuel, product specification, capital and offtake brought into one study basis and one financial model, with every input marked measured, vendor-stated or assumed.',
    problem: [
      'A small-scale LNG project looked attractive when each assumption was viewed on its own. The feed composition, liquids recovery, plant fuel, product specification, availability and offtake terms had been developed by different parties at different times. The financial model had inherited the optimistic version of each, and the mass balance did not close.',
    ],
    work: [
      'We rebuilt the feed gas and product yield basis and tied it to the material and energy balance, the capital and operating cost assumptions, the cash flows and the sensitivities. Each input was marked measured, vendor-stated or assumed. The model carried explicit reconciliation and acceptance items. The study listed which inputs needed a laboratory analysis, which needed an equipment manufacturer\'s guarantee and which needed a signed agreement, and the order in which to get them.',
    ],
    result: [
      'The screening case was separated from an investment-ready case, with the gaps between them named. Modelled returns were presented as provisional until the feed gas analysis, the guarantees and the offtake terms existed. The developer\'s next spend went on measurements and agreements rather than a more detailed model.',
    ],
    conclusion: {
      summary: 'The objective was a gas balance that closed and a financial model whose inputs were traceable. Both were achieved at Issue 02. Plant fuel and liquids recovery reconcile to the yield basis, every input carries one of three classes and a source, and the evidence list became the developer\'s work plan for the next stage.',
      criteria: ['Mass and energy balance closes from feed to product', 'Every model input classified and traceable to its source', 'Returns presented with the assumptions that would change them', 'A dated list of the evidence needed before the case can be called bankable'],
      achieved: ['Balance closed at Issue 02 with plant fuel and liquids recovery reconciled to the yield basis', 'Input register issued with the three classes and the source for each', 'Sensitivity table issued on feed composition, availability, capital class and offtake price', 'Evidence list issued and adopted as the developer\'s work plan for the next stage'],
    },
    deliverables: ['Feed and product yield basis, Issue 02', 'Material and energy balance', 'Financial model with reconciliation items, Issue 02', 'Evidence and decision gate register'],
    evidence: 'Project development study material prepared by Assos Tech. Not a claim of plant delivery, financing, production or certified returns. Rates, returns and project identifiers not shown.',
    service: 'gas-monetisation',
  },
  {
    slug: 'north-sea-integrated-asset', numeral: '13', category: 'Operations', short: 'Integrated asset model',
    region: 'North Sea', setting: 'Mature offshore asset, UK North Sea', stage: 'Producing asset', basis: PRAC, period: 'Previous employment',
    title: 'Finding the limit behind the lost barrels',
    sub: 'Integrated well, network and facilities modelling on a mature offshore asset, where the binding limit sat with a different team from the one reporting the loss.',
    problem: [
      'Production on a mature offshore platform depended on how well performance, gathering system backpressure and process limits interacted. Each discipline reviewed its own part and each found something plausible. The limit belonged to the whole system and nobody owned the whole system.',
    ],
    work: [
      'An integrated asset model joined well performance, network hydraulics and facilities capacity in one calibrated view. The model had to reproduce the measured system before it was used to propose changes. Operating changes and well opportunities were tested for the next limit they would expose and ranked against a defined baseline, with an observation period long enough to tell a short-lived rate increase from a sustained gain.',
    ],
    result: [
      'Operating changes and interventions were ranked on the whole-system response and checked against the baseline afterwards. The team that owned the fix was often not the one that had reported the loss.',
    ],
    conclusion: {
      summary: 'The objective was to rank opportunities on the whole-system response rather than on one discipline\'s view. It was achieved. The model was calibrated to test and operating data before use, each opportunity on the register names the next limit it would expose, and verification against the baseline is part of the register.',
      criteria: ['Model reproduces measured rates and pressures before any change is proposed', 'Every opportunity ranked on the system response, not on one discipline\'s view', 'Gains verified against the baseline over an agreed period'],
      achieved: ['Model calibrated to the test and operating data before use', 'Opportunity register ranked with the next limit named for each item', 'Post-change verification built into the register'],
    },
    deliverables: ['Integrated well and network model', 'Limit diagnosis and opportunity review', 'Operations and intervention interface', 'Baseline and verification method'],
    evidence: 'Experience of senior personnel in previous employment, anonymised. Not an Assos Tech contract. Client, field and quantified results not shown.',
    service: 'production-optimisation',
  },
  {
    slug: 'intervention-decisions', numeral: '14', category: 'Wells', short: 'Intervention decisions',
    region: 'North Sea and Middle East', setting: 'Mature producing assets, offshore and onshore', stage: 'Intervention planning and operations', basis: PRAC, period: 'Previous employment',
    title: 'Choosing the right well intervention',
    sub: 'Intervention planning, campaign support and post-job review across water shut-off, scale treatment, stimulation and artificial lift workovers.',
    problem: [
      'Well opportunities competed for crews and capital. A treatment could be technically plausible and still a poor investment if the impairment mechanism, the barrier condition or the execution route was uncertain. Post-job results were rarely compared with the programme.',
    ],
    work: [
      'Diagnostic review, programme development, contractor interfaces and campaign sequencing were tied to the expected production response. Each intervention was chosen on its diagnosis, its integrity basis, its readiness and its economic case, with contingencies and the post-job evaluation written before the job.',
    ],
    result: [
      'Programmes said why the intervention was right as well as how to do it. Campaign learning built up because every job closed with a comparison against its forecast.',
    ],
    conclusion: {
      summary: 'The objective was that every intervention be chosen on its diagnosis and closed with a comparison against its forecast. It was achieved. The programme template puts the diagnosis and expected rate on the first page, post-job reviews feed the next campaign ranking, and parked candidates are kept with the evidence that would revive them.',
      criteria: ['Every programme states the diagnosis, the barrier basis and the expected rate', 'Every job closes with a post-job comparison against that rate', 'Weak candidates parked with a stated reason rather than carried'],
      achieved: ['Programme template adopted with the diagnosis and expected rate on the first page', 'Post-job reviews completed and fed into the next campaign ranking', 'Candidate register kept with parked wells and the evidence that would revive them'],
    },
    deliverables: ['Diagnostic and intervention option review', 'Programme and execution interfaces', 'Post-job performance assessment'],
    evidence: 'Experience of senior personnel in previous employment, anonymised. No Assos Tech delivery claim, client endorsement or quantified result is implied.',
    service: 'wells-and-interventions',
  },
];

/* ------------------------------------------------------------------ */
/* INSIGHTS                                                            */
/* ------------------------------------------------------------------ */

export const INSIGHTS = [
  {
    slug: 'liquid-is-not-oil', tag: 'Production systems', date: 'October 2026', reading: 5,
    title: 'Liquid is not oil',
    intro: 'A transfer line rated at 50 thousand barrels a day of liquid does not add 50 thousand barrels of oil. On a field at 60 per cent water cut it may add 20, and only if the receiving facility can dispose of the other 30.',
    sections: [
      ['Start with the unit', [
        'Most capacity numbers in a gathering system are liquid numbers: a pipeline, a manifold, a separator inlet, a pump. Most targets are oil numbers. The conversion between them is the water cut of the wells being moved, not the field average, and it changes with time.',
        'A forecast that adds a liquid capacity to an oil total looks right for one quarter and wrong after that. The wells that get moved are the ones with the highest water cut and the fastest decline.',
      ]],
      ['Count each well once', [
        'When a well is moved from one facility to another, the receiving facility gains and the source facility loses. A spreadsheet that records the gain and keeps the well in the source total has created oil. The check is simple: field oil before the move equals field oil after the move, before any losses or interventions are applied.',
        'The same applies to net additions. A shut-in well that restarts at the receiving facility is a net addition. It goes in a separate column from a well that was already flowing somewhere else.',
      ]],
      ['Follow the water to the ground', [
        'The receiving facility has an oil limit and a water limit. Downstream of it there are disposal pumps, injection wells with an injectivity that depends on wellhead pressure, re-injection headers and perhaps a pond. A transfer that respects the line capacity and the oil limit can still fail at the disposal pump.',
        'In the field forecast in our selected work, applying the receiving facility\'s water limit moved the binding limit from the sending facility\'s oil capacity to the receiving facility\'s water treatment. The right next investment was in water, not in another transfer line.',
      ]],
      ['Write the rules down', [
        'The rules that stop these errors fit at the top of the workbook. Liquid is not oil. A moved well is counted once. A well test is not an allocated rate. A disposal increase is not an oil gain unless it releases a named deferral. A planned enable date is not an available date. A forecast that states them can be audited. One that does not will be believed until it is wrong.',
      ]],
    ],
    closing: 'A transfer line adds liquid capacity. How much becomes oil depends on where the water can go.',
    service: 'production-optimisation',
  },
  {
    slug: 'a-planned-date-is-not-a-commissioning-date', tag: 'Commissioning', date: 'October 2026', reading: 4,
    title: 'A planned date is not a commissioning date',
    intro: 'Forecasts, decks and handover notes keep promoting the date on a project plan into the date a line was available. The difference is a log, a line status and an operations signature.',
    sections: [
      ['Three dates that get confused', [
        'A brownfield line has at least three dates: the planned handover in the project tracker, the mechanical completion when construction finished, and the date operations accepted it into service after a successful test. Only the last one lets a well flow. Forecast workbooks, management slides and often the project tracker itself use the first as if it were the third.',
      ]],
      ['What a commissioned line looks like', [
        'A commissioned line has a signed service test, a line status in the operating system, a valve line-up that has been walked, and an operations approval. A plan that says "available from October" has none of these. When we write a commissioning sequence we build it around hold points. Each needs evidence from the field before the next step: valve positions confirmed by a walk-down, an open path proved, communications and monitoring in place, differential pressure checked, stable receipt at the destination.',
      ]],
      ['How the error spreads', [
        'A forecast that enables a transfer line from its planned date shows oil arriving at the receiving facility from that month. The deferral register then records the wells behind that line as recoverable with a near-term target. The management brief adds the barrels. When the line is three months late, every one of those documents is wrong in the same direction, and the error is found by the person asking why actual production is below plan.',
      ]],
      ['The discipline', [
        'Carry the planned date as a planned date in every document. Label it. Switch to an actual date only when the evidence exists. In a data system this is a field-level rule: planned and actual are separate fields, and the actual is filled from the acceptance record, not from the plan.',
      ]],
    ],
    closing: 'A planned date is a planned date. A commissioned line has a log.',
    service: 'facilities-engineering',
  },
  {
    slug: 'produced-water-is-a-field-constraint', tag: 'Produced water', date: 'October 2026', reading: 5,
    title: 'Produced water sets the field limit',
    intro: 'Water is treated as a downstream reporting item until the day it decides how much oil the field can produce. On a mature water-flooded field that day has already arrived.',
    sections: [
      ['One number hides seven streams', [
        'Operators talk about water capacity as if it were a single quantity. It is at least seven: water generated and separated by train; water treated or transferred to disposal; water injected into disposal wells; water re-injected for pressure support; water sent to evaporation ponds; oil-in-water excursions and recycles; and outages, pump availability and disposal pressure. Each has its own capacity, reliability and way of failing. A plan that respects the headline number and ignores the routes will be surprised by a pump trip.',
      ]],
      ['Injectivity is not nameplate', [
        'A disposal well has a nameplate injection rate from its design, and an available injectivity at the actual wellhead pressure and formation condition today. The two diverge with time and with solids and oil in the injected water. Capacity planning that uses nameplate overstates disposal headroom by the amount that matters.',
      ]],
      ['Ponds are not disposal', [
        'Routing water to an evaporation pond relieves the facility today and creates a recovery, environmental and oil-loss problem that comes back later. It belongs in the balance as its own stream, drawn in a different colour, never summed into disposal. On the field in our selected work the agreed convention was disposal and re-injection in two blues and ponds in red.',
      ]],
      ['The oil consequence', [
        'Every water limit has an effect upstream: which wells, at which facility, would be cut back if this pump tripped or that well lost injectivity. Writing that consequence next to the limit turns a water balance into a production decision. It also shows which water investment buys the most oil, which is rarely the one closest to the oil.',
      ]],
    ],
    closing: 'Water capacity is not one number. It is a set of routes, each with a pressure, a pump and a way to fail.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'the-bottleneck-moves', tag: 'Production systems', date: 'October 2026', reading: 4,
    title: 'The bottleneck moves',
    intro: 'An operating change removes one limit and exposes the next. A useful optimisation study names the next one before the first is removed.',
    sections: [
      ['Start with the measured system', [
        'Before proposing a change, reconcile what the asset is doing today. Well tests, operating pressures, fluid properties, equipment performance and the loss record should support one baseline with one date. A calibrated model earns its place by explaining the observed system, not by producing a detailed chart.',
      ]],
      ['Test the next limit', [
        'Reducing a gathering restriction pushes more flow into a separation or water handling limit. Changing lift settings changes the network response. Adding a transfer line moves the limit from one facility\'s oil capacity to another facility\'s water capacity. The study is complete when the surrounding system has been checked and the range in which the change still works has been defined.',
      ]],
      ['Give the opportunity an owner', [
        'A recommendation needs an accountable person, a cost basis, an execution route and success criteria. Operations, wells, subsurface and projects may each own part of the answer. The interface between them should be visible in the register before the opportunity enters the delivery plan. The owner of the fix is often not the team that reported the loss.',
      ]],
      ['Measure the result that lasts', [
        'A short-lived rate increase is not the same as a sustained improvement in sales. Agree the baseline, the observation period and how other operating changes will be treated before assigning a result to the intervention. Then record the result against the forecast in the programme, so the next ranking is better than this one.',
      ]],
    ],
    closing: 'A good optimisation programme keeps asking where the limit has moved.',
    service: 'production-optimisation',
  },
  {
    slug: 'prove-the-well-before-the-tie-in', tag: 'Wells and execution', date: 'October 2026', reading: 4,
    title: 'Prove the well before committing the tie-in',
    intro: 'Restarting an idle well is a chain of technical and commercial decisions. In the right order it protects capital. In the wrong order it builds a flowline to a well that cannot flow.',
    sections: [
      ['Separate potential from readiness', [
        'A well may have recoverable potential and still lack integrity, access, a credible intervention route or evacuation capacity. The screening register should hold these as separate conditions with the evidence each needs. In the North Sea about 500 inactive suspended wells await final abandonment, and well work took GBP 1.3 billion of 2025 decommissioning spend (NSTA, August 2026). The cost of the wrong order is visible in the regulator\'s own figures.',
      ]],
      ['Choose the smallest useful next step', [
        'Some uncertainties can be resolved from existing records and targeted diagnostics. Others need an intervention or a test. The next activity is chosen for the decision it enables, with the barrier and operating requirements in place, not because it is the activity the rig is available for.',
      ]],
      ['Treat the flowline as part of the decision', [
        'A restart case must include backpressure, fluid handling, the receiving facilities, tie-in permissions and execution constraints. A successful intervention does not by itself give a route to sales. On a mature onshore field the flowline may be the item with the longest lead time and the highest integrity risk, and it may sit in a replacement programme with its own planned and actual dates.',
      ]],
      ['Agree when to stop', [
        'Define hold points, economic limits and technical rejection criteria before the campaign starts. A disciplined programme gives the team permission to park weak opportunities while it advances the ones with better evidence.',
      ]],
    ],
    closing: 'A restart programme builds evidence before it commits capital.',
    service: 'wells-and-interventions',
  },
  {
    slug: 'what-makes-a-concept-study-decision-grade', tag: 'Engineering review', date: 'October 2026', reading: 5,
    title: 'What makes a concept study fit to spend money on',
    intro: 'Most concept studies are useful and not yet fit to spend money on. The difference is a list of named gaps. The review should produce the list, not a longer study.',
    sections: [
      ['Quantify the benefit', [
        'A study that proposes new separation or treatment capacity must state the recoverable oil or avoided deferral in barrels a day, with the basis. "Improves crude quality" is a direction, not a benefit. Without the number the economics cannot be run and the project cannot be ranked against the alternatives competing for the same shutdown window.',
      ]],
      ['Validate the fluids', [
        'Correlation-based sizing is a starting point. It becomes fit for a decision when the field fluids, emulsion behaviour, bottle tests and chemical performance have been measured and the correlation has been checked against an operating train in the same field. A study basis that assumes 80 per cent water cut and a particular reservoir blend is a basis. It should not travel into other documents as a measurement.',
      ]],
      ['Integrate with the system', [
        'New capacity at one facility changes the water routed to disposal, re-injection and ponds, the loading on transfer lines, and the operating envelope of the trains upstream. A concept that does not show its integration with those systems has not shown its benefit either, because the limit may simply move.',
      ]],
      ['Operability, utilities, season, construction, economics', [
        'Fouling of internals, sand, scale and pressure drop. Maintainability. Heating and energy demand. Control and reliability. The seasonal performance envelope. Construction, shutdown and simultaneous operations. The project economics. Each is either covered or listed as open. The review says which, and gives a verdict: approve, approve with conditions, hold, or do not approve.',
      ]],
      ['Why hold is a useful answer', [
        'In the review in our selected work the verdict was hold, with a numbered gap list and alternative hybrid cases to study alongside the base case. That is better for the project than approval, because the next revision knows what to close, and better than rejection, because the useful idea survives.',
      ]],
    ],
    closing: 'A concept study earns its next gate by closing named gaps, not by adding pages.',
    service: 'facilities-engineering',
  },
];

/* ------------------------------------------------------------------ */
/* PAGES                                                               */
/* ------------------------------------------------------------------ */

export const PAGES = {
  home: {
    label: 'Engineering consultancy',
    eyebrow: 'Oil and gas engineering, United Kingdom',
    title: 'Closer to the <em>answer</em>.',
    lead: 'Assos Tech is a small oil and gas engineering consultancy. We work on producing fields, onshore and offshore, for the operators who run them and the people who finance them. Production, facilities, produced water, wells, gas projects and the technical review behind a purchase or a loan.',
    meta: [
      ['Where we work', 'Onshore and offshore fields in the Middle East, the North Sea and West Africa.'],
      ['Who we work for', 'Operators, developers, investors and lenders.'],
      ['What you get', 'A clear answer, the numbers behind it, and what we would do next.'],
    ],
    statement: {
      text: 'You send us the problem and the data. We check the numbers, find what is limiting production, and tell you what to do next and what it is worth.',
      note: 'Every figure we give you carries its source and its date. Where something is an estimate or a judgement, we say so. You can always see where the measurement ends and our view begins.',
    },
    view: {
      title: 'The limit is usually somewhere else',
      left: [
        'A reservoir forecast is only useful if the wells can deliver it, the flowlines can carry it, the plant can separate it, the water can be disposed of and the economics still hold. On a mature field those links fail in turn. Remove one limit and the next one appears, usually in another team\'s spreadsheet.',
        'We follow the chain from reservoir to export and we name the next limit before the first one is removed. Most of the work is arithmetic. A liquid capacity is converted to oil at the water cut of the wells being moved. A well is counted once. A planned date stays a planned date until there is an acceptance record.',
      ],
      right: [
        'Our clients are operators of large onshore fields in the Middle East and mature offshore assets in the North Sea, developers of gas projects in West Africa, and the investors and lenders behind them. They come to us when a decision is close: whether to approve a concept, how to restart a train, where the water will go, or what an asset is worth once its water, integrity and abandonment are priced in.',
        'We are small on purpose. The engineer who scopes the work does the work and signs it.',
      ],
    },
    services: {
      title: 'What we do',
      lead: 'Seven service lines. Most jobs start in one and end up touching two or three, because the limit moves.',
      note: 'Specialist studies, field services and formal certifications are done with qualified partners where the job needs them. Reserves certification, competent person reports and legal opinions are outside our scope.',
    },
    metrics: {
      title: 'Four numbers from recent work',
      lead: 'Each one comes from a named document. None of them is a portfolio total.',
      items: [
        ['Planned oil, four-phase restart', '86.6', 'mbd', 'Four phases of 21.7, 22.3, 22.1 and 20.5 thousand barrels a day. Wells brought on one at a time.', 'Train restart plan, 2026'],
        ['Flowline ranked for replacement', '67.7', 'km', 'Candidate lines ranked on integrity risk, production value and overlap with other scope.', 'Decision paper, 2021'],
        ['Hold points before first flow', '5', '', 'Each released only on evidence from the field, from valve line-up to stable receipt.', 'Commissioning plan, 2026'],
        ['Scenarios carried to 2029', '3', '', 'No transfers, transfers, transfers with optimisation. Each well counted once. Water followed to disposal.', 'Forecast workbook, September 2026'],
      ],
    },
    featured: 'field-forecast-under-water-constraint',
    work: {
      title: 'Selected work',
      lead: 'Fourteen anonymised cases from onshore and offshore fields. Each one says what the setting was, when it was done, and on what basis. Clients, fields and facilities are not named.',
      cases: ['field-forecast-under-water-constraint', 'transfer-line-first-flow', 'produced-water-where-it-goes', 'gas-pipeline-pressure-defines-diameter'],
      note: 'Figures in the cases are planning values or dated study inputs and are labelled as such. They are not measured results and they do not imply client endorsement.',
    },
    method: {
      title: 'How we work',
      lead: 'The same steps on every job, whether it takes two weeks or a year.',
      steps: [
        ['i', 'Agree the question', 'Who decides, what they have to decide, and by when. Scope, interfaces and deliverables are written down before we start.'],
        ['ii', 'Fix the data', 'Each source is logged with its date. Measured values, operator statements, estimates and our own judgement are kept apart. Where sources disagree we show both and say which one we used.'],
        ['iii', 'Follow the chain', 'Reservoir, wells, flowlines, gathering, separation, water, gas, power, export. For each link: what it has to carry, what it can carry, and what happens when it is full.'],
        ['iv', 'Give an answer', 'Approve, approve with conditions, hold, or do not approve. The missing items are listed with an owner. Then the register, model or procedure your team can run without us.'],
      ],
    },
    pillars: {
      title: 'The name',
      lead: 'Assos is a Greek town on the Aegean coast. Aristotle set up his first school there in 347 BC and began working from what he could observe and measure. In modern Greek the word also means the ace. We took the name for the method, and the three words below are how we try to keep to it.',
      items: [
        ['Observe', 'Start from the measured data, with its dates and its gaps. A model is only useful once it explains what the plant is doing today.'],
        ['Endure', 'Build registers, models and procedures that still work after the engineer who built them has moved on. One live file per document, with the revision and the basis date inside it.'],
        ['Vantage', 'Stand where the whole chain is visible, from reservoir to export to cash, and name the next limit before the first is removed.'],
      ],
    },
    insights: {
      title: 'Notes',
      lead: 'Short notes on the mistakes that keep coming up in forecasts, commissioning plans and water balances.',
      items: ['liquid-is-not-oil', 'a-planned-date-is-not-a-commissioning-date', 'produced-water-is-a-field-constraint'],
    },
    cta: { title: 'Tell us the decision you have to make' },
    closeText: 'Send us the problem and the files behind it. Within a week we will tell you what evidence it needs, how long it will take and what it will cost.',
  },

  services: {
    title: 'What we do',
    lead: 'Seven service lines across the production chain. Most jobs start in one and end up touching two or three, because the limit moves.',
    matrix: {
      title: 'Where each service fits',
      lead: 'Five stages in the life of an asset against the seven service lines. A filled circle is where we lead. A half circle is where we contribute to a wider team. An open circle is by specific request.',
      stages: ['Appraise', 'Develop', 'Produce', 'Extend', 'Transfer'],
      rows: [
        ['production-optimisation', [0, 1, 2, 2, 1]],
        ['facilities-engineering', [1, 2, 2, 2, 0]],
        ['produced-water-and-integrity', [0, 1, 2, 2, 1]],
        ['wells-and-interventions', [1, 1, 2, 2, 0]],
        ['gas-monetisation', [2, 2, 1, 1, 1]],
        ['technical-due-diligence', [2, 1, 1, 2, 2]],
        ['operations-data', [0, 1, 2, 2, 1]],
      ],
    },
    scope: {
      title: 'Scope and assurance',
      left: [
        'Assos Tech is a consultancy and engineering design house. We are not a contractor. We define the work, the deliverables and the review route around the decision, and we bring in specialist partners where a job needs disciplines we do not carry in house. Who approves the design, who does the site work, who provides specialist services and who accepts the result are written down at the start.',
        'We sell no equipment, license no software and have no parent company. We do not own rigs or field crews, we do not hold ISO certification, and we do not present concept-stage work as construction or operating delivery.',
      ],
      right: [
        'Every report carries a document number, a revision, a classification and an Important Notice that states the scope, the basis of information and the client who may rely on it. Figures are valid at the stated date. Conceptual drawings are marked conceptual, not for construction.',
        'Where you have your own templates, stage gates or risk ratings, we use them and put our name on the cover and the footer.',
      ],
    },
    cta: { title: 'Start with the question', text: 'A technical question, a train that will not stabilise, a water balance that will not close, a data room that will not reconcile. Describe it in a paragraph and we will propose the scope.' },
  },

  work: {
    title: 'Selected work',
    lead: 'Fourteen anonymised cases from onshore and offshore fields. Each one says what the setting was, when it was done, and on what basis. Clients, fields and facilities are not named.',
    note: 'Figures in the cases are planning values or dated study inputs and are labelled as such. They are not measured results and they do not imply client endorsement, completed construction or verified production gains.',
    basis: {
      title: 'What the basis labels mean',
      items: [
        ['Operator engagement', 'Work done for an operator on a producing field: forecasts, reviews, plans and registers delivered into the operator\'s own systems and documents. The operator, the field and the facilities are not named.'],
        ['Assos study', 'Study, concept or pre-FEED work prepared and issued by Assos Tech to a client under our own document control. The stage is stated. None of it is presented as a built or operating asset.'],
        ['Practitioner experience', 'Experience of our senior people gained in previous employment, anonymised. Not an Assos Tech contract. Included to show the depth we bring, not as a company track record.'],
      ],
    },
    cta: { title: 'If one of these looks like your problem', text: 'Send us the version you are dealing with. We will tell you what we would do first.' },
  },

  approach: {
    title: 'How we work',
    lead: 'Senior engineers who have run production, built models, read contracts and sat in the meetings where money gets committed. The steps below are how we keep that experience honest.',
    sequence: {
      title: 'The steps',
      lead: 'From a two-week review to a year retained inside an operator\'s team, the steps are the same.',
      steps: [
        ['i', 'Agree the question', 'Who decides, what they have to decide, by when, and what a useful answer looks like. Scope, interfaces, deliverables and reliance are written down before we start.'],
        ['ii', 'Fix the data', 'Every source logged with its date, revision, owner and authority. Measured values kept apart from operator statements, estimates and our own judgement. Conflicts shown, not hidden.'],
        ['iii', 'Follow the chain', 'Reservoir, well, flowline, gathering, separation, treatment, water, gas, power, storage, export. For each system: required against installed capacity, the margin, the limit and what happens when it is reached.'],
        ['iv', 'Check the plan against the plant', 'Divide the plateau by the well count. Compare the best test with the rate the plan needs. Check that the mass balance closes. Ask who pays, who gains and what the regulator does next.'],
        ['v', 'Give the answer', 'Approve, approve with conditions, hold, or do not approve. The missing items listed, each with an owner. If the evidence is not there, we say so instead of assuming it.'],
        ['vi', 'Leave something your team can run', 'A register, a model, a procedure or a data system that works without us, with its basis date on every page.'],
      ],
    },
    evidence: {
      title: 'How we label evidence',
      left: [
        'Every number we give you is one of six things, and the wording shows which: the logs show, the operator states, we estimate, we rebuilt this from partial records, this follows from the above, our view is. You can see where measurement ends and judgement begins, and we size uncertainty as a range rather than hedge it.',
        'When two sources disagree we show both values with their sources and say which one we used and why. We never average two inconsistent numbers and we never resolve a conflict silently.',
      ],
      table: `<div class="table-wrap"><table><thead><tr><th>Class</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td class="k">Fact</td><td>Measured or recorded, with a date and a source</td><td>Allocated oil 41.2 mbd on 14 September</td></tr><tr><td class="k">Operator statement</td><td>Stated by the client or a counterparty, not checked by us</td><td>Train rated 207 mbd oil</td></tr><tr><td class="k">Estimate</td><td>Our calculation from stated inputs, with a range</td><td>Net oil gain 8 to 12 mbd</td></tr><tr><td class="k">Reconstruction</td><td>Rebuilt from partial records by a stated method</td><td>Water balance from daily summaries</td></tr><tr><td class="k">Inference</td><td>Follows from the facts by a mechanism we name</td><td>Water limit binds before oil limit</td></tr><tr><td class="k">Opinion</td><td>Our judgement, labelled as such</td><td>Hold the concept until fluids are measured</td></tr></tbody><caption>The six evidence classes used in every Assos Tech report and register.</caption></table></div>`,
    },
    verdict: {
      title: 'Four possible answers',
      left: [
        'A review that ends in a summary has not finished. Ours end in one of four verdicts, with the conditions and the missing items listed so the next revision knows what to close. If the evidence has not been supplied, the verdict says so.',
      ],
      items: [
        ['Approve.', 'The basis supports the decision as proposed. Remaining items are recorded for follow-up.'],
        ['Approve with conditions.', 'The decision can go ahead once named items are closed, each with an owner and a date.'],
        ['Hold.', 'The idea is sound and the evidence is not yet. A numbered gap list and alternative cases are issued.'],
        ['Do not approve.', 'The basis does not support the decision, for stated reasons, with what would change the view.'],
      ],
    },
    models: {
      title: 'Three ways to engage us',
      items: [
        ['Focused review', 'A defined technical question, an agreed data list and a short recommendation with its basis. Fixed fee where the scope allows. Two to six weeks.'],
        ['Retained engineer', 'A senior engineer inside your production, facilities or engineering team on a retained basis, carrying the registers, reviews and plans week to week.'],
        ['Owner\'s engineer or study lead', 'Technical and commercial workstreams for a development, an acquisition or a brownfield project, with specialist partners chosen for the job.'],
      ],
    },
    deliver: {
      title: 'What the documents look like',
      body: [
        'Reports, memos, workbooks and decks follow one house standard. A document number, revision and classification on every page. An Important Notice on scope and reliance. Tables with units in the header and figures right-aligned. Charts that state their point in the title, label the series directly and give the source and date. Conceptual drawings marked not for construction. Workbooks keep inputs, calculations and checks on separate sheets with live formulas, so your engineer can change an assumption and watch the answer move.',
        'The document is shorter than the work behind it. Background you already have, a second example when the first proves the point, and adjectives the number already contains are cut.',
      ],
    },
    cta: { title: 'See the method on your problem', text: 'Send a paragraph on the decision you face. We will reply with the evidence it needs, the time it takes and what it costs.' },
  },

  insights: {
    title: 'Notes',
    lead: 'Short notes on the mistakes that keep coming up in forecasts, commissioning plans, water balances and concept studies. Each one is a rule we apply.',
    cta: { title: 'Disagree with a note?', text: 'We would rather hear it than not. Send us the case that breaks the rule.' },
  },

  about: {
    title: 'About Assos Tech',
    lead: 'Assos Tech Ltd is a UK oil and gas engineering consultancy founded in 2014. We work for operators, developers, investors and lenders on onshore and offshore fields in the Middle East, the North Sea and West Africa.',
    firm: {
      title: 'The firm',
      left: [
        'Assos Tech is built around senior production and facilities engineering. The engineer who scopes a job leads it and signs it. Specialist partners are brought in where a job needs disciplines we do not carry in house, and their responsibilities are written into the scope.',
        'Our recent work has been for the operator of an onshore field in the Middle East, on forecasting, commissioning, produced water, flowline integrity, design review and operations data; for a gas developer in Nigeria, on pipelines and small-scale LNG; and for investors, on technical and economic review.',
      ],
      right: [
        'Before Assos Tech, our senior people worked in operating roles on mature offshore assets in the North Sea and in production and intervention engineering across the North Sea and the Middle East. That experience is labelled on this site as practitioner experience in previous employment and is kept separate from Assos Tech work.',
        'We publish no client logos, no testimonials and no portfolio totals. Each case says what it is. If we cannot show the basis for a claim, we do not make it.',
      ],
    },
    experience: {
      title: 'Where the experience sits',
      lead: 'Four areas of depth. Each is visible in the selected work.',
      items: [
        ['Producing assets', 'Production surveillance, integrated asset modelling, limit mapping, deferral management, facility capacity and routing, forecasts and scenarios on fields producing more than a million barrels a day.'],
        ['Facilities and water', 'Design basis and P&ID review, brownfield stage gates, commissioning and restart plans, overpressure and relief, produced water systems, scale and flowline integrity programmes.'],
        ['Wells and campaigns', 'Intervention diagnosis and programmes, water shut-off, scale treatment, stimulation, artificial lift workovers, well delivery scheduling and post-job review.'],
        ['Gas, economics and data', 'Gas pipeline hydraulics, small-scale LNG and gas-to-power screening, project economics, technical due diligence, and operations data systems with source precedence.'],
      ],
    },
    name: {
      title: 'The name',
      left: [
        'Assos is a town on the Aegean coast of Turkey. Aristotle set up his first school there in 347 BC and began working from what he could observe and measure. In modern Greek the word also means the ace, the card that decides the hand. The mark is a surveyor\'s datum, the reference point from which everything else is measured.',
      ],
      pillars: [
        ['Observe.', 'Start from the measured data, with its dates and its gaps.'],
        ['Endure.', 'Build registers, models and procedures that still work after the engineer who built them has moved on.'],
        ['Vantage.', 'Stand where the whole chain is visible, from reservoir to export to cash.'],
      ],
    },
    standards: {
      title: 'Standards we hold ourselves to',
      body: [
        'Plain engineering English. The number comes first. The mechanism is named. The check is done in the text. Measurement, inference and judgement read differently. Uncertainty is given as a range. Every section ends on what it means for the decision.',
        'One numbering scheme for documents, one live file per document, the revision inside the file, and a classification on every page. Safety-critical decisions and field work need approved site procedures, permits, risk assessments and the responsible technical authority. Our documents support that process and never replace it.',
        'Assos Tech Ltd is registered in Scotland, company number SC474633, incorporated on 7 April 2014. Registered office: 5 South Charlotte Street, Edinburgh, EH2 4AN.',
      ],
    },
    cta: { title: 'Talk to the engineer who will do the work', text: 'There is no sales team. Write to us and the reply comes from the person who would lead the job.' },
  },

  contact: {
    title: 'Contact',
    lead: 'The best brief is a paragraph on what has to be decided, by whom, and by when. We reply with the evidence it needs, the time it takes and what it costs.',
    placeholder: 'For example: a transfer line is due in November and the forecast assumes it. The receiving facility is already at its water limit. We need to know what the line is worth in oil and whether the water schedule supports it.',
    hint: 'Your browser will open an email to us with these fields. Nothing is stored on this site.',
    right: [
      'We work for operators, developers, investors and lenders. Enquiries from recruiters, resellers and software vendors are read but rarely answered.',
      'For an existing job, use the project contact in your scope document. For press, data requests or anything about this website, use the same address.',
    ],
    privacy: 'We use what you send only to reply to you. See the privacy notice for the rest.',
    next: [
      ['i', 'Within two working days', 'A reply from the engineer who would lead the work, with questions if the brief needs them.'],
      ['ii', 'Within a week', 'A one-page scope: the question as we understand it, the evidence needed, the deliverables, the time and fee, and who may rely on the result.'],
      ['iii', 'On agreement', 'A document number, a revision record and a start date. We ask for the data in one list, with the date basis we need for each item.'],
    ],
  },

  legal: {
    label: 'Company information', title: 'Company information',
    lead: 'The legal identity behind this website.',
    body: `<h2>Registered details</h2><div class="table-wrap"><table><tbody><tr><td class="k">Legal name</td><td>Assos Tech Ltd (registered as ASSOS TECH LIMITED)</td></tr><tr><td class="k">Registered in</td><td>Scotland, United Kingdom</td></tr><tr><td class="k">Company number</td><td>SC474633</td></tr><tr><td class="k">Incorporated</td><td>7 April 2014</td></tr><tr><td class="k">Registered office</td><td>5 South Charlotte Street, Edinburgh, EH2 4AN, United Kingdom</td></tr><tr><td class="k">Register</td><td><a class="textlink" href="https://find-and-update.company-information.service.gov.uk/company/SC474633" rel="noopener">Companies House, SC474633</a></td></tr><tr><td class="k">Email</td><td><a class="textlink" href="mailto:allen@assostechltd.com">allen@assostechltd.com</a></td></tr></tbody></table></div>
<h2>Website notice</h2><p>This website describes the services of Assos Tech Ltd and gives anonymised examples of work. It is not an offer, a technical opinion or advice on any specific asset. Figures quoted in case studies are planning values or dated study inputs, labelled as such. They are not measured results and they do not imply client endorsement. Sector figures carry their source and date and were correct to our knowledge when published. Nothing on this site is a legal, financial or reserves opinion.</p>
<h2>Names and marks</h2><p>Assos Tech, ASSOS and the datum mark are used by Assos Tech Ltd. Third parties named as sources of sector data (regulators, trade bodies, publishers) are not clients and are not connected with Assos Tech Ltd.</p>
<h2>Accessibility</h2><p>The site is built as plain HTML with one heading hierarchy per page, text alternatives for figures, keyboard navigation and text contrast of at least 4.5 to 1. If something does not work for you, tell us by email and we will fix it.</p>`,
  },

  privacy: {
    label: 'Privacy', title: 'Privacy notice',
    lead: 'What this website collects, which is very little, and what we do with an enquiry.',
    body: `<h2>This website</h2><p>The site is static. It sets no cookies, runs no analytics and stores nothing in your browser. Fonts load from Google Fonts, which receives your IP address when the page loads. The site is hosted on Vercel, which keeps standard server logs. We do not receive personal data from either.</p>
<h2>Enquiries</h2><p>The contact form opens an email in your own email client. Nothing is sent to or stored on this site. When you email us we keep your message and our reply for as long as the enquiry or any resulting work is live, and for six years afterwards for professional record keeping. We use your details only to reply and to do any work you ask for. We do not sell, rent or share them for marketing.</p>
<h2>Engagements</h2><p>Client data received during a job is handled under the confidentiality and data terms of the scope document, which take precedence over this notice.</p>
<h2>Your rights</h2><p>Under UK data protection law you may ask what we hold about you, ask for it to be corrected or deleted, and complain to the Information Commissioner's Office. Write to <a class="textlink" href="mailto:allen@assostechltd.com">allen@assostechltd.com</a>.</p>
<p class="small muted">Controller: Assos Tech Ltd, 5 South Charlotte Street, Edinburgh, EH2 4AN. Notice dated 18 October 2026.</p>`,
  },

  regions: {
    title: 'Where we work',
    lead: 'Three regions, onshore and offshore. Each has a different limit, and the work we are asked for is different in each.',
    items: [
      {
        label: 'Middle East', title: 'Water decides the oil',
        lead: 'Large water-flooded onshore fields with several central processing facilities, high well counts and gathering systems that let wells move between facilities. The limit is more often water than oil.',
        body: [
          'The engineering problems are brownfield and they arrive at the same time. Processing facilities rebuilt or expanded while producing. Produced water re-injection added in phases. Transfer lines between facilities commissioned. Flowlines reaching end of life on high water cut. Scale restricting chokes. A forecast has to carry facility oil and water limits, transfer line liquid capacities and disposal headroom at the same time, with each well counted once.',
          'Data sit in daily exports, planning files and controlled drawings with different dates. A record that takes each fact from its most authoritative source, with the date, pays for itself quickly. Change runs through a brownfield stage gate process. Commissioning and restart are activities verified in the field, with hold points, not calendar events.',
          'Export routes are shared and can close without notice, so restart planning is a standing capability. A restart written one well at a time, with checks between phases and stop criteria, recovers production faster than an ambitious one that trips.',
        ],
        numbers: [],
        asks: ['Oil and water forecasts with transfer and disposal limits', 'Commissioning and restart plans with hold points', 'P&ID and statement of requirements review for new lines and trains', 'Produced water balances and disposal headroom', 'Flowline replacement programme integration and scale procedures', 'Well profiles, deferral registers and management reporting from one data model'],
        cases: ['field-forecast-under-water-constraint', 'produced-water-where-it-goes'],
      },
      {
        label: 'North Sea', title: 'Late life is its own discipline',
        lead: 'Mature platforms, falling production, record decommissioning spend, and asset sales in which the seller keeps part of the well liability. The work is extending production safely and pricing the end of it honestly.',
        body: [
          'Decommissioning spend reached GBP 2.6 billion in 2025, about half of it on wells. The regulator expects about GBP 3 billion a year from 2026 to 2032, with around 500 inactive suspended wells still waiting for final abandonment (NSTA, UKCS Decommissioning Cost and Performance Update, 13 August 2026). No exploration wells were drilled in 2025 and production has fallen about 40 per cent in five years (OEUK Business Outlook 2026).',
          'For an operator this means integrated asset models on platforms where weight, space and power are fixed, cessation of production planning that follows the economic limit well by well, and a clear view of which interventions still pay. For a buyer or a lender it means technical due diligence that prices water cut, integrity, abandonment and the liability the seller has kept.',
          'Our senior people\'s operating experience on mature UK assets was gained in previous employment and is labelled as such throughout the site.',
        ],
        numbers: [
          ['UKCS decommissioning spend, 2025', 'GBP 2.6 billion', 'NSTA, 13 August 2026'],
          ['Expected annual decommissioning spend, 2026 to 2032', 'about GBP 3 billion', 'NSTA, 13 August 2026'],
          ['Inactive suspended wells awaiting abandonment', 'about 500', 'NSTA, 13 August 2026'],
          ['Remaining UKCS decommissioning cost, 2024 prices', 'GBP 44 billion', 'NSTA, 2025 update'],
        ],
        asks: ['Integrated well, network and facilities modelling on brownfield platforms', 'Late-life production optimisation and economic limit planning', 'Intervention diagnosis, programmes and post-job review', 'Technical due diligence on asset sales with retained liabilities', 'Decommissioning cost review from an operations viewpoint'],
        cases: ['north-sea-integrated-asset', 'intervention-decisions'],
      },
      {
        label: 'West Africa', title: 'Gas with a moving price',
        lead: 'Nigeria is moving onshore and shallow water assets to indigenous operators, chasing a gas target it is unlikely to hit on time, and moving from fixed to market gas pricing. Every gas project assumption is in motion.',
        body: [
          'Nigeria produced about 7.5 billion cubic feet of gas a day in 2025 against a 2030 target of 12. A mid-point review projected only about 1.3 billion cubic feet a day of new production by 2030 against 4.6 planned (Decade of Gas Secretariat, 2026; NRGI as reported by ThisDay, 28 September 2026). About 302 billion cubic feet was flared between January 2025 and June 2026 (NUPRC data as reported, 2026). The 614-kilometre AKK pipeline was reported 95 per cent complete in July 2026. The Ajaokuta mini-LNG cluster, five plants totalling 97 million cubic feet a day, depends on it for feed.',
          'Indigenous operators now produce more than half of the crude after the 2024 and 2025 divestments. They have inherited mature Niger Delta fields with water cut above 50 per cent, carbonate scale and ageing flowlines. The 2026 decommissioning regulations tie approved abandonment plans to annual fund contributions. Reserve-based lending through African development finance institutions is the current funding model, and lenders want the engineering priced.',
          'Our work here is Assos Tech study material: pipeline concepts developed from the pressure envelope, and small-scale LNG balances that separate the screening case from the bankable one, with each input marked as measured, vendor-stated or assumed.',
        ],
        numbers: [
          ['Nigeria gas production, 2025, against 2030 target', '7.5 against 12 bcf/d', 'Decade of Gas Secretariat, 2026'],
          ['Gas flared, January 2025 to June 2026', 'about 302 bcf', 'NUPRC data as reported, 2026'],
          ['Domestic base gas price for power from 1 April 2026', 'USD 2.18 per MMBtu', 'NMDPRA, 2026'],
          ['Crude and condensate output, September 2026', '1.72 million bpd', 'NUPRC, 2026'],
        ],
        asks: ['Gas pipeline hydraulics and concept from the pressure envelope', 'Mini-LNG, CNG and gas-to-power screening on one basis', 'Feed, yield and energy balances with each input classed', 'Technical due diligence for acquisitions and reserve-based lending', 'Produced water and scale assessment on inherited mature fields'],
        cases: ['gas-pipeline-pressure-defines-diameter', 'mini-lng-balance'],
      },
    ],
    cta: { title: 'Tell us which region', text: 'If your asset is in one of these places, send us the decision you face. If it is somewhere else, send it anyway. The method travels.' },
  },

  origin: {
    title: 'The name and the mark',
    lead: 'A short note on where the name comes from, what the mark means, and what the firm is being built to do.',
    city: {
      title: 'Assos',
      body: [
        'Assos is a town on a headland on the Aegean coast of Turkey, facing the island of Lesbos. In 347 BC, after Plato died, Aristotle left Athens and accepted an invitation from Hermias, the ruler of nearby Atarneus, to come to Assos. He stayed about three years and set up his first school there. He then moved across the strait to Lesbos.',
        'It was on that coast that his way of working changed. He stopped reasoning down from ideal forms and started working up from what was in front of him: the anatomy of a cuttlefish, the breeding of a catfish, the tides. Observe first, sort what you see, and only then explain.',
        'We took the name for the method. A forecast is not an argument about what should happen. It is a record of what the wells, the lines and the plant are doing today, and the arithmetic of what follows.',
      ],
    },
    card: {
      title: 'The ace',
      body: [
        'In modern Greek, άσσος is the ace, the one card that decides the hand. In most engineering decisions there is one number like that: the water limit at the receiving facility, the minimum source pressure on a gas line, the injectivity of a disposal well at today\'s wellhead pressure. Everything else is detail.',
        'Our job is to find that number, state it with its source and its date, and build the recommendation around it.',
      ],
    },
    datum: {
      title: 'The mark',
      body: [
        'The mark is a surveyor\'s datum: a circle with two opposite quadrants filled. Surveyors and machinists use it to fix the point from which every other dimension is measured. If the datum moves, every measurement is wrong.',
        'A good report does the same thing. It fixes the basis first: the source files, their dates, the capacities assumed and the switch dates. Every number in the document can then be traced back to it.',
      ],
    },
    ambition: {
      title: 'What we are building',
      body: [
        'Assos Tech is being built as a small permanent team of senior production, facilities and gas engineers, working to one evidence standard and one document standard, with a data practice that turns an operator\'s exports into a usable record. The aim is specific. We want to be the engineers an operator, a developer or a lender calls before the money moves, in the three regions where we have worked.',
        'We will know it is working when the registers we build are still in use a year later, when the verdicts we give are borne out by the allocation export, and when the notes we publish are quoted back to us in the meetings where decisions are made.',
      ],
    },
    timeline: [
      ['347 BC', 'Assos', 'Aristotle sets up his first school on the headland and starts working from observation.'],
      ['7 April 2014', 'Incorporation', 'Assos Tech Ltd is registered in Scotland, company number SC474633.'],
      ['2025 to 2026', 'Engagements and studies', 'Production, facilities and water engineering for the operator of an onshore field in the Middle East. Gas pipeline and small-scale LNG studies in Nigeria.'],
      ['2026', 'The house standard', 'Brand, evidence classes, document control and the data practice brought into one standard.'],
    ],
    cta: { title: 'Measure from the same datum', text: 'Send us the decision you face and the files behind it. We will fix the basis first, then give you the answer.' },
  },
};
