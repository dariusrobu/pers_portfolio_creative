export interface Diploma {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string;
  year: string;
}

export const diplomas: Diploma[] = [
  {
    id: "d1",
    title: "Business Analysis",
    issuer: "Business Institute",
    imageUrl: "/imgs/diplomas/business_analysis_page-0001.jpg",
    year: "2025",
  },
  {
    id: "d2",
    title: "Google Ads Certification",
    issuer: "Google",
    imageUrl: "/imgs/diplomas/google_ads.jpeg",
    year: "2024",
  },
  {
    id: "d3",
    title: "Python for Data Science",
    issuer: "Tech Academy",
    imageUrl: "/imgs/diplomas/python.png",
    year: "2024",
  },
  {
    id: "d4",
    title: "Social Media Marketing",
    issuer: "Marketing Hub",
    imageUrl: "/imgs/diplomas/social_media_marketing_page-0001.jpg",
    year: "2025",
  },
];
