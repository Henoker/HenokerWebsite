import { Container, Link, Badge, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import psect from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="auction">
            <Container>
                <Title>
                    E-Commerce Auction APP <Badge>2022</Badge>
                </Title>
                <psect>
                As part of my harvard CS50 course, I was expected to to Design an eBay-like e-commerce auction site that will allow registered users to post auction listings, place bids on listings, comment on those listings, and add listings to a watchlist. Users are able to visit a page that displays a list of all listing based on categories.
                </psect>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/Henoker/Project_2">
                        https://github.com/Henoker/Project_2 <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Mac/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stacks</Meta>
                        <span>Django, JavaScript, SQLite</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/project2.png" alt="auction"/>
            </Container>
        </Layout>
    )
}

export default Work