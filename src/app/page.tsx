import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
  Icon,
  IconButton,
  SmartLink,
  Flex,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";
import { FeaturedWorkCarousel } from "@/components/FeaturedWorkCarousel";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const impactMetrics = [
  {
    icon: "dollar",
    value: "$150M+",
    label: "Deals Facilitated",
    description: "Across 3 completed investment deals",
  },
  {
    icon: "chart",
    value: "15x",
    label: "Revenue Growth",
    description: "Scaled monthly revenue from $2K → $30K",
  },
  {
    icon: "users",
    value: "2,000+",
    label: "Event Attendees",
    description: "Across 100+ community & industry events",
  },
  {
    icon: "grid",
    value: "100+",
    label: "Startups Supported",
    description: "Across 16 active funds & portfolio companies",
  },
  {
    icon: "community",
    value: "1,200+",
    label: "Community Growth",
    description: "Expanded Irvine Dream Run from 300 → 1,200+ attendees",
  },
  {
    icon: "handshake",
    value: "38+",
    label: "Strategic Partnerships",
    description: "Across ecosystems, universities, chambers, & gov. organizations",
  },
  {
    icon: "play",
    value: "200K+",
    label: "Organic Views",
    description: "Generated through influencer partnerships & campaigns",
  },
];

const coreSkills = [
  "Partnerships",
  "Ecosystem Growth",
  "GTM Strategy",
  "Community-Led Growth",
  "Ecommerce Operations",
  "Cross-Border Commerce",
  "Investor Relations",
  "Event Strategy",
  "Brand Strategy",
];

const tools = [
  "Airtable",
  "Amazon Seller Central",
  "SHOPLINE",
  "Google Analytics",
  "Figma",
  "Claude",
  "Vercel",
  "Lovable",
  "Mailchimp",
  "Canva",
  "Luma",
  "Notion",
];

