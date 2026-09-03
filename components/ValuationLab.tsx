"use client";

import { useMemo, useState } from "react";

type ModelInput = {
  currency: "NGN" | "USD" | "GBP" | "EUR";
  revenue: number;
  growth: number;
  margin: number;
  tax: number;
  da: number;
  capex: number;
  workingCapital: number;
  wacc: number;
  terminalGrowth: number;
  netDebt: number;
  shares: number;
  referencePrice: number;
};

type NumericKey = Exclude<keyof ModelInput, "currency">;
type ForecastRow = {
  year: number;
  revenue: number;
  ebit: number;
  tax: number;
  da: number;
  capex: number;
  workingCapital: number;
  fcff: number;
  pv: number;
};

const DEFAULT_MODEL: ModelInput = {
  currency: "NGN",
  revenue: 1000,
  growth: 10,
  margin: 25,
  tax: 30,
  da: 4,
  capex: 7,
  workingCapital: 15,
  wacc: 18,
  terminalGrowth: 3,
  netDebt: 100,
  shares: 100,
  referencePrice: 12,
};

const symbols = { NGN: "₦", USD: "$", GBP: "£", EUR: "€" };

function fmt(value: number, digits = 1) {
  if (!Number.isFinite(value)) return "n.m.";
  return new Intl.NumberFormat("en-GB", { maximumFractionDigits: digits, minimumFractionDigits: 0 }).format(value);
}

function money(value: number, currency: ModelInput["currency"], digits = 2) {
  if (!Number.isFinite(value)) return "n.m.";
  return `${symbols[currency]}${fmt(value, digits)}`;
}

function calculate(model: ModelInput, overrides: Partial<ModelInput> = {}) {
  const input = { ...model, ...overrides };
  const g = input.growth / 100;
  const margin = input.margin / 100;
  const taxRate = input.tax / 100;
  const daRate = input.da / 100;
  const capexRate = input.capex / 100;
  const wcRate = input.workingCapital / 100;
  const wacc = input.wacc / 100;
  const terminalGrowth = input.terminalGrowth / 100;

  if (input.shares <= 0 || wacc <= terminalGrowth || wacc <= 0) return null;

  const rows: ForecastRow[] = [];
  let previousRevenue = input.revenue;
  let pvExplicit = 0;
  let finalFcff = 0;

  for (let year = 1; year <= 5; year += 1) {
    const revenue = previousRevenue * (1 + g);
    const ebit = revenue * margin;
    const cashTax = Math.max(ebit, 0) * taxRate;
    const da = revenue * daRate;
    const capex = revenue * capexRate;
    const workingCapital = (revenue - previousRevenue) * wcRate;
    const fcff = ebit - cashTax + da - capex - workingCapital;
    const pv = fcff / Math.pow(1 + wacc, year);
    rows.push({ year, revenue, ebit, tax: cashTax, da, capex, workingCapital, fcff, pv });
    pvExplicit += pv;
    previousRevenue = revenue;
    finalFcff = fcff;
  }

  const terminalValue = finalFcff * (1 + terminalGrowth) / (wacc - terminalGrowth);
  const pvTerminal = terminalValue / Math.pow(1 + wacc, 5);
  const enterpriseValue = pvExplicit + pvTerminal;
  const equityValue = enterpriseValue - input.netDebt;
  const valuePerShare = equityValue / input.shares;
  const upside = input.referencePrice > 0 ? valuePerShare / input.referencePrice - 1 : NaN;
  const marginOfSafety = valuePerShare > 0 ? 1 - input.referencePrice / valuePerShare : NaN;
  const terminalShare = enterpriseValue !== 0 ? pvTerminal / enterpriseValue : NaN;

  return { input, rows, enterpriseValue, equityValue, valuePerShare, upside, marginOfSafety, terminalShare };
}

function NumericInput({
  label,
  value,
  onChange,
  step = 1,
  help,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  help?: string;
}) {
  return <label className="lab-field">
    <span>{label}</span>
    <input type="number" value={value} step={step} onChange={(e) => onChange(Number(e.target.value))} />
    {help && <small>{help}</small>}
  </label>;
}

