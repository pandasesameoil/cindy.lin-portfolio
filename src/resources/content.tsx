import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

// Shared photo data for "A Glimpse of My Journey" section
const experiencesIBuilt = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-v02Un53D4Y7W0Kq5b9YCEY7o6AJj0Q.jpg",
    alt: "2026 Irvine Tech Day",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-zGVO8hjSna4rD8vVP9Odh8LOV99ReW.jpg",
    alt: "Sunstone 2026 CES After Party",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-RPEiFIAqRvtwHrytDrVASq49HqCSpF.jpg",
    alt: "2026 Irvine Tech Day - Pitch Irvine",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-wWCWPNgTUVfl5J3Xu4bE6JTRyGchhb.jpg",
    alt: "Nvidia GTC After Hours - Robotics & Physical AI",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-JMWCgV6yP8ZDmfbRI5qAaSsDILlTgR.jpg",
    alt: "Electrifying the Future - Hosted A16z LA Tech Week",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-TyRRr2cHzp2jEmUpWTykE21yzhIbYm.jpg",
    alt: "Nvidia GTC After Hours - Robotics & Physical AI",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-9c9BIFVNADrsTezcE7Nmr10YlKJnUN.jpg",
    alt: "2025 Irvine Dream Run",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-D2iPuwyzijGQFK4DwS4aiJ6uHqcv1R.jpg",
    alt: "Led Team Dragon at 2025 City of Hope's Walk for Hope",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subhead%201%20%28Bold%29-2-4QIzlZrnhMeQ66we978IqWG6fmu8Cm.jpg",
    alt: "Sunstone Stage Connects - Demo Day",
    orientation: "horizontal" as const,
  },
];

const ecosystemsImPartOf = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13.png-CH3XwPNn1w0wpKPkD8znUMpaEv9mwJ.jpeg",
    alt: "Taiwan OC Chamber Annual Gala with Irvine Councilmembers",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.png-L98dr049lH4EK6nWQvHFNYHWNVzbIx.jpeg",
    alt: "Pacific Symphony Lunar New Year Celebration",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9.png-Qk0aI2zsmCk8a7AwtDl47AcaqZc4Qq.jpeg",
    alt: "Cal Poly Pomona Speaker Series Featuring the COO of Dave's Hot Chicken",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subhead%201%20%28Bold%29.png-mkEelHXpd5Ek1Jcr5UFCSInwyu3ZI6.jpeg",
    alt: "Private Yacht Gathering for Restaurant & Brand Leaders",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.png-fAphChoq6i1dSBBZW7iDLbnIphADBQ.jpeg",
    alt: "Stella Zhang New Venture Competition - 2nd place",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17.png-F3D5lH3J0CGBeXhFX7OVNLkuc53NWc.jpeg",
    alt: "Brand Popup with Founder of Bowlcut",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10.png-2VB8Hjf1mVQxH67SgdpNhgn1tEXD5O.jpeg",
    alt: "Ding-go Founding Team",
    orientation: "horizontal" as const,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7.png-myAgdAQjtHbfwdY1YryCSbydmwcrEd.jpeg",
    alt: "2026 CES",
    orientation: "horizontal" as const,
  },
];

