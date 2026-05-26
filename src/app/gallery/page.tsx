import { Column, Flex, Heading, Meta, Row, Schema, Text } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  return (
    <Column maxWidth="l" paddingY="48" paddingX="l" gap="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Row fillWidth horizontal="between" vertical="center">
        <Column gap="8">
          <Text variant="label-strong-s" style={{ letterSpacing: "0.1em" }}>
            GALLERY
          </Text>
          <Heading variant="heading-strong-xl">
            {gallery.title}
          </Heading>
        </Column>
      </Row>
      <GalleryView />
    </Column>
  );
}
