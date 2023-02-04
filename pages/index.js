import { Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";

const Page= ()=>{
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} mb={6} align="center">
            Hello, I&apos;m a full-stack developer based in Nairobi, Kenya!
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Henock Tesfatsion
                    </Heading>
                    <p>Full Stack Web Developer</p>
                </Box>
            </Box>
           
        </Container>
        
    )
}

export default Page