const person: Person = {
  firstName: "Cindy",
  lastName: "Lin",
  name: `Hsin-Yi (Cindy) Lin`,
  role: "GTM & Ecosystem Operator | Partnerships, Community-Led Growth, and Cross-Border Commerce",
  avatar: "/images/avatar.jpg",
  email: "panda.sesameoil@gmail.com",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese (Native)", "Japanese (Elementary)", "French (Elementary)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cindyhylin",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/?view=cm&to=panda.sesameoil@gmail.com&su=Let's%20Connect&body=Hi%20Cindy,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest%20regards,",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Scaling businesses through partnerships and growth</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
    I&apos;m Cindy, a GTM & Ecosystem Operator based in <Text as="span" size="xl" weight="strong">Irvine, CA</Text>, helping businesses <br /> scale through partnerships, community-led growth, and cross-border commerce.
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
        Based in Irvine, CA, I work across venture capital, ecommerce, and startup ecosystems to help businesses scale through partnerships, community-led growth, and operational expansion. My experience spans investor ecosystems, ecommerce operations, community initiatives, and cross-border commerce between Asia and the US.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sunstone Management VC",
        timeframe: "Jan 2024 – Present",
        role: "Investor Relationship & Marketing Analyst",
        achievements: [
          <>
            Facilitated investor-startup partnerships across 3 completed investment deals totaling $150M by coordinating investor alignment, opportunity evaluation, and relationship management
          </>,
          <>
            Supported a $900k investment in an artificial heart startup by connecting a Chinese medical device industrialist with US-based R&D teams to enable cross-border commercialization opportunities
          </>,
          <>
            Managed investor relationship operations across 16 active funds and 100+ portfolio companies by building Airtable-based tracking systems for investor communications, lifecycle management, and reporting processes
          </>,
          <>
            Built and scaled founder-investor ecosystem initiatives through 100+ community and industry events, including NVIDIA GTC and CES side events with 300–700+ attendees
          </>,
          <>
            Expanded Irvine Dream Run participation from 300 to 1,200 attendees across 3 annual events through sponsorship acquisition, partnership development, and community outreach initiatives
          </>,
          <>
            Managed 38+ strategic partnerships for Irvine Tech Day across startup ecosystems, chambers of commerce, universities, and local government organizations
          </>,
          <>
            Coordinated 25 private investor networking events and executive community experiences designed to deepen long-term investor relationships
          </>,
        ],
        images: [],
      },
      {
        company: "BLIVE Global (Ding-go.com)",
        timeframe: "Jul 2025 – Present",
        role: "Growth Strategist (Founding Team)",
        achievements: [
          <>
            Repositioned the platform around high-demand Taiwanese imports through competitor analysis and market positioning strategies
          </>,
          <>
            Scaled monthly revenue from $2K to $30K within 7 months by optimizing product selection, user experience, and growth initiatives
          </>,
          <>
            Rebuilt logistics operations by relocating fulfillment infrastructure to the West Coast, reducing average shipping lead times from 20 to 7 days
          </>,
          <>
            Developed an influencer partnership framework to segment creators by brand awareness and retention goals
          </>,
          <>
            Partnered with 9 influencers under an affiliate-based model that generated 30% order growth and 200K+ combined organic views across Instagram campaigns
          </>,
          <>
            Expanded platform partnerships by onboarding 5 US-based brands and coordinating supplier relationships across Taiwan, Japan, and the US
          </>,
          <>
            Launched a Beauty & Wellness category through cross-border vendor partnerships, contributing to a 15% increase in platform revenue
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
            Managed ecommerce growth initiatives across 4 Amazon seller accounts by optimizing marketplace positioning, product listings, and customer conversion strategies
          </>,
          <>
            Developed pre-launch product evaluation and competitor analysis SOPs to improve SKU selection, pricing alignment, and marketplace readiness decisions
          </>,
          <>
            Helped scale a flagship Amazon product to a Top 5 category ranking through listing optimization and marketplace positioning strategies
          </>,
          <>
            Managed a $3,000 monthly PPC budget by analyzing customer reviews, conversion behavior, and advertising performance
          </>,
          <>
            Supported wholesale expansion by launching a vendor account pilot for 7 SKUs and securing initial purchase orders
          </>,
          <>
            Contributed to direct ecommerce growth through SHOPLINE storefront operations, including fulfillment of an order from NASA
          </>,
        ],
        images: [],
      },
      {
        company: "Hermès",
        timeframe: "May 2022 – Jun 2022",
        role: "Assistant Intern",
        achievements: [
          <>
            Selected as the only intern among 50+ candidates and extended through peak season
          </>,
          <>
            Supported inventory coordination across 1,000+ luxury products and 7 merchandise categories
          </>,
          <>
            Managed daily replenishment operations for 300+ products in a high-volume luxury retail environment
          </>,
        ],
        images: [],
      },
      {
        company: "ChewRank",
        timeframe: "Mar 2023 – Dec 2023",
        role: "Founder",
        achievements: [
          <>
            Recruited and led a 4-member team to develop a restaurant discovery platform integrating search, reservation, and social engagement features
          </>,
          <>
            Conducted 200+ consumer surveys to identify frustrations with existing dining platforms
          </>,
          <>
            Built and tested an MVP prototype that earned recognition in 2 university entrepreneurship competitions and secured $8K+ in funding
          </>,
          <>
            Live at: chewrank.netlify.app
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
        name: "University of California, Irvine",
        description: <>Master of Innovation and Entrepreneurship (2021–2023)</>,
      },
      {
        name: "Soochow University, Taipei, Taiwan",
        description: <>Bachelor of Business Administration (2016–2020)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Tools",
    skills: [
      {
        title: "Tools",
        description: (
          <>Airtable, Amazon Seller Central, SHOPLINE, Google Analytics, Figma, Claude, Vercel, Lovable</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Core Skills",
        description: (
          <>Partnerships, Ecosystem Growth, GTM Strategy, Community-Led Growth, Ecommerce Operations, Cross-Border Commerce</>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Certifications",
        description: (
          <>Google Analytics Individual Qualification, Google Ads Measurement Certification, UI/UX Design with Figma</>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Featured Work",
  title: "Featured Work",
  description: `Featured projects by ${person.name}`,
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
  // Automatically populated from journey photos
  images: [...experiencesIBuilt, ...ecosystemsImPartOf],
};

export { person, social, newsletter, home, about, blog, work, gallery, experiencesIBuilt, ecosystemsImPartOf };
