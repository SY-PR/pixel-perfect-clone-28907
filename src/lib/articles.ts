import heroImage from "@/assets/fintech-hero.jpg";
import officeImage from "@/assets/fintech-office.jpg";
import conversationImage from "@/assets/fintech-conversation.jpg";
import workImage from "@/assets/fintech-work.jpg";

export const categories = ["All", "Fintech", "Digital Banking", "Innovation", "Technology", "Finance"] as const;
export type ArticleCategory = (typeof categories)[number];

export const articles = [
  { image: heroImage, category: "Fintech", title: "The Digital Revolution: How Fintech is Transforming Financial Services", excerpt: "The technologies and new ideas rewriting the rules of modern finance.", date: "June 12, 2024", readTime: "8 min read", featured: true },
  { image: conversationImage, category: "Digital Banking", title: "How Banking Has Modernized: The Evolution of Digital Services", excerpt: "How customer expectations are reshaping digital products and everyday banking.", date: "April 18, 2024", readTime: "6 min read" },
  { image: officeImage, category: "Innovation", title: "A Decade in Banking: A Personal Brand Built on Progress", excerpt: "Lessons from leaders building a more open and resilient financial ecosystem.", date: "April 12, 2024", readTime: "7 min read" },
  { image: workImage, category: "Technology", title: "Banking From Anywhere: Digital Tools Reshaping Work", excerpt: "The secure tools connecting teams, customers and decisions from anywhere.", date: "March 29, 2024", readTime: "5 min read" },
  { image: heroImage, category: "Finance", title: "The Human Side of Financial Transformation", excerpt: "Why trust, empathy and clarity matter as much as technology in modern finance.", date: "March 15, 2024", readTime: "9 min read" },
  { image: conversationImage, category: "Fintech", title: "Embedded Finance Is Becoming Everyday Finance", excerpt: "Payments, credit and protection are moving into the products people already use.", date: "March 8, 2024", readTime: "6 min read" },
  { image: officeImage, category: "Digital Banking", title: "Designing a Bank Customers Choose to Stay With", excerpt: "A practical look at loyalty, service design and meaningful personalization.", date: "February 22, 2024", readTime: "8 min read" },
] as const;
