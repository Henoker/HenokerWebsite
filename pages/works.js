import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbnailproject2 from "../public/images/project2.png";
import thumbnailEPMS from "../public/images/EPMS.png";
import thumbnailephie from "../public/images/EPHIE.png";
import thumbnaildashboard from "../public/images/ReactDashboard.png";
import Layout from "../components/layouts/article";

const Works = ()=> {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works            
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="epms" title="EPMS Project Management App" thumbnail={thumbnailEPMS}>
                    A Project Management App With PDF Invoice Generation Capability
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="ephie" title="Restaurant Landing Page" thumbnail={thumbnailephie}>
                    A Restaurant landing page with React/nextjs
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="auction" title="E-commerce Auction App" thumbnail={thumbnailproject2}>
                    An E-commerce Auction App
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="dashboard" title="A React Dashboard" thumbnail={thumbnaildashboard}>
                    A React Dashboard App
                    </WorkGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works