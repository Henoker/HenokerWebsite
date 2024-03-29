import { Container, Link, Badge, List, ListItem, Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="epms">
      <Container>
        <Title>
          Ethiostar America <Badge>2023</Badge>
        </Title>
        <Heading>
          Problem Statement
        </Heading>
        <P>
          The client Ethisotar America Translation and Localization company 
          wants a lanading page with an instant price quotation system. 
        </P>
        <Heading>
          My solution
        </Heading>
        <P>
         I developed the app using Next.js and tailwind css! 
         The website features an instant quote tool
         that allows you to get an estimate for your translation project
         quickly and easily. Vistors simply can enter the details of the
         project, such as the language pair and word count, and the
         incorporated quote calculator will generate an instant quote. 
         The project is designed for my clients in United States.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.ethiostaramerica.com/">
              https://www.ethiostaramerica.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux/Android/IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>
              React/Next Js, Tailwind CSS, Framer Motion, Lottie Animations,
              Google App Engine
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/ethioservices.png" alt="ethioservices" />
        <WorkImage src="/images/ethioquote.png" alt="ethioquote" />
      </Container>
    </Layout>
  )
}

export default Work
