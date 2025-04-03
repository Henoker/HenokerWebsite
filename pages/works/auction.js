import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="auction">
      <Container>
        <Title>
          BIDHUB E-Commerce APP <Badge>2022 & 2025</Badge>
        </Title>
        <P>
          As part of my harvard CS50 course (2022), I was expected to to Design
          an eBay-like e-commerce auction site that will allow registered users
          to post auction listings, place bids on listings, comment on those
          listings, and add listings to a watchlist. Users are able to visit a
          page that displays a list of all listing based on categories. The app
          was developed using Python/django, SQLite, Vanilla JavaScript.
          However, This project has been upgraded (2025) from a Django-only
          implementation to a modern full-stack architecture using Django REST
          Framework with PostgreSQL database from backend and React.js with
          Tailwind CSS for frontend, RESTful API interface, and Redux for
          managing application state.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github Full Stack modern app</Meta>
            <Link href="https://github.com/Henoker/BidHub">
              https://github.com/Henoker/BidHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github Django Only</Meta>
            <Link href="https://github.com/Henoker/Project_2">
              https://github.com/Henoker/Project_2 <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>
              Django, JavaScript, SQLite, RESTful API, React, Redux, Tailwind
              CSS
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/bidhub.png" alt="auction" />
        <WorkImage src="/images/project2.png" alt="auction" />
      </Container>
    </Layout>
  )
}

export default Work