export function ValuationLab() {
  const [model, setModel] = useState<ModelInput>(DEFAULT_MODEL);
  const [bear, setBear] = useState({ growth: 6, margin: 20, wacc: 18 });
  const [bull, setBull] = useState({ growth: 14, margin: 28, wacc: 16 });
  const [fairValue, setFairValue] = useState(15);
  const [mosPrice, setMosPrice] = useState(12);
  const [haircut, setHaircut] = useState(10);

  const base = useMemo(() => calculate(model), [model]);
  const bearValue = useMemo(() => calculate(model, bear), [model, bear]);
  const bullValue = useMemo(() => calculate(model, bull), [model, bull]);

  const update = (key: NumericKey, value: number) => setModel((current) => ({ ...current, [key]: value }));

  const sensitivityWacc = [Math.max(model.terminalGrowth + 1.5, model.wacc - 2), model.wacc, model.wacc + 2];
  const sensitivityGrowth = [Math.max(0, model.terminalGrowth - 1), model.terminalGrowth, model.terminalGrowth + 1];

  const adjustedFairValue = fairValue * (1 - haircut / 100);
  const mos = adjustedFairValue > 0 ? 1 - mosPrice / adjustedFairValue : NaN;

  function downloadAssumptions() {
    if (!base) return;
    const payload = {
      generatedAt: new Date().toISOString(),
      note: "Seven Gates Valuation Lab assumptions. Illustrative model, not a company forecast.",
      assumptions: model,
      output: {
        enterpriseValue: base.enterpriseValue,
        equityValue: base.equityValue,
        valuePerShare: base.valuePerShare,
      },
      forecast: base.rows,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "seven-gates-valuation-assumptions.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return <div className="lab-shell">
    <nav className="lab-jump" aria-label="Valuation Lab sections">
      <a href="#dcf">01 · DCF model</a>
      <a href="#scenarios">02 · Scenarios</a>
      <a href="#margin-of-safety">03 · Margin of safety</a>
    </nav>

    <div className="lab-note">Illustrative models, not company forecasts. Use a dated report and your own assumptions. This unlevered cash-flow model is for operating businesses, not bank valuation. Inputs stay in your browser and are not uploaded to an account.</div>

    <section className="lab-section" id="dcf">
      <div className="lab-section-head">
        <div>
          <p className="kicker">01 · DISCOUNTED CASH FLOW</p>
          <h2>Build the cash-flow case.</h2>
        </div>
        <button className="lab-button secondary" type="button" onClick={() => setModel(DEFAULT_MODEL)}>Reset example</button>
      </div>

      <div className="lab-layout">
        <div className="lab-panel">
          <label className="lab-field">
            <span>Model currency</span>
            <select value={model.currency} onChange={(e) => setModel((current) => ({ ...current, currency: e.target.value as ModelInput["currency"] }))}>
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
            <small>Changes the unit label, not the input numbers.</small>
          </label>
          <div className="lab-input-grid">
            <NumericInput label="Starting revenue (millions)" value={model.revenue} onChange={(v) => update("revenue", v)} help="Last full year; use one currency throughout." />
            <NumericInput label="Annual revenue growth (%)" value={model.growth} onChange={(v) => update("growth", v)} step={0.5} />
            <NumericInput label="EBIT margin (%)" value={model.margin} onChange={(v) => update("margin", v)} step={0.5} />
            <NumericInput label="Cash tax rate (%)" value={model.tax} onChange={(v) => update("tax", v)} step={0.5} />
            <NumericInput label="D&A / revenue (%)" value={model.da} onChange={(v) => update("da", v)} step={0.5} />
            <NumericInput label="Capex / revenue (%)" value={model.capex} onChange={(v) => update("capex", v)} step={0.5} />
            <NumericInput label="Working capital / new revenue (%)" value={model.workingCapital} onChange={(v) => update("workingCapital", v)} step={0.5} />
            <NumericInput label="Discount rate / WACC (%)" value={model.wacc} onChange={(v) => update("wacc", v)} step={0.5} help="Must exceed terminal growth." />
            <NumericInput label="Terminal growth (%)" value={model.terminalGrowth} onChange={(v) => update("terminalGrowth", v)} step={0.5} />
            <NumericInput label="Net debt (millions)" value={model.netDebt} onChange={(v) => update("netDebt", v)} help="Debt less cash. Negative means net cash." />
            <NumericInput label="Diluted shares (millions)" value={model.shares} onChange={(v) => update("shares", v)} help="Match diluted shares to the equity claim." />
            <NumericInput label="Reference price per share" value={model.referencePrice} onChange={(v) => update("referencePrice", v)} step={0.1} help="Your dated input; no live feed." />
          </div>
        </div>

        <div className="lab-output">
          <p className="kicker">YOUR ASSUMPTIONS IMPLY</p>
          {base ? <>
            <div className="lab-big-value">{money(base.valuePerShare, model.currency)}</div>
            <p className={base.upside >= 0 ? "positive" : "negative"}>{fmt(base.upside * 100, 1)}% versus your reference price</p>
            <div className="lab-stat-grid">
              <div><span>Enterprise value (m)</span><strong>{fmt(base.enterpriseValue, 1)}</strong></div>
              <div><span>Net debt (m)</span><strong>{fmt(model.netDebt, 1)}</strong></div>
              <div><span>Equity value (m)</span><strong>{fmt(base.equityValue, 1)}</strong></div>
              <div><span>Terminal value / EV</span><strong>{fmt(base.terminalShare * 100, 1)}%</strong></div>
              <div><span>Margin of safety</span><strong>{fmt(base.marginOfSafety * 100, 1)}%</strong></div>
            </div>
            <button className="lab-button" type="button" onClick={downloadAssumptions}>Download assumptions & forecast</button>
            <p className="lab-fine">No automatic buy signal. The output is only as defensible as the inputs.</p>
          </> : <div className="lab-error">WACC must exceed terminal growth and diluted shares must be greater than zero.</div>}
        </div>
      </div>

      {base && <>
        <div className="lab-table-wrap">
          <table className="lab-table">
            <caption>Five-year operating forecast · {model.currency} millions</caption>
            <thead><tr><th>Year</th><th>Revenue</th><th>EBIT</th><th>Cash tax</th><th>D&A</th><th>Capex</th><th>Δ working capital</th><th>FCFF</th><th>Present value</th></tr></thead>
            <tbody>{base.rows.map((row) => <tr key={row.year}>
              <td>{row.year}</td><td>{fmt(row.revenue, 1)}</td><td>{fmt(row.ebit, 1)}</td><td>{fmt(row.tax, 1)}</td><td>{fmt(row.da, 1)}</td><td>{fmt(row.capex, 1)}</td><td>{fmt(row.workingCapital, 1)}</td><td>{fmt(row.fcff, 1)}</td><td>{fmt(row.pv, 1)}</td>
            </tr>)}</tbody>
          </table>
        </div>

        <div className="lab-method">
          <h3>Calculation method & limits</h3>
          <p>FCFF = EBIT - cash tax + D&A - capex - change in working capital. Each annual cash flow is discounted at WACC. Terminal value = year-five FCFF × (1 + terminal growth) ÷ (WACC - terminal growth), discounted five years. Equity value = enterprise value - net debt. Divide by diluted shares for value per share.</p>
          <p>Constant ratios, year-end discounting and a perpetuity terminal value simplify reality. This model excludes minorities, pensions, associates, tax losses and separate lease adjustments. Adjust net debt and cash flows consistently before interpreting it.</p>
        </div>

        <div className="lab-table-wrap">
          <table className="lab-table compact">
            <caption>Sensitivity · per-share value · discount rate versus terminal growth</caption>
            <thead><tr><th>WACC / terminal growth</th>{sensitivityGrowth.map((g) => <th key={g}>{fmt(g, 1)}%</th>)}</tr></thead>
            <tbody>{sensitivityWacc.map((w) => <tr key={w}>
              <th>{fmt(w, 1)}%</th>
              {sensitivityGrowth.map((g) => {
                const result = calculate(model, { wacc: w, terminalGrowth: g });
                return <td key={g}>{result ? money(result.valuePerShare, model.currency) : "n.m."}</td>;
              })}
            </tr>)}</tbody>
          </table>
        </div>
      </>}
    </section>

    <section className="lab-section" id="scenarios">
      <p className="kicker">02 · SCENARIO COMPARISON</p>
      <h2>Give the counterargument a number.</h2>
      <p className="deck lab-deck">Bear and bull override revenue growth, EBIT margin and discount rate. Every other assumption follows the DCF above. Labels describe cases, not guaranteed outcomes.</p>

      <div className="scenario-grid">
        <div className="scenario-card">
          <span>Bear</span>
          <NumericInput label="Revenue growth (%)" value={bear.growth} onChange={(v) => setBear((x) => ({ ...x, growth: v }))} step={0.5} />
          <NumericInput label="EBIT margin (%)" value={bear.margin} onChange={(v) => setBear((x) => ({ ...x, margin: v }))} step={0.5} />
          <NumericInput label="Discount rate (%)" value={bear.wacc} onChange={(v) => setBear((x) => ({ ...x, wacc: v }))} step={0.5} />
          <strong>{bearValue ? money(bearValue.valuePerShare, model.currency) : "n.m."}</strong>
          <small>Value per share</small>
        </div>

        <div className="scenario-card base">
          <span>Base</span>
          <p>Uses all inputs from the DCF above.</p>
          <strong>{base ? money(base.valuePerShare, model.currency) : "n.m."}</strong>
          <small>Value per share</small>
        </div>

        <div className="scenario-card">
          <span>Bull</span>
          <NumericInput label="Revenue growth (%)" value={bull.growth} onChange={(v) => setBull((x) => ({ ...x, growth: v }))} step={0.5} />
          <NumericInput label="EBIT margin (%)" value={bull.margin} onChange={(v) => setBull((x) => ({ ...x, margin: v }))} step={0.5} />
          <NumericInput label="Discount rate (%)" value={bull.wacc} onChange={(v) => setBull((x) => ({ ...x, wacc: v }))} step={0.5} />
          <strong>{bullValue ? money(bullValue.valuePerShare, model.currency) : "n.m."}</strong>
          <small>Value per share</small>
        </div>
      </div>
    </section>

    <section className="lab-section" id="margin-of-safety">
      <p className="kicker">03 · MARGIN OF SAFETY</p>
      <h2>Leave room to be wrong.</h2>
      <div className="lab-layout">
        <div className="lab-panel">
          <div className="lab-input-grid">
            <NumericInput label={`Fair value per share (${model.currency})`} value={fairValue} onChange={setFairValue} step={0.1} />
            <NumericInput label={`Reference price (${model.currency})`} value={mosPrice} onChange={setMosPrice} step={0.1} />
            <NumericInput label="Your risk haircut (%)" value={haircut} onChange={setHaircut} step={0.5} help="A discretionary reduction to fair value, not a calibrated probability." />
          </div>
        </div>
        <div className="lab-output">
          <p className="kicker">MARGIN OF SAFETY AFTER YOUR HAIRCUT</p>
          <div className="lab-big-value">{fmt(mos * 100, 1)}%</div>
          <p>Adjusted fair value: <strong>{money(adjustedFairValue, model.currency)}</strong></p>
          <p className={mos >= 0 ? "positive" : "negative"}>{mos >= 0 ? "Price is below your adjusted value." : "Price is above your adjusted value."}</p>
          <p className="lab-fine">Margin of safety = 1 - price ÷ adjusted fair value. It differs from potential upside, which divides by price. Neither is an instruction to trade.</p>
        </div>
      </div>
    </section>
  </div>;
}
