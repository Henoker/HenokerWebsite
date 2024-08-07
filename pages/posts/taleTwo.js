import { Container, Badge, Heading, Text, Box} from '@chakra-ui/react'
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
        <WorkImage src="/images/dataStructures.png" alt="scamper" />
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
        <OrderedList >
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Lists (Python) vs. Arrays (JavaScript):</Text>  In Python Lists are an ordered, mutable collection of items.
          Also, In JavaScript Arrays are also an ordered, mutable collection of items. Here are some examples of
          each:
        </ListItem>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`# Python    
my_list = [1, 2, 3, 4]`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        
        /> 
        </Box>
        <Divider p={4} />
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`#JavaScript    
let myArray = [1, 2, 3, 4];`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
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
        <Box my={4} mx="auto" maxW="800px">
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
        </Box> 
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
        <Box my={4} mx="auto" maxW="600px">
        <CopyBlock 
text={`let myArray = [1, 2, 3];
myArray.push(4);  // [1, 2, 3, 4]
myArray.splice(1, 0, 1.5);  // [1, 1.5, 2, 3, 4]
myArray.pop();  // [1, 1.5, 2, 3]
myArray.splice(myArray.indexOf(1.5), 1); 
//[1, 2, 3]
myArray.sort((a, b) => a - b);  // [1, 2, 3]
myArray.reverse();  // [3, 2, 1]
`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        align="center" justify="center"
        /> 
        </Box>
         <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Tuples (Python) vs. Arrays (JavaScript):</Text>  In Python Tuples An ordered, immutable collection of items.
          JavaScript does not have a direct equivalent to Python&apos;s tuples, but arrays can be treated as immutable
          by avoiding methods that modify them in place or by using methods that return new arrays.
        </ListItem>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`# Python    
       my_tuple = (1, 2, 3)`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
        <Divider p={4} />
        <CopyBlock 
text={`#JavaScript    
const myArray = [1, 2, 3];
// myArray[0] = 10  // Possible but to treat as 
//immutable, avoid such assignments
const newArray = myArray.concat([4]); 
// [1, 2, 3, 4]`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        <ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Dictionaries (Python) vs. Objects (JavaScript):</Text>  In Python Dictionaries An unordered collection of key-value pairs.
          Also, In JavaScript objects are also An unordered collection of key-value pairs. Here are some examples of
          each:
        </ListItem>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`# Python    
my_dict = {
'key1':'value1',
'key2':'value2'
}`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
        <Divider p={4} />
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`#JavaScript    
let myObject = {
'key1': 'value1', 
'key2': 'value2'
}`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common Dictionary Methods in Python:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>get()</Text> :Returns the value for a key if it exists.</ListItem>
        <ListItem><Text as='b'>keys()</Text> :Returns a view object of the dictionary&apos;s keys.</ListItem>
        <ListItem><Text as='b'>values()</Text> :Returns a view object of the dictionary&apos;s values.</ListItem>
        <ListItem><Text as='b'>items()</Text> :Returns a view object of the dictionary&apos;s key-value pairs.</ListItem>
        <ListItem><Text as='b'>update()</Text> :Updates the dictionary with the key-value pairs from another dictionary or iterable.</ListItem>        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <CopyBlock 
text={`my_dict = {
        'key1': 'value1', 
        'key2': 'value2'
        }
my_dict['key3'] = 'value3'  
# {
#'key1': 'value1', 
#'key2': 'value2', 
#'key3': 'value3'
#}
value = my_dict.get('key1')  # 'value1'
keys = my_dict.keys()  
# dict_keys(['key1', 'key2', 'key3'])
values = my_dict.values()  
# dict_values(['value1', 'value2', 'value3'])
items = my_dict.items()  
# dict_items([
#('key1', 'value1'), 
#('key2', 'value2'), 
#('key3', 'value3')])
my_dict.update({'key4': 'value4'})  
# {
#'key1': 'value1', 
#'key2': 'value2',
#'key3': 'value3', 
#'key4': 'value4'
#}`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
         <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common object Methods in Javascript:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>Object.keys()</Text> :Returns an array of a given object&apos;s keys.</ListItem>
        <ListItem><Text as='b'>Object.values()</Text> :Returns an array of a given object&apos;s values.</ListItem>
        <ListItem><Text as='b'>Object.entries()</Text> :Returns an array of a given object&apos;s key-value pairs.</ListItem>
        <ListItem><Text as='b'>Object.assign()</Text> :Copies the values of all enumerable own properties from one or more source objects to a target object.</ListItem>        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`let myObject = {
        'key1': 'value1', 
        'key2': 'value2'
        };
myObject['key3'] = 'value3';  
// {
//'key1': 'value1', 
//'key2': 'value2',
// 'key3': 'value3'}
let value = myObject['key1'];  // 'value1'
let keys = Object.keys(myObject);  
// ['key1', 'key2', 'key3']
let values = Object.values(myObject);  
// ['value1', 'value2', 'value3']
let entries = Object.entries(myObject);  
// [['key1', 'value1'], 
//['key2', 'value2'], 
//['key3', 'value3']]
Object.assign(myObject, {'key4': 'value4'});  
// {
//'key1': 'value1', 
//'key2': 'value2', //'key3': 'value3', 
//'key4': 'value4'
//}`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>

<ListItem>
          <Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text" fontSize="2xl" fontWeight="extrabold"> 
          Sets (Python) vs. Sets (JavaScript):</Text>  In Python sets are an unordered collection of unique items.
          In JavaScript sets are also An unordered collection of unique items. Here are some examples of
          each:
        </ListItem>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`# Python    
my_set = {1, 2, 3, 4}`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
        <Divider p={4} />
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`#JavaScript    
let mySet = new Set([1, 2, 3, 4]);`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common sets Methods in Python:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>add()</Text> : Adds an element to the set.</ListItem>
        <ListItem><Text as='b'>remove()</Text> :Removes an element from the set.</ListItem>
        <ListItem><Text as='b'>union()</Text> :Returns a set containing the union of sets.</ListItem>
        <ListItem><Text as='b'>intersection()</Text> :Returns a set containing the intersection of sets.</ListItem>
        <ListItem><Text as='b'>difference()</Text> :Returns a set containing the difference of sets.</ListItem>        
        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`my_set = {1, 2, 3}
my_set.add(4)  # {1, 2, 3, 4}
my_set.remove(2)  # {1, 3, 4}
another_set = {3, 4, 5}
union_set = my_set.union(another_set) 
# {1, 3, 4, 5}
intersection_set=my_set.intersection(
another_set
)
# {3, 4}
difference_set = my_set.difference(
another_set
) 
# {1}
`
        }
        language='python'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
        </Box>
         <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Common sets Methods in Javascript:</Text>
        <UnorderedList>
        <ListItem><Text as='b'>add()</Text> :Adds an element to the set.</ListItem>
        <ListItem><Text as='b'>delete()</Text> :Removes an element from the set.</ListItem>
        <ListItem><Text as='b'>has()</Text> :Returns a boolean indicating whether an element exists in the set.</ListItem>
        <ListItem><Text as='b'>union()</Text> :There is no direct method; use the spread operator or forEach loop.</ListItem> 
        <ListItem><Text as='b'>intersection()</Text> :No direct method; use forEach loop and has method.</ListItem> 
        <ListItem><Text as='b'>difference()</Text> :No direct method; use forEach loop and has method.</ListItem>        
        </UnorderedList>
        <Divider p={4} />
        <Text fontSize="2xl" fontWeight="extrabold">Examples:</Text>
        <Box my={4} mx="auto" maxW="800px">
        <CopyBlock 
text={`let mySet = new Set([1, 2, 3]);
mySet.add(4);  // Set {1, 2, 3, 4}
mySet.delete(2);  // Set {1, 3, 4}
let anotherSet = new Set([3, 4, 5]);
let unionSet = new Set(
[...mySet,...anotherSet]
);
// Set {1, 3, 4, 5}
let intersectionSet = new Set(
[...mySet].filter(x => anotherSet.has(x))
); 
// Set {3, 4}
let differenceSet = new Set(
[...mySet].filter(x => !anotherSet.has(x))
); 
// Set {1}

`
        }
        language='javascript'
        showLineNumbers='false'
        wrapLines 
        theme={dracula} 
        /> 
       </Box>
        
        </OrderedList>
        
        </Paragraph>
        <Paragraph>
        <Heading>
        Conclusion
        </Heading>
        In conclusion, Lists in Python are similar to arrays in JavaScript but offer more methods and capabilities.
        Tuples in Python do not have a direct equivalent in JavaScript, but arrays can be treated immutably.
        Dictionaries in Python are similar to objects in JavaScript, with both serving as key-value stores.
        Sets in both languages offer similar functionalities, though JavaScript sets lack some built-in methods that Python sets provide directly.
        By understanding these similarities and differences, you can more effectively use these data structures across both languages..   
        </Paragraph>     
        
      </Container>
    </Layout>
  )
}

export default TaleTwo
