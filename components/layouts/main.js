import Head from "next/head";
import {Box,Container} from '@chakra-ui/react';
import { WorkImage} from "../work";

import NavBar from "../navbar";

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Henock Tesfatsion - HomePage</title>
            </Head>
            <NavBar path={router.asPath}/>
              
                <Container maxW="container.md" pt="14">
                <WorkImage src="/images/mycode.gif" alt="herogif"/>
                    {children}
                </Container>
            
        </Box>
    )
}
export default Main