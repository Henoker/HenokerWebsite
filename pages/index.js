import NextLink from 'next/link'
import { Box, Container, Heading, useColorModeValue, Image, Button } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';



const Page= ()=>{
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
             mb="6" p="3" mt="18" textAlign="center">
            Hello, I&apos;m a full-stack developer based in Nairobi, Kenya!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Henock Tesfatsion
                    </Heading>
                    <div>Full Stack Web Developer</div>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} borderStyle="solid" 
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
                I am a Full Stack Software and Web Developer. 
                I specialize in MongoDB, Express, React, Node Js, 
                Python Django React, and Postgres Projects.
                In my spare time I enjoy DIY, gaming and building my own projects. 
                My preferred tools are Python, react/next.js.
            </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
                    <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                        My Portfolio
                    </Button>

                </NextLink>

            </Box>

        </Section>
           
        </Container>
        
    )
}

export default Page