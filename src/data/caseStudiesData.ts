export interface CaseStudy {
  title: string;
  industry: string;
  services: string;
  description: string;
  metrics: { label: string; value: string }[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    title: "Desiro LLC",
    industry: "Digital Marketing & Advertising",
    services: "Performance Marketing • Bitrix24 CRM • Sales Pipelines • WhatsApp Integration",
    description: "Desiro partnered with SQL Centrix to build a complete customer acquisition system connecting performance marketing with sales operations and customer success, driving higher conversion rates.",
    metrics: [
      { label: "WhatsApp Conversations", value: "7,914+" },
      { label: "People Reached", value: "435K+" },
      { label: "Impressions Delivered", value: "1.7M+" },
      { label: "Lowest Cost per Conversation", value: "AED 0.66" },
    ],
  },
  {
    title: "Kryalon Store",
    industry: "E-Commerce & Beauty",
    services: "TikTok Advertising • Creative Strategy • Performance Marketing • Analytics",
    description: "Kryalon Store partnered with SQL Centrix to build a scalable performance marketing system focused on profitable customer acquisition through structured creative testing and pixel optimization.",
    metrics: [
      { label: "Purchases", value: "856+" },
      { label: "Impressions Delivered", value: "5.8M+" },
      { label: "Website Clicks", value: "73K+" },
      { label: "Average CPM", value: "0.76 AED" },
    ],
  },
  {
    title: "EVE Beauty",
    industry: "Beauty & Cosmetics",
    services: "Performance Marketing • Creative Strategy • Media Buying • Analytics",
    description: "EVE Beauty partnered with SQL Centrix to build a scalable customer acquisition framework combining creative strategy, audience research, and continuous data-driven optimization.",
    metrics: [
      { label: "Advertising Spend", value: "$3,000" },
      { label: "Paid Impressions", value: "19.5M+" },
      { label: "Website Clicks", value: "364,999" },
      { label: "2-Second Video Views", value: "7M+" },
    ],
  },
];