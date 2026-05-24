"use client";

import { Column, Row, Text, Icon, Flex, SmartLink } from "@once-ui-system/core";

interface FeaturedProject {
  image: string;
  title: string;
  tag: string;
  description: string;
  link: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    title: "Irvine Tech Day",
    tag: "Event & Community Leadership",
    description:
      "Managed 38+ strategic partnerships and organized 100+ events, growing Irvine Dream Run from 300 to 1,200+ attendees across 3 annual events.",
    link: "/work/scaling-startup-communities-and-partnerships-at-sunstone-vc",
  },
];

export function FeaturedWorkCarousel() {
  return (
    <Row
      id="carousel-container"
      gap="24"
      fillWidth
      style={{
        overflowX: "auto",
        scrollBehavior: "smooth",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        paddingBottom: "8px",
      }}
    >
        {featuredProjects.map((project, index) => (
          <SmartLink
            key={index}
            href={project.link}
            style={{ textDecoration: "none", flex: "0 0 auto" }}
          >
            <Row
              border="neutral-alpha-weak"
              radius="l"
              style={{
                width: "min(600px, 85vw)",
                height: "280px",
                overflow: "hidden",
                scrollSnapAlign: "start",
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
                <Text variant="heading-strong-m">{project.title}</Text>
                <Text
                  variant="label-default-xs"
                  style={{
                    color: "#B45309",
                    letterSpacing: "0.03em",
                  }}
                >
                  {project.tag}
                </Text>
                <Text
                  variant="body-default-s"
                  onBackground="neutral-weak"
                  style={{ lineHeight: 1.5 }}
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
  </Row>
  );
}
