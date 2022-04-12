import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
      5E LTD IT  <Badge>2017 - 2018</Badge>
      </Title>
      <P>
      Technician Repairing Computers 
      </P>
      <P>
        During this role I installed several new software for the organisation
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Computer Hardware</Meta>
          
        </ListItem>
      </List>

      

    
      <WorkImage src="/images/works/Technician-pic.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
