// Assos Tech Ltd website content. British English. No em dashes. Numbers carry a date and a basis.

export const SITE = {
  name: 'Assos Tech',
  legalName: 'Assos Tech Ltd',
  tagline: 'Oil and gas engineering consultancy',
  line: 'Closer to the answer.',
  descriptor: 'Independent production, facilities and gas engineering for operators, investors and lenders. Onshore and offshore fields in the Middle East, the North Sea and West Africa.',
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
    short: 'Find the binding constraint, price the barrels behind it, and give the action an owner.',
    title: 'Production optimisation and deferment <em>recovery</em>',
    standfirst: 'We work from measured rates and an agreed baseline to find where oil is being lost, which constraint is binding, and what the next action is worth in barrels of oil, barrels of water and dollars.',
    question: 'Where is production being lost, and which action is worth taking next?',
    body: [
      'Most mature assets lose production in several places at once: backpressure in the gathering system, a choke restricted by scale, a train at its water limit, a pump out of service, a well waiting on a flowline test. Reviewing each in isolation produces a list of plausible fixes and no ranking. We build the ranking.',
      'The method is simple and it is applied without exception. Every deferral is recorded against a well, a cause, a dated basis and an owner, with oil and associated water shown separately. Capacity opportunities are tested against a decline case, not a flat one. A liquid transfer capacity is never added to an oil total. A well moved between facilities is counted once. Well test capability is not treated as online allocated production.',
      'The output is a register that operations, wells and projects can act on in the same week, with the production case for each item stated in a way that survives challenge.',
    ],
    scopes: [
      ['Performance diagnosis', 'Well and facility surveillance, potential reconciliation, operating-envelope review and constraint mapping across wells, gathering, separation, water and export.'],
      ['Deferral and capacity registers', 'Deferral records with cause, dated basis, gross potential, actual, deferred oil and associated water, mitigation, cost, approval status, owner and target date.'],
      ['Routing and facility balance', 'Moving wells between facilities with the receiving and source totals recomputed, net additions shown separately from transfers, and water followed to its disposal point.'],
      ['Opportunity maturation', 'Ranked tests, well work and facility changes with success criteria, a verification baseline and a post-implementation check that the gain lasted.'],
    ],
    outputs: ['Deferral remediation register, oil and water by facility', 'Constraint map and capacity opportunity list on a decline basis', 'Facility comparison tables: current, net change, post-move', 'Opportunity register with owners, cost, approval and target dates', 'Post-job verification against the agreed baseline'],
    delivery: ['Typical engagement: four to eight weeks for a first register and ranking, then a weekly or fortnightly refresh while actions close. We work alongside the operator\'s production, wells and projects teams and use their data exports as the single source for rates and status.'],
    cases: ['field-forecast-under-water-constraint', 'deferrals-with-a-water-column', 'north-sea-integrated-asset'],
    insight: 'liquid-is-not-oil',
    figure: 'chainCompact',
  },
  {
    slug: 'facilities-engineering', numeral: '02', name: 'Facilities engineering, commissioning and readiness',
    short: 'Concept review, P&ID challenge, brownfield stage gates and restart plans with field-verified hold points.',
    title: 'Facilities engineering, commissioning and <em>readiness</em>',
    standfirst: 'Process and facilities engineering grounded in how the plant is operated: design basis review, P&ID and statement-of-requirements challenge, brownfield change control, and staged commissioning and restart plans that only move on field-verified evidence.',
    question: 'Will the system work across its operating envelope, and is the plant ready to start?',
    body: [
      'A design review that paraphrases the consultant\'s conclusions is not a review. We test a package against the statement of requirements, the approved P&IDs, the operating limits, constructability, safety, maintainability, scope interfaces and data provenance, and we follow the flow path across drawing boundaries rather than page by page. Continuation arrows, manifold topology and battery limits are where the gaps hide.',
      'For commissioning and restart we write the sequence as it will be executed: pre-start valve and locked-valve lists, isolation and reintegration, process and flare route integrity, shutdown valve permissives and overrides, hold points with stop criteria, and the site sign-offs that release each step. Planned dates are treated as planned. Nothing is called commissioned until the line status, the logs and operations approval say so.',
      'On concept studies our verdict is explicit: approve, approve with conditions, hold, or do not approve, with the missing items listed so the next revision can close them.',
    ],
    scopes: [
      ['P&ID and SoR review', 'Document register and revisions, clause-by-clause traceability matrix (requirement, drawing and tag, compliance, evidence, owner), cross-drawing flow path trace, ranked and verifiable comments.'],
      ['Concept and pre-FEED challenge', 'Design basis, fluid and emulsion data, correlation-based sizing benchmarked against operating trains, utilities and energy, fouling and maintainability, seasonal envelope, construction windows and economics.'],
      ['Brownfield stage gates and change', 'Project initiation, terms of reference, concept, statement of requirements, define and execute, management of change for minor work, and the evidence each gate needs.'],
      ['Commissioning and restart plans', 'Phased introduction of wells and trains, hold points with field-verified valve positions, communications and monitoring, differential-pressure checks, stable receipt, and controlled handover to operations.'],
      ['Overpressure and relief context', 'Blocked-outlet cases, relief and vent backpressure, valve chatter risk and pilot-operated relief strategy, checked against the current relief calculations and cause-and-effect for the specific train.'],
    ],
    outputs: ['Comment matrix with drawing, tag, evidence, severity and owner', 'Sign-off recommendation with hold points', 'Concept study verdict and gap-closure plan', 'Commissioning or restart procedure with hold points and stop criteria', 'Readiness checklist and handover evidence list'],
    delivery: ['A P&ID package review typically takes two to four weeks depending on drawing count. Restart and commissioning plans are developed with the facility team and issued as working drafts for site verification; we do not present a draft as issued-for-use.'],
    note: 'Safety-critical decisions and field work require approved site procedures, permits, risk assessments and the responsible technical authority. Our documents support that process and do not replace it.',
    cases: ['transfer-line-first-flow', 'train-restart-in-four-phases', 'concept-study-not-yet-decision-grade', 'pid-review-across-drawings'],
    insight: 'a-planned-date-is-not-a-commissioning-date',
  },
  {
    slug: 'produced-water-and-integrity', numeral: '03', name: 'Produced water, flow assurance and flowline integrity',
    short: 'Water is a field constraint. Scale is a diagnosis, not a pressure reading. A flowline programme is a timeline.',
    title: 'Produced water, flow assurance and flowline <em>integrity</em>',
    standfirst: 'Water handling, scale and flowline condition decide how much oil a mature field can actually move. We build the water balance route by route, separate suspected scale from proven scale, and put replacement, service tests and risk records on one timeline per well.',
    question: 'If the oil moves, where does the water go, and will the line carry it?',
    body: [
      'Produced water is usually the first constraint a brownfield optimisation hits and the last one anyone models. Moving wells or raising liquid throughput shifts the bottleneck to a treatment skid, a disposal pump, injection well pressure or an evaporation pond. We track seven streams separately: water generated and separated by train, water treated or transferred, water disposed by injection, water re-injected for pressure support, water sent to ponds, oil-in-water excursions and recycles, and outages and pump availability. Injectivity is taken at actual wellhead pressure, never at nameplate.',
      'Scale work starts with trends and ends with a post-job analysis. A rising differential pressure across a choke or flowline is a hypothesis; rate, temperature, choke position, reservoir change, emulsion, sand and instrument health are the alternatives that have to be ruled out before a flush or a workover is approved.',
      'Flowline integrity is managed as a programme, not a list: condition and risk from the integrity system, service test history, replacement scope and priority, survey, construction, mechanical completion, service test and handover dates, planned against actual, joined to the well they serve.',
    ],
    scopes: [
      ['Water balance and disposal headroom', 'Per-facility oil, water and gas, available treatment and disposal by route, deficiency, and the upstream production consequence of each constraint.'],
      ['Produced water system review', 'Oil-in-water sampling and analysers, interface control in dehydrators and separators, transfer metering accuracy, N+1 pump capacity, fallback routes under a pump trip or injection-well failure.'],
      ['Scale identification and treatment', 'Trend alerts, location hypothesis (choke, flowline or both), field inspection and sampling, chemistry and inhibitor history, targeted work order, controlled intervention and post-job analysis.'],
      ['Flowline replacement programme', 'Ranking by integrity risk, production viability and avoidance of scope duplication; integration of risk exports, service tests and replacement milestones into one record per well.'],
      ['Material and vendor references', 'Glass-reinforced epoxy and polymer line manuals and specifications treated as generic references until a line-specific rating, joint detail and material approval exist.'],
    ],
    outputs: ['Produced water balance by facility and route, with headroom', 'Water system problem register and remediation options', 'Scale identification procedure and treatment schedule', 'Flowline programme tracker with planned and actual milestones', 'Integrity, service test and replacement timeline per well'],
    delivery: ['Water balances are built from the operator\'s daily summaries and test data with a stated reference date. Scale and flowline work is delivered as living registers refreshed weekly during a campaign.'],
    cases: ['produced-water-where-it-goes', 'ranking-sixty-eight-kilometres-of-flowline', 'scale-is-a-diagnosis'],
    insight: 'produced-water-is-a-field-constraint',
    figure: 'waterRoutes',
  },
  {
    slug: 'wells-and-interventions', numeral: '04', name: 'Wells and interventions',
    short: 'Diagnosis first, then the programme, then a post-job result measured against the forecast.',
    title: 'Wells and <em>interventions</em>',
    standfirst: 'Technical support across the intervention cycle: the problem statement, the barrier and completion basis, the programme and its contingencies, campaign sequencing, and a post-job review that compares what the well did with what the programme promised.',
    question: 'What is wrong with the well, and what is the safest economic route back to saleable production?',
    body: [
      'Well opportunities compete for rigs, specialist crews and capital. A treatment that is technically plausible can still be a poor investment if the impairment mechanism is uncertain, the barriers are not understood or the receiving flowline cannot take the fluids. We connect production engineering with integrity, completion condition, intervention access and the surface system the well flows into.',
      'The performance chain we hold to is reservoir potential, well potential, operating envelope, actual rate, deferment, root cause, action, recovered production. A plateau quoted in a plan is checked by dividing it by the producer count and asking whether any well on test has delivered that rate.',
      'Scope ranges from an independent review of one well to programme development, contractor evaluation, rig and workover scheduling against target dates, and a campaign-level register of planned against actual dates and production.',
    ],
    scopes: [
      ['Diagnosis and screening', 'Surveillance and well history, barriers and completion configuration, impairment mechanism, restart options and the evidence each needs.'],
      ['Programme development', 'Objectives, contingencies, success criteria, resources and the technical basis for the selected intervention: water shut-off, scale treatment, stimulation, artificial-lift change-out or workover.'],
      ['Well delivery and scheduling', 'Rig and workover dates, planned against actual, each with target production and the basis for the number.'],
      ['Campaign and execution assurance', 'Sequencing, challenge of contractor proposals, readiness reviews, and capture of post-job results against the forecast.'],
    ],
    outputs: ['Well diagnostic and option review', 'Intervention programme with contingencies and success criteria', 'Well delivery schedule with planned and actual dates', 'Readiness and assurance plan', 'Post-job technical and economic review'],
    delivery: ['Specialist field services are provided through the operator\'s contracts or an agreed delivery partner. Our role is the engineering judgement, the programme and the verification.'],
    cases: ['intervention-decisions', 'scale-is-a-diagnosis', 'north-sea-integrated-asset'],
    insight: 'prove-the-well-before-the-tie-in',
  },
  {
    slug: 'gas-monetisation', numeral: '05', name: 'Gas monetisation and pipelines',
    short: 'Feed quality, product yield, plant fuel, line size and price in one balance, with the gaps named.',
    title: 'Gas monetisation and <em>pipelines</em>',
    standfirst: 'Screening and maturing gas projects in markets where the feedstock, the pipeline and the price are all moving: mini-LNG, CNG, gas-to-power and pipeline supply, tested against a material and energy balance and a financing case that states which inputs are still assumptions.',
    question: 'Which gas route creates value after fuel, recovery, transport and downtime, and what must be true for it to be bankable?',
    body: [
      'Nigeria produced about 7.5 billion cubic feet of gas a day in 2025 against a Decade of Gas target of 12 by 2030, and flared about 302 billion cubic feet between January 2025 and June 2026 (Decade of Gas Secretariat and NUPRC data as reported, 2026). Roughly half of the flare commercialisation awardees had made significant progress by 2026 on the regulator\'s account. The domestic base price for power moved to USD 2.18 per MMBtu on 1 April 2026 and the government has said it intends to end fixed pricing within two years. Every one of those facts changes a project\'s cash flow, and none of them is inside a vendor\'s process guarantee.',
      'Our work connects the pieces that are usually studied apart. Feed composition and liquids recovery set the product yield; plant fuel and availability set what is left to sell; the pipeline or trucking route sets the delivered cost; the offtake terms and the price regime set the revenue. Where the balance does not close, we say so and list the measurements, laboratory results, vendor guarantees and agreements that would close it.',
      'Pipeline concepts are developed from the pressure envelope. A line size chosen from a nominal flow rate alone is a guess; minimum source pressure, required delivery pressure, demand variation and future capacity decide the diameter or introduce a compression requirement.',
    ],
    scopes: [
      ['Route-to-market screening', 'Pipeline supply, small-scale LNG, CNG, liquids recovery and captive power compared on one basis: delivered cost, product specification, availability and counterparty.'],
      ['Feed and product basis', 'Gas characterisation, treatment requirements, product yield and the material and energy balance, with each input classed as measured, vendor-stated or assumed.'],
      ['Pipeline hydraulics and concept', 'Candidate diameters against pressure cases, velocity and erosional limits, facility, metering, safeguarding, pigging and corrosion-control interfaces, and a data-gap register for FEED.'],
      ['Commercial integration', 'Feedgas terms, offtake assumptions, capital and operating cost, financing sensitivities, and the decision gates between a screening case and an investment-ready project.'],
    ],
    outputs: ['Gas commercialisation option study', 'Feed, yield and energy balance basis document', 'Pipeline hydraulic and operating-case comparison', 'Integrated project economics with sensitivities', 'Evidence and decision-gate register'],
    delivery: ['Concept and pre-FEED studies are issued as conceptual, not for construction. Modelled returns are presented as screening results until the technical and commercial evidence gaps are closed.'],
    cases: ['gas-pipeline-pressure-defines-diameter', 'mini-lng-balance'],
    insight: 'what-makes-a-concept-study-decision-grade',
    figure: 'gasChain',
  },
  {
    slug: 'technical-due-diligence', numeral: '06', name: 'Technical due diligence and economics',
    short: 'Independent judgement at the point capital is committed, with every number carrying its class and date.',
    title: 'Technical due diligence and <em>economics</em>',
    standfirst: 'For buyers, lenders and boards: does the value survive a realistic view of performance, cost, water, integrity and execution? We separate the technical case from the financing structure and give each assumption an evidence class.',
    question: 'Does the value survive a realistic view of performance, cost and execution?',
    body: [
      'Asset transfers are where technical optimism meets a term sheet. In Nigeria, indigenous operators now hold more than half of crude output after the divestments of 2024 and 2025, and the 2026 decommissioning regulations tie approved abandonment plans to annual fund contributions. In the UK, decommissioning spend reached GBP 2.6 billion in 2025 and the regulator expects about GBP 3 billion a year to 2032, with sellers increasingly retaining part of the well liability (NSTA, 13 August 2026). A buyer who inherits high water cut, ageing flowlines and a decommissioning fund obligation needs the engineering to be priced, not described.',
      'We hold the distinctions that move value: nameplate against reliable throughput, production against sales against collected cash, resources against reserves, log permeability against well-test kh, history match against predictive credibility, design basis against operating envelope, a removed bottleneck against a solved system.',
      'Each finding is written as evidence, consequence, recommended action and owner, with a severity badge. Where uncertainty can be allocated contractually, we name the mechanism: condition precedent, escrow, retention, earn-out, warranty, price adjustment or staged funding.',
    ],
    scopes: [
      ['Asset and acquisition reviews', 'Data room review, the gaps that move value, challenge of the production, water, integrity and cost assumptions behind the acquisition thesis.'],
      ['Project economics', 'Transparent cash-flow models with volumes, prices, tariffs, capital by class and timing, fixed and variable operating cost by currency, fiscal terms, abandonment and financing; NPV, break-even, unit cost and cover ratios where debt exists.'],
      ['Independent technical opinions', 'Scoped opinions on development concepts, performance assumptions, technical risk and project readiness, with reliance terms stated.'],
      ['Lender and board support', 'Decision papers, data-room question lists, evidence registers, value-of-information ranking and technical input to negotiations.'],
    ],
    outputs: ['Technical due diligence report with severity-ranked findings', 'Transparent economic model with sensitivity and break-even cases', 'Evidence register: fact, management claim, estimate, inference', 'Decision paper and data-room question list'],
    delivery: ['A data-room review for a single producing asset typically runs three to six weeks. Reports carry an Important Notice stating scope, basis of information and reliance limited to the named client.'],
    note: 'Reserves certification, competent person reports and formal expert roles require a separately agreed scope and appropriately qualified signatories. We do not give legal opinions.',
    cases: ['mini-lng-balance', 'concept-study-not-yet-decision-grade'],
    insight: 'what-makes-a-concept-study-decision-grade',
  },
  {
    slug: 'operations-data', numeral: '07', name: 'Operations data and decision systems',
    short: 'One answer per well, with its source and date. Field-level precedence, retained history, visible freshness.',
    title: 'Operations data and decision <em>systems</em>',
    standfirst: 'We turn daily exports, controlled drawings, test reports and correspondence into one decision-support record for operations, engineering and management: a current state with its sources, an event log, a well-level profile and a data-health report, refreshed on a cadence the asset can sustain.',
    question: 'What is the well doing now, where is it routed, how certain is that, and what changed since last week?',
    body: [
      'On a large field the answer to a simple question lives in six spreadsheets with three different dates. A status export says flowing; a routing list says shut in; a planning file says the well moved to another facility last month. Whole-file precedence, where the newest file wins everything, gets this wrong. Field-level precedence, where each fact is taken from the most authoritative source for that fact and dated, gets it right and shows the conflicts it did not resolve.',
      'The structure we build has five layers: current (the latest accepted value per field with its effective date), context (linked tests, work orders, integrity records and constraints), history (dated observations and milestones), changes (classified deltas since the previous refresh, including source conflicts) and sources (file, revision, owner, date, authority and confidence). A well profile reads in four views: now, context, history, changes, with key risks last.',
      'The system can be a SQLite and JSON package behind a mobile-friendly browser view, a Power BI model or a hosted database with an API. The architecture matters less than the rules: retain history, never erase an unrelated domain on refresh, show freshness by domain, and never substitute a test value for an allocated rate without saying so.',
    ],
    scopes: [
      ['Data model and precedence rules', 'Canonical entities (well, facility, train, manifold, flowline, project, work order, source), aliases and deduplication, field-level authority and effective-date rules, confidence and conflict flags.'],
      ['Well profiles and console', 'Identity and status, console summary, routing against home facility, flowline integrity and replacement, operations and interventions, timeline and changes, ranked risks.'],
      ['Registers and management outputs', 'Deferral remediation registers, planned-against-current well rates, facility capacity opportunities on a decline basis, scenario tables and handover-ready schedules.'],
      ['Process knowledge graph', 'Facility flow diagrams and P&IDs stitched into a navigable graph with designed, as-built, temporary, planned, isolated and currently-flowing connections kept distinct, each with its drawing, revision and confidence.'],
      ['Refresh and data health', 'Ingestion by file hash and date, validation of units, duplicates, mass balance and freshness, immutable snapshots, change events and a data-health report with the conflicts left open.'],
    ],
    outputs: ['Data model, precedence rules and source register', 'Well profile and console (browser, Power BI or both)', 'Deferral, capacity and forecast registers', 'Process graph and stitched facility schematic', 'Refresh procedure and data-health report'],
    delivery: ['Built with the operator\'s own exports and drawings. We prefer a weekend refresh for most domains with well status refreshed more often, and we state the data-as-of date separately from the refresh date.'],
    cases: ['one-answer-per-well', 'deferrals-with-a-water-column', 'pid-review-across-drawings'],
    insight: 'the-bottleneck-moves',
  },
];

