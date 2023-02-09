import { Container, Link, Badge, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import psect from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="ephie">
            <Container>
                <Title>
                    EPHIE <Badge>2023</Badge>
                </Title>
                <psect>
                This is a react/next js restaurant landing page that is designed for my clients in Fremont, California. The app utilizes Google app engine API to handle customer booking requests.
                </psect>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.ephiecuisine.com/">
                        https://www.ephiecuisine.com/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Mac/Linux/Android/IOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stacks</Meta>
                        <span>React/Next Js, HTML, CSS, Google App Engine</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/EPHIE.png" alt="ephie"/>
                <WorkImage src="/images/EPHIE2.png" alt="ephie2"/>
            </Container>
        </Layout>
    )
}

export default Work