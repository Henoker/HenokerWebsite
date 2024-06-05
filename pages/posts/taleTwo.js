import { Container, Badge, Heading, Text} from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import {
    ListItem,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'
import { CopyBlock,dracula } from "react-code-blocks";
import { Divider } from '@chakra-ui/react'

const TaleTwo = () => {
  return (
    <Layout title="Data Structures">
      <Container>
        <Title>
          Data Structures <Badge>2024</Badge>
        </Title>
        <Heading>
        Data structures in Python and JavaScript 
        </Heading>
        <WorkImage src="/images/scamper.png" alt="scamper" />
        <Paragraph> 
        Data structures are the fundamental building blocks of any programming language, providing a systematic
        way to organize, manage, and store data for efficient access and modification. Whether you&rsquo;re a 
        seasoned developer or just starting out, a solid grasp of data structures is crucial for writing 
        optimized and maintainable code.

        In essence, data structures are specialized formats for organizing and storing data. They enable you to
        perform complex operations like searching, sorting, and data manipulation with ease and efficiency. 
        From simple arrays and lists to more complex constructs like trees and graphs, each data structure has 
        unique properties that make it suitable for specific types of tasks. In this article, I&rsquo;ll be 
        comparing the most common data structures in Python and JavaScript, highlighting their similarities
        and differences.
        </Paragraph>
        <Paragraph p={4}>
        <OrderedList>
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Lists (Python) vs. Arrays (JavaScript):</Text>  In Python Lists are an ordered, mutable collection of items.
          Also, In JavaScript Arrays are also an ordered, mutable collection of items. Here are some examples of
          each:
        </ListItem>
        <CopyBlock 
text={`# Python    
my_list = [1, 2, 3, 4]`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        <Divider p={4} />
        <CopyBlock 
text={`#JavaScript    
let myArray = [1, 2, 3, 4];`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common List Methods in Python:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>append()</Text> :Adds an item to the end of the list.</ListItem>
        <ListItem><Text as='b'>extend()</Text> :Extends the list by appending elements from an iterable.</ListItem>
        <ListItem><Text as='b'>insert()</Text> :Inserts an item at a given position.</ListItem>
        <ListItem><Text as='b'>remove()</Text> :Removes the first occurrence of a value.</ListItem>
        <ListItem><Text as='b'>pop()</Text> :Removes and returns the item at the given position.</ListItem>
        <ListItem><Text as='b'>sort()</Text> :Sorts the list in place.</ListItem>
        <ListItem><Text as='b'>reverse()</Text> :Reverses the list in place.</ListItem>
        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <CopyBlock 
text={`my_list = [1, 2, 3]
my_list.append(4)  # [1, 2, 3, 4]
my_list.insert(1, 1.5)  # [1, 1.5, 2, 3, 4]
my_list.pop()  # [1, 1.5, 2, 3]
my_list.remove(1.5)  # [1, 2, 3]
my_list.sort()  # [1, 2, 3]
my_list.reverse()  # [3, 2, 1]
`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
         <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common List Methods in Javascript:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>push()</Text> :Adds an item to the end of the array like Python list append method.</ListItem>
        <ListItem><Text as='b'>concat()</Text> :Merges two or more arrays.</ListItem>
        <ListItem><Text as='b'>splice()</Text> :Adds/Removes items to/from an array.</ListItem>
        <ListItem><Text as='b'>pop()</Text> :Removes the last item of an array.</ListItem>
        <ListItem><Text as='b'>sort()</Text> :Sorts the elements of an array.</ListItem>
        <ListItem><Text as='b'>reverse()</Text> :Reverses the array in place.</ListItem>
        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <CopyBlock 
text={`let myArray = [1, 2, 3];
myArray.push(4);  // [1, 2, 3, 4]
myArray.splice(1, 0, 1.5);  // [1, 1.5, 2, 3, 4]
myArray.pop();  // [1, 1.5, 2, 3]
myArray.splice(myArray.indexOf(1.5), 1);  // [1, 2, 3]
myArray.sort((a, b) => a - b);  // [1, 2, 3]
myArray.reverse();  // [3, 2, 1]
`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        
       
        
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

export default TaleTwo
