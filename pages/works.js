import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailproject2 from '../public/images/project2.png'
import thumbnailEPMS from '../public/images/EPMS.png'
import thumbnailjobhunter from '../public/images/landing-page.png'
import thumbnailethio from '../public/images/ethioservices.png'
import thumbnailProperty from '../public/images/our-properties-catalog.png'
import thumbnailgeo from '../public/images/geopolitics.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          My Portfolio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="epms"
              title="EPMS Project Management App"
              thumbnail={thumbnailEPMS}
            >
              A Translation Project Management App with Python Django
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="ethiostaram"
              title="Translation and Localization company website"
              thumbnail={thumbnailethio}
            >
              A Translation and localization company websie with React/nextjs
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="relators"
              title="A Relators App with Django and React Js"
              thumbnail={thumbnailProperty}
            >
              A Realtors App with Django and React Js
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="jobhunter"
              title="Job application follow up app"
              thumbnail={thumbnailjobhunter}
            >
              A job application tracker app with React js and Python/Django
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="auction"
              title="E-commerce Auction App"
              thumbnail={thumbnailproject2}
            >
              BIDHUB E-commerce Auction App
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="geopolitical"
              title="Geopolitical Analytical Tool "
              thumbnail={thumbnailgeo}
            >
              Geopolitical Rating Tool Using Python Tkinter & React JS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