/* ------------------------------------------------------------------ */
/* CASES (anonymised)                                                  */
/* ------------------------------------------------------------------ */

const ME = 'Supergiant onshore oil field, Middle East';
const EMB = 'Operator engagement';
const ASS = 'Assos study';
const PRAC = 'Practitioner experience';

export const CASES = [
  {
    slug: 'field-forecast-under-water-constraint', numeral: '01', category: 'Operations', short: 'Field forecast',
    region: 'Middle East', setting: ME, stage: 'Producing field, multi-facility gathering system', basis: EMB, period: '2026',
    title: 'Three scenarios, one water <em>balance</em>.',
    sub: 'A constraint-based oil and water forecast to 2029 across five central processing facilities, with inter-facility transfer, decline and disposal limits enforced on every well.',
    problem: [
      'The northern half of the field feeds five central processing facilities through a gathering system that allows wells to be transferred between facilities by inter-facility lines. Management wanted to know how much oil the network could sustain to 2029 under three cases: no transfers, transfers without further optimisation, and transfers with optimisation. The available rate data were blended oil and water numbers per well from a single reference date, not reservoir-specific streams.',
      'Earlier spreadsheets had added a 50 thousand barrel per day transfer-line capacity to an oil total, counted transferred wells at both their home and receiving facilities, and treated a planned commissioning date as an available-from date. The result looked precise and could not be reconciled.',
    ],
    work: [
      'We froze the source rates and the forecast start date, normalised each well\'s home and current facility, and modelled declining well capacity and water generation from the blended basis. Each scenario carried explicit capacity switches: facility oil and produced-water limits, transfer-line liquid capacities of 40 and 50 thousand barrels per day, and enable dates for new tankage and water routes.',
      'Every active constraint was enforced simultaneously: liquid on the transfer lines, oil and produced water at the receiving facility, and disposal downstream. Each well was allocated once. Gross oil moved, net oil gained, oil deferred, produced water displaced and incremental water generated were reported as separate columns, and totals were reconciled by well, facility and field before any sensitivity was run.',
    ],
    figure: 'capacityBalance',
    result: [
      'The three cases gave management a defensible range instead of a single number, with the planning capacities and their switch dates visible on the page. The forecast showed that the second transfer line moved the binding constraint from the sending facility\'s oil limit to the receiving facility\'s produced-water limit, which redirected attention to the water treatment and disposal schedule rather than to more transfer capacity.',
      'The planning capacities used were explicitly dated September 2026 inputs, not verified operating limits, and the report said so on every table.',
    ],
    takeaway: 'A transfer line adds liquid capacity. Whether any of it becomes oil depends on where the water goes.',
    deliverables: ['Forecast workbook with scenario switches, decline and single-allocation logic', 'Scenario tables to 2029 by facility: oil, water, gas', 'Validation sheet: conservation, double counting, constraint and phase-in checks', 'Methodology note and management presentation'],
    evidence: 'Work done for the operator of a supergiant onshore field in the Middle East. The client, field and facility identities are withheld. Capacities quoted are planning assumptions from the forecast exercise, dated September 2026, and are not published operating limits.',
    service: 'production-optimisation',
  },
  {
    slug: 'transfer-line-first-flow', numeral: '02', category: 'Facilities', short: 'Transfer line commissioning',
    region: 'Middle East', setting: ME, stage: 'Brownfield commissioning', basis: EMB, period: '2026',
    title: 'Five hold points before first <em>flow</em>.',
    sub: 'Commissioning a new 16-inch inter-facility line with one candidate well, two temporary shut-ins and a receiving route proved before any valve moved.',
    problem: [
      'A new 16-inch line would let wells from one facility and its satellite flow to a third facility with spare treatment capacity. The draft plan proposed a first-flow candidate well and a receiving train, and estimated the associated well moves at about 8.8 thousand barrels of oil and 13.1 thousand barrels of water a day. The risk was that an unproven path, an unverified valve line-up or a receiving train not ready for the water would turn a commissioning step into a shutdown.',
    ],
    work: [
      'We wrote the commissioning sequence around five hold points, each released only on field-verified evidence: the well, train and line valve line-up confirmed by a walk-down; an unobstructed path proved from source to receiving facility; communications and monitoring in place; differential pressure checked across the line; and stable receipt at the destination before any further well was introduced. Two wells on the receiving train were identified for temporary shut-in to make room, and the candidate well\'s transfer from its home manifold was written as a step with its own checks.',
      'The 8.8 and 13.1 thousand barrel figures were kept in the plan as planning estimates, labelled as such, and were not reported as recovered production.',
    ],
    result: [
      'Operations had a plan they could sign, with stop criteria at each hold point and the true receiving route named rather than assumed from a line label. The commissioning date remained a planned date in every document until the line status, logs and operations approval confirmed completion.',
    ],
    takeaway: 'A planned date is a planned date. A commissioned line has a log.',
    deliverables: ['Staged commissioning plan with five hold points', 'Valve line-up and isolation verification list', 'Receiving-train readiness checks and temporary shut-in list', 'Draft communication to management with planning estimates labelled'],
    evidence: 'Work done for the operator. Well identifiers, facility names and the operator are withheld. Volumes are contemporaneous planning estimates, not measured outcomes.',
    service: 'facilities-engineering',
  },
  {
    slug: 'train-restart-in-four-phases', numeral: '03', category: 'Facilities', short: 'Train restart',
    region: 'Middle East', setting: ME, stage: 'Post-turnaround restart', basis: EMB, period: '2026',
    title: 'Restarting a train one well at a <em>time</em>.',
    sub: 'A four-phase plan to bring a processing train back to about 87 thousand barrels of oil a day, with 35 thousand barrels of water behind it and a hold on any abnormal condition.',
    problem: [
      'After a turnaround, a facility train had to be returned to service with the full set of wells behind it. Starting them together risked slugging, tank vent and flare carryover, unstable dehydrator interfaces and an emergency shutdown that would cost more days than a slow start. Weak natural-flow wells needed nitrogen lift or flowback support and could not simply be opened.',
    ],
    work: [
      'The restart was written in four phases with planned oil increments of 21.7, 22.3, 22.1 and 20.5 thousand barrels a day and water increments of 2.5, 4.2, 18.0 and 10.5 thousand barrels a day. Wells were introduced one at a time, roughly fifteen minutes apart, with checks on train pressure, separation, tank levels and vents, dehydrator and desalter stability and flare behaviour between phases. The third phase, which carried half the water, was given the longest stabilisation window. Any abnormal condition held the sequence until the facility manager released it.',
    ],
    figure: 'restartPhases',
    result: [
      'The plan gave the control room a sequence with numbers to compare against as each well came on, and gave management a transparent picture of where the water would arrive and when. The increments were plan values and were reported as such; verified production came from the allocation export after the event, not from the plan.',
    ],
    deliverables: ['Four-phase restart plan with per-well sequence and timing', 'Phase checklists: pressure, levels, vents, treatment, flare', 'Stop criteria and approval points', 'Management summary with plan values labelled'],
    evidence: 'Work done for the operator. Plan values from the restart document; no claim is made about realised production. Operator and facility withheld.',
    service: 'facilities-engineering',
  },
  {
    slug: 'produced-water-where-it-goes', numeral: '04', category: 'Water and integrity', short: 'Produced water balance',
    region: 'Middle East', setting: ME, stage: 'Producing field, water system planning', basis: EMB, period: '2025 to 2026',
    title: 'Where the water <em>goes</em>.',
    sub: 'A route-by-route produced water balance across disposal, re-injection and evaporation, with injectivity taken at actual pressure and the oil consequence of every water constraint stated.',
    problem: [
      'A water-flooded supergiant produces water at rates comparable to its oil. Disposal into a shallow formation, re-injection for pressure support and evaporation ponds each had their own capacity, availability and reliability, and the field\'s operating plans tended to treat "water capacity" as one number. A historic integrated-plan terms of reference had already listed the system\'s problems: interface control in dehydrators, oil-in-water measurement, meter coverage and reliability, installed pump capacity and single-pump stability, and oil recovery from ponds and drains.',
    ],
    work: [
      'We built the balance per facility and per route and tracked seven streams separately: water generated and separated by train; water treated or transferred to disposal; water injected into disposal wells; water re-injected; water routed to ponds; oil-in-water excursions and recycles; and outages, pump availability and disposal pressure. Available injectivity was taken at actual pressure rather than nameplate. A 2020 investment paper\'s 23-well disposal requirement was decomposed into 11 wells of added capacity, 7 for N+1 redundancy and 5 replacements, and treated as a dated planning basis rather than a current inventory.',
      'Each water constraint was then translated into its upstream production consequence: which wells would have to be cut back, at which facility, if a pump tripped or an injection well lost injectivity.',
    ],
    figure: 'waterRoutes',
    result: [
      'The operator\'s optimisation cases could now be tested against water routes rather than a single water number, and the evaporation route was shown separately so that it was never mistaken for sustainable disposal. Visualisation convention agreed with the operator: disposal and re-injection in two shades of blue, ponds in red, always with the time basis and units on the chart.',
    ],
    takeaway: 'Water capacity is not one number. It is a set of routes, each with a pressure, a pump and a failure mode.',
    deliverables: ['Produced water balance by facility and route', 'Disposal headroom at actual pressure', 'Water system problem register and checks', 'Constraint-to-production consequence table'],
    evidence: 'Work done for the operator. Historic documents (2019 scheme, 2020 terms of reference, 2020 investment paper) were used as dated engineering context, not as current facts. Operator and facility identities withheld.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'concept-study-not-yet-decision-grade', numeral: '05', category: 'Facilities', short: 'Concept study review',
    region: 'Middle East', setting: ME, stage: 'Concept study review', basis: EMB, period: '2026',
    title: 'Useful, but not yet decision <em>grade</em>.',
    sub: 'An independent review of a free-water knockout and produced water treatment concept study, with the gaps to close before an execution decision.',
    problem: [
      'A consultant\'s concept study proposed free-water knockout and produced water treatment at a facility to improve crude quality and relieve the dehydration train. The study basis assumed a high-asphaltene reservoir blend and water cut up to 80 per cent. Management needed to know whether to carry it to the next stage gate.',
    ],
    work: [
      'We tested the study against the operating record and the questions an execution decision would have to answer. The recoverable oil and deferral benefit was not quantified. Field fluid, emulsion and bottle-test data were absent, so the chemical programme was unvalidated. Separator sizing relied on correlations that had not been benchmarked against the performance of a comparable operating train in the same field. Integration with disposal, re-injection, ponds and inter-facility transfer was not addressed. Internals fouling, sand, scale, pressure drop and maintainability, heating utilities and energy, control and reliability, the seasonal performance envelope, construction and shutdown windows and the project economics were each either missing or asserted.',
      'The review also noted that the 80 per cent water cut and high-asphaltene blend belonged to the study basis, not to a fieldwide measurement, and should not travel into other documents as fact.',
    ],
    result: [
      'Verdict: hold. The concept was conceptually useful and should proceed to the next revision, with a numbered list of items to close: quantified benefit, fluid and chemical validation, sizing benchmarked against the operating train, water-system integration, operability and maintainability, utilities and energy, seasonal envelope, construction and SIMOPS, and economics. Hybrid options combining internals, chemistry and selective heating were recommended for study alongside the base case.',
    ],
    takeaway: 'A concept study earns its next gate by closing named gaps, not by adding pages.',
    deliverables: ['Review memorandum with verdict and conditions', 'Gap-closure list with owners', 'Study-basis versus field-measurement register', 'Recommended alternative cases'],
    evidence: 'Work done for the operator. The study, the consultant and the facility are withheld. The verdict reflects the document revision reviewed, not later revisions.',
    service: 'facilities-engineering',
  },
  {
    slug: 'ranking-sixty-eight-kilometres-of-flowline', numeral: '06', category: 'Water and integrity', short: 'Flowline replacement programme',
    region: 'Middle East', setting: ME, stage: 'Integrity programme', basis: EMB, period: '2025 to 2026',
    title: 'Ranking 68 kilometres of <em>flowline</em>.',
    sub: 'Turning a proactive flowline replacement programme into one timeline per well: risk, service test, replacement scope, construction and handover, planned against actual.',
    problem: [
      'A 2021 decision support paper had identified about 67.7 kilometres of candidate flowlines for proactive replacement, ranked by integrity risk, production viability and avoidance of duplication with existing project scope. By 2026 the programme had grown into several workbooks: a master project tracker revised every few days, a pipeline risk export, a six-month service test summary, and well-by-well queries from operations about where a particular line stood. The same well could be shown with a planned handover date in one file and an unfinished service test in another.',
    ],
    work: [
      'We merged the sources into a single record per flowline and well: identifier, material, diameter, length, origin and destination; current risk and probability of failure from the integrity export; service test history and latest result; replacement scope, priority, survey, clearance, construction, mechanical completion, service test and handover milestones, planned and actual; corrosion and scale threat and treatment; and integrity holds with release-to-service evidence. Precedence was set field by field: the integrity export governed risk, the signed test documentation governed test position, and the project tracker governed milestones.',
    ],
    result: [
      'Operations queries about an individual well could be answered from one page with the source and date of each item. Planned handover dates that had drifted were visible against actuals, and lines with a failed or pending service test could no longer be reported as complete because a construction milestone had passed.',
    ],
    deliverables: ['Flowline programme record per well with source fields', 'Planned-against-actual milestone view', 'Integrity, test and replacement timeline', 'Exception list: inconsistent dates, duplicate rows, stale exports'],
    evidence: 'Work done for the operator. The 67.7 kilometre figure is from the 2021 decision support paper and describes the candidate list at that date, not the current programme. Operator withheld.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'scale-is-a-diagnosis', numeral: '07', category: 'Water and integrity', short: 'Scale framework',
    region: 'Middle East', setting: ME, stage: 'Producing field, flow assurance', basis: EMB, period: '2026',
    title: 'Differential pressure is not a <em>diagnosis</em>.',
    sub: 'A scale identification and evaluation framework that moves from trend to field confirmation to targeted treatment to post-job analysis.',
    problem: [
      'Carbonate, sulphate, iron sulphide and mixed scale were restricting chokes and flowlines across the field. Rising differential pressure was being read as proof of scale and flushes were being scheduled on that basis. Some of those lines had rate, temperature or instrument problems instead, and the flush bought nothing.',
    ],
    work: [
      'We set out the identification workflow with the operator: stable-state trends and alerts on upstream and downstream pressure, choke setting, flowline differential pressure, rate and temperature; a location hypothesis (choke, flowline or both); field verification with inspection, photographs and samples; engineering and chemistry assessment including inhibitor history; a targeted work order prioritised by risk and recoverable production; controlled intervention by flush, choke repair or chemical treatment; and a post-job analysis comparing restored production with the expectation. Alternatives to be ruled out before approval were listed: rate change, temperature, choke position, reservoir change, emulsion, sand and instrument health.',
    ],
    result: [
      'Flush and treatment schedules were tied to confirmed cases with recoverable production attached, and recurring threats got a control plan rather than a repeated flush. The framework became the operator\'s surface scale identification procedure.',
    ],
    takeaway: 'A pressure trend proposes. A sample and a rate test confirm.',
    deliverables: ['Scale identification and evaluation procedure', 'Treatment schedule with recoverable production basis', 'Post-job analysis template', 'Summary of scale reports and treatment approaches'],
    evidence: 'Work done for the operator. Operator and wells withheld. The procedure describes a workflow, not the outcome of any individual treatment.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'pid-review-across-drawings', numeral: '08', category: 'Facilities', short: 'P&ID review',
    region: 'Middle East', setting: ME, stage: 'Brownfield design review', basis: EMB, period: '2026',
    title: 'Follow the flow path across the <em>drawings</em>.',
    sub: 'A P&ID and statement-of-requirements review for new inter-facility lines, where the gap was in the continuation between sheets.',
    problem: [
      'A package of P&IDs, statement of requirements, tie-in surveys and management-of-change forms covered additional transfer lines between two facilities. Reviewed page by page the drawings looked compliant. The operator needed a comment register it could act on and a sign-off recommendation.',
    ],
    work: [
      'We established the document register, revisions, area boundaries and technical authority, then built a clause-by-clause traceability matrix from each requirement to drawing and tag, compliance, evidence, owner and close-out. The review checked line size and class, pressure rating, flow direction, dead legs, isolation, overpressure, drains and vents, instrumentation, shutdown logic, testability, maintenance access and constructability. The whole flow path was traced across sheets using continuation arrows, manifold topology, battery limits and crossovers.',
      'The trace found that references on one facility\'s manifold drawing to two downstream sheets did not clearly communicate the overall continuation of the third line. On the individual sheets nothing was wrong; the gap existed only between them.',
    ],
    result: [
      'The comment register ranked deviations, made each one verifiable, and recommended approval with conditions rather than approval, with the cross-drawing continuity item as a hold. No safety-critical gap was left open in a recommended-for-approval status.',
    ],
    deliverables: ['Traceability matrix: requirement to drawing to evidence', 'Ranked comment register with owners', 'Flow path trace across drawing boundaries', 'Sign-off recommendation with hold points'],
    evidence: 'Work done for the operator. Drawing numbers, tags and the operator are withheld.',
    service: 'facilities-engineering',
  },
  {
    slug: 'one-answer-per-well', numeral: '09', category: 'Data', short: 'Operations console',
    region: 'Middle East', setting: ME, stage: 'Producing field, decision support', basis: EMB, period: '2026',
    title: 'One answer per well, with its source and <em>date</em>.',
    sub: 'A field-level data model and console joining status, rates, routing, flowline integrity, service tests, water systems and project delivery, with history retained on every refresh.',
    problem: [
      'Well status came from one export, allocated rates from another, routing from a planning list and flowline condition from a fourth system, each with its own date. The newest file was winning every argument, so a well could be shown flowing at a facility it had left. Engineers were rebuilding the same picture by hand each week and management briefs disagreed with each other.',
    ],
    work: [
      'We designed the data model around canonical entities (well with aliases, facility, train, manifold, flowline, replacement project, work order, source) and set precedence field by field: the latest flowing-wells export governed status and receiving facility; the latest allocation export governed oil, water and gas, never substituted silently by a test value; the master well reference governed home facility; the signed test record governed service test position; the integrity export governed risk. Each stored value kept its raw and accepted form, its source date, load time, authority rule, confidence and conflict flag.',
      'Five layers were built: current, context, history, changes and sources. A well profile read in four views, now, context, history, changes, with routing shown as home facility against actual receiving facility and a flexed flag set only when both were resolved. Refresh followed a weekend cadence for most domains with well status refreshed more often, and the data-as-of date was shown separately by domain. Facility flow diagrams and P&IDs were stitched into a process graph with designed, as-built, temporary, planned, isolated and flowing connections kept distinct.',
    ],
    result: [
      'A query for any well returned a profile with every item sourced and dated and every unresolved conflict shown rather than hidden. Management outputs (facility summaries, deferral registers, forecast tables) were generated from the same record, so they agreed with each other. The architecture was deliberately portable: SQLite and JSON behind a browser view, with Power BI and a hosted database as options.',
    ],
    takeaway: 'Newest file is not the same as most authoritative. Precedence is set per field, and the conflicts are part of the answer.',
    deliverables: ['Data model, entity definitions and precedence rules', 'Well profile specification and console navigation', 'Refresh procedure, snapshot and change-event design', 'Data-health report format and exception classes', 'Process graph and stitched facility schematic'],
    evidence: 'Work done for the operator. Architecture and rules as designed and built with the operator\'s exports; no claim is made about a currently hosted service. Operator withheld.',
    service: 'operations-data',
  },
  {
    slug: 'deferrals-with-a-water-column', numeral: '10', category: 'Operations', short: 'Deferral reporting',
    region: 'Middle East', setting: ME, stage: 'Producing field, management reporting', basis: EMB, period: '2026',
    title: 'Deferrals with an owner and a water <em>column</em>.',
    sub: 'Weekly handover notes, facility summaries and a deferral remediation register that separated oil from liquid and transfers from net gains.',
    problem: [
      'Deferral reporting mixed categories that overlapped (backpressure, choke scale, equipment unavailability, water treatment constraints, well failure, integrity shut-ins, flowline test holds, disposal injectivity) and sometimes summed them twice. A well moved between facilities could appear as a gain at the receiving facility without a matching reduction at the source. A transfer-line capacity in barrels of liquid was quoted as if it were oil.',
    ],
    work: [
      'Each deferral record was given a fixed set of fields: well, home facility, current facility, cause, gross potential oil, actual oil, deferred oil, associated water, basis date, mitigation, approval status, cost, owner, target date, latest action and linked project. Facility comparisons were laid out as current, net change and post-move, each with oil, water and gas, at one decimal. Rules were written down: a liquid capacity is not an oil gain; a moved well is counted once; a well test is not an allocated rate; a disposal increase is not an oil benefit unless the mechanism releases a deferral.',
      'Handover notes were written as the owner would write them: dated facts ordered by facility or workstream, quantified impact where supported, blockers, owners and next action, with no filler about what the report does not contain.',
    ],
    result: [
      'Management received a register that could be reconciled to the facility totals and a handover that read as one engineer\'s account rather than a template. The water column made the downstream consequence of each oil opportunity visible before it was approved.',
    ],
    deliverables: ['Deferral remediation register with owners and water', 'Station summaries: current, net change, post-move', 'Planned-against-current well rate comparison', 'Weekly handover notes and meeting schedules'],
    evidence: 'Work done for the operator. Register structure and rules as applied; individual well and facility figures withheld.',
    service: 'production-optimisation',
  },
  {
    slug: 'gas-pipeline-pressure-defines-diameter', numeral: '11', category: 'Gas', short: 'Gas pipeline concept',
    region: 'Onshore West Africa', setting: 'Gas supply pipeline, onshore Nigeria', stage: 'Concept and pre-FEED proposal', basis: ASS, period: '2025 to 2026',
    title: 'Let pressure define the <em>pipeline</em>.',
    sub: 'A gas supply concept that tested the operating envelope before fixing the diameter, with the verification gates for FEED written into the deliverable list.',
    problem: [
      'A developer needed a pipeline to carry gas from a source to a consumer and had a nominal flow rate in mind. The diameter could not be selected from the flow rate alone: minimum source pressure, required delivery pressure, demand variation and future capacity each changed the practical line size or introduced a compression requirement.',
    ],
    work: [
      'The study compared candidate diameters across pressure cases, related gas velocity to hydraulic performance and erosional limits, and identified the facility, metering, safeguarding, pigging and corrosion-control interfaces. Concept drawings were issued as conceptual FEED, not for construction, and a deliverable register defined the next stage with the data and verification each item required.',
    ],
    figure: 'pipelineEnvelope',
    result: [
      'Diameter selection was kept conditional on a confirmed pressure envelope and route basis rather than fixed early. The client could take the appropriate case into FEED with explicit data requirements, and knew which pressure outcomes would change the answer.',
    ],
    takeaway: 'A line size is a conclusion. The operating envelope is the argument.',
    deliverables: ['Hydraulic and operating-case comparison', 'Concept schemes and interface definition', 'Design basis and data-gap register', 'FEED deliverable register with verification gates'],
    evidence: 'Assos-prepared concept and pre-FEED proposal material, Revision C. Not an issued-for-construction design and not a claim that the pipeline has been built. Client, route, rates, dimensions and budget withheld.',
    service: 'gas-monetisation',
  },
  {
    slug: 'mini-lng-balance', numeral: '12', category: 'Gas', short: 'Mini-LNG study',
    region: 'Onshore West Africa', setting: 'Small-scale LNG development, Nigeria', stage: 'Desktop and pre-FEED', basis: ASS, period: '2025 to 2026',
    title: 'Make the gas balance close before the model <em>does</em>.',
    sub: 'Connecting feed composition, liquids recovery, plant fuel, product specification, capital and offtake in one study basis and one financial model, with the open items listed.',
    problem: [
      'A small-scale LNG project looked attractive when each assumption was viewed on its own. The feed composition, liquids recovery, plant fuel, product specification, availability and offtake terms had been developed by different parties at different times, and the financial model inherited the optimistic version of each.',
    ],
    work: [
      'We linked a feedgas and product-yield basis with the material and energy balance, capital and operating cost assumptions, project cash flows and sensitivities. Each input was classed as measured, vendor-stated or assumed. The model retained explicit reconciliation and acceptance items. The study identified which inputs required laboratory confirmation, which required original equipment manufacturer guarantees and which required a signed agreement.',
    ],
    result: [
      'The screening investment case was separated from an investment-ready project, with the evidence gaps between them named. Modelled returns were presented as provisional until the feedgas analysis, the guarantees and the offtake terms existed. The client\'s next spending went on measurements and agreements rather than on a more detailed model.',
    ],
    takeaway: 'Precision in a spreadsheet cannot substitute for certainty in the feedgas or the contract.',
    deliverables: ['Feed and product-yield basis, Issue 02', 'Material and energy balance', 'Financial model with reconciliation items, Issue 02', 'Evidence and decision-gate register'],
    evidence: 'Project development study material prepared by Assos. Not a claim of plant delivery, financing, production or certified returns. Rates, returns and project identifiers withheld.',
    service: 'gas-monetisation',
  },
  {
    slug: 'north-sea-integrated-asset', numeral: '13', category: 'Operations', short: 'Integrated asset model',
    region: 'North Sea', setting: 'Mature offshore asset, UK North Sea', stage: 'Producing asset', basis: PRAC, period: 'Previous employment',
    title: 'Finding the constraint behind the lost <em>barrel</em>.',
    sub: 'Integrated well, network and facilities modelling on a mature offshore asset, where the binding limit sat in a different discipline from the one reporting the loss.',
    problem: [
      'Production on a mature offshore asset was shaped by the interaction of well behaviour, gathering-system backpressure and process limits. Each discipline reviewed its own part and each found something plausible. The limiting constraint belonged to the system, and nobody owned the system.',
    ],
    work: [
      'An integrated asset model joined well performance, network hydraulics and facilities capacity in one calibrated view that explained the observed system before it was used to propose changes. Operating changes and well opportunities were tested for the next constraint they would expose, and ranked against a defined baseline with an observation period long enough to separate a short-lived rate increase from a sustained gain.',
    ],
    result: [
      'Operating changes and interventions were prioritised on the integrated system response and verified against the baseline afterwards. The discipline that owned the fix was often not the one that had reported the loss.',
    ],
    takeaway: 'The limiting constraint belongs to the system. Its owner may sit in a different team.',
    deliverables: ['Integrated well and network model', 'Constraint diagnosis and opportunity review', 'Operations and intervention interface', 'Baseline and verification method'],
    evidence: 'Experience of senior personnel in previous employment, anonymised. Not an Assos Tech corporate contract. Client, field and quantitative performance claims withheld.',
    service: 'production-optimisation',
  },
  {
    slug: 'intervention-decisions', numeral: '14', category: 'Wells', short: 'Intervention decisions',
    region: 'North Sea and Middle East', setting: 'Mature producing assets, offshore and onshore', stage: 'Intervention planning and operations', basis: PRAC, period: 'Previous employment',
    title: 'Better decisions before the well is <em>opened</em>.',
    sub: 'Intervention planning, campaign support and post-job review across water shut-off, scale management, stimulation and artificial-lift workovers.',
    problem: [
      'Well opportunities competed for specialist resources and capital. A technically plausible treatment could still be a poor investment if the impairment mechanism, barrier condition or execution route was uncertain, and the post-job result was rarely compared with the promise in the programme.',
    ],
    work: [
      'Diagnostic review, programme development, contractor interfaces and campaign sequencing were connected to the expected production response. Each intervention was selected on the strength of its diagnosis, integrity basis, execution readiness and economic case, with explicit contingencies and a post-job evaluation written before the job.',
    ],
    result: [
      'Programmes explained why the intervention was right as well as how to execute it, and campaign learning accumulated because every job closed with a comparison against its forecast.',
    ],
    deliverables: ['Diagnostic and intervention option review', 'Programme and execution interfaces', 'Post-job performance assessment'],
    evidence: 'Experience of senior personnel in previous employment, anonymised. No Assos Tech delivery claim, client endorsement or quantified outcome is implied.',
    service: 'wells-and-interventions',
  },
];

