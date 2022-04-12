import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
      Orion Online <Badge>2021</Badge>
      </Title>
      <P>
      Worked as an Admin assistant mostly working on Microsoft excel, creating drafts for eBay, Amazon products and uploading them as well.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Ebay/ Amazon/ Excel</span>
        </ListItem>
     
      </List>

      <WorkImage src="/images/works/ecommerce-Ebay.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ecommerce-Amazon.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
