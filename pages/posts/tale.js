import { Container, Badge, Heading, Text} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {
    ListItem,
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
          <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Variable Naming Conventions:</Text>  While Python typically follows the snake_case convention for 
          variable and function names, JavaScript prefers camelCase. This difference in naming conventions is 
          essential for maintaining code readability and consistency.
        </ListItem>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Control Flow:</Text>  WBoth languages support similar control flow structures, including loops and 
          conditionals. For example, the while loop behaves similarly in both Python and JavaScript, executing 
          its body until the condition becomes false.
        </ListItem>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Array Iteration:</Text> JavaScript provides handy methods like forEach() and map() for iterating over 
          arrays, akin to Python&rsquo;s list comprehensions. These methods simplify the process of working with 
          arrays and make code more expressive.
        </ListItem>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Keyword this vs. self:</Text> Both languages use a keyword to reference the current object within a 
          class or method. In Python, it&rsquo;s self, while in JavaScript, it&rsquo;s this. Despite the 
          difference in syntax, their functionality remains similar..
        </ListItem>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Superclass Invocation:</Text> JavaScript introduces the super() function for calling methods from the 
          superclass within a subclass. While similar to Python&rsquo;s super() method, JavaScript&rsquo;s 
          implementation is more implicit in its behavior.
        </ListItem>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Classes and Inheritance:</Text> JavaScript classes share many similarities with Python classes, allowing for
          the creation of objects with methods and attributes. However, JavaScript classes can only inherit from a 
          single superclass, unlike Python&rsquo;s multiple inheritance capability.
        </ListItem>
        </OrderedList>
        </Paragraph>
        <Paragraph>
        <Heading>
        Conclusion
        </Heading>
        In conclusion, while Python and JavaScript have their own distinct syntax and features, they share many 
        similarities and serve as powerful tools for solving a wide range of programming challenges. Whether 
        you&rsquo;re building web applications, data science projects, or anything in between, mastering these 
        two languages opens up a world of possibilities in the realm of software development.   
        </Paragraph>     
        
      </Container>
    </Layout>
  )
}

export default Tale
