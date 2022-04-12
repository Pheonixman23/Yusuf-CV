import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a System Administrator based in London!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Yusuf Mohamed
          </Heading>
          <p>Technology Craftsman ( Admin / Developer / Architect )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/Yusuf.jpeg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Yusuf is a system admin and e-commerces admin assistant based in London with a
          passion for technology and digital products. He has a passion
          for new and emerging tech products, from Microsoft to open souce project. When not online, he loves
          honing his skill for fitness. Currently, he is seeking  an open opportunity in tech!
    
      
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1997</BioYear>
          Born in Mogadishu, Somalia.
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2014 </BioYear>
          Completed Drayton Manor High school (8 GCSE’s including Math and English)
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2015 - 2016</BioYear>
          Hammersmith College 90 credit diploma in Physical Education
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2016-2018</BioYear>
          Selby Centre- System Support 
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2017-2018 </BioYear>
          Selby Centre - MCSA 2012 (Microsoft certified solutions associate) (Microsoft Certified Professional) 
        </BioSection>
        <br/>
        <BioSection>
          <BioYear>2021</BioYear>
          NVQ Level 2 Railway Maintenance
         </BioSection>
         <br/>
         <BioSection>
          <BioYear>2021</BioYear>
          Railway PTS course 
         </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Running, Football {' '}
         fitness
          , Spoken word,{' '}
          Reading books
          , Friends
        </Paragraph>
      </Section>

     
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
