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
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Badge,
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
            <div>Full Stack Developer</div>
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
          <Heading as="h4" variant="section-title">
            Full stack Developer Journey
          </Heading>
          <Accordion>
<AccordionItem>
            <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
              <BioSection>
              <BioYear>2022</BioYear>
            Completed Harvard&apos;s CS50&apos;s Web Programming with Python and
            JavaScript certificate course
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    This course dives more deeply into the design and implementation of web apps
    with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.
    In this course I learned about database design, scalability, security, and user experience.
    Through hands-on projects, I learn how to write and use APIs, create interactive UIs, 
    and leverage cloud services like GitHub and Heroku. 
    <Text fontSize='xl' fontWeight='bold'>
    Skills
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
    Python Django JavaScript, React JS, SQL, Bootstrap
  </Badge>
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
    Database Design, Scalability, Interactive UI
  </Badge>
    </Text>
    </AccordionPanel>
</AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2022</BioYear>
            Completed John Hopkins University&apos;s HTML, CSS, and Javascript
            for Web Developers certificate course
        </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course I learn the basic tools that every web page coder needs to know. 
    The course intoduces concepts on how to implement modern web pages with HTML and CSS.
    Then advances on how to code web pages such that its components rearrange and resize themselves
    automatically based on the size of the user screen. I was able to code up a web page that will 
    as useful on a mobile phone as on a desktop computer. Last but certainly not least, 
    I learn about Javascript. Using Javascript, I learn how to build a fully functional web application 
    that utilizes Ajax to expose server-side functionality and data to the end user.
    <Text fontSize='xl' fontWeight='bold'>
    Skills
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
   HTML, CSS, JavaScript, Ajax
  </Badge>
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
    Responsive Design
  </Badge>
    </Text>
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2023</BioYear>
            Completed Meta&apos;s Introduction to Frontend Development
            Professional certificate course
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learn about the day-to-day responsibilities of a web developer and 
    get a general understanding of the core and underlying technologies that power the internet.
    I also learn how front-end developers create websites and applications that work well and are easy to maintain.
    I was introduced to the core web development technologies like HTML and CSS and get opportunities to practice 
    using them. I was also introduced to modern UI frameworks such as Bootstrap and React that make it easy to 
    create interactive user experiences.  
    <Text fontSize='xl' fontWeight='bold'>
    Skills
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
    HTML, CSS, Bootstrap, React
  </Badge>
  <Badge ml='1' fontSize='0.8em' colorScheme='green'>
    Frontend Development, Interactive UI
  </Badge>
    </Text>
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2023</BioYear>
            Completed Meta&apos;s React Basics Professional certificate course
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I explore the fundamental concepts that underpin the React library and learn the basic skills
    required to build a simple, fast, and scalable app. By taking this course I was able to Use reusable components
    to render views where data changes over time, Create more scalable and maintainable websites and apps,
    Use props to pass data between components, Create dynamic and interactive web pages and apps, 
    Use forms to allow users to interact with the web page, and Build an application in React.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed Codio&apos;s Advanced Django: Advanced Django Rest Framework
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I cover testing, performance considerations such as caching and throttling, 
    use of 3rd party libraries, and integrating frontends within the context of the Django REST framework.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed Meta&apos;s Programming with JavaScript Professional certificate course
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I revised and expaneded my knowledge of the basic concepts of web development with JavaScript.
    I work with functions, objects, arrays, variables, data types, the HTML DOM, and much more. 
    I learn how to use JavaScript and discover interactive possibilities with modern JavaScript technologies. 
    Finally, I learn about the practice of testing code and how to write a unit test using Jest.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Introduction to Cloud Computing
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learn about essential characteristics of cloud computing and emerging technologies supported
    by cloud. I explore cloud service models, including Infrastructure as a Service (IaaS), Platform as a Service 
    (PaaS), Software as a Service (SaaS), and Public, Private, and Hybrid deployment models. I Learn about cloud 
    adoption, blockchain, analytics, and AI. I learn about the many components of cloud computing architecture 
    including datacenters, availability zones, virtual machines, containers, and bare metal servers. 
    I also familiarize myself with different types of cloud storage options, such as Object Storage.
    I gain foundational knowledge of emergent cloud trends and practices including Hybrid, Multicloud, Microservices,
    Serverless, DevOps, Cloud Native, Application Modernization, as well as learn about cloud security and 
    monitoring.  
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Getting Started with Git and GitHub
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learned about Git and Github fundamentals and explore key Git concepts such as 
    branching and repositories, as well as the use of Git commands. I also learned and practiced various 
    Git concepts such as forking, cloning and merging workflows using hands-on labs. And I learned how to 
    use GitHub to work effectively as a team, and perform common Git operations, from both the Web UI and 
    command line. 
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Developing Front-End Apps with React
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learned how to build client-side user interfaces. I develop front-ends using components,
    the modular building blocks of React applications. I learned about component composition to create rich 
    functionality with features such as props, hooks, states, and event handling. I explore component lifecycles 
    and how to pass data and manipulate component states. Finally, I Build a portfolio app and gain practical 
    experience by completing numerous hands-on labs in each lesson. 
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Developing Back-End Apps with Node.js and Express
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learned about Node.js and Express. Specifically, I explore
    about how to develop applications using asynchronous callbacks and promises,
    create REST APIs and perform CRUD operations, implement authentication and 
    session management. Throughout the course, I completed numerous hands-on labs
    to gain practical experience.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed Meta&apos;s Advanvced React Js Course
          </BioSection> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this  course, I Learned how to use more advanced React concepts and features, become proficient in JSX,
    and confidently test react applications. I examined different types of React components and learn various 
    characteristics and when to use them. I explore more advanced hooks and create my own. I looked into building 
    forms with React. I explored component composition and new patterns, such as Higher Order Components and 
    Render Props. I created a web application that consumes API data and get familiar with the most commonly 
    used React framework integrations, tools, and testing techniques.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Python for Data Science, AI & Development Course
          </BioSection> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    I learned about Python basics and the different data types. I familiarize myself with Python Data structures
    like List and Tuples, as well as logic concepts like conditions and branching. I used Python libraries such as 
    Pandas, Numpy & Beautiful Soup. I also use Python to perform tasks such as data collection and web scraping 
    with APIs.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
            <BioYear>2024</BioYear>
            Completed IBM&apos;s Developing AI Applications with Python and Flask
          </BioSection> 
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this mini course, I learned how to apply basic Python skills for developing Artificial Intelligence (AI) 
    enabled applications. In the hands-on project I assume the role of a developer and perform tasks including:
    Develop functions and application logic, Exchange data using IBM Watson AI libraries, Write unit tests, and 
    Package the application for distribution. I demonstrated my foundational Python skills by employing different 
    techniques to develop web applications and AI powered solutions.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
          <BioYear>2024</BioYear>
            Completed IBM&apos;s Django Application Development with SQL and Databases
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Working with databases is a key skill for developers, especially those in Back-End, Full Stack, and DevOps roles.
    In this course, I learned the fundamentals of relational databases and how to access them from applications.
    Some of the essential application development tasks include accessing, processing, and presenting data. 
    Data is stored in various databases, either on-premise or on the cloud, and as a developer I learned how to 
    talk to them via programming languages. In this course, I learn about foundational database concepts, and 
    basics of SQL.In addition to SQL, I discovered how Object-Relational Mapping (ORM) allows you to use 
    Object-Oriented Programming (OOP) languages like Python to work with databases. I gained full-stack Django 
    skills by creating a Django web app to persist, process, and present data. I get hands-on experience 
    deploying my Django web app on the cloud.
    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
          <BioYear>2024</BioYear>
            Completed IBM&apos;s Introduction to Containers w/ Docker, Kubernetes & OpenShift
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this beginner course on containers, I learned how to build cloud native applications using current 
    containerization tools and technologies such as Docker, container registries, Kubernetes, Red Hat, OpenShift,
    and Istio. Also I learned how to deploy and scale applications in any public, private, or hybrid cloud.  

    </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
        <BioSection>
          <BioYear>2024</BioYear>
            Completed IBM&apos;s Application Development using Microservices and Serverless
          </BioSection>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    In this course, I learned how to create microservices using various methodologies.
    Rather than building large applications, known as monoliths, that perform all the functionality, 
    microservices break down larger applications into smaller pieces that are independently maintainable
    and scalable, providing a host of benefits. This architecture is now used in the largest software 
    organizations in the world, because it provides cost benefits, team autonomy, and other advantages.  
    In the hands-on lab, I created REST APIs using Python and Flask. I learned the basics of Serverless 
    applications, and how to run these type of applications on the IBM Cloud Code Engine.  

    </AccordionPanel>
          </AccordionItem>

          </Accordion>
          
         
          
          
          
          
          
         
                 
              
         
          
          
        
        </Section>
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
            Skills
          </Heading>
          <Paragraph>
          <Link>
              Backend Skills
          </Link>{' '} Python, Django, Node js, Express, PostgreSQL, MySQL, SQLite, MongoDB, RESTful APIs,  JWT (JSON Web Tokens) or OAuth
          </Paragraph>
          <Paragraph>
          <Link>
              Frontend Skills
          </Link>{' '} Javascript, React Js, Next js, HTML5, CSS3, Redux, SASS, Bootstrap, Material UI, Tailwind CSS, jQuery.
          </Paragraph>
          <Paragraph>
          <Link>
              Other Skills
          </Link>{' '} Web Scraping, Testing and Debuging, Git, Github, Naitive Cloud applications, Containerization and orchesteration and more
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
