import { getAllResearch, type ResearchItem } from "@/lib/research";

export type CompanyProfile = {
  slug: string;
  ticker: string;
  name: string;
  sector: string;
  summary: string;
};

export type CompanyDirectoryItem = CompanyProfile & {
  reports: ResearchItem[];
  latest?: ResearchItem;
};

export const COMPANY_PROFILES: CompanyProfile[] = [
  {
    slug: "aradel",
    ticker: "ARADEL",
    name: "Aradel Holdings",
    sector: "Energy",
    summary: "Scale and cash have arrived. The remaining question is how much survives finance costs, tax, capex and minority interests for ordinary shareholders.",
  },
  {
    slug: "champion-breweries",
    ticker: "CHAMPION",
    name: "Champion Breweries",
    sector: "Consumer goods",
    summary: "Revenue has grown sharply, while debt, dilution and finance costs remain central to the shareholder case.",
  },
  {
    slug: "dangote-refinery",
    ticker: "DANGREF",
    name: "Dangote Refinery",
    sector: "Energy",
    summary: "A major industrial asset whose minority value depends on debt, uptime, governance and the price eventually paid.",
  },
  {
    slug: "first-holdco",
    ticker: "FIRSTHOLDCO",
    name: "First HoldCo",
    sector: "Banking",
    summary: "A cleaner bank after recapitalisation, with the legacy loan book and ownership reshuffle still part of the thesis.",
  },
  {
    slug: "gtco",
    ticker: "GTCO",
    name: "Guaranty Trust Holding Company",
    sector: "Banking",
    summary: "Cheap deposits, formidable capital and rare institutional restraint. The remaining argument is price.",
  },
  {
    slug: "honeywell-flour",
    ticker: "HONYFLOUR",
    name: "Honeywell Flour Mills",
    sector: "Consumer goods",
    summary: "Demand is dependable. The shareholder economics still need kneading.",
  },
  {
    slug: "mtn-nigeria",
    ticker: "MTNN",
    name: "MTN Nigeria",
    sector: "Telecommunications",
    summary: "Data demand and a repaired balance sheet support the case. Energy costs and capex decide how much growth reaches shareholders.",
  },
  {
    slug: "presco",
    ticker: "PRESCO",
    name: "Presco",
    sector: "Agriculture",
    summary: "An integrated palm-oil franchise with strong cash generation. The remaining argument is whether the price already knows.",
  },
  {
    slug: "pz-nigeria",
    ticker: "PZ",
    name: "PZ Cussons Nigeria",
    sector: "Consumer goods",
    summary: "The rebound is real enough to underwrite. Sustainability, valuation and the parent-listing structure still matter.",
  },
  {
    slug: "seplat-energy",
    ticker: "SEPLAT",
    name: "Seplat Energy",
    sector: "Energy",
    summary: "Dollar earnings, additional scale and lower leverage improve the franchise. Valuation and capital allocation still matter.",
  },
  {
    slug: "stanbic-ibtc",
    ticker: "STANBIC",
    name: "Stanbic IBTC",
    sector: "Banking",
    summary: "Quality is evident. Quality still needs a price.",
  },
  {
    slug: "tantalizers",
    ticker: "TANTALIZER",
    name: "Tantalizers",
    sector: "Hospitality",
    summary: "The restaurants are recovering, while the market is already paying for a wider diversification story.",
  },
  {
    slug: "uba",
    ticker: "UBA",
    name: "United Bank for Africa",
    sector: "Banking",
    summary: "A formidable deposit franchise and continental reach, offset by asset-quality, cost and capital-efficiency questions.",
  },
  {
    slug: "universal-insurance",
    ticker: "UNIVINSURE",
    name: "Universal Insurance",
    sector: "Insurance",
    summary: "Regulatory risk, governance discipline and the quality of the operating franchise sit at the centre of the case.",
  },
  {
    slug: "vfd-group",
    ticker: "VFDGROUP",
    name: "VFD Group",
    sector: "Financials",
    summary: "Profit has recovered. Per-share compounding, financing drag and the moat still need proving.",
  },
];

export function getCompanyDirectory(): CompanyDirectoryItem[] {
  const research = getAllResearch();
  return COMPANY_PROFILES
    .map((profile) => {
      const reports = research.filter((item) => item.ticker === profile.ticker);
      return { ...profile, reports, latest: reports[0] };
    })
    .filter((item) => item.reports.length > 0);
}

export function getCompanyBySlug(slug: string) {
  return getCompanyDirectory().find((company) => company.slug === slug);
}

export function getFeaturedCompanies(tickers: string[]) {
  const wanted = new Map(tickers.map((ticker, index) => [ticker, index]));
  return getCompanyDirectory()
    .filter((company) => wanted.has(company.ticker))
    .sort((a, b) => (wanted.get(a.ticker) ?? 99) - (wanted.get(b.ticker) ?? 99));
}
