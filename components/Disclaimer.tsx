const TEXT = {
  briefing: {
    label: "Disclaimer.",
    body: "This publication is provided for informational and educational purposes only. It does not constitute financial, investment, tax, legal, or other professional advice, nor does it constitute a recommendation, offer, solicitation, or invitation to buy, sell, or hold any security, financial instrument, or investment. The analysis may contain opinions, estimates, assumptions, forecasts and forward-looking statements based on information considered reliable at the time of publication. Such views may change without notice, and actual outcomes may differ materially. Investing involves risk, including the possible loss of principal. Readers should conduct their own independent research, verify the information presented, consider their individual circumstances and risk tolerance, and obtain advice from appropriately qualified professional advisers before making any investment decision. Seven Gates Research accepts no responsibility for investment decisions made solely on the basis of this publication.",
  },
  research: {
    label: "Disclaimer.",
    body: "Seven Gates Research is provided for informational and educational purposes only. It is not personal investment, legal, tax or financial advice. Prices, assumptions and valuations are dated research snapshots. Readers should verify the evidence and consider their own circumstances before making investment decisions.",
  },
  company: {
    label: "Company-file note.",
    body: "This page organises published Seven Gates research. It is not a live market-data feed and does not create a new recommendation. Use the date, assumptions and disclosures in the underlying report.",
  },
} as const;

export function Disclaimer({ variant }: { variant: keyof typeof TEXT }) {
  const { label, body } = TEXT[variant];
  return <div className="disclaimer"><strong>{label}</strong> {body}</div>;
}
