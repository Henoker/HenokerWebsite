import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  Image,
  Button,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

import Layout from '../components/layouts/article.js'
import {
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoGithub
} from 'react-icons/io'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          mb="6"
          p="3"
          mt="18"
          textAlign="center"
        >
          Hello, I&apos;m a full-stack developer based in Nairobi, Kenya!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Henock Tesfatsion
            </Heading>
            <div>Full Stack Web Developer</div>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100"
              display="inline-block"
              borderRadius="full"
              src="/images/suitphoto.PNG"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
          Motivated and adaptable full-stack developer with a diverse background in education, finance, and 
          localization seeking to leverage transferable skills gained from teaching, financial analysis, and 
          freelance work to excel in the tech industry. I am a Full Stack Software and Web Developer specializing
           in Python and Javascript programming. I have hands-on experience with a variety of frameworks 
           including Django, React JS, Next.js, and Express, as well as databases like PostgreSQL and MongoDB. 
           Eager to contribute to innovative projects and collaborate with dynamic teams. In my spare time, I enjoy DIY projects, gaming, and building my own innovative tech projects.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1982</BioYear>
            Born in Addis Ababa አዲስ አበባ, Ethiopia ኢትዮጵያ
          </BioSection>
          <BioSection>
            <BioYear>2004</BioYear>
            Completed Buisness Management BA Degree from Jimma University
          </BioSection>
          <BioSection>
            <BioYear>2004-2013</BioYear>
            Worked as College Instructor at St Mary&apos;s University
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>
            Completed HROD MA Degree from ADDIS ABABA University
          </BioSection>
          <BioSection>
            <BioYear>2013</BioYear>
            Completed Management Trainee Program in Commercial Bank of Ethiopia
          </BioSection>
          <BioSection>
            <BioYear>2013-2017</BioYear>
            worked at Commercial Bank of Ethiopia as Credit Analyst
          </BioSection>
          <BioSection>
            <BioYear>2017-present</BioYear>
            Became a refugee in Nairobi, Kenya and works as a freelancer
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Harvard&apos;s CS50&apos;s Web Programming with Python and
            JavaScript certificate course
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed John Hopkins University&apos;s HTML, CSS, and Javascript
            for Web Developers certificate course
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed Meta&apos;s Introduction to Frontend Development
            Professional certificate course
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Completed Meta&apos;s React Basics Professional certificate course
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed Codio&apos;s Advanced Django: Advanced Django Rest Framework
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed Meta&apos;s Programming with JavaScript Professional certificate course
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Developing Front-End Apps with React
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Introduction to Cloud Computing
          </BioSection>
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Paragraph>
          <Link href="https://github.com/EddieHubCommunity">
              Backend Skills
          </Link>{' '} Python, Django, Node js, Express, PostgreSQL, MySQL, SQLite, MongoDB, RESTful APIs,  JWT (JSON Web Tokens) or OAuth
          </Paragraph>
          <Paragraph>
          <Link href="https://github.com/EddieHubCommunity">
              Frontend Skills
          </Link>{' '} Javascript, React Js, Next js, HTML5, CSS3, Redux, Testing and Debuging, Git, Github, Heroku, Netlify, Vercel, AWS, Azure, Digital Ocean, Google Cloud, Firebase, and more
          </Paragraph>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <Paragraph>
            Art, Music,{' '}
            <Link href="https://github.com/EddieHubCommunity">
              Open Source participation
            </Link>
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My social Media Links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Henoker" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/henock-beyene-tesfatsion-921ba54b/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.youtube.com/channel/UCj7FaUjkPqXD7YTTzbILuNA"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoYoutube} />}
                >
                  Youtube
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Henocktsion" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
