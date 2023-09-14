import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import thumbnailScamper from '../public/images/scamper.png'

const Posts = () => (
  <Layout title="posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {/* <GridItem title="Why EPMS?" thumbnail={thumbnailEPMS} />
          <GridItem
            title="SCAMPER Technique in Programming"
            thumbnail={thumbnailScamper}
          /> */}
          <Section>
            <PostGridItem
              id="scamper"
              title="SCAMPER Technique in Web Development and Software Development"
              thumbnail={thumbnailScamper}
            >
              The Application of SCAMPER Technique in Web Development and Software Development
            </PostGridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