/* ------------------------------------------------------------------ */
/* INSIGHTS                                                            */
/* ------------------------------------------------------------------ */

export const INSIGHTS = [
  {
    slug: 'liquid-is-not-oil', tag: 'Production systems', date: 'October 2026', reading: 5,
    title: 'Liquid is not <em>oil</em>.',
    intro: 'A transfer line rated at 50 thousand barrels a day of liquid does not add 50 thousand barrels of oil. On a field at 60 per cent water cut it may add 20, and only if the receiving facility can dispose of the other 30.',
    sections: [
      ['Start with the unit', [
        'Most capacity numbers in a gathering system are liquid numbers: a pipeline, a manifold, a separator inlet, a pump. Most targets are oil numbers. The conversion between them is the water cut of the specific wells being moved, not the field average, and the water cut moves with time.',
        'A forecast that adds a liquid capacity to an oil total will look right for one quarter and wrong after that, because the wells that were moved are the ones with the highest water cut and the fastest decline.',
      ]],
      ['Count each well once', [
        'When a well is transferred from one facility to another, the receiving facility gains and the source facility loses. A spreadsheet that records the gain and keeps the well in the source total has created oil. The check is arithmetic: field oil before the move equals field oil after the move, before any losses or interventions are applied.',
        'The same applies to net additions. A shut-in well that restarts at the receiving facility is a net addition and should be shown in a separate column from a well that was already flowing somewhere else.',
      ]],
      ['Follow the water to the ground', [
        'The receiving facility has an oil limit and a produced water limit, and downstream of it there are disposal pumps, injection wells with an injectivity that depends on wellhead pressure, re-injection headers and perhaps a pond. A liquid transfer that respects the line capacity and the oil limit can still fail at the disposal pump.',
        'In the field forecast described in our selected work, enforcing the receiving facility\'s water limit moved the binding constraint from the sending facility\'s oil capacity to the receiving facility\'s water treatment. The right next investment was in water, not in another transfer line.',
      ]],
      ['Write the rule down', [
        'The rules that stop these errors are short enough to put at the top of the workbook: liquid is not oil; a moved well is counted once; a well test is not an allocated rate; a disposal increase is not an oil gain unless it releases a named deferral; a planned enable date is not an available date. A forecast that states them can be audited. One that does not will be believed until it is wrong.',
      ]],
    ],
    closing: 'A transfer line adds liquid capacity. Whether any of it becomes oil depends on where the water goes.',
    service: 'production-optimisation',
  },
  {
    slug: 'a-planned-date-is-not-a-commissioning-date', tag: 'Commissioning', date: 'October 2026', reading: 4,
    title: 'A planned date is not a commissioning <em>date</em>.',
    intro: 'Forecasts, decks and handover notes keep promoting the date on a project plan into the date a line was available. The difference is a log, a line status and an operations signature.',
    sections: [
      ['Three dates that get confused', [
        'A brownfield line has at least three dates: the planned handover in the project tracker, the mechanical completion when construction finished, and the date operations accepted it into service after a successful test. Only the last one lets a well flow. Forecast workbooks, management slides and even the project tracker itself routinely use the first as if it were the third.',
      ]],
      ['What a commissioned line looks like', [
        'A commissioned line has a signed service test, a line status in the operating system, a valve line-up that has been walked, and an operations approval. A plan that says "available from October" has none of these. When we write a commissioning sequence we build it around hold points that each require field-verified evidence before the next step: valve positions confirmed by a walk-down, an unobstructed path proved, communications and monitoring in place, differential pressure checked, stable receipt at the destination.',
      ]],
      ['How the error propagates', [
        'A forecast that enables a transfer line from its planned date shows oil arriving at the receiving facility from that month. The deferral register then records the wells behind that line as recoverable with a near-term target. The management brief adds the barrels. When the line is three months late, every one of those documents is wrong in the same direction, and the error is found by the person asking why actual production is below plan.',
      ]],
      ['The discipline', [
        'Carry the planned date as a planned date in every document, label it, and switch it to an actual date only when the evidence exists. In data systems this is a field-level rule: planned and actual are separate fields, and the actual is populated from the acceptance record, not from the plan.',
      ]],
    ],
    closing: 'A planned date is a planned date. A commissioned line has a log.',
    service: 'facilities-engineering',
  },
  {
    slug: 'produced-water-is-a-field-constraint', tag: 'Produced water', date: 'October 2026', reading: 5,
    title: 'Produced water is a field <em>constraint</em>.',
    intro: 'Water is treated as a downstream reporting item until the day it decides how much oil the field can produce. On a mature water-flooded field that day has already arrived.',
    sections: [
      ['One number hides seven streams', [
        'Operators speak of "water capacity" as if it were a single quantity. It is at least seven: water generated and separated by train; water treated or transferred to disposal; water injected into disposal wells; water re-injected for pressure support; water sent to evaporation ponds; oil-in-water excursions and recycles; and outages, pump availability and disposal pressure. Each has its own capacity, reliability and failure mode. A plan that respects the headline number and ignores the routes will be surprised by a pump trip.',
      ]],
      ['Injectivity is not nameplate', [
        'A disposal well has a nameplate injection rate from its design and an available injectivity at the actual wellhead pressure and the actual formation condition today. The two diverge with time and with solids and oil in the injected water. Capacity planning that uses nameplate will overstate disposal headroom by exactly the amount that matters.',
      ]],
      ['Ponds are not disposal', [
        'Routing water to an evaporation pond relieves the facility today and creates a recovery, environmental and oil-loss problem that returns later. It belongs in the balance as its own stream, drawn in a different colour, never summed into "disposal". On the field in our selected work the agreed convention was disposal and re-injection in two shades of blue and ponds in red.',
      ]],
      ['The oil consequence', [
        'Every water constraint has an upstream production consequence: which wells, at which facility, would be cut back if this pump tripped or that well lost injectivity. Writing that consequence next to the constraint is what turns a water balance into a production decision. It also shows which water investment buys the most oil, which is rarely the one closest to the oil.',
      ]],
    ],
    closing: 'Water capacity is not one number. It is a set of routes, each with a pressure, a pump and a failure mode.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'the-bottleneck-moves', tag: 'Production systems', date: 'October 2026', reading: 4,
    title: 'The bottleneck moves. Your model should <em>too</em>.',
    intro: 'An operating change removes one constraint and exposes the next. A useful optimisation study names the next one before the first is removed.',
    sections: [
      ['Start with the measured system', [
        'Before proposing a modification, reconcile what the asset is doing today. Well tests, operating pressures, fluid properties, equipment performance and the loss record should support one consistent baseline with one date. A calibrated model earns its place by explaining the observed system; it does not earn it by producing a detailed chart.',
      ]],
      ['Test the next constraint', [
        'Reducing a gathering restriction increases flow into a separation or water-handling limit. Changing lift settings alters the network response. Adding a transfer line moves the limit from one facility\'s oil capacity to another\'s water capacity. The study is complete when the surrounding system has been checked and the range in which the improvement remains operable has been defined.',
      ]],
      ['Give the opportunity an owner', [
        'A recommendation needs an accountable person, a cost basis, an execution route and success criteria. Operations, wells, subsurface and projects may each own part of the answer. The interface between them should be visible in the register before the opportunity enters the delivery plan, because the owner of the fix is often not the team that reported the loss.',
      ]],
      ['Measure the result that lasts', [
        'A short-lived rate increase is different from a sustained improvement in saleable production. Agree the baseline, the observation period and the treatment of other operating changes before assigning an outcome to the intervention. Then record the outcome against the forecast in the programme, so the next ranking is better than this one.',
      ]],
    ],
    closing: 'A good optimisation programme keeps asking where the constraint has moved.',
    service: 'production-optimisation',
  },
  {
    slug: 'prove-the-well-before-the-tie-in', tag: 'Wells and execution', date: 'October 2026', reading: 4,
    title: 'Prove the well before committing the <em>tie-in</em>.',
    intro: 'Restarting an idle well is a chain of technical and commercial decisions. In the right order it protects capital; in the wrong order it builds a flowline to a well that cannot flow.',
    sections: [
      ['Separate potential from readiness', [
        'A well may have recoverable potential and lack integrity, access, a credible intervention route or evacuation capacity. The screening register should hold these as separate conditions with the evidence each needs. In the North Sea, where about 500 inactive suspended wells await final abandonment and well work took GBP 1.3 billion of 2025 decommissioning spend (NSTA, August 2026), the cost of the wrong order is visible in the regulator\'s own figures.',
      ]],
      ['Select the minimum useful next step', [
        'Some uncertainties resolve from existing records and targeted diagnostics. Others require intervention or testing. The next activity is chosen for the decision it enables, with the barrier and operating requirements in place, not because it is the activity the rig is available for.',
      ]],
      ['Treat the flowline as part of the decision', [
        'A restart case must include backpressure, fluid handling, the receiving facilities, tie-in permissions and execution constraints. A successful intervention does not establish a route to saleable production. On a mature onshore field the flowline may be the item with the longest lead time and the highest integrity risk, and it may be in a replacement programme with its own planned and actual dates.',
      ]],
      ['Agree when to stop', [
        'Define hold points, economic limits and technical rejection criteria before the campaign starts. A disciplined programme gives the team permission to park weak opportunities while it advances those with a stronger evidence base.',
      ]],
    ],
    closing: 'A restart programme matures evidence before it commits capital.',
    service: 'wells-and-interventions',
  },
  {
    slug: 'what-makes-a-concept-study-decision-grade', tag: 'Engineering review', date: 'October 2026', reading: 5,
    title: 'What makes a concept study decision <em>grade</em>.',
    intro: 'Most concept studies are conceptually useful and not yet fit to spend money on. The difference is a list of named gaps, and the review should produce the list rather than a longer study.',
    sections: [
      ['Quantify the benefit', [
        'A study that proposes new separation or treatment capacity must state the recoverable oil or avoided deferral in barrels a day, with the basis. "Improves crude quality" is a direction, not a benefit. Without the number the economics cannot be run and the project cannot be ranked against the alternatives competing for the same shutdown window.',
      ]],
      ['Validate the fluids', [
        'Correlation-based sizing is a starting point. It becomes decision grade when the field fluids, emulsion behaviour, bottle tests and chemical performance have been measured and the correlation has been benchmarked against an operating train in the same field. A study basis that assumes 80 per cent water cut and a particular reservoir blend is a basis, and it should not travel into other documents as a measurement.',
      ]],
      ['Integrate with the system', [
        'New capacity at one facility changes the water routed to disposal, re-injection and ponds, the loading on transfer lines, and the operating envelope of the trains upstream. A concept that does not show its integration with those systems has not shown its benefit either, because the constraint may simply move.',
      ]],
      ['Operability, utilities, season, construction, economics', [
        'Fouling of internals, sand, scale and pressure drop; maintainability; heating and energy demand; control and reliability; the seasonal performance envelope; construction, shutdown and simultaneous operations; and the project economics. Each is either addressed or listed as open. The review\'s job is to say which, and to give a verdict: approve, approve with conditions, hold, or do not approve.',
      ]],
      ['Why hold is a useful answer', [
        'In the review described in our selected work the verdict was hold, with a numbered gap list and alternative hybrid cases to study alongside the base case. That is a better outcome for the project than approval, because the next revision knows exactly what to close, and better than rejection, because the useful idea survives.',
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
    title: 'Closer to the <em>answer</em>.',
    lead: 'Assos Tech is an independent oil and gas engineering consultancy. We work on producing fields where oil, water, gas and steel interact: production optimisation, facilities and commissioning, produced water and flowline integrity, wells, gas monetisation, and the technical due diligence behind a purchase or a loan.',
    meta: [
      ['Where we work', 'Middle East, the UK North Sea and West Africa, for operators, developers, investors and lenders.'],
      ['How we work', 'Senior engineers who have run production and sat where money is committed. Every number carries its basis and its date.'],
      ['What you get', 'A verdict and the evidence behind it: approve, approve with conditions, hold, or do not approve.'],
    ],
    view: {
      title: 'The constraint belongs to the whole <em>system</em>.',
      left: [
        'A reservoir forecast is only useful if the wells can deliver it, the flowlines can carry it, the facility can separate it, the water can be disposed of and the economics still hold. On a mature field those links fail in sequence: remove one constraint and the next one appears, usually in a different team\'s spreadsheet.',
        'We follow the chain from reservoir to export and we name the next constraint before the first is removed. The work is arithmetic more than opinion: a liquid capacity is converted to oil at the water cut of the wells being moved; a well is counted once; a planned date is a planned date until the acceptance record exists.',
      ],
      right: [
        'Our clients are operators of large onshore fields in the Middle East and mature offshore assets in the North Sea, developers of gas projects in West Africa, and the investors and lenders who back them. They come to us for independent judgement at the point a decision is made: whether to approve a concept, how to restart a train, where the water will go, what an asset is worth once its water, integrity and abandonment are priced.',
        'We are small by design. The engineer who scopes the work does the work and signs it.',
      ],
    },
    services: {
      title: 'Seven service <em>lines</em>.',
      lead: 'One asset, one chain of constraints. The service lines describe where we most often enter it.',
      note: 'Specialist studies, field services and formal certifications are structured with appropriately qualified contributors and delivery partners where the mandate requires them. Reserves certification, competent person reports and legal opinions are outside our scope.',
    },
    work: {
      title: 'Selected <em>work</em>.',
      lead: 'Anonymised cases from onshore and offshore fields in the Middle East, the North Sea and West Africa. Each states its setting, its period and its basis. Clients, fields and facilities are never named.',
      cases: ['field-forecast-under-water-constraint', 'transfer-line-first-flow', 'produced-water-where-it-goes', 'gas-pipeline-pressure-defines-diameter'],
      note: 'Client, field and facility identities are withheld. Figures are planning values or dated study inputs, labelled as such, and are not represented as measured outcomes or client endorsement.',
    },
    method: {
      title: 'The answer first, then the <em>evidence</em>.',
      lead: 'Every engagement runs the same sequence, whether it lasts two weeks or a year.',
      steps: [
        ['i', 'Frame the decision', 'Agree who decides, what they need to decide, by when, and what a useful answer looks like. Scope, interfaces and reliance are written before the work starts.'],
        ['ii', 'Freeze the evidence', 'Collect the data with its dates. Separate fact, management claim, estimate, reconstruction, inference and opinion. Keep conflicts visible instead of reconciling them silently.'],
        ['iii', 'Follow the chain', 'Test the proposal across reservoir, wells, flowlines, separation, water, gas, power and export. Name the next constraint. Quantify the production consequence in oil, water and gas separately.'],
        ['iv', 'Give the verdict', 'Approve, approve with conditions, hold, or do not approve, with the missing items listed and an owner for each. Then the register, the model or the procedure the next team can act on.'],
      ],
    },
    insights: {
      title: 'Notes from the operating <em>side</em>.',
      lead: 'Short technical notes on the errors that recur in forecasts, commissioning plans and water balances.',
      items: ['liquid-is-not-oil', 'a-planned-date-is-not-a-commissioning-date', 'produced-water-is-a-field-constraint'],
    },
    cta: { title: 'Bring us the decision, not the <em>brief</em>.', text: 'Tell us what has to be decided and by when. We will say what evidence it needs, how long that takes and what it costs, usually within a week.' },
  },

  services: {
    title: 'What we <em>do</em>.',
    lead: 'Seven service lines across the production chain. Most engagements start in one and end up touching two or three, because the constraint moves.',
    scope: {
      title: 'Scope and <em>assurance</em>.',
      left: [
        'Assos Tech is a consultancy and engineering design house, not a contractor. We define the work, the deliverables and the assurance route around the decision, and we engage specialist contributors and delivery partners where a mandate requires disciplines we do not carry in house. Responsibilities for design approval, site execution, specialist services and operational acceptance are written down at the start.',
        'Independence is a commercial fact, not a slogan: we sell no equipment, license no software and have no parent company to feed. We do not own rigs or field crews, do not hold ISO certification, and do not present concept-stage work as construction or operating delivery.',
      ],
      right: [
        'Every report carries a document number, a revision, a classification and an Important Notice stating scope, basis of information and reliance limited to the named client. Figures are valid at the stated date. Conceptual drawings are labelled conceptual, not for construction.',
        'Where a client has its own templates, stage gates or RAG scheme, we follow them and add our name to the cover and footer.',
      ],
    },
    cta: { title: 'Start with the <em>question</em>.', text: 'A focused technical question, a facility that will not stabilise, a water balance that will not close, a data room that will not reconcile. Describe it in a paragraph and we will propose the scope.' },
  },

  work: {
    title: 'Selected <em>work</em>.',
    lead: 'Fourteen anonymised cases from onshore and offshore fields. Each states its setting, its period and its basis, so that capability and project status are never blurred. Clients, fields and facilities are never named.',
    note: 'Client, field, facility and well identities are withheld throughout. Where a figure appears it is a planning value or a dated study input and is labelled as such. No case implies client endorsement, completed construction or independently verified production gains.',
    basis: {
      title: 'Three kinds of <em>basis</em>.',
      items: [
        ['Operator engagement', 'Work done for an operator on a producing field: forecasts, reviews, plans and registers delivered into the operator\'s own systems and documents. The operator, the field and the facilities are withheld.'],
        ['Assos study', 'Study, concept or pre-FEED material prepared and issued by Assos Tech to a client under our own document control. Stage is stated. None is represented as a constructed or operating asset.'],
        ['Practitioner experience', 'Experience of senior personnel gained in previous employment, anonymised. Not an Assos Tech contract. Used to show the depth we bring, not as a corporate track record.'],
      ],
    },
    cta: { title: 'The next case could be <em>yours</em>.', text: 'If one of these problems looks like yours, send us the version you are living with. We will tell you what we would do first.' },
  },

  approach: {
    title: 'The answer first, then the <em>evidence</em>.',
    lead: 'Senior engineers who have run production, built models, read contracts and sat in the meetings where money is committed. The method below is how we keep that experience honest.',
    sequence: {
      title: 'One <em>sequence</em>.',
      lead: 'From a two-week review to a year retained inside an operator\'s team, the steps are the same.',
      steps: [
        ['i', 'Frame the decision', 'Who decides, what they must decide, by when, and what a useful answer looks like. Scope, interfaces, deliverables and reliance written before the work starts.'],
        ['ii', 'Freeze the evidence', 'Every source logged with its date, revision, owner and authority. Facts separated from management claims, estimates, reconstructions, inferences and opinions. Conflicts kept visible.'],
        ['iii', 'Follow the chain', 'Reservoir, well, flowline, gathering, separation, treatment, water, gas, power, storage, export. Required against installed capacity for each system, with margin, constraint and consequence.'],
        ['iv', 'Run the absurdity sweep', 'Divide the plateau by the well count. Compare the best test to the required rate. Check the mass balance closes. Ask who pays, who gains bargaining power and what the regulator does next.'],
        ['v', 'Give the verdict', 'Approve, approve with conditions, hold, or do not approve. Missing items listed, each with an owner. No go-ahead manufactured from absent evidence.'],
        ['vi', 'Leave something usable', 'A register, a model, a procedure or a data system the next team can run without us, with its basis date on every page.'],
      ],
    },
    evidence: {
      title: 'Evidence <em>classes</em>.',
      left: [
        'Every stated number carries a class, visibly or by phrasing: "the logs show", "management states", "we estimate", "this implies", "our view is". The reader can see where measurement ends and judgement begins, and uncertainty is sized rather than hedged.',
        'Source precedence is set field by field. A document can be authoritative for status and wrong about chemistry. The newest file does not win every argument; the most authoritative source for each fact does, and the conflicts it leaves are part of the answer.',
      ],
      table: `<div class="table-wrap"><table><thead><tr><th>Class</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td class="k">Fact</td><td>Measured or recorded, with a date and a source</td><td>Allocated oil 41.2 mbd on 14 September</td></tr><tr><td class="k">Management claim</td><td>Stated by the client or a counterparty, not verified by us</td><td>Train rated 207 mbd oil</td></tr><tr><td class="k">Estimate</td><td>Our calculation from stated inputs, with class and range</td><td>Net oil gain 8 to 12 mbd</td></tr><tr><td class="k">Reconstruction</td><td>Rebuilt from partial records to a stated method</td><td>Water balance from daily summaries</td></tr><tr><td class="k">Inference</td><td>Follows from facts by a mechanism we name</td><td>Water limit binds before oil limit</td></tr><tr><td class="k">Opinion</td><td>Our judgement, labelled as such</td><td>Hold the concept until fluids are measured</td></tr></tbody><caption>Evidence classes used in every Assos Tech report and register.</caption></table></div>`,
    },
    verdict: {
      title: 'Four <em>verdicts</em>.',
      left: [
        'A review that ends in a summary has not finished. Ours end in one of four verdicts, with the conditions and the missing items listed so the next revision knows what to close. If the evidence the decision needs has not been supplied, the verdict says so rather than assuming it.',
      ],
      items: [
        ['Approve.', 'The basis supports the decision as proposed. Residual items are recorded for follow-up.'],
        ['Approve with conditions.', 'The decision can proceed once named items are closed, each with an owner and a date.'],
        ['Hold.', 'The idea is sound and the evidence is not yet. A numbered gap list and alternative cases are issued.'],
        ['Do not approve.', 'The basis does not support the decision, for stated reasons, with what would change the view.'],
      ],
    },
    models: {
      title: 'Three ways to <em>engage</em>.',
      items: [
        ['Focused review', 'A defined technical question, agreed information requirements and a concise recommendation with its basis. Fixed fee where the scope allows. Two to six weeks.'],
        ['Retained engineer', 'A senior engineer inside the operator\'s production, facilities or engineering team on a retained basis, carrying the registers, reviews and plans week to week.'],
        ['Owner\'s engineer and study lead', 'Coordinated technical and commercial workstreams for a development, acquisition or brownfield project, with specialist contributors selected for the assignment.'],
      ],
    },
    deliver: {
      title: 'Documents built to be <em>reused</em>.',
      body: [
        'Reports, memos, workbooks and decks follow one house standard: a document number, revision and classification on every page; an Important Notice on scope and reliance; tables with units in the header and figures right-aligned; charts that state their point in the title, label series directly and name the source and date; conceptual drawings marked not for construction. Workbooks keep inputs, calculations and checks on separate sheets with live formulas, so a client\'s engineer can change an assumption and watch the answer move.',
        'The document is shorter than the research behind it. Background the reader already has, the second example when the first proves the point, and adjectives the number already contains are cut.',
      ],
    },
    cta: { title: 'See the method on your <em>problem</em>.', text: 'Send a paragraph on the decision you face. We will reply with the evidence it needs, the time it takes and what it costs.' },
  },

  insights: {
    title: 'Notes from the operating <em>side</em>.',
    lead: 'Short technical notes on the errors that recur in forecasts, commissioning plans, water balances and concept studies. Each one is a rule we apply.',
    cta: { title: 'Disagree with a <em>note</em>?', text: 'We would rather hear it than not. Write to us with the case that breaks the rule.' },
  },

  about: {
    title: 'Independent engineering, from first <em>principles</em>.',
    lead: 'Assos Tech Ltd is a UK-registered oil and gas engineering consultancy founded in 2014. We work for operators, developers, investors and lenders on onshore and offshore fields in the Middle East, the North Sea and West Africa.',
    firm: {
      title: 'The <em>firm</em>.',
      left: [
        'Assos Tech is built around senior production and facilities engineering and an assignment-specific delivery model. The engineer who scopes an assignment leads it and signs it. Specialist contributors and delivery partners are engaged where a mandate needs disciplines we do not carry in house, and their responsibilities are written into the scope.',
        'Our recent work has been for the operator of a supergiant onshore field in the Middle East, on forecasting, commissioning, produced water, flowline integrity, design review and decision data; in gas project development in Nigeria, on pipelines and small-scale LNG; and in technical and economic review for investors.',
      ],
      right: [
        'Before Assos Tech, the firm\'s senior personnel worked in operating roles on mature offshore assets in the UK North Sea and in production and intervention engineering across the North Sea and the Middle East. That experience is described on this site as practitioner experience in previous employment, and it is kept distinct from Assos Tech assignments.',
        'We publish no client logos, no testimonials and no portfolio totals. Each case states what it is. If the basis of a claim cannot be shown, the claim is not made.',
      ],
    },
    experience: {
      title: 'Where the experience <em>sits</em>.',
      lead: 'Four areas of depth, each visible in the selected work.',
      items: [
        ['Producing assets', 'Production surveillance, integrated asset modelling, constraint mapping, deferral management, facility capacity and routing, forecast and scenario work on fields producing above a million barrels a day.'],
        ['Facilities and water', 'Design basis and P&ID review, brownfield stage gates, commissioning and restart plans, overpressure context, produced water systems, scale and flowline integrity programmes.'],
        ['Wells and campaigns', 'Intervention diagnosis and programmes, water shut-off, scale treatment, stimulation, artificial-lift workovers, well delivery scheduling and post-job review.'],
        ['Gas, economics and data', 'Gas pipeline hydraulics, small-scale LNG and gas-to-power screening, transparent project economics, technical due diligence, and operations data systems with field-level precedence.'],
      ],
    },
    name: {
      title: 'The <em>name</em>.',
      left: [
        'Assos is the Aegean city where Aristotle founded his first school in 347 BC, and in Greek άσσος is the ace, the card that carries the hand. The firm\'s idea is the ace from first principles: the answer that holds because the arithmetic holds.',
        'The mark is a fine datum, a hairline ring with two opposing solid quadrants. A datum is the reference everything else is measured from.',
      ],
      pillars: [
        ['Observe.', 'Start from the measured system, with its dates and its gaps.'],
        ['Endure.', 'Build registers, models and procedures that survive the engineer who built them.'],
        ['Vantage.', 'Stand where the whole chain is visible, from reservoir to export to cash.'],
      ],
    },
    standards: {
      title: 'Standards we hold <em>ourselves</em> to.',
      body: [
        'Plain, precise engineering English. The number comes first and carries the adjective. The mechanism is named. The physical check is done in the text. Fact, inference and judgement read differently. Uncertainty is sized, not hedged. Every section ends on what it means for the decision.',
        'Document control follows a single numbering scheme, one live file per document, revisions inside the file, and a classification on every page. Safety-critical decisions and field work require approved site procedures, permits, risk assessments and the responsible technical authority; our documents support that process and never replace it.',
        'Assos Tech Ltd is registered in Scotland, company number SC474633, incorporated on 7 April 2014. Registered office: 5 South Charlotte Street, Edinburgh, EH2 4AN.',
      ],
    },
    cta: { title: 'Talk to the engineer who will do the <em>work</em>.', text: 'There is no business development layer. Write to us and the reply comes from the person who would lead the assignment.' },
  },

  contact: {
    title: 'Describe the <em>decision</em>.',
    lead: 'The best brief is a paragraph on what has to be decided, by whom, and by when. We reply with the evidence it needs, the time it takes and what it costs.',
    placeholder: 'For example: a transfer line is due in November and the forecast assumes it. The receiving facility is already at its water limit. We need to know what the line is worth in oil and whether the water schedule supports it.',
    hint: 'Your browser will open an email to us with these fields. Nothing is stored on this site.',
    right: [
      'Assos Tech works for operators, developers, investors and lenders. Enquiries from recruiters, resellers and software vendors are read but rarely answered.',
      'For an existing engagement, use the project contact in your scope document. For press, data requests or anything about this website, use the same address.',
    ],
    privacy: 'We use what you send only to reply to you. See the privacy notice for the rest.',
    next: [
      ['i', 'Within two working days', 'A reply from the engineer who would lead the work, with clarifying questions if the brief needs them.'],
      ['ii', 'Within a week', 'A one-page scope: the question as we understand it, the evidence required, deliverables, time and fee, and the reliance terms.'],
      ['iii', 'On agreement', 'A document number, a revision record and a start date. Data is requested in a single list with the date basis we need for each item.'],
    ],
  },

  legal: {
    label: 'Company information', title: 'Company <em>information</em>.',
    lead: 'The legal identity behind this website.',
    body: `<h2>Registered details</h2><div class="table-wrap"><table><tbody><tr><td class="k">Legal name</td><td>Assos Tech Ltd (registered as ASSOS TECH LIMITED)</td></tr><tr><td class="k">Registered in</td><td>Scotland, United Kingdom</td></tr><tr><td class="k">Company number</td><td>SC474633</td></tr><tr><td class="k">Incorporated</td><td>7 April 2014</td></tr><tr><td class="k">Registered office</td><td>5 South Charlotte Street, Edinburgh, EH2 4AN, United Kingdom</td></tr><tr><td class="k">Register</td><td><a class="textlink" href="https://find-and-update.company-information.service.gov.uk/company/SC474633" rel="noopener">Companies House, SC474633</a></td></tr><tr><td class="k">Email</td><td><a class="textlink" href="mailto:allen@assostechltd.com">allen@assostechltd.com</a></td></tr></tbody></table></div>
<h2>Website notice</h2><p>This website describes the services of Assos Tech Ltd and gives anonymised examples of work. It is not an offer, a technical opinion or advice on any specific asset. Figures quoted in case studies are planning values or dated study inputs, labelled as such; they are not measured outcomes and they do not imply client endorsement. Sector figures carry their source and date and were correct to our knowledge when published. Nothing on this site constitutes a legal, financial or reserves opinion.</p>
<h2>Names and marks</h2><p>Assos Tech, ASSOS and the fine datum mark are used by Assos Tech Ltd. Third parties named as sources of sector data (regulators, trade bodies, publishers) are not clients and are not affiliated with Assos Tech Ltd.</p>
<h2>Accessibility</h2><p>The site is built as semantic HTML with a single heading hierarchy per page, text alternatives for figures, keyboard-operable navigation and colour contrast of at least 4.5:1 for text. If something does not work for you, tell us by email and we will fix it.</p>`,
  },

  privacy: {
    label: 'Privacy', title: 'Privacy <em>notice</em>.',
    lead: 'What this website collects, which is very little, and what we do with an enquiry.',
    body: `<h2>This website</h2><p>The site is static. It sets no cookies, runs no analytics and stores nothing in your browser. Fonts are loaded from Google Fonts, which receives your IP address when the page loads; the site is hosted on Vercel, which keeps standard server logs. We do not receive personal data from either.</p>
<h2>Enquiries</h2><p>The contact form composes an email in your own email client; nothing is sent to or stored on this site. When you email us we keep your message and our reply for as long as the enquiry or any resulting engagement is live, and for six years afterwards for professional record-keeping. We use your details only to reply and to carry out any work you ask for. We do not sell, rent or share them for marketing.</p>
<h2>Engagements</h2><p>Client data received during an engagement is handled under the confidentiality and data terms of the scope document, which take precedence over this notice.</p>
<h2>Your rights</h2><p>Under UK data protection law you may ask what we hold about you, ask for it to be corrected or deleted, and complain to the Information Commissioner's Office. Write to <a class="textlink" href="mailto:allen@assostechltd.com">allen@assostechltd.com</a>.</p>
<p class="small muted">Controller: Assos Tech Ltd, 5 South Charlotte Street, Edinburgh, EH2 4AN. Notice dated 18 October 2026.</p>`,
  },
};

/* ------------------------------------------------------------------ */
/* REGIONS                                                             */
/* ------------------------------------------------------------------ */

PAGES.regions = {
  title: 'Three regions, three different <em>constraints</em>.',
  lead: 'Competitors list countries. We would rather say what is different about each place we work, onshore and offshore, so you can judge whether we understand your side of the table.',
  items: [
    {
      label: 'Middle East', title: 'Water decides the <em>oil</em>.',
      lead: 'Supergiant water-flooded onshore fields with several central processing facilities, large well counts and gathering systems that allow wells to be moved between facilities. The binding constraint is more often water than oil.',
      body: [
        'The engineering problems are brownfield and simultaneous: processing facilities being rebuilt or expanded while producing, produced water re-injection being added in phases, inter-facility transfer lines being commissioned, flowlines reaching the end of their life on high water cut, and scale restricting chokes. Forecasts have to carry facility oil and water limits, transfer-line liquid capacities and disposal headroom at the same time, with each well counted once.',
        'Data are fragmented across daily exports, planning files and controlled drawings with different dates, so a decision-support record with field-level source precedence pays for itself quickly. Change runs through a brownfield stage-gate process, and commissioning and restart are field-verified activities with hold points, not calendar events.',
        'Export routes are shared and can close without notice, so restart planning is a standing capability rather than a one-off. A restart written one well at a time, with checks between phases and stop criteria, recovers production faster than an ambitious one that trips.',
      ],
      numbers: [],
      asks: ['Constraint-based oil and water forecasts with transfer and disposal limits', 'Commissioning and restart plans with field-verified hold points', 'P&ID and statement-of-requirements review for new lines and trains', 'Produced water balances and disposal headroom', 'Flowline replacement programme integration and scale procedures', 'Well profiles, deferral registers and management reporting from one data model'],
      cases: ['field-forecast-under-water-constraint', 'produced-water-where-it-goes'],
    },
    {
      label: 'UK North Sea', title: 'Late life is an engineering <em>discipline</em>.',
      lead: 'Mature platforms, falling production, record decommissioning spend and asset transfers in which the seller keeps part of the well liability. The work is extending production safely and pricing the end of it honestly.',
      body: [
        'Decommissioning spend reached GBP 2.6 billion in 2025, about half of it on wells, and the regulator expects about GBP 3 billion a year from 2026 to 2032, with around 500 inactive suspended wells still awaiting final abandonment (NSTA, UKCS Decommissioning Cost and Performance Update, 13 August 2026). No exploration wells were drilled in 2025 and production has fallen about 40 per cent in five years (OEUK Business Outlook 2026).',
        'For an operator this means integrated asset models on platforms where weight, space and power are fixed, cessation-of-production planning that follows the economic limit well by well, and a clear-eyed view of which interventions still pay. For a buyer or lender it means technical due diligence that prices water cut, integrity, abandonment and the liability the seller has retained.',
        'Our senior personnel\'s operating experience on mature UK assets, gained in previous employment, is the basis of this work and is labelled as such throughout the site.',
      ],
      numbers: [
        ['UKCS decommissioning spend, 2025', 'GBP 2.6 billion', 'NSTA, 13 August 2026'],
        ['Expected annual decommissioning spend, 2026 to 2032', 'about GBP 3 billion', 'NSTA, 13 August 2026'],
        ['Inactive suspended wells awaiting abandonment', 'about 500', 'NSTA, 13 August 2026'],
        ['Remaining UKCS decommissioning cost, 2024 prices', 'GBP 44 billion', 'NSTA, 2025 update'],
      ],
      asks: ['Integrated well, network and facilities modelling on brownfield platforms', 'Late-life production optimisation and economic-limit planning', 'Intervention diagnosis, programmes and post-job review', 'Technical due diligence on asset transfers with retained liabilities', 'Decommissioning cost challenge from an operations viewpoint'],
      cases: ['north-sea-integrated-asset', 'intervention-decisions'],
    },
    {
      label: 'West Africa', title: 'Gas with a moving <em>price</em>.',
      lead: 'Nigeria is transferring onshore and shallow-water assets to indigenous operators, chasing a gas target it is unlikely to hit on time, and moving from fixed to market gas pricing. Every gas project assumption is in motion.',
      body: [
        'Nigeria produced about 7.5 billion cubic feet of gas a day in 2025 against a 2030 target of 12, and a mid-point review projected only about 1.3 billion cubic feet a day of new production by 2030 against 4.6 planned (Decade of Gas Secretariat, 2026; NRGI as reported by ThisDay, 28 September 2026). About 302 billion cubic feet was flared between January 2025 and June 2026 (NUPRC data as reported, 2026). The 614-kilometre AKK pipeline was reported 95 per cent complete in July 2026 and the Ajaokuta mini-LNG cluster, five plants totalling 97 million cubic feet a day, depends on it for feed.',
        'Indigenous operators now hold more than half of crude output after the divestments of 2024 and 2025, inheriting mature Niger Delta fields with water cut above 50 per cent, carbonate scale and ageing flowlines, and the 2026 decommissioning regulations tie approved abandonment plans to annual fund contributions. Reserve-based lending arranged through African development finance institutions is the current funding model, and lenders want the engineering priced.',
        'Our work here is Assos Tech study material: pipeline concepts developed from the pressure envelope and small-scale LNG balances that separate the screening case from the bankable one, with each input classed as measured, vendor-stated or assumed.',
      ],
      numbers: [
        ['Nigeria gas production, 2025, against 2030 target', '7.5 against 12 bcf/d', 'Decade of Gas Secretariat, 2026'],
        ['Gas flared, January 2025 to June 2026', 'about 302 bcf', 'NUPRC data as reported, 2026'],
        ['Domestic base gas price for power from 1 April 2026', 'USD 2.18 per MMBtu', 'NMDPRA, 2026'],
        ['Crude and condensate output, September 2026', '1.72 million bpd', 'NUPRC, 2026'],
      ],
      asks: ['Gas pipeline hydraulics and concept from the pressure envelope', 'Mini-LNG, CNG and gas-to-power screening on one basis', 'Feed, yield and energy balances with evidence classes', 'Technical due diligence for acquisitions and reserve-based lending', 'Produced water and scale assessment on inherited mature fields'],
      cases: ['gas-pipeline-pressure-defines-diameter', 'mini-lng-balance'],
    },
  ],
  cta: { title: 'Tell us which <em>region</em>.', text: 'If your asset sits in one of these places, send the decision you face. If it sits elsewhere, send it anyway; the method travels.' },
};

/* ------------------------------------------------------------------ */
/* SECOND DESIGN PASS: additions                                       */
/* ------------------------------------------------------------------ */

PAGES.home.eyebrow = 'Independent engineering, from first principles';
PAGES.home.statement = {
  text: 'Every number on this site carries its basis and its date. <span class="lichen">So does every number in our reports. That is the whole method.</span>',
  note: 'Fact, management claim, estimate, reconstruction, inference, opinion. Six classes, visible or by phrasing, on every page we issue. The reader can always see where measurement ends and judgement begins.',
};
PAGES.home.metrics = {
  title: 'Stated, not <em>styled</em>.',
  lead: 'Four numbers from the selected work, each with the document it came from. None of them is a portfolio total.',
  items: [
    ['Planned oil, four-phase restart', '86.6', 'mbd', 'Four phases of 21.7, 22.3, 22.1 and 20.5 thousand barrels a day, wells introduced one at a time.', 'Train restart plan, 2026'],
    ['Flowline ranked for replacement', '67.7', 'km', 'Candidate lines ranked on integrity risk, production viability and scope duplication.', 'Decision support paper, 2021'],
    ['Hold points before first flow', '5', '', 'Each released only on field-verified evidence, from valve line-up to stable receipt.', 'Commissioning plan, 2026'],
    ['Scenarios carried to 2029', '3', '', 'No transfers, transfers, transfers with optimisation. Each well counted once, water followed to disposal.', 'Forecast workbook, September 2026'],
  ],
};
PAGES.home.featured = 'field-forecast-under-water-constraint';
PAGES.home.pillars = {
  title: 'Observe. Endure. <em>Vantage</em>.',
  lead: 'Three words from the name. Assos is where Aristotle founded his first school in 347 BC and learned to trust what he could measure. In Greek the word is also the ace, the one card that decides the hand.',
  items: [
    ['Observe', 'Start from the measured system, with its dates and its gaps. A calibrated model earns its place by explaining what the plant is doing today.'],
    ['Endure', 'Build registers, models and procedures that survive the engineer who built them. One live file per document, revision inside it, basis date on every page.'],
    ['<em>Vantage</em>', 'Stand where the whole chain is visible, from reservoir to export to cash, and name the next constraint before the first is removed.'],
  ],
};
PAGES.home.closeText = 'Tell us what has to be decided and by when. We will say what evidence it needs, how long that takes and what it costs, usually within a week.';

PAGES.services.matrix = {
  title: 'Where each service enters the <em>asset</em>.',
  lead: 'Five stages of an asset\'s life against the seven service lines. A filled datum is where we lead; a half datum is where we contribute to a wider team; an open datum is by specific request.',
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
};

PAGES.origin = {
  title: 'The ace, from first <em>principles</em>.',
  lead: 'A name is a promise about method. Ours comes from a city on the Aegean, a card, and a reference mark. This page explains the three, and what the firm is being built to do.',
  city: {
    title: 'A school on a <em>headland</em>.',
    body: [
      'Assos sits on a volcanic headland on the southern coast of the Troad, facing Lesbos across a narrow strait. In 347 BC, after Plato\'s death, Aristotle left Athens and accepted an invitation from Hermias, the ruler of Atarneus, to come to Assos. He stayed three years and founded his first school there, before moving across the water to Lesbos and the lagoon at Pyrrha.',
      'It was on that coast that his method took its shape. He stopped reasoning down from ideal forms and started working up from the thing in front of him: the anatomy of a cuttlefish, the breeding of a catfish, the tides. Observe first, classify what you see, and only then explain. Two thousand years later it is still the only method that survives contact with a producing field.',
      'The firm took the name because the method is the point. A forecast is not an argument about what should happen. It is a record of what the wells, the lines and the facilities are doing today, with the arithmetic of what follows.',
    ],
  },
  card: {
    title: 'The one card that decides the <em>hand</em>.',
    body: [
      'In modern Greek, άσσος is the ace. It is the single card that carries the hand, the one the rest of the play is arranged around. In an engineering decision there is usually one such number: the water limit at the receiving facility, the minimum source pressure on a gas line, the injectivity of a disposal well at today\'s wellhead pressure. Everything else is detail.',
      'Our work is to find that number, state it with its basis and its date, and build the recommendation around it. The idea we work to is the ace from first principles: the answer that holds because the arithmetic holds.',
    ],
  },
  datum: {
    title: 'A reference everything else is measured <em>from</em>.',
    body: [
      'The mark is a fine datum: a hairline ring with two opposing solid quadrants, drawn on a 48-unit box with a 0.9 stroke. Surveyors and machinists use the symbol to fix the point from which every other dimension is taken. If the datum moves, every measurement is wrong.',
      'We use it because that is what a good report does. It fixes the basis: the source files, their dates, the capacities assumed and the switch dates. Then every number in the document can be traced back to it.',
    ],
  },
  ambition: {
    title: 'What the firm is being <em>built</em> to do.',
    body: [
      'Assos Tech is being built as a small permanent bench of senior production, facilities and gas engineers, working to one evidence standard and one document standard, with a data practice that turns an operator\'s exports into a decision record. The ambition is narrow and specific: to be the engineer an operator, a developer or a lender calls before the money moves, in the three regions where the firm has worked.',
      'The measures of that are not headcount or logos. They are whether the registers we build are still in use a year later, whether the verdicts we give are borne out by the allocation export, and whether the notes we publish are quoted back to us in the meetings where decisions are made.',
    ],
  },
  timeline: [
    ['347 BC', 'Assos', 'Aristotle founds his first school on the headland and begins the observational method.'],
    ['7 April 2014', 'Incorporation', 'Assos Tech Ltd is registered in Scotland, company number SC474633.'],
    ['2025 to 2026', 'Engagements and studies', 'Production, facilities and water engineering for the operator of a supergiant onshore field in the Middle East; gas pipeline and small-scale LNG studies in Nigeria.'],
    ['2026', 'The standard', 'Forest & Sage brand, evidence classes, document control and the data practice brought into one house standard.'],
  ],
  cta: { title: 'Measure from the same <em>datum</em>.', text: 'Send the decision you face and the files behind it. We will fix the basis first, then the answer.' },
};
