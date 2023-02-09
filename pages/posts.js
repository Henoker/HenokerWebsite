import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { GridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import thumbnailEPMS from "../public/images/EPMS.png";



const Posts = ()=> (
    <Layout title="posts">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem title="Why EPMS?" thumbnail={thumbnailEPMS}/>
                </SimpleGrid>
            </Section>

        </Container>

    </Layout>
)

export default Posts

