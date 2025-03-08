import { Container, Link, Badge, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="ephie">
      <Container>
        <Title>
          EPHIE <Badge>2023</Badge>
        </Title>
        <P>
          This is a full stack react js frontend and Django js and PostgreSQL
          Backend app for job seekers to to follow up status of job
          applications. The app has a full user authentication system using
          tokens with password reset functionality.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/Henoker/JobHunter/">
              https://github.com/Henoker/JobHunter <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux/Android/IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>React Js, Python, Django, Styled components, PostgreSQL</span>
          </ListItem>
        </List>
        <WorkImage src="/images/Dashboard.png" alt="dashboard" />
        <WorkImage src="/images/landing-page.png" alt="landing-page" />
        <WorkImage src="/images/add-job.png" alt="add-job" />
        {/* <WorkImage src="images/login-page.png" alt="login-page" /> */}
        {/* <WorkImage src="images/register-page.png" alt="register-page" /> */}
      </Container>
    </Layout>
  )
}

export default Work
