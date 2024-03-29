import { Container, Badge, Heading } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'

const Scamper = () => {
  return (
    <Layout title="scamper">
      <Container>
        <Title>
          SCAMPER <Badge>2023</Badge>
        </Title>
        <Heading>
        The Application of SCAMPER Technique in Web Development and Software Development
        </Heading>
        <WorkImage src="/images/scamper.png" alt="scamper" />
        <Paragraph> 
         In the ever-evolving landscape of web and software development, creativity and adaptability
         are key. One technique that has proven to be invaluable in fostering innovation is SCAMPER. 
         Originally designed as a brainstorming tool, SCAMPER can be adapted seamlessly into the realm 
         of learning programming languages and creating unique projects.The technique works as a facilitating
         tool for generating new ideas and problem-solving processes through seven different types of prompts.
         The name of the method itself, SCAMPER, is an acronym for these seven prompts: 
         Substitute, Combine, Adapt, Modify/Magnify, Put to another use, Eliminate, and Reverse/Rearrange.
         In this article, we will explore how each element of SCAMPER can be applied to this field, offering 
         developers a powerful framework for ideation and project execution.
        </Paragraph>
        <Paragraph>
        <Heading>
         Substitute
        </Heading>
        Substitution is a powerful concept in programming. It encourages developers to think beyond the 
        standard tools and technologies. Substitution is all about changing the inputs i.e Color ,style, 
        tools, technologies, frameworks etc. For instance, if a tutorial demonstrates a project using HTML, 
        CSS, and JavaScript, consider substituting standard CSS with a powerful framework like Tailwind 
        CSS or using SCSS to enhance styling. This can lead to more efficient code and a distinct visual 
        appeal. Also, You can replace the javascript with react or next js or vice versa. Also, You can 
        MySQL based database with PostgreSql or non-relational database like Mongo Db. Substitution is all 
        about replacing the inputs of web or app development.  
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/CSSframeworks.jpg" alt="scamper" />
        <Heading>
        Combine
        </Heading>
        Combining different technologies or approaches is a hallmark of innovation. If you have learned 
        to build a frontend dashboard using a specific framework, consider combining it with a backend 
        built on PHP, Django, or Express. This integration can open up a world of possibilities, from 
        interactive user experiences to seamless data management. You can combine two Youtube tutorials or 
        web and app development courses and create some new project for your portfolio that you can call your own. 
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/fullstack.jpg" alt="scamper" />
        <Heading>
        Adapt
        </Heading>
        Adaptation is crucial in a constantly changing tech environment. If a tutorial focuses on creating 
        an unresponsive application, challenge yourself to adapt it into a responsive one. This not only 
        enhances user experience but also showcases your versatility as a developer. Additionally, consider
        adding new features or components to an existing project to elevate its functionality and appeal. For
        example, if you were learning about a frontend project on how to make a landing page using any 
        programming language or framework and the contact page do not have a backend functionality, you can add
        on it a backend functionality using Google App Engine in order to store the contact message into Google
        Spreadsheet.   
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/Responsive.jpg" alt="scamper" />
        <Heading>
        Modify
        </Heading>
        Modifying elements of a project allows you to put your unique stamp on it. This can range from 
        altering color schemes and fonts to restructuring the code for better efficiency. Do not shy away 
        from making changes that align with your vision and goals for the project. Here you can change a 
        website that is made with css flex approach into grid one. You can change a website made with semantic
        HTML into non-semantic one or vice versa.   
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/brandColors.jpg" alt="scamper" />
        <Heading>
        Put to Another Use
        </Heading>
        Thinking outside the box is a hallmark of successful developers. If you have learned to create a 
        project for a specific purpose, consider how it could be repurposed. For example, a tool designed
        for general invoice generation could be adapted for the creation of purchase orders. This not only 
        demonstrates your resourcefulness but also expands the utility of your creations. For example there 
        is a diabetis tool website which is designed using HTML, CSS and JavaScript, You can use the 
        same javaScript logic to make a rating tool for another purposes.      
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/poinvoice.jpg" alt="scamper" />
        <Heading>
        Eliminate
        </Heading>
        Simplicity and efficiency are often at the heart of great software. Applying the Eliminate principle
        involves stripping away unnecessary features or complexities. Streamlining your project can lead to 
        faster load times, better user experiences, and cleaner code. You can create a new look for your 
        website by eliminating unnecessary features, divs or components.  
        </Paragraph>
        <Paragraph>
        <WorkImage src="/images/UiTree.jpg" alt="scamper" />
        <Heading>
        Reverse
        </Heading>
        Turning things on their head can lead to fresh perspectives. Rearrange the order of components or
        redesign layouts to breathe new life into a project. This can lead to more intuitive navigation and
        improved user engagement. You can arrange the website cascading flow in new a new manner. This will 
        gives you a new fresh look in your design. 
        </Paragraph>
        <Paragraph>
        By integrating SCAMPER into your learning process and project development, you unlock a world of 
        creative potential. Embrace each element of this technique to not only learn new programming 
        languages but also to craft unique, innovative projects that set you apart in the world of web 
        and software development. Challenge conventions, adapt to change, and let your creativity flourish. 
        The possibilities are boundless. Happy coding! 
        </Paragraph>
        
      </Container>
    </Layout>
  )
}

export default Scamper
