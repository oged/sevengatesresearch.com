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
    standfirst: 'On a mature field, water handling, scale and flowline condition decide how much oil you can move. We build the water balance route by route, confirm scale before anyone treats it, and keep replacement, service tests and risk on one timeline for each well.',
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

const ME = 'Supergiant onshore oil field, Middle East';
const ENG = 'Operator engagement';
const STUDY = 'Assos study';
const PRAC = 'Practitioner experience';

export const CASES = [
  {
    slug: 'field-forecast-under-water-constraint', numeral: '01', category: 'Operations', short: 'Field forecast',
    region: 'Middle East', setting: ME, stage: 'Producing field, several processing facilities', basis: ENG, period: '2026',
    title: 'Field forecast to 2029 with water limits',
    sub: 'An oil and water forecast across five central processing facilities. Transfer, decline and disposal limits were applied to every well, and each well was counted once.',
    problem: [
      'The northern half of the field feeds five central processing facilities. Transfer lines allow wells to be moved between them. Management wanted to know how much oil the network could sustain to 2029 under three cases: no transfers, transfers only, and transfers with optimisation. The only rate data available were blended oil and water numbers per well from one reference date.',
      'Earlier spreadsheets had added a 50 thousand barrel per day liquid transfer capacity to an oil total. They had counted transferred wells at both the home and the receiving facility. They had treated a planned commissioning date as the date the line was available. The result looked precise and did not reconcile.',
    ],
    work: [
      'We froze the source rates and the forecast start date. We normalised each well\'s home and current facility. We modelled declining well capacity and water generation from the blended basis. Each scenario carried explicit switches: facility oil and water limits, transfer line liquid capacities of 40 and 50 thousand barrels per day, and the dates new tankage and water routes were assumed available.',
      'All limits were applied at the same time: liquid on the transfer lines, oil and water at the receiving facility, and disposal downstream. Each well was allocated once. Gross oil moved, net oil gained, oil deferred, water displaced and extra water generated were reported in separate columns. Totals were reconciled by well, facility and field before any sensitivity was run.',
    ],
    figure: 'capacityBalance',
    result: [
      'Management had a range instead of a single number, with the planning capacities and their switch dates on the page. The forecast showed that the second transfer line moved the limit from the sending facility\'s oil capacity to the receiving facility\'s water capacity. The next spend should go on water treatment and disposal, not on more transfer capacity.',
      'The capacities used were planning inputs dated September 2026, not verified operating limits. The report said so on every table.',
    ],
    takeaway: 'A transfer line adds liquid capacity. How much of that becomes oil depends on where the water can go.',
    deliverables: ['Forecast workbook with scenario switches, decline and single-allocation logic', 'Scenario tables to 2029 by facility: oil, water, gas', 'Validation sheet: conservation, double counting, limits and phase-in checks', 'Methodology note and management presentation'],
    evidence: 'Work done for the operator of a supergiant onshore field in the Middle East. The client, the field and the facilities are not named. Capacities quoted are planning assumptions from the forecast exercise, dated September 2026. They are not published operating limits.',
    service: 'production-optimisation',
  },
  {
    slug: 'transfer-line-first-flow', numeral: '02', category: 'Facilities', short: 'Transfer line commissioning',
    region: 'Middle East', setting: ME, stage: 'Brownfield commissioning', basis: ENG, period: '2026',
    title: 'Commissioning a new 16-inch transfer line',
    sub: 'First flow through a new line between two processing facilities, with one candidate well, two temporary shut-ins and a receiving route proved before any valve was moved.',
    problem: [
      'A new 16-inch line would let wells from one facility and its satellite flow to a third facility with spare treatment capacity. The draft plan named a first-flow well and a receiving train. It estimated the associated well moves at about 8.8 thousand barrels of oil and 13.1 thousand barrels of water a day. The risk was that an unproven path, an unchecked valve line-up or a train not ready for the water would turn a commissioning step into a shutdown.',
    ],
    work: [
      'We wrote the commissioning sequence around five hold points. Each was released only on evidence from the field. The well, train and line valve line-up confirmed by a walk-down. An open path proved from source to receiving facility. Communications and monitoring in place. Differential pressure checked across the line. Stable receipt at the destination before any further well was introduced. Two wells on the receiving train were named for temporary shut-in to make room. The transfer of the candidate well from its home manifold was written as its own step with its own checks.',
      'The 8.8 and 13.1 thousand barrel figures stayed in the plan as planning estimates, labelled as such. They were not reported as recovered production.',
    ],
    result: [
      'Operations had a plan they could sign. Each hold point had stop criteria. The receiving route was named, not read off a line label. The commissioning date stayed a planned date in every document until the line status, the logs and operations approval confirmed it.',
    ],
    takeaway: 'A planned date is a planned date. A commissioned line has a log.',
    deliverables: ['Staged commissioning plan with five hold points', 'Valve line-up and isolation verification list', 'Receiving train readiness checks and temporary shut-in list', 'Draft note to management with planning estimates labelled'],
    evidence: 'Work done for the operator. Well identifiers, facility names and the operator are not named. Volumes are planning estimates made at the time, not measured results.',
    service: 'facilities-engineering',
  },
  {
    slug: 'train-restart-in-four-phases', numeral: '03', category: 'Facilities', short: 'Train restart',
    region: 'Middle East', setting: ME, stage: 'Restart after turnaround', basis: ENG, period: '2026',
    title: 'Restarting a processing train in four phases',
    sub: 'A plan to bring a train back to about 87 thousand barrels of oil a day, with 35 thousand barrels of water, one well at a time, with a hold on any abnormal condition.',
    problem: [
      'After a turnaround, a processing train had to be returned to service with all its wells. Starting them together risked slugging, tank vent and flare carry-over, unstable dehydrator interfaces and an emergency shutdown that would cost more days than a slow start. The weak natural flow wells needed nitrogen lift or flowback support and could not simply be opened.',
    ],
    work: [
      'We wrote the restart in four phases. The planned oil increments were 21.7, 22.3, 22.1 and 20.5 thousand barrels a day. The water increments were 2.5, 4.2, 18.0 and 10.5 thousand barrels a day. Wells came on one at a time, about fifteen minutes apart. Between phases the team checked train pressure, separation, tank levels and vents, dehydrator and desalter stability and flare behaviour. Phase three carried half the water, so it got the longest stabilisation window. Any abnormal condition held the sequence until the facility manager released it.',
    ],
    figure: 'restartPhases',
    result: [
      'The control room had a sequence with numbers to check against as each well came on. Management could see where the water would arrive and when. The increments were plan values and were reported as plan values. Verified production came from the allocation export after the event.',
    ],
    deliverables: ['Four-phase restart plan with well sequence and timing', 'Phase checklists: pressure, levels, vents, treatment, flare', 'Stop criteria and approval points', 'Management summary with plan values labelled'],
    evidence: 'Work done for the operator. Plan values are from the restart document. No claim is made about actual production. Operator and facility not named.',
    service: 'facilities-engineering',
  },
  {
    slug: 'produced-water-where-it-goes', numeral: '04', category: 'Water and integrity', short: 'Produced water balance',
    region: 'Middle East', setting: ME, stage: 'Producing field, water system planning', basis: ENG, period: '2025 to 2026',
    title: 'A produced water balance by route',
    sub: 'Disposal, re-injection and evaporation tracked separately, injectivity taken at actual pressure, and the oil consequence of each water limit stated.',
    problem: [
      'A water-flooded field produces water at rates close to its oil. Disposal into a shallow formation, re-injection for pressure support and evaporation ponds each had their own capacity, availability and reliability. The operating plans treated water capacity as one number. An earlier terms of reference had already listed the system\'s problems: interface control in dehydrators, oil-in-water measurement, meter coverage and reliability, installed pump capacity, single-pump stability, and oil recovery from ponds and drains.',
    ],
    work: [
      'We built the balance for each facility and each route. Seven streams were tracked separately: water generated and separated by train; water treated or transferred to disposal; water injected into disposal wells; water re-injected; water sent to ponds; oil-in-water excursions and recycles; and outages, pump availability and disposal pressure. Injectivity was taken at actual pressure, not nameplate. A 2020 investment paper\'s 23-well disposal requirement was broken down into 11 wells of added capacity, 7 for N+1 cover and 5 replacements, and treated as a dated planning basis rather than a current count.',
      'Each water limit was then translated into its effect on production: which wells would have to be cut back, at which facility, if a pump tripped or an injection well lost injectivity.',
    ],
    figure: 'waterRoutes',
    result: [
      'The operator\'s optimisation cases could be tested against water routes rather than one water number. The evaporation route was shown separately so it was never mistaken for disposal. The chart convention agreed with the operator was disposal and re-injection in two blues, ponds in red, always with the time basis and units.',
    ],
    takeaway: 'Water capacity is not one number. It is a set of routes, each with a pressure, a pump and a way to fail.',
    deliverables: ['Produced water balance by facility and route', 'Disposal headroom at actual pressure', 'Water system problem register and checks', 'Table of each water limit and its effect on production'],
    evidence: 'Work done for the operator. Historic documents (a 2019 scheme, a 2020 terms of reference, a 2020 investment paper) were used as dated engineering context, not as current facts. Operator and facilities not named.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'concept-study-not-yet-decision-grade', numeral: '05', category: 'Facilities', short: 'Concept study review',
    region: 'Middle East', setting: ME, stage: 'Concept study review', basis: ENG, period: '2026',
    title: 'Review of a water knockout and treatment concept',
    sub: 'An independent review of a consultant\'s concept study, with a verdict and the list of items to close before an execution decision.',
    problem: [
      'A consultant proposed free water knockout and produced water treatment at one facility to improve crude quality and relieve the dehydration train. The study assumed a high-asphaltene reservoir blend and a water cut up to 80 per cent. Management needed to know whether to take it to the next stage gate.',
    ],
    work: [
      'We tested the study against the operating record and the questions an execution decision would have to answer. The recoverable oil and the deferral benefit were not quantified. There were no field fluid, emulsion or bottle test data, so the chemical programme was unvalidated. Separator sizing used correlations that had not been checked against an operating train in the same field. Integration with disposal, re-injection, ponds and transfer between facilities was not covered. Fouling of internals, sand, scale, pressure drop and maintainability, heating and energy, control and reliability, the seasonal envelope, construction and shutdown windows, and the project economics were each either missing or asserted.',
      'We also noted that the 80 per cent water cut and the high-asphaltene blend belonged to the study basis, not to a field measurement, and should not travel into other documents as fact.',
    ],
    result: [
      'Verdict: hold. The concept was useful and should go to a next revision, with a numbered list of items to close: quantified benefit, fluid and chemical validation, sizing checked against the operating train, water system integration, operability and maintainability, utilities and energy, seasonal envelope, construction and simultaneous operations, and economics. We recommended that hybrid options combining internals, chemistry and selective heating be studied alongside the base case.',
    ],
    takeaway: 'A concept study earns its next gate by closing named gaps, not by adding pages.',
    deliverables: ['Review memorandum with verdict and conditions', 'List of items to close, with owners', 'Register of study assumptions against field measurements', 'Recommended alternative cases'],
    evidence: 'Work done for the operator. The study, the consultant and the facility are not named. The verdict applies to the revision reviewed.',
    service: 'facilities-engineering',
  },
  {
    slug: 'ranking-sixty-eight-kilometres-of-flowline', numeral: '06', category: 'Water and integrity', short: 'Flowline replacement programme',
    region: 'Middle East', setting: ME, stage: 'Integrity programme', basis: ENG, period: '2025 to 2026',
    title: 'One timeline for 68 kilometres of flowline',
    sub: 'A flowline replacement programme brought into one record per well: risk, service test, replacement scope, construction and handover, planned against actual.',
    problem: [
      'A 2021 decision paper had identified about 67.7 kilometres of flowline for proactive replacement, ranked by integrity risk, production value and overlap with other project scope. By 2026 the programme lived in several workbooks: a master tracker revised every few days, a pipeline risk export, a six-month service test summary, and well-by-well questions from operations. The same well could show a planned handover date in one file and an unfinished service test in another.',
    ],
    work: [
      'We merged the sources into one record per flowline and well. Identifier, material, diameter, length, origin and destination. Current risk and probability of failure from the integrity export. Service test history and the latest result. Replacement scope, priority, survey, clearance, construction, mechanical completion, service test and handover milestones, planned and actual. Corrosion and scale threat and treatment. Integrity holds and the evidence for release to service. Precedence was set field by field: the integrity export governed risk, the signed test record governed test position, and the project tracker governed milestones.',
    ],
    result: [
      'Questions from operations about a well could be answered from one page, with the source and date of each item. Handover dates that had slipped were visible against actuals. A line with a failed or pending service test could no longer be reported as complete because a construction milestone had passed.',
    ],
    deliverables: ['Flowline programme record per well with source fields', 'Planned against actual milestone view', 'Integrity, test and replacement timeline', 'Exception list: inconsistent dates, duplicate rows, stale exports'],
    evidence: 'Work done for the operator. The 67.7 kilometre figure comes from the 2021 decision paper and describes the candidate list at that date, not the current programme. Operator not named.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'scale-is-a-diagnosis', numeral: '07', category: 'Water and integrity', short: 'Scale framework',
    region: 'Middle East', setting: ME, stage: 'Producing field, flow assurance', basis: ENG, period: '2026',
    title: 'A procedure for confirming scale before treating it',
    sub: 'From pressure trend to field confirmation to targeted treatment to post-job review.',
    problem: [
      'Carbonate, sulphate, iron sulphide and mixed scale were restricting chokes and flowlines across the field. A rising differential pressure was being read as proof of scale, and flushes were scheduled on that basis. Some of those lines had rate, temperature or instrument problems instead, and the flush achieved nothing.',
    ],
    work: [
      'We set out the workflow with the operator. Stable-state trends and alerts on upstream and downstream pressure, choke setting, flowline differential pressure, rate and temperature. A location hypothesis: choke, flowline or both. Field verification with inspection, photographs and samples. Engineering and chemistry assessment, including inhibitor history. A targeted work order ranked by risk and recoverable production. Controlled treatment by flush, choke repair or chemicals. A post-job review comparing restored production with the expectation. Before approval, the alternatives had to be ruled out: rate change, temperature, choke position, reservoir change, emulsion, sand and instrument health.',
    ],
    result: [
      'Flush and treatment schedules were tied to confirmed cases with recoverable production attached. Recurring threats got a control plan instead of a repeated flush. The workflow became the operator\'s surface scale identification procedure.',
    ],
    takeaway: 'A pressure trend suggests scale. A sample and a rate test confirm it.',
    deliverables: ['Scale identification and evaluation procedure', 'Treatment schedule with recoverable production basis', 'Post-job review template', 'Summary of scale reports and treatment approaches'],
    evidence: 'Work done for the operator. Operator and wells not named. The procedure describes a workflow, not the result of any one treatment.',
    service: 'produced-water-and-integrity',
  },
  {
    slug: 'pid-review-across-drawings', numeral: '08', category: 'Facilities', short: 'P&ID review',
    region: 'Middle East', setting: ME, stage: 'Brownfield design review', basis: ENG, period: '2026',
    title: 'P&ID review for new transfer lines',
    sub: 'A review of P&IDs against the statement of requirements. The gap was between the sheets, not on them.',
    problem: [
      'A package of P&IDs, a statement of requirements, tie-in surveys and management of change forms covered additional transfer lines between two facilities. Reviewed sheet by sheet, the drawings looked compliant. The operator needed a comment register it could act on and a sign-off recommendation.',
    ],
    work: [
      'We set up the document register, revisions, area boundaries and technical authority. We built a matrix from each requirement to the drawing and tag, compliance, evidence, owner and close-out. We checked line size and class, pressure rating, flow direction, dead legs, isolation, overpressure, drains and vents, instrumentation, shutdown logic, testability, maintenance access and constructability. We traced the whole flow path across sheets using continuation arrows, manifold layouts, battery limits and crossovers.',
      'The trace found that references on one facility\'s manifold drawing to two downstream sheets did not show the full continuation of the third line. Nothing was wrong on any single sheet. The gap existed only between them.',
    ],
    result: [
      'The comment register ranked the deviations and wrote each one so it could be checked. We recommended approval with conditions, with the continuity item as a hold. No safety item was left open under a recommended-for-approval status.',
    ],
    deliverables: ['Traceability matrix: requirement to drawing to evidence', 'Ranked comment register with owners', 'Flow path trace across drawing boundaries', 'Sign-off recommendation with hold points'],
    evidence: 'Work done for the operator. Drawing numbers, tags and the operator are not named.',
    service: 'facilities-engineering',
  },
  {
    slug: 'one-answer-per-well', numeral: '09', category: 'Data', short: 'Operations console',
    region: 'Middle East', setting: ME, stage: 'Producing field, decision support', basis: ENG, period: '2026',
    title: 'One record per well, with source and date',
    sub: 'A field data model and console joining status, rates, routing, flowline integrity, service tests, water systems and project delivery, with history kept on every refresh.',
    problem: [
      'Well status came from one export, allocated rates from another, routing from a planning list and flowline condition from a fourth system, each with its own date. The newest file was winning every argument, so a well could be shown flowing at a facility it had left. Engineers rebuilt the same picture by hand each week, and management briefs disagreed with each other.',
    ],
    work: [
      'We designed the data model around canonical entities: well with aliases, facility, train, manifold, flowline, replacement project, work order and source. Precedence was set field by field. The latest flowing wells export governed status and receiving facility. The latest allocation export governed oil, water and gas, and was never replaced by a test value without saying so. The master well reference governed home facility. The signed test record governed service test position. The integrity export governed risk. Each stored value kept its raw and accepted form, source date, load time, authority rule, confidence and conflict flag.',
      'Five layers were built: current, context, history, changes and sources. A well profile read in four views: now, context, history and changes. Routing showed home facility against actual receiving facility, with a transfer flag set only when both were known. Most domains were refreshed at the weekend and well status more often. The data-as-of date was shown separately for each domain. Facility flow diagrams and P&IDs were stitched into a process graph with designed, as-built, temporary, planned, isolated and flowing connections kept distinct.',
    ],
    result: [
      'A query for any well returned a profile with every item sourced and dated, and every unresolved conflict shown rather than hidden. Management outputs (facility summaries, deferral registers, forecast tables) came from the same record, so they agreed with each other. The build was kept portable: SQLite and JSON behind a browser view, with Power BI and a hosted database as options.',
    ],
    takeaway: 'The newest file is not the most authoritative file. Precedence is set per field, and the open conflicts are part of the answer.',
    deliverables: ['Data model, entity definitions and precedence rules', 'Well profile specification and console navigation', 'Refresh procedure, snapshot and change event design', 'Data health report format and exception classes', 'Process graph and stitched facility schematic'],
    evidence: 'Work done for the operator. Architecture and rules as designed and built with the operator\'s exports. No claim is made about a hosted service. Operator not named.',
    service: 'operations-data',
  },
  {
    slug: 'deferrals-with-a-water-column', numeral: '10', category: 'Operations', short: 'Deferral reporting',
    region: 'Middle East', setting: ME, stage: 'Producing field, management reporting', basis: ENG, period: '2026',
    title: 'Deferral reporting with an owner and a water column',
    sub: 'Weekly handover notes, facility summaries and a deferral register that kept oil separate from liquid and transfers separate from net gains.',
    problem: [
      'Deferral reporting mixed categories that overlapped: backpressure, choke scale, equipment unavailability, water treatment limits, well failure, integrity shut-ins, flowline test holds, disposal injectivity. Some were summed twice. A well moved between facilities could appear as a gain at the receiving facility with no matching reduction at the source. A transfer line capacity in barrels of liquid was quoted as if it were oil.',
    ],
    work: [
      'Each deferral record was given a fixed set of fields: well, home facility, current facility, cause, gross potential oil, actual oil, deferred oil, associated water, basis date, fix, approval status, cost, owner, target date, latest action and linked project. Facility comparisons were laid out as current, net change and after the move, each with oil, water and gas to one decimal. The rules were written down. A liquid capacity is not an oil gain. A moved well is counted once. A well test is not an allocated rate. A disposal increase is not an oil benefit unless it releases a named deferral.',
      'Handover notes were written as the owner would write them: dated facts ordered by facility or workstream, the impact in numbers where the data supported it, blockers, owners and the next action.',
    ],
    result: [
      'Management had a register that reconciled to the facility totals and a handover that read as one engineer\'s account. The water column made the downstream effect of each oil opportunity visible before it was approved.',
    ],
    deliverables: ['Deferral register with owners and water', 'Facility summaries: current, net change, after the move', 'Planned against current well rate comparison', 'Weekly handover notes and meeting schedules'],
    evidence: 'Work done for the operator. Register structure and rules as applied. Individual well and facility figures not shown.',
    service: 'production-optimisation',
  },
  {
    slug: 'gas-pipeline-pressure-defines-diameter', numeral: '11', category: 'Gas', short: 'Gas pipeline concept',
    region: 'West Africa', setting: 'Gas supply pipeline, onshore Nigeria', stage: 'Concept and pre-FEED', basis: STUDY, period: '2025 to 2026',
    title: 'Sizing a gas pipeline from the pressure envelope',
    sub: 'A gas supply concept that tested the operating envelope before fixing the diameter, with the data FEED would need written into the deliverable list.',
    problem: [
      'A developer needed a pipeline to carry gas from a source to a consumer and had a nominal flow rate in mind. The diameter could not be chosen from the flow rate alone. Minimum source pressure, required delivery pressure, demand variation and future capacity each changed the practical line size or showed that compression would be needed.',
    ],
    work: [
      'The study compared candidate diameters across pressure cases. It related gas velocity to hydraulic performance and erosion limits. It identified the interfaces for metering, safeguarding, pigging and corrosion control. Concept drawings were issued as conceptual, not for construction. A deliverable register set out the next stage, with the data and checks each item needed.',
    ],
    figure: 'pipelineEnvelope',
    result: [
      'The diameter stayed conditional on a confirmed pressure envelope and route basis rather than being fixed early. The client could take the right case into FEED with a clear data list, and knew which pressure outcomes would change the answer.',
    ],
    takeaway: 'A line size is a conclusion. The operating envelope is the reason for it.',
    deliverables: ['Hydraulic and operating case comparison', 'Concept schemes and interface definition', 'Design basis and data gap register', 'FEED deliverable register with verification gates'],
    evidence: 'Concept and pre-FEED proposal material prepared by Assos Tech, Revision C. Not an issued-for-construction design, and not a claim that the pipeline has been built. Client, route, rates, dimensions and budget not shown.',
    service: 'gas-monetisation',
  },
  {
    slug: 'mini-lng-balance', numeral: '12', category: 'Gas', short: 'Mini-LNG study',
    region: 'West Africa', setting: 'Small-scale LNG development, Nigeria', stage: 'Desktop and pre-FEED', basis: STUDY, period: '2025 to 2026',
    title: 'Closing the gas balance on a mini-LNG project',
    sub: 'Feed composition, liquids recovery, plant fuel, product specification, capital and offtake in one study basis and one financial model, with the open items listed.',
    problem: [
      'A small-scale LNG project looked attractive when each assumption was viewed on its own. The feed composition, liquids recovery, plant fuel, product specification, availability and offtake terms had been developed by different parties at different times. The financial model had inherited the optimistic version of each.',
    ],
    work: [
      'We linked a feed gas and product yield basis to the material and energy balance, the capital and operating cost assumptions, the project cash flows and the sensitivities. Each input was marked as measured, vendor-stated or assumed. The model kept explicit reconciliation and acceptance items. The study listed which inputs needed laboratory confirmation, which needed equipment manufacturer guarantees and which needed a signed agreement.',
    ],
    result: [
      'The screening case was separated from an investment-ready project, with the gaps between them named. Modelled returns were presented as provisional until the feed gas analysis, the guarantees and the offtake terms existed. The client\'s next spend went on measurements and agreements rather than on a more detailed model.',
    ],
    takeaway: 'Precision in a spreadsheet does not substitute for certainty in the feed gas or the contract.',
    deliverables: ['Feed and product yield basis, Issue 02', 'Material and energy balance', 'Financial model with reconciliation items, Issue 02', 'Evidence and decision gate register'],
    evidence: 'Project development study material prepared by Assos Tech. Not a claim of plant delivery, financing, production or certified returns. Rates, returns and project identifiers not shown.',
    service: 'gas-monetisation',
  },
  {
    slug: 'north-sea-integrated-asset', numeral: '13', category: 'Operations', short: 'Integrated asset model',
    region: 'North Sea', setting: 'Mature offshore asset, UK North Sea', stage: 'Producing asset', basis: PRAC, period: 'Previous employment',
    title: 'Finding the limit behind the lost barrels',
    sub: 'Integrated well, network and facilities modelling on a mature offshore asset. The binding limit sat with a different team from the one reporting the loss.',
    problem: [
      'Production on a mature offshore asset depended on how well behaviour, gathering system backpressure and process limits interacted. Each discipline reviewed its own part and each found something plausible. The limit belonged to the whole system, and nobody owned the whole system.',
    ],
    work: [
      'An integrated asset model joined well performance, network hydraulics and facilities capacity in one calibrated view. The model had to explain the observed system before it was used to propose changes. Operating changes and well opportunities were tested for the next limit they would expose, and ranked against a defined baseline with an observation period long enough to separate a short-lived rate increase from a sustained gain.',
    ],
    result: [
      'Operating changes and interventions were prioritised on the whole-system response and checked against the baseline afterwards. The team that owned the fix was often not the one that had reported the loss.',
    ],
    takeaway: 'The limit belongs to the system. Its owner may sit in a different team.',
    deliverables: ['Integrated well and network model', 'Constraint diagnosis and opportunity review', 'Operations and intervention interface', 'Baseline and verification method'],
    evidence: 'Experience of senior personnel in previous employment, anonymised. Not an Assos Tech contract. Client, field and quantified results not shown.',
    service: 'production-optimisation',
  },
  {
    slug: 'intervention-decisions', numeral: '14', category: 'Wells', short: 'Intervention decisions',
    region: 'North Sea and Middle East', setting: 'Mature producing assets, offshore and onshore', stage: 'Intervention planning and operations', basis: PRAC, period: 'Previous employment',
    title: 'Choosing the right well intervention',
    sub: 'Intervention planning, campaign support and post-job review across water shut-off, scale treatment, stimulation and artificial lift workovers.',
    problem: [
      'Well opportunities competed for crews and capital. A treatment could be technically plausible and still a poor investment if the impairment mechanism, the barrier condition or the execution route was uncertain. The post-job result was rarely compared with the promise in the programme.',
    ],
    work: [
      'Diagnostic review, programme development, contractor interfaces and campaign sequencing were tied to the expected production response. Each intervention was chosen on the strength of its diagnosis, integrity basis, execution readiness and economic case, with contingencies and a post-job evaluation written before the job.',
    ],
    result: [
      'Programmes explained why the intervention was right as well as how to do it. Campaign learning built up because every job closed with a comparison against its forecast.',
    ],
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
        'Our recent work has been for the operator of a supergiant onshore field in the Middle East, on forecasting, commissioning, produced water, flowline integrity, design review and operations data; for a gas developer in Nigeria, on pipelines and small-scale LNG; and for investors, on technical and economic review.',
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
        lead: 'Supergiant water-flooded onshore fields with several central processing facilities, large well counts and gathering systems that let wells move between facilities. The limit is more often water than oil.',
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
      ['2025 to 2026', 'Engagements and studies', 'Production, facilities and water engineering for the operator of a supergiant onshore field in the Middle East. Gas pipeline and small-scale LNG studies in Nigeria.'],
      ['2026', 'The house standard', 'Brand, evidence classes, document control and the data practice brought into one standard.'],
    ],
    cta: { title: 'Measure from the same datum', text: 'Send us the decision you face and the files behind it. We will fix the basis first, then give you the answer.' },
  },
};
