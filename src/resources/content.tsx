import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cindy",
  lastName: "Lin",
  name: `Hsin-Yi (Cindy) Lin`,
  role: "GTM Operator · Ecommerce & Cross-Border Commerce",
  avatar: "/images/avatar.jpg",
  email: "jingcindy0314@gmail.com",
  location: "America/Los_Angeles", // Irvine, CA
  languages: ["English", "Chinese (Native)", "Japanese (Elementary)"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>Updates on GTM strategy and ecommerce insights</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/cindyhylin",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>GTM Operator · Ecommerce & Cross-Border Commerce</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">ChewRank</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "https://chewrank.netlify.app",
  },
  subline: (
    <>
    I&apos;m Cindy, a GTM operator based in Irvine, CA helping brands scale — from building investor pipelines to launching products on Amazon, from growing Taiwanese imports 15x to running influencer campaigns.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m a GTM operator based in Irvine, CA with experience spanning venture capital, ecommerce growth, and cross-border commerce between Asia and the US. I help brands scale — from building investor pipelines to launching products on Amazon, from growing Taiwanese imports 15x to running influencer campaigns that drive organic reach.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: (<>BLIVE Global (dba <a href="https://ding-go.com" target="_blank" rel="noopener noreferrer">Ding-go</a>)</>),
        timeframe: "Jul 2025 – Present",
        role: "Growth Strategist (Founding Team)",
        achievements: [
          <>
            Scaled monthly revenue from $2K to $30K (15x growth) in 7 months through UI redesign and product-market fit strategy
          </>,
          <>
            Rebuilt logistics infrastructure, reducing shipping lead times by 50% (20 days to 7 days) while sustaining 30–50% gross margin
          </>,
          <>
            Launched Beauty & Wellness vertical through Taiwanese/Japanese vendor partnerships, growing platform revenue 15% in 60 days
          </>,
          <>
            Organized influencer campaigns with 4+ creators, generating 200K+ organic views and 50% MoM revenue spike
          </>,
        ],
        images: [],
      },
      {
        company: "Sunstone Management VC",
        timeframe: "Jan 2024 – Present",
        role: "Investor Relations & Marketing Analyst",
        achievements: [
          <>
            Facilitated $150M in transaction value across 3 closed investment deals
          </>,
          <>
            Managed operational lifecycle for 16 active funds ($30M AUM) and reporting for 100+ portfolio companies to 160+ investors
          </>,
          <>
            Organized 40+ Weekly Demo Days for 70+ startups, attracting 2,000+ attendees
          </>,
          <>
            Grew LinkedIn presence to 80K+ impressions with 20% MoM growth; led 6 cross-functional teams for events with 500+ participants
          </>,
        ],
        images: [],
      },
      {
        company: "EcoMart",
        timeframe: "Jan 2024 – Present",
        role: "E-commerce Operations Consultant (Amazon Specialist)",
        achievements: [
          <>
            Managed 4 high-volume Amazon Seller accounts; achieved Top 5 Category Rankings for flagship products
          </>,
          <>
            Managed $3K/month PPC budget with consistent 2x ROAS
          </>,
          <>
            Launched Amazon Vendor Account pilot for 7 SKUs, secured 3 initial POs with 50% volume increase
          </>,
        ],
        images: [],
      },
      {
        company: "Chipotle",
        timeframe: "Feb 2023 – Jun 2023",
        role: "Student Consultant",
        achievements: [
          <>
            Led team of 10 to deliver operational efficiency recommendations; successfully implemented, achieving 30% efficiency increase
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "UC Irvine",
        description: <>Master of Entrepreneurship (2021–2023)</>,
      },
      {
        name: "Soochow University, Taipei, Taiwan",
        description: <>BBA (2016–2020)</>,
      },
      {
        name: "ChewRank (Founder)",
        description: (
          <>
            Restaurant discovery app; won 2nd place at 2023 Stella Zheng New Venture Competition and 3rd place at Beall & Butterworth Competition, earning $8K+ in funding. Live at chewrank.netlify.app
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Certifications",
    skills: [
      {
        title: "Ecommerce",
        description: (
          <>Amazon Seller Central, Vendor Central, PPC management, cross-border commerce</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Analytics & Marketing",
        description: (
          <>Google Analytics (Certified), Google Ads (Measurement Certified), influencer campaigns, GTM strategy</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Tools",
        description: (
          <>Figma (UI/UX certified), Excel (advanced), Salesforce (basic)</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
