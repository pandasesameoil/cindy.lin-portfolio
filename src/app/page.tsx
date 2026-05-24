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
import { Projects } from "@/components/work/Projects";

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
        <RevealFx translateY="8" delay={0.3} style={{ flex: 1 }}>
          <Flex horizontal="center" s={{ horizontal: "center" }}>
            <Avatar src={person.avatar} size="xl" style={{ width: "320px", height: "320px" }} />
          </Flex>
        </RevealFx>
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
              padding="20"
              gap="12"
              border="neutral-alpha-weak"
              radius="m"
              background="page"
              style={{ minWidth: "180px", flex: "0 0 auto" }}
            >
              <Flex
                horizontal="center"
                vertical="center"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--neutral-solid-medium)",
                }}
              >
                <Icon name="check" size="s" onBackground="neutral-strong" />
              </Flex>
              <Text variant="heading-strong-l">{metric.value}</Text>
              <Text variant="label-strong-s">{metric.label}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
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
          <Projects range={[1, 3]} />
        </RevealFx>
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
