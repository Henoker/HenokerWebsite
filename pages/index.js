import { Box, Container, Heading, useColorModeValue, Image } from "@chakra-ui/react";


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
           
        </Container>
        
    )
}

export default Page