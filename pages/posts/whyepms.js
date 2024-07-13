import { Container, Badge, Heading, Text} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {
    ListItem,
    UnorderedList,
    OrderedList,
  } from '@chakra-ui/react'

const Whyepms = () => {
  return (
    <Layout title="scamper">
      <Container>
        <Title>
          EPMS <Badge>2024</Badge>
        </Title>
        <Heading>
        Revolutionizing Translation Project Management: A Dive into EPMS
        </Heading>
        <WorkImage src="/images/EPMS.png" alt="EPMS" />
        <Paragraph> 
        In today&rsquo;s globalized world, effective communication across languages is paramount for businesses 
        aiming to expand their reach. However, managing translation projects for Ethiostar Translation & localization
        company in an efficient manner has often been a daunting task, marked by scattered emails, disparate 
        spreadsheets, and a lack of standardized processes. That was until I developed the End-to-End Project 
        Management System (EPMS) - a game-changer for translation and localization workflows of the company.
        </Paragraph>
        <Paragraph>
        <Heading>
        Understanding the Challenge
        </Heading>
        Before EPMS came into play, the scenario at our organization mirrored that of many others in the industry. 
        Clients, along with our in-house and freelance translators, struggled with a lack of standardization in 
        project management. Emails and Excel sheets were the primary tools, leading to a host of issues:
        <OrderedList>
            <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold">Fragmented Project Management:</Text> Without a centralized database, tracking projects was akin to 
           navigating a maze blindfolded. Requests would get lost, additional information needed to be constantly 
           reattached, and project statuses were often unclear.
        </ListItem>
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
        <WorkImage src="/images/EthioHome.png" alt="scamper" />
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
        <WorkImage src="/images/InvoiceCreation.png" alt="scamper" />
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
        <WorkImage src="/images/InvoiceView.png" alt="scamper" />
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

export default Whyepms
