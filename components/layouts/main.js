/* eslint-disable react/prop-types */
import Head from "next/head";
import {Box,Container} from '@chakra-ui/react';
import dynamic from "next/dynamic";
import VoxelDogLoader from '../voxel-dog-loader'

import NavBar from "../navbar";

// const NavBar = dynamic(() => import('../navbar'), {
//     ssr: false,
// });

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
    ssr: false,
    loading: () => <VoxelDogLoader />
})

const Main = ({ children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Henock Tesfatsion - HomePage</title>
            </Head>
            <NavBar path={router.asPath}/>
              
            <Container maxW="container.md" pt={14}>
            <LazyVoxelDog />

            {children}

            
      </Container>
            
        </Box>
    )
}
export default Main