export default function Home() {
  return (
    <Column maxWidth="l" gap="64" paddingY="64" paddingX="l" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Hero Section */}
      <Row fillWidth gap="48" vertical="center" s={{ direction: "column" }}>
        <Column flex={1} gap="20">
          <RevealFx translateY="4">
            <Text variant="body-default-m" onBackground="neutral-weak">
              Hi, I&apos;m
            </Text>
          </RevealFx>
          <RevealFx translateY="4" delay={0.1}>
            <Heading variant="display-strong-l" wrap="balance">
              Hsin-Yi (Cindy) Lin
            </Heading>
          </RevealFx>
          <RevealFx translateY="4" delay={0.2}>
            <Text
              variant="label-strong-m"
              style={{ color: "#B45309", letterSpacing: "0.05em" }}
            >
              GTM & ECOSYSTEM OPERATOR
            </Text>
          </RevealFx>
          <RevealFx translateY="4" delay={0.25}>
            <Text variant="body-default-l" onBackground="neutral-medium">
              Partnerships, Community-Led Growth, and Cross-Border Commerce
            </Text>
          </RevealFx>
          <RevealFx translateY="4" delay={0.3}>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              style={{ maxWidth: "480px" }}
            >
              Based in Irvine, CA, I work across venture capital, ecommerce, and startup ecosystems to help businesses scale through partnerships, community-led growth, and operational expansion. My experience spans investor ecosystems, ecommerce operations, community initiatives, and cross-border commerce between Asia and the US.
            </Text>
          </RevealFx>
          <RevealFx translateY="4" delay={0.4}>
            <Row gap="12" paddingTop="8">
              <Button
                href="/work"
                variant="primary"
                size="m"
                arrowIcon
              >
                VIEW MY WORK
              </Button>
              <Button
                href="/resume.pdf"
                variant="secondary"
                size="m"
                suffixIcon="download"
              >
                DOWNLOAD RESUME
              </Button>
            </Row>
          </RevealFx>
          <RevealFx translateY="4" delay={0.5}>
            <Row gap="8" paddingTop="8">
              {social
                .filter((item) => item.essential)
                .map((item) => (
                  <IconButton
                    key={item.name}
                    href={item.link}
                    icon={item.icon}
                    variant="ghost"
                    size="m"
                    tooltip={item.name}
                  />
                ))}
              <IconButton
                href="https://www.instagram.com/cindylin"
                icon="instagram"
                variant="ghost"
                size="m"
                tooltip="Instagram"
              />
            </Row>
          </RevealFx>
        </Column>
        <Flex flex={1} horizontal="end" vertical="center" s={{ horizontal: "center" }}>
          <RevealFx translateY="8" delay={0.3}>
            <Avatar src={person.avatar} size="xl" style={{ width: "320px", height: "320px" }} />
          </RevealFx>
        </Flex>
      </Row>

      {/* Impact at a Glance */}
      <Column fillWidth gap="24">
        <Row fillWidth horizontal="space-between" vertical="center">
          <Text variant="label-strong-s" style={{ letterSpacing: "0.1em" }}>
            IMPACT AT A GLANCE
          </Text>
          <SmartLink href="/about">
            <Row gap="4" vertical="center">
              <Text variant="label-default-s" style={{ color: "#38BDF8" }}>
                SEE ALL ACHIEVEMENTS
              </Text>
              <Icon name="arrowRight" size="s" style={{ color: "#38BDF8" }} />
            </Row>
          </SmartLink>
        </Row>
        <Row
          gap="16"
          fillWidth
          style={{ overflowX: "auto", paddingBottom: "8px" }}
        >
          {impactMetrics.map((metric, index) => (
            <Column
              key={index}
              gap="8"
              border="neutral-alpha-weak"
              radius="m"
              background="page"
              style={{
                minWidth: "180px",
                flex: "0 0 auto",
                padding: "24px",
                height: "200px",
              }}
            >
              <Flex
                horizontal="center"
                vertical="center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--neutral-solid-medium)",
                  flexShrink: 0,
                }}
              >
                <Icon name="check" size="s" onBackground="neutral-strong" />
              </Flex>
              <Text style={{ fontSize: "36px", fontWeight: "bold", lineHeight: 1.1 }}>
                {metric.value}
              </Text>
              <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                {metric.label}
              </Text>
              <Text style={{ fontSize: "13px", color: "var(--neutral-on-background-weak)" }}>
                {metric.description}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Featured Work */}
      <Column fillWidth gap="24">
        <Row fillWidth horizontal="space-between" vertical="center">
          <Text variant="label-strong-s" style={{ letterSpacing: "0.1em" }}>
            FEATURED WORK
          </Text>
          <SmartLink href="/work">
            <Row gap="4" vertical="center">
              <Text variant="label-default-s" style={{ color: "#38BDF8" }}>
                VIEW ALL PROJECTS
              </Text>
              <Icon name="arrowRight" size="s" style={{ color: "#38BDF8" }} />
            </Row>
          </SmartLink>
        </Row>
        <RevealFx translateY="16">
          <FeaturedWorkCarousel />
        </RevealFx>
      </Column>

      {/* A Glimpse of My Journey */}
      <Column fillWidth gap="24">
        <Column gap="8" horizontal="center" style={{ textAlign: "center" }}>
          <Heading variant="heading-strong-l" style={{ fontStyle: "italic" }}>
            A Glimpse of My Journey
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: "600px" }}>
            Experiences across venture capital, startup ecosystems, partnerships, and community-building.
          </Text>
        </Column>
        
        <Row gap="32" fillWidth s={{ direction: "column" }}>
          {/* Experiences I Built */}
          <Column gap="16" style={{ flex: 1 }}>
            <Column gap="4">
              <Text variant="heading-strong-s">Experiences I Built</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Programs, partnerships, and community experiences I helped create and lead.
              </Text>
            </Column>
            <Row gap="8" fillWidth>
              {[
                { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", title: "SUNSTONE STAGE", subtitle: "DEMO CONNECTS" },
                { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", title: "IRVINE", subtitle: "TECH DAY" },
                { image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80", title: "IRVINE", subtitle: "DREAM RUN" },
                { image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80", title: "INVESTOR YACHT", subtitle: "NETWORKING" },
                { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", title: "FOUNDER", subtitle: "ROUNDTABLES" },
              ].map((exp, index) => (
                <Flex
                  key={index}
                  radius="m"
                  style={{
                    position: "relative",
                    flex: 1,
                    minWidth: 0,
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={exp.image}
                    alt={exp.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Flex
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                  <Column
                    gap="0"
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "8px",
                      right: "8px",
                    }}
                  >
                    <Text variant="label-strong-xs" style={{ color: "white", fontSize: "9px", lineHeight: 1.2 }}>
                      {exp.title}
                    </Text>
                    <Text variant="body-default-xs" style={{ color: "rgba(255,255,255,0.8)", fontSize: "8px" }}>
                      {exp.subtitle}
                    </Text>
                  </Column>
                </Flex>
              ))}
            </Row>
          </Column>

          {/* Ecosystems I'm Part Of */}
          <Column gap="16" style={{ flex: 1 }}>
            <Column gap="4">
              <Text variant="heading-strong-s">Ecosystems I&apos;m Part Of</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Industry conferences, founder communities, and networks I actively engage with.
              </Text>
            </Column>
            <Row gap="8" fillWidth>
              {[
                { image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", title: "NVIDIA GTC" },
                { image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", title: "CES" },
                { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", title: "TECHCRUNCH DISRUPT" },
                { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", title: "STARTUP GRIND" },
                { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80", title: "FOUNDER DINNERS" },
              ].map((eco, index) => (
                <Flex
                  key={index}
                  radius="m"
                  style={{
                    position: "relative",
                    flex: 1,
                    minWidth: 0,
                    aspectRatio: "4/3",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={eco.image}
                    alt={eco.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <Flex
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)",
                    }}
                  />
                  <Column
                    horizontal="center"
                    vertical="center"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <Text
                      variant="label-strong-xs"
                      style={{ color: "white", textAlign: "center", fontSize: "9px", padding: "4px" }}
                    >
                      {eco.title}
                    </Text>
                  </Column>
                </Flex>
              ))}
            </Row>
          </Column>
        </Row>
      </Column>

      {/* Skills & Tools */}
      <Column fillWidth gap="24">
        <Text variant="label-strong-s" style={{ letterSpacing: "0.1em" }}>
          SKILLS & TOOLS
        </Text>
        <Column gap="16">
          <Row gap="8" vertical="center">
            <Text
              variant="label-default-xs"
              onBackground="neutral-weak"
              style={{ minWidth: "80px" }}
            >
              CORE SKILLS
            </Text>
            <Row gap="8" wrap>
              {coreSkills.map((skill) => (
                <Flex
                  key={skill}
                  paddingX="12"
                  paddingY="6"
                  border="neutral-alpha-weak"
                  radius="full"
                  background="page"
                >
                  <Text variant="body-default-s">{skill}</Text>
                </Flex>
              ))}
            </Row>
          </Row>
          <Row gap="8" vertical="center">
            <Text
              variant="label-default-xs"
              onBackground="neutral-weak"
              style={{ minWidth: "80px" }}
            >
              TOOLS
            </Text>
            <Row gap="8" wrap>
              {tools.map((tool) => (
                <Flex
                  key={tool}
                  paddingX="12"
                  paddingY="6"
                  border="neutral-alpha-weak"
                  radius="full"
                  background="page"
                >
                  <Text variant="body-default-s">{tool}</Text>
                </Flex>
              ))}
            </Row>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
