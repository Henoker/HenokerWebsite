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
        <Paragraph p={4}>
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
        language='python'
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
        language='javascript'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          String Manipulation:</Text>  Strings are fundamental data types in both languages, supporting various 
          operations such as concatenation and interpolation. Here&rsquo;s an example demonstrating string 
          concatenation in Python and JavaScript:
        </ListItem>
        <CopyBlock 
        text={`# Python    
message = "Hello, " + "world!"`
        }
        language='python'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 

        <Divider p={4} />

        <CopyBlock 
        text={`# JavaScript    
let message = "Hello, " + "world!";`
        }
        language='python'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Object Declaration and Access:</Text>  Objects play a crucial role in both Python and JavaScript,
          serving as containers for key-value pairs. They are declared using curly braces {} and accessed using 
          dot notation. Here&rsquo;s how it&rsquo;s done in both languages:
        </ListItem>
        <CopyBlock 
        text={`# Python    
person = {'name': 'John', 'age': 30}
print(person['name'])  # Output: John`
        }
        language='python'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 

        <Divider p={4} />

        <CopyBlock 
        text={`# JavaScript    
const person = { name: 'John', age: 30 };
console.log(person.name); // Output: John`
        }
        language='javascript'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 
                <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Function Definitions:</Text>  Functions are vital building blocks in programming, and both Python and 
          JavaScript offer various ways to define them. Let&rsquo;s compare the syntax of defining a simple 
          function in both languages:
        </ListItem>
        <CopyBlock 
text={`# Python    
def greet(name):
    return "Hello, " + name`
        }
        language='python'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 

        <Divider p={4} />

        <CopyBlock 
        text={`# JavaScript    
function greet(name) {
    return "Hello, " + name;
}`
        }
        language='javascript'
        showLineNumbers='true'
        wrapLines 
        theme={dracula} 
        /> 
        </OrderedList>
        </Paragraph>
        <Paragraph p={4} >
        <Heading p={3}>
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
