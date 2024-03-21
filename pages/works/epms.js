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
          EPMS <Badge>2022</Badge>
        </Title>
        <Heading>
          Problem Statement
        </Heading>
        <P> Before EPMS, the company&apos;s Translation and localization project
          management process relies on manual communication (email) and excel based
          recording system, leading to delays and potential project loss. 
          Assigning tasks to translators/vendors and following up the status of a task 
          was time-consuming and error prone. The previous process involves time-consuming
          communication and manual checks in assigning tasks for vendors/translators. 
          also, SAAS solution in the market are expensive since they charge 250 USD per 
          user access.</P>
        <P>
        <Heading>
          My solution
        </Heading>
          This app is an end-to-end project management tool built for translation
          and localization companies. It helps to manage and automate translation and
          localization workflows with ease. It is designed for my client Ethisotar
          translation and localization company. It helps the company to manage
          internal project, client, and vendor management processes, in one seamless 
          online environment. The EPMS Translation Project Management System has 
          the following features and app components:
        </P>
        <List ml={4} my={4}>
          <ListItem>
            1. Project Management capability with CRUD functionality.
          </ListItem>
          <ListItem>2. Client Management System</ListItem>
          <ListItem>3. Vendor Management System.</ListItem>
          <ListItem>4. Admin Dashboard & Chart Js vs with analytics</ListItem>
          <ListItem>
            5. PDF Invoice, Quote and PO Generation capability.
          </ListItem>
          <ListItem>6. Client order Management System.</ListItem>
          <ListItem>7. Vendor Job Assignement System.</ListItem>
          <ListItem>8. Vendor Performance rating System.</ListItem>
        </List>
        <List ml={8} my={8}>
          <ListItem>
            <Meta>Github Link</Meta>
            <Link href="https://github.com/Henoker/epms">
              https://github.com/Henoker/epms <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>
              Python, Django, Docker, Nginx, Gunicorn, PostgrSQL, JavaScript, 
              HTML, Bootstarp, WeasyPrint, Jquery.
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/EPMS.png" alt="epms" />
        <WorkImage src="/images/EPMS2.png" alt="epms2" />
      </Container>
    </Layout>
  )
}

export default Work
