"use client";

import { Column, Row, Text, Icon, Flex, SmartLink } from "@once-ui-system/core";

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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
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
    <Row gap="16" fillWidth>
      {featuredProjects.map((project, index) => (
        <SmartLink
          key={index}
          href={project.link}
          style={{ textDecoration: "none", flex: 1, minWidth: 0 }}
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
              style={{
                position: "relative",
                width: "100%",
                height: "180px",
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
              
              {/* Stats row */}
              <Row gap="16" wrap style={{ marginTop: "auto", paddingTop: "12px" }}>
                {project.stats.map((stat, statIndex) => (
                  <Row key={statIndex} gap="6" vertical="center">
                    <Icon name="check" size="xs" style={{ color: "#B45309" }} />
                    <Text variant="label-strong-xs">{stat.value}</Text>
                    <Text variant="body-default-xs" onBackground="neutral-weak">
                      {stat.label}
                    </Text>
                  </Row>
                ))}
              </Row>
            </Column>
          </Column>
        </SmartLink>
      ))}
    </Row>
  );
}
