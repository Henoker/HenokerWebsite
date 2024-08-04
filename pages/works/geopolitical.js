import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="geopolitical">
      <Container>
        <Title>
          A Geopolitical Analytical Tool <Badge>2021</Badge>
        </Title>
        <P>
          This is my Geopolitical Analytical desktop app that can help
          governments, businesses, and citizens to identify the direction of
          their country&apos;s political risk situation. Political Risk is the
          holy grail of decision-making in every aspect of life because every
          business and personal decisions are dependent on it. This tool will
          help you foresee the danger that lurks behind every political decision
          in a given country.
        </P>
        <Title>
          A SCAMPER Version of Geopolitical Analytical Tool using React JS <Badge>2021</Badge>
        </Title>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github: Tinkter Code</Meta>
            <Link href="https://github.com/Henoker/GeoPolitics/tree/master">
              https://github.com/Henoker/GeoPolitics/tree/master
              <ExternalLinkIcon mx="2px" />
            </Link>
            <Meta>Website: React Js </Meta>
            <Link href="https://henoker.github.io/chess">
              hhttps://henoker.github.io/chess
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>Python Tkinter</span>
          </ListItem>
        </List>
        <WorkImage src="/images/geopolitics.png" alt="Python Tinkter geopolitics" />
        <WorkImage src="/images/react-geopolitics.png" alt="React Js geopolitics" />
      </Container>
    </Layout>
  )
}

export default Work
