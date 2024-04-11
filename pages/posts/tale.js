import { Container, Badge, Heading, Text} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {
    ListItem,
    UnorderedList,
    OrderedList,
  } from '@chakra-ui/react'
import { CopyBlock,dracula } from "react-code-blocks";
import { Divider } from '@chakra-ui/react'

const Tale = () => {
  return (
    <Layout title="scamper">
      <Container>
        <Title>
          Tale <Badge>2024</Badge>
        </Title>
        <Heading>
        The Tale of Two Powerful Programming Languages: Python and JavaScript
        </Heading>
        <WorkImage src="/images/scamper.png" alt="scamper" />
        <Paragraph> 
        In the vast landscape of programming languages, Python and JavaScript stand out as two of the most 
        influential and widely-used languages. Each has its own strengths, weaknesses, and unique features 
        that make them indispensable tools for developers across the globe. Let&rsquo;s delve into the comparison
        and contrast of these two powerhouses, exploring their syntax, features, and usage scenarios.
        </Paragraph>
        <Paragraph>
        <Heading>
        Dynamic Typing
        </Heading>
        <OrderedList>
            <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Dynamic Typing:</Text>  Both Python and JavaScript embrace dynamic typing, allowing variables to be 
          assigned without specifying their types explicitly. This flexibility streamlines the coding process 
          and enables rapid prototyping. For instance, consider the following Python and JavaScript snippets:
        </ListItem>
        <CopyBlock 
        text={`# Python    
x = 5   
x = "Hello"`
        }
        language='javascript'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 

        <Divider p={4} />

        <CopyBlock 
        text={`# JavaScript    
let x = 5;   
x = "Hello";`
        }
        language='python'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Vendor Management Woes:</Text> Identifying suitable translators for projects was akin to searching for a needle
           in a haystack. Contact information was scattered across spreadsheets, leading to missed deadlines and 
           lost opportunities. Furthermore, assessing translators skills and experience was challenging, often 
           leading to mismatches between project requirements and translator capabilities.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Opaque Progress Tracking:</Text> Project and job progress resembled a black box, with little visibility for 
            project managers and management. This lack of transparency made it difficult to intervene or make 
            informed decisions in a timely manner.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Quality Assurance Quandaries: </Text> Quality assurance was reactive at best, relying on intuition rather 
           than structured data. PMs had to rely on their gut feeling, leading to inconsistencies and 
           uncertainties in project outcomes.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Record Management Nightmares: </Text> Managing accounts payable to vendors and invoice collections from 
           clients was a manual, error-prone process. Calculations had to be done externally, leaving room for 
           errors and discrepancies.
        </ListItem>
        </OrderedList>
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/CSSframeworks.jpg" alt="scamper" />
        <Heading>
        The EPMS Solution
        </Heading>
        EPMS emerged as a comprehensive solution to these challenges, leveraging cutting-edge technology 
        and a user-centric design approach:
        <OrderedList>
          <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Streamlined Project Management:</Text> EPMS provides a centralized platform for end-to-end 
            project management, from client requirements to vendor assignments. With full CRUD functionality, 
            managing translation and localization projects has never been easier.
          </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Efficient Vendor Management:</Text> The platform offers a robust vendor management system, 
            complete with detailed profiles highlighting translators skills, experience, and past performance 
            ratings. This empowers project managers to make informed decisions when assigning tasks, ensuring
            the right person for the job every time.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Transparent Progress Tracking: </Text> EPMS introduces transparency into project workflows, 
            offering real-time progress tracking for both projects and individual tasks. Project managers and 
            management alike can monitor project statuses, intervene when necessary, and make data-driven decisions
            to ensure timely delivery.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Standardized Quality Assurance: </Text> Quality assurance is no longer a shot in the dark with 
            EPMS. Historical quality data is stored in a structured fashion, enabling project managers to make
            informed decisions based on past performance. This ensures consistent quality across projects and 
            improves overall client satisfaction.
        </ListItem>
        <ListItem>
            <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Automated Record Management:</Text> EPMS automates accounts payable calculations, invoice 
            generation, and payment collections. Integration with financial data eliminates manual errors and 
            streamlines the invoicing process, saving time and reducing administrative overhead.
        </ListItem>
        <ListItem>
        <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Insightful Analytics: </Text> EPMS provides comprehensive analytics through interactive 
            dashboards, offering insights into project revenue, costs, completed tasks, invoice and PO summaries,
            vendor ratings, and more. This empowers management to make informed decisions, optimize processes, 
            and drive business growth.
        </ListItem>
        </OrderedList>
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/fullstack.jpg" alt="scamper" />
        <Heading>
        Development Journey
        </Heading>
        EPMS was conceived and developed to address these pressing needs within our organization. Leveraging a 
        robust tech stack including Python with Django framework, Docker, Chart.js, WeasyPrint, and Django All 
        Auth, we embarked on a journey to create a platform that would revolutionize translation project 
        management.
        The features of EPMS were meticulously crafted to address specific pain points:
        <UnorderedList>
        <ListItem><Text as='b'>Translation and Localization Project Management capability</Text> With full CRUD functionality, project management becomes seamless and efficient.</ListItem>
        <ListItem><Text as='b'>Client Management app</Text>  Empowering users with full CRUD capability ensures effective client relationship management.</ListItem>
        <ListItem><Text as='b'>Vendor(Translators) Management app</Text> Detailed profiles and CRUD functionality enable accurate vendor selection and management.</ListItem>
        <ListItem><Text as='b'>Dashboard analytics using Chart.js</Text> Real-time insights provide a bird&rsquo;s eye view of project statuses and performance metrics.</ListItem>
        <ListItem><Text as='b'>PDF Invoice generation capability</Text> WeasyPrint integration automates invoice generation, streamlining financial processes.</ListItem>
        <ListItem><Text as='b'>PDF PO generation capability</Text> WeasyPrint facilitates the creation of purchase orders, enhancing vendor management.</ListItem>
        <ListItem><Text as='b'>Vendor Job Management app</Text> CRUD functionality ensures efficient assignment and tracking of translation tasks.</ListItem>
        <ListItem><Text as='b'>Client Order Management app</Text> Seamless order processing is achieved through intuitive CRUD capabilities.</ListItem>
        <ListItem><Text as='b'>Rating system for vendors</Text>  Industry-specific criteria ensure accurate assessment and selection of translators.</ListItem>
        </UnorderedList>
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/Responsive.jpg" alt="scamper" />
        <Heading>
        Conclusion
        </Heading>
        In conclusion, EPMS has revolutionized translation project management, addressing longstanding challenges
        and inefficiencies with innovative solutions. By providing a centralized platform, transparent workflows,
        and insightful analytics, EPMS has empowered organizations to streamline their operations, improve 
        quality, and enhance client satisfaction. As we continue to embrace digital transformation, EPMS stands
        as a shining example of how technology can drive positive change in the language services industry.   
        </Paragraph>     
        
      </Container>
    </Layout>
  )
}

export default Tale
