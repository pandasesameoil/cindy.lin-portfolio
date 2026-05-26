"use client";

import { Column, Row, Text, Icon, Flex, SmartLink } from "@once-ui-system/core";

interface FeaturedProject {
  image: string;
  title: string;
  tag: string;
  description: string;
  link: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2026%2C%202026%20at%2012_18_56%20AM-vSC4WeJe7DJFn3AkoprcQ80vI9fBYN.png",
    title: "Sunstone Management VC",
    tag: "Investor Relations & Ecosystem Growth",
    description:
      "Facilitated $150M+ in investment deals, managed 16 funds & 100+ portfolio companies, and built 100+ events with 300–700+ attendees.",
    link: "/work/scaling-startup-communities-and-partnerships-at-sunstone-vc",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2024%2C%202026%20at%2001_55_43%20AM-G4PViLkAg0upHn05RxT1SYKZKnSlq7.png",
    title: "Ding-Go (BLIVE Global)",
    tag: "E-commerce Growth & Operations",
    description:
      "Scaled monthly revenue from $2K to $30K in 7 months, reduced shipping time from 20 to 7 days, and generated 200K+ organic views through influencer campaigns.",
    link: "/work/scaling-cross-border-commerce-at-ding-go",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2025%2C%202026%20at%2011_54_18%20PM-h28lajkAwAFrtk2APUzIbsX2GZdlt6.png",
    title: "Amazon Marketplace & Consumer Brand Operations",
    tag: "Amazon Marketplace & E-Commerce Operations",
    description:
      "Managed Amazon Seller Central and Vendor Central operations for Ecomart across 20+ SKUs, optimizing product listings, PPC strategy, and marketplace growth to scale consumer brands from launch stage to $130K+ in annual revenue.",
    link: "/work/ecomart-consumer-brand-growth",
  },
];

export function FeaturedWorkGrid() {
  return (
    <Column fillWidth gap="24">
      {featuredProjects.map((project, index) => (
        <SmartLink
          key={index}
          href={project.link}
          style={{ textDecoration: "none" }}
        >
          <Row
            border="neutral-alpha-weak"
            radius="l"
            fillWidth
            style={{
              height: "280px",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              background: "var(--page-background)",
            }}
          >
            {/* Image */}
            <Flex
              style={{
                width: "35%",
                height: "280px",
                overflow: "hidden",
                flexShrink: 0,
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
            </Flex>

            {/* Content */}
            <Column
              gap="12"
              style={{
                width: "65%",
                padding: "24px",
              }}
            >
              <Text variant="heading-strong-l">{project.title}</Text>
              <Text
                variant="label-default-s"
                style={{
                  color: "#B45309",
                  letterSpacing: "0.03em",
                }}
              >
                {project.tag}
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                style={{ lineHeight: 1.6 }}
              >
                {project.description}
              </Text>
              <Row gap="4" vertical="center" paddingTop="8">
                <Text
                  variant="label-default-s"
                  style={{ color: "#38BDF8" }}
                >
                  View Case Study
                </Text>
                <Icon name="arrowRight" size="xs" style={{ color: "#38BDF8" }} />
              </Row>
            </Column>
          </Row>
        </SmartLink>
      ))}
    </Column>
  );
}
