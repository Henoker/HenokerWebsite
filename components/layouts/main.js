import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';
import Navbar from "../Navbar";
import Mainlottie from '../mainlottie';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Henock's homepage" />
        <meta name="author" content="Henock Tesfatsion" />
        <meta name="author" content="henoker" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="twitter:title" content="Henock Tesfatsion" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Henocktsion" />
        <meta name="twitter:creator" content="@Henocktsion" />
        <meta name="twitter:image" content="https://www.henoker.com/card.png" />
        <meta property="og:site_name" content="Henock Tesfatsion" />
        <meta name="og:title" content="Henock Tesfatsion" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.henoker.com/card.png" />
        
        <title>Henock Tesfatsion - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelDog /> */}
        <Mainlottie />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main