import { Column, Heading, Meta, Schema, Text, Row, SmartLink, Icon } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { FeaturedWorkGrid } from "@/components/FeaturedWorkGrid";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="l" paddingY="48" paddingX="l" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth horizontal="space-between" vertical="center">
        <Column gap="8">
          <Text variant="label-strong-s" style={{ letterSpacing: "0.1em" }}>
            FEATURED WORK
          </Text>
          <Heading variant="heading-strong-xl">
            {work.title}
          </Heading>
        </Column>
      </Row>
      <FeaturedWorkGrid />
    </Column>
  );
}
