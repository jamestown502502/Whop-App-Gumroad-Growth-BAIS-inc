export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  icon: string;
};

export const resources: Resource[] = [
  { id:"1", title:"Gumroad Creator Handbook", description:"The official guide to building a sustainable product business on Gumroad.", url:"https://help.gumroad.com", category:"Getting Started", icon:"📘" },
  { id:"2", title:"Pricing Your Digital Products", description:"Strategies for pricing ebooks, courses, templates, and other digital goods.", url:"https://gumroad.com/blog", category:"Monetization", icon:"💰" },
  { id:"3", title:"Building an Email List", description:"How to grow an audience that buys — before and after product launch.", url:"https://convertkit.com", category:"Audience Growth", icon:"✉️" },
  { id:"4", title:"SEO for Product Listings", description:"Optimize your Gumroad product pages for organic discovery.", url:"https://ahrefs.com/blog", category:"SEO", icon:"🔍" },
  { id:"5", title:"Social Proof Tactics", description:"Add testimonials and reviews to increase conversions on your product pages.", url:"https://gumroad.com", category:"Conversion", icon:"⭐" },
  { id:"6", title:"Launch Day Checklist", description:"A complete step-by-step checklist to run a smooth product launch.", url:"https://gumroad.com", category:"Launch", icon:"🚀" },
];
