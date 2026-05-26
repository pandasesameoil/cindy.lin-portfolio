"use client";

import { Column, Text, Icon, Flex, SmartLink } from "@once-ui-system/core";

interface FeaturedProject {
  image: string;
  title: string;
  tag: string;
  description: string;
  link: string;
  stats: { icon: string; value: string; label: string }[];
}

const featuredProjects: FeaturedProject[] = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2026%2C%202026%20at%2012_18_56%20AM-vSC4WeJe7DJFn3AkoprcQ80vI9fBYN.png",
    title: "Venture Capital & Ecosystem Growth",
    tag: "SUNSTONE MANAGEMENT",
    description:
      "Built investor relations, managed 16 funds, organized 40+ events, and supported 300+ startups across North America & Asia.",
    link: "/work/scaling-startup-communities-and-partnerships-at-sunstone-vc",
    stats: [
      { icon: "dollar", value: "$150M+", label: "Deals Facilitated" },
      { icon: "users", value: "2,000+", label: "Attendees" },
      { icon: "calendar", value: "40+", label: "Events" },
      { icon: "grid", value: "16", label: "Funds" },
    ],
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2024%2C%202026%20at%2001_55_43%20AM-G4PViLkAg0upHn05RxT1SYKZKnSlq7.png",
    title: "Cross-Border Ecommerce Growth",
    tag: "DING-GO",
    description:
      "Scaled Ding-Go from $2K to $30K monthly revenue through community-driven marketing, operational rebuild, and US market expansion.",
    link: "/work/scaling-cross-border-commerce-at-ding-go",
    stats: [
      { icon: "chart", value: "$2K→$30K", label: "Monthly Revenue" },
      { icon: "chart", value: "15x", label: "Growth" },
      { icon: "users", value: "300→1,200+", label: "Community" },
    ],
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202026%20at%2011_54_18%20PM-h28lajkAwAFrtk2APUzIbsX2GZdlt6.png",
    title: "Amazon Marketplace & Consumer Brand Operations",
    tag: "ECOMART",
    description:
      "Managed Amazon Seller Central and Vendor Central operations for Ecomart across 20+ SKUs, optimizing product listings, PPC strategy, and marketplace growth to scale consumer brands from launch stage to $130K+ in annual revenue.",
    link: "/work/ecomart-consumer-brand-growth",
    stats: [
      { icon: "grid", value: "20+", label: "SKUs Managed" },
      { icon: "dollar", value: "$130K+", label: "Annual Revenue" },
      { icon: "users", value: "4", label: "Consumer Brands" },
    ],
  },
];

export function FeaturedWorkCarousel() {
  return (
    <>
      <style jsx global>{`
        .featured-work-container {
          display: flex;
          flex-direction: row;
          gap: 16px;
          width: 100%;
        }
        .featured-work-card {
          flex: 1;
          min-width: 0;
        }
        .featured-work-image {
          height: 180px;
        }
        @media (max-width: 768px) {
          .featured-work-container {
            flex-direction: column;
          }
          .featured-work-card {
            width: 100%;
            flex: none;
          }
          .featured-work-image {
            height: auto;
            aspect-ratio: 16 / 9;
          }
        }
      `}</style>
      <div className="featured-work-container">
        {featuredProjects.map((project, index) => (
          <SmartLink
            key={index}
            href={project.link}
            style={{ textDecoration: "none" }}
            className="featured-work-card"
          >
            <Column
              border="neutral-alpha-weak"
              radius="l"
              style={{
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                background: "var(--page-background)",
                height: "100%",
              }}
            >
              {/* Image with overlay */}
              <Flex
                className="featured-work-image"
                style={{
                  position: "relative",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Dark overlay */}
              <Flex
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)",
                }}
              />
              {/* Company name top-left */}
              <Flex
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                }}
              >
                <Text
                  variant="label-strong-xs"
                  style={{ color: "white", letterSpacing: "0.05em" }}
                >
                  {project.tag}
                </Text>
              </Flex>
              {/* Arrow button top-right */}
              <Flex
                horizontal="center"
                vertical="center"
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "white",
                }}
              >
                <Icon name="arrowUpRight" size="xs" />
              </Flex>
            </Flex>

            {/* Content */}
            <Column gap="12" style={{ padding: "16px", flex: 1 }}>
              <Text variant="heading-strong-s">{project.title}</Text>
              <Text
                variant="body-default-s"
                onBackground="neutral-weak"
                style={{ lineHeight: 1.5 }}
              >
                {project.description}
              </Text>
              
              {/* Divider */}
              <div style={{ 
                width: "100%", 
                height: "1px", 
                backgroundColor: "#eee", 
                marginTop: "auto" 
              }} />
              
              {/* Stats column */}
              <Column gap="8" style={{ paddingTop: "12px" }}>
                {project.stats.map((stat, statIndex) => (
                  <Flex
                    key={statIndex}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "6px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon 
                      name="check" 
                      size="xs" 
                      style={{ 
                        color: "#B45309", 
                        width: "16px", 
                        flexShrink: 0 
                      }} 
                    />
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      <strong>{stat.value}</strong> {stat.label}
                    </Text>
                  </Flex>
                ))}
              </Column>
            </Column>
          </Column>
          </SmartLink>
        ))}
      </div>
    </>
  );
}
