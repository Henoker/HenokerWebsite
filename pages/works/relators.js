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
          Relators <Badge>2024</Badge>
        </Title>
        <Heading>
          Problem Statement
        </Heading>
        <P>
        The project is a full-stack real estate web application that allows customers to browse 
        through a wide range of listings, contact the relators, rate relators, and contact the 
        web admin for more info. For relators, it offers a simple and efficient way to list properties,
        create thier profiles and find customers for thier listings.
        </P>
        <Heading>
          My solution
        </Heading>
        <P>
        This project was developed with scalability, security, and usability in mind. 
        It follows best practices for web development to ensure a robust and stable Real Estate app. The project contains
        1. User Registration and Authentication: Users can create accounts, log in securely, and reset their 
        passwords if needed. JWT tokens are used to securely authenticate users.
        2. Property Listings Catalog: A rich property listing catalog with categories, property details, and 
        search functionality to help users find what they need easily.
        3. Property Management: Relators can list properties, create profiles, and manage their listings.
        4. User Dashboard: Users can view their listings, view their profile, and contact the relator directly 
        from the listing page.
        5. Agent Rating Capability: Users can rate relators and view the ratings.
        6. Property Specific Enquiry for agents: users can contact the relator directly from the listing page.
        7. Responsive Design: The website is optimized for various devices, providing a smooth user experience 
        on desktops, tablets, and mobiles.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <Link href="https://github.com/Henoker/real-estate/">
            https://github.com/Henoker/real-estate <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/Mac/Linux/Android/IOS</span>
          </ListItem>
          <ListItem>
            <Meta>Tech Stacks</Meta>
            <span>
            React js, Django, Django-rest-framework, PostgreSQL, JwT Web Tokens, React-router, React-bootstrap, React-redux, React-toastify, React-router-dom,
            React-router-bootstrap, redux/toolkit,RTQuery, React-helmet,  
            Django-cors-headers, 
            </span>
          </ListItem>
        </List>
        <WorkImage src="/images/HomePage.png" alt="realestate" />
        <WorkImage src="/images/SingleProperty.png" alt="singleproperty" />
        <WorkImage src="/images/Login.png" alt="Login page" />
        <WorkImage src="/images/our-properties-catalog.png" alt="properties page" />
        <WorkImage src="/images/Register.png" alt="register page" />
      </Container>
    </Layout>
  )
}

export default Work
