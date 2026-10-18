// Inline SVG figures. Structure in Ink/Lichen/Mist; fluids per C5.5; data colours only on data.
const C = { forest: '#22362A', ink: '#18211B', body: '#434C45', lichen: '#66706A', sage: '#8FA387', mist: '#F4F6F2', rule: '#E3E7E0', tint: '#C9D3C4', white: '#FFFFFF', oil: '#5A3E2B', gas: '#A8782A', water: '#2F6B9A', pw: '#3A8A82', red: '#B42318', steel2: '#6E9CC4', clay: '#B0573A' };

const box = (x, y, w, h, label, { fill = C.white, stroke = C.ink, text = C.ink, sub = '', subColor = C.lichen, bold = false } = {}) => `
<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="0.9"/>
<text x="${x + w / 2}" y="${y + (sub ? h / 2 - 3 : h / 2 + 4)}" text-anchor="middle" class="fs" fill="${text}"${bold ? ' font-weight="600"' : ''}>${label}</text>
${sub ? `<text x="${x + w / 2}" y="${y + h / 2 + 13}" text-anchor="middle" class="fv" fill="${subColor}">${sub}</text>` : ''}`;

const arrow = (x1, y1, x2, y2, color = C.ink, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="1.1"${dash ? ` stroke-dasharray="${dash}"` : ''} marker-end="url(#ah-${color.slice(1)})"/>`;

const defs = (colors) => `<defs>${colors.map((c) => `<marker id="ah-${c.slice(1)}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${c}"/></marker>`).join('')}</defs>`;

const fillDefaults = (svg) => svg.replace(/<text([^>]*)>/g, (m, a) => { if (/\bfill=/.test(a)) return m; const cls = (a.match(/class="(\w+)"/) || [])[1]; const f = cls === 'fs' ? C.body : C.lichen; return `<text${a} fill="${f}">`; });
const wrap = (w, h, inner, title) => `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">${fillDefaults(inner)}</svg>`;

export const FIGURES = {
  chain() {
    const y = 90, h = 46, w = 108, gap = 22, x0 = 10;
    const names = ['Reservoir', 'Wells', 'Flowlines', 'Gathering', 'Separation'];
    let s = defs([C.ink, C.oil, C.gas, C.pw]);
    names.forEach((n, i) => {
      const x = x0 + i * (w + gap);
      s += box(x, y, w, h, n, i === 4 ? { fill: C.forest, stroke: C.forest, text: C.white } : {});
      if (i < 4) s += arrow(x + w, y + h / 2, x + w + gap - 1, y + h / 2);
    });
    const xs = x0 + 5 * (w + gap) - gap; // right edge of separation
    // three outlets
    const outs = [
      ['Oil', 'Storage and export', C.oil, 24],
      ['Gas', 'Fuel, sales, flare', C.gas, 90],
      ['Water', 'Treatment, disposal, ponds', C.pw, 156],
    ];
    outs.forEach(([n, sub, col, yy]) => {
      s += `<path d="M${xs} ${y + h / 2} C ${xs + 30} ${y + h / 2}, ${xs + 30} ${yy + 23}, ${xs + 56} ${yy + 23}" fill="none" stroke="${col}" stroke-width="1.3" marker-end="url(#ah-${col.slice(1)})"/>`;
      s += box(xs + 58, yy, 92, 46, n, { stroke: col, text: col, bold: true });
      s += `<text x="${xs + 160}" y="${yy + 27}" class="fv">${sub}</text>`;
    });
    // constraint markers
    const marks = [[1, 'well potential'], [2, 'integrity, size'], [3, 'backpressure, routing'], [4, 'oil, water, gas limits']];
    marks.forEach(([i, t]) => {
      const x = x0 + i * (w + gap) + w / 2;
      s += `<line x1="${x}" y1="${y + h}" x2="${x}" y2="${y + h + 18}" stroke="${C.lichen}" stroke-width="0.8"/><text x="${x}" y="${y + h + 32}" text-anchor="middle" class="fv">${t}</text>`;
    });
    s += `<text x="${x0}" y="${y - 30}" class="fl">The chain</text><text x="${x0}" y="${y - 14}" class="fv">For each link: what it has to carry, what it can carry, and what happens when it is full.</text>`;
    return { title: 'Where the limit usually sits', descr: 'From reservoir to export. The three streams that leave separation, and the point in the chain where each limit usually appears.', svg: wrap(960, 230, s, 'Block diagram from reservoir through wells, flowlines, gathering and separation to oil, gas and water outlets'), caption: 'Removing one bottleneck exposes the next. For each link we check what it has to carry, what it can carry, and what happens when it is full.' };
  },

  chainCompact() {
    const steps = ['Reservoir potential', 'Well potential', 'Operating envelope', 'Actual rate', 'Deferment', 'Root cause', 'Action', 'Recovered production'];
    const w = 104, gap = 16, h = 50, y = 40, x0 = 8;
    let s = defs([C.ink]);
    steps.forEach((t, i) => {
      const x = x0 + i * (w + gap);
      const parts = t.split(' ');
      const o = i === 7 ? { fill: C.forest, stroke: C.forest, text: C.white } : i === 4 ? { fill: C.mist } : {};
      s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${o.fill ?? C.white}" stroke="${o.stroke ?? C.ink}" stroke-width="0.9"/>`;
      s += `<text x="${x + w / 2}" y="${y + (parts.length > 1 ? 22 : 29)}" text-anchor="middle" class="fs" fill="${o.text ?? C.ink}">${parts[0]}</text>`;
      if (parts[1]) s += `<text x="${x + w / 2}" y="${y + 37}" text-anchor="middle" class="fs" fill="${o.text ?? C.ink}">${parts.slice(1).join(' ')}</text>`;
      if (i < 7) s += arrow(x + w, y + h / 2, x + w + gap - 1, y + h / 2);
    });
    s += `<text x="${x0}" y="${y + h + 30}" class="fv">At each step we record the baseline, the opportunity, the owner, the due date, the expected gain and the post-job check.</text>`;
    return { title: 'From reservoir potential to recovered production', descr: 'The chain we follow when we look for lost oil. Deferment is the gap to explain.', svg: wrap(968, 130, s, 'Performance chain from reservoir potential to recovered production'), caption: 'If a plan quotes a plateau, divide it by the number of producers and check whether any well on test has delivered that rate.' };
  },

  waterRoutes() {
    let s = defs([C.ink, C.pw, C.water, C.steel2, C.red, C.oil]);
    s += box(10, 110, 100, 46, 'Wells', {});
    s += arrow(110, 133, 139, 133);
    s += box(140, 110, 150, 46, 'CPF trains', { sub: 'separation, dehydration' });
    s += `<path d="M290 133 L318 133" stroke="${C.pw}" stroke-width="1.3" marker-end="url(#ah-${C.pw.slice(1)})"/>`;
    s += box(320, 110, 180, 46, 'Water treatment', { stroke: C.pw, text: C.pw, sub: 'oil in water, interface control' });
    // branches
    const bx = 500;
    const routes = [
      ['Disposal wells', 'injectivity at actual pressure', C.water, 30],
      ['Re-injection', 'pressure support', C.steel2, 110],
      ['Evaporation ponds', 'not disposal; oil recovery later', C.red, 190],
    ];
    routes.forEach(([n, sub, col, yy]) => {
      s += `<path d="M${bx} 133 C ${bx + 40} 133, ${bx + 40} ${yy + 23}, ${bx + 78} ${yy + 23}" fill="none" stroke="${col}" stroke-width="1.3" marker-end="url(#ah-${col.slice(1)})"/>`;
      s += box(bx + 80, yy, 190, 46, n, { stroke: col, text: col, bold: true, sub, subColor: C.lichen });
    });
    // pumps note
    s += `<text x="${bx + 80}" y="265" class="fv">Transfer pumps: N+1 capacity, single-pump stability, trip fallback route.</text>`;
    // oil recycle
    s += `<path d="M410 110 C 410 70, 235 70, 215 108" fill="none" stroke="${C.oil}" stroke-width="1.1" stroke-dasharray="4 3" marker-end="url(#ah-${C.oil.slice(1)})"/>`;
    s += `<text x="230" y="64" class="fv" fill="${C.oil}">recovered oil and recycle</text>`;
    // meters
    s += `<text x="10" y="200" class="fl">Measured at each boundary</text><text x="10" y="216" class="fv">Rate, oil in water, pressure and pump status, with the meter accuracy known.</text>`;
    s += `<text x="800" y="100" class="fl">Seven streams</text>`;
    ['generated and separated', 'treated or transferred', 'injected for disposal', 're-injected', 'sent to ponds', 'excursions and recycles', 'outages and pressure'].forEach((t, i) => { s += `<text x="800" y="${118 + i * 16}" class="fv">${i + 1}. ${t}</text>`; });
    return { title: 'Where the water goes', descr: 'Produced water routes on a water-flooded field. Each route has its own capacity, pressure and way to fail.', svg: wrap(1000, 285, s, 'Block diagram of produced water routes from wells through processing trains and treatment to disposal wells, re-injection and evaporation ponds'), caption: 'Disposal and re-injection in two blues, ponds in red, as agreed with the operator. Injectivity is taken at the actual wellhead pressure, not at nameplate.' };
  },

  gasChain() {
    let s = defs([C.gas, C.ink, C.clay]);
    const nodes = [['Feed gas', 'composition measured?'], ['Treatment', 'CO2, H2S, water'], ['Liquids recovery', 'yield by component'], ['Liquefaction or compression', 'OEM guarantee?'], ['Storage and loading', 'availability'], ['Transport', 'pipeline, truck, rail'], ['Customer', 'offtake terms, price regime']];
    const w = 118, gap = 18, h = 50, y = 70, x0 = 8;
    nodes.forEach(([n, sub], i) => {
      const x = x0 + i * (w + gap);
      const o = i === 6 ? { fill: C.forest, stroke: C.forest, text: C.white, subColor: C.tint } : { stroke: C.gas };
      s += box(x, y, w, h, n, { ...o, sub });
      if (i < 6) s += `<line x1="${x + w}" y1="${y + h / 2}" x2="${x + w + gap - 1}" y2="${y + h / 2}" stroke="${C.gas}" stroke-width="1.3" marker-end="url(#ah-${C.gas.slice(1)})"/>`;
    });
    // fuel and flare losses from node 3 and 1
    [[1, 'fuel gas'], [3, 'plant fuel'], [2, 'flare and losses']].forEach(([i, t]) => {
      const x = x0 + i * (w + gap) + w / 2;
      s += `<line x1="${x}" y1="${y + h}" x2="${x}" y2="${y + h + 26}" stroke="${C.clay}" stroke-width="1.1" marker-end="url(#ah-${C.clay.slice(1)})"/><text x="${x}" y="${y + h + 40}" text-anchor="middle" class="fv" fill="${C.clay}">${t}</text>`;
    });
    s += `<text x="${x0}" y="24" class="fl">Each input marked</text><text x="${x0}" y="42" class="fv">Measured, vendor-stated or assumed. The balance closes only when the assumed column is empty or priced.</text>`;
    return { title: 'What leaves the plant to sell', descr: 'Feed gas less treatment losses, liquids, plant fuel and flare, at the availability the plant achieves.', svg: wrap(960, 180, s, 'Block diagram of a small-scale gas monetisation chain from feed gas to customer with fuel and flare losses'), caption: 'In our mini-LNG study the mass balance gave a lower product figure than the vendor summary. The lower figure governed until the manufacturer confirmed.' };
  },

  capacityBalance() {
    const data = [['CPF A', 200, 220, 'from Q2 2027'], ['CPF B', 207, 117, ''], ['CPF C', 70, 37, ''], ['CPF D', 245, 100, 'oil from Q4 2027']];
    const x0 = 120, maxV = 260, scale = 680 / maxV, rowH = 58, y0 = 40;
    let s = `<text x="${x0}" y="22" class="fl">Thousand barrels per day</text>`;
    [0, 50, 100, 150, 200, 250].forEach((v) => { const x = x0 + v * scale; s += `<line x1="${x}" y1="${y0 - 6}" x2="${x}" y2="${y0 + rowH * 4}" stroke="${C.white}" stroke-width="1"/><text x="${x}" y="${y0 + rowH * 4 + 16}" text-anchor="middle" class="fv">${v}</text>`; });
    data.forEach(([n, oil, pw, note], i) => {
      const y = y0 + i * rowH;
      s += `<text x="${x0 - 12}" y="${y + 24}" text-anchor="end" class="fs" fill="${C.ink}">${n}</text>`;
      s += `<rect x="${x0}" y="${y + 6}" width="${oil * scale}" height="16" fill="${C.oil}"/><text x="${x0 + oil * scale + 6}" y="${y + 18}" class="fv" fill="${C.oil}">${oil} oil${note && note.startsWith('oil') ? ', ' + note : ''}</text>`;
      s += `<rect x="${x0}" y="${y + 26}" width="${pw * scale}" height="16" fill="${C.pw}"/><text x="${x0 + pw * scale + 6}" y="${y + 38}" class="fv" fill="${C.pw}">${pw} water${note && !note.startsWith('oil') ? ', ' + note : ''}</text>`;
    });
    s += `<text x="${x0}" y="${y0 + rowH * 4 + 40}" class="fv">Planning assumptions used in the September 2026 forecast exercise, anonymised. Not published or verified operating limits.</text>`;
    return { title: 'At three of four facilities the water limit sits below the oil limit', descr: 'Receiving-facility planning capacities for oil and produced water, four central processing facilities, with the dates each capacity was assumed available.', svg: wrap(960, 320, s, 'Horizontal bar chart comparing planning oil and produced water capacities at four anonymised processing facilities'), caption: 'A transferred well brings its water with it. Where the water bar is shorter, the water limit binds first.', source: 'Source: forecast planning inputs, September 2026, operator withheld. Transfer lines between facilities assumed at 40 and 50 mbd liquid.', conceptual: false };
  },

  restartPhases() {
    const oil = [21.7, 22.3, 22.1, 20.5], water = [2.5, 4.2, 18.0, 10.5];
    const x0 = 90, y0 = 36, maxV = 25, hgt = 180, scale = hgt / maxV, colW = 190;
    let s = `<text x="${x0}" y="20" class="fl">Thousand barrels per day, planned increment per phase</text>`;
    [0, 5, 10, 15, 20, 25].forEach((v) => { const y = y0 + hgt - v * scale; s += `<line x1="${x0}" y1="${y}" x2="${x0 + colW * 4}" y2="${y}" stroke="${C.white}" stroke-width="1"/><text x="${x0 - 8}" y="${y + 4}" text-anchor="end" class="fv">${v}</text>`; });
    oil.forEach((o, i) => {
      const x = x0 + i * colW + 30, wv = water[i];
      s += `<rect x="${x}" y="${y0 + hgt - o * scale}" width="52" height="${o * scale}" fill="${C.oil}"/><text x="${x + 26}" y="${y0 + hgt - o * scale - 6}" text-anchor="middle" class="fv" fill="${C.oil}">${o.toFixed(1)}</text>`;
      s += `<rect x="${x + 64}" y="${y0 + hgt - wv * scale}" width="52" height="${wv * scale}" fill="${C.pw}"/><text x="${x + 90}" y="${y0 + hgt - wv * scale - 6}" text-anchor="middle" class="fv" fill="${C.pw}">${wv.toFixed(1)}</text>`;
      s += `<text x="${x + 58}" y="${y0 + hgt + 20}" text-anchor="middle" class="fs" fill="${C.ink}">Phase ${['one', 'two', 'three', 'four'][i]}</text>`;
    });
    s += `<rect x="${x0}" y="${y0 + hgt + 36}" width="12" height="12" fill="${C.oil}"/><text x="${x0 + 18}" y="${y0 + hgt + 46}" class="fv">Oil, total 86.6</text><rect x="${x0 + 130}" y="${y0 + hgt + 36}" width="12" height="12" fill="${C.pw}"/><text x="${x0 + 148}" y="${y0 + hgt + 46}" class="fv">Water, total 35.2</text>`;
    return { title: 'Phase three carries half the water', descr: 'Planned oil and water increments for a four-phase train restart. Wells brought on one at a time, about fifteen minutes apart.', svg: wrap(960, 300, s, 'Grouped bar chart of planned oil and water increments across four restart phases'), caption: 'Plan values, not measured production. Phase three brought 18 of the 35 thousand barrels of water, so it got the longest stabilisation window.', source: 'Source: train restart plan, 2026, operator withheld.', conceptual: false };
  },

  pipelineEnvelope() {
    const x0 = 80, y0 = 30, W = 620, H = 200;
    let s = defs([C.ink]);
    s += `<rect x="${x0}" y="${y0}" width="${W}" height="${H}" fill="${C.white}" stroke="${C.rule}"/>`;
    // axes labels
    s += `<text x="${x0 + W / 2}" y="${y0 + H + 34}" text-anchor="middle" class="fs" fill="${C.lichen}">Flow rate, including future demand</text>`;
    s += `<text transform="translate(${x0 - 44} ${y0 + H / 2}) rotate(-90)" text-anchor="middle" class="fs" fill="${C.lichen}">Delivery pressure</text>`;
    // minimum delivery pressure band
    s += `<line x1="${x0}" y1="${y0 + 150}" x2="${x0 + W}" y2="${y0 + 150}" stroke="${C.clay}" stroke-width="1" stroke-dasharray="5 4"/><text x="${x0 + W - 6}" y="${y0 + 146}" text-anchor="end" class="fv" fill="${C.clay}">minimum delivery pressure</text>`;
    // source pressure range
    s += `<rect x="${x0}" y="${y0 + 10}" width="${W}" height="34" fill="${C.mist}"/><text x="${x0 + 8}" y="${y0 + 30}" class="fv">source pressure range, low to high case</text>`;
    // three curves for three diameters (qualitative)
    const curves = [['smaller diameter', 'M' + (x0) + ' ' + (y0 + 44) + ' Q ' + (x0 + 300) + ' ' + (y0 + 60) + ', ' + (x0 + 420) + ' ' + (y0 + 200), C.tint], ['selected diameter', 'M' + x0 + ' ' + (y0 + 44) + ' Q ' + (x0 + 420) + ' ' + (y0 + 62) + ', ' + (x0 + 600) + ' ' + (y0 + 200), C.forest], ['larger diameter', 'M' + x0 + ' ' + (y0 + 44) + ' Q ' + (x0 + 520) + ' ' + (y0 + 60) + ', ' + (x0 + 720) + ' ' + (y0 + 200), C.sage]];
    curves.forEach(([n, d, col]) => { s += `<path d="${d}" fill="none" stroke="${col}" stroke-width="${col === C.forest ? 2 : 1.4}"/>`; });
    s += `<text x="${x0 + 250}" y="${y0 + 118}" class="fv" fill="${C.lichen}">smaller diameter</text><text x="${x0 + 440}" y="${y0 + 110}" class="fv" fill="${C.forest}" font-weight="600">selected diameter</text><text x="${x0 + 520}" y="${y0 + 70}" class="fv" fill="${C.sage}">larger diameter</text>`;
    // compression zone
    s += `<text x="${x0 + 330}" y="${y0 + 184}" class="fv" fill="${C.clay}">below the line: compression or a larger line</text>`;
    // velocity limit
    s += `<line x1="${x0 + 560}" y1="${y0}" x2="${x0 + 560}" y2="${y0 + H}" stroke="${C.lichen}" stroke-width="0.8" stroke-dasharray="3 3"/><text x="${x0 + 566}" y="${y0 + 12}" class="fv">velocity limit</text>`;
    s += `<text x="${x0}" y="${y0 + H + 56}" class="fv">Shape only. The case values, route and dimensions are in the study and are not shown here.</text>`;
    return { title: 'The operating envelope sets the line size', descr: 'Delivery pressure against flow for three candidate diameters, bounded by the source pressure range, the minimum delivery pressure and the velocity limit.', svg: wrap(760, 300, s, 'Conceptual chart of delivery pressure against flow rate for three pipeline diameters with pressure and velocity limits'), caption: 'A line sized from a nominal flow alone ignores the low source pressure case and future demand. Where the selected curve drops below the minimum delivery pressure, you need compression or a larger line.' };
  },
};

/* Hero construction drawing of the Fine Datum, with dimension annotations outside the mark. */
FIGURES.heroDatum = function () {
  const c = 240, r = 117.5, q = 97.5;
  const L = C.lichen, T = C.tint;
  let s = '';
  // construction grid (faint)
  s += `<g stroke="${C.rule}" stroke-width="0.6">`;
  for (let i = 60; i <= 420; i += 60) s += `<line x1="${i}" y1="40" x2="${i}" y2="440"/><line x1="40" y1="${i}" x2="440" y2="${i}"/>`;
  s += `</g>`;
  // centre lines
  s += `<g class="draw"><line x1="${c}" y1="22" x2="${c}" y2="458" stroke="${L}" stroke-width="0.6" stroke-dasharray="6 4"/><line x1="22" y1="${c}" x2="458" y2="${c}" stroke="${L}" stroke-width="0.6" stroke-dasharray="6 4"/>`;
  // the mark (exact geometry, scaled 5x from the 48 box)
  s += `<circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${C.forest}" stroke-width="4.5"/>`;
  s += `<path class="fill" d="M${c} ${c} L${c} ${c - q} A${q} ${q} 0 0 1 ${c + q} ${c} Z" fill="${C.forest}"/><path class="fill" d="M${c} ${c} L${c} ${c + q} A${q} ${q} 0 0 1 ${c - q} ${c} Z" fill="${C.forest}"/>`;
  s += `</g>`;
  return { title: '', descr: '', svg: `<svg viewBox="0 0 480 480" role="img" aria-label="The Assos Tech mark drawn on a grid with centre lines" xmlns="http://www.w3.org/2000/svg">${s}</svg>`, caption: '', conceptual: false };
};
