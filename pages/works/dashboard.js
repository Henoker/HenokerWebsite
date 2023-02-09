import { Container, Link, Badge, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import psect from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="dashboard">
            <Container>
                <Title>
                    React DashBoard APP <Badge>2022</Badge>
                </Title>
                <psect>
                This is a react dashboard app modified from zainkeepscode tutorial using SCAMPER methodology. I have used React, Material UI, framer motions and react-apex chart for this project.
                </psect>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>website</Meta>
                        <Link href="https://henoker.github.io/dashboard/">
                        https://henoker.github.io/dashboard/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/Mac/Linux/Android/IOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stacks</Meta>
                        <span>React, Material UI, Chart js</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/ReactDashboard.png" alt="dashboard"/>
            </Container>
        </Layout>
    )
}

export default Work