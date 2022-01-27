import React from "react"
import {
  Box,
  Container,
  Heading,
  Grid,
  Link,
  Text,
  Image,
  Button,
} from "@chakra-ui/react"
import joinGroup from "../assets/joinGroup.png"
import findEvent from "../assets/findEvent.png"
import startGroup from "../assets/startGroup.png"
export default function ItWorks() {
  return (
    <Box>
      <Container maxWidth="container.xl" my={20}>
        <Heading align="center" as="h3" size="lg" pb={2}>
          How Meetup works
        </Heading>
        <Box align="center" maxW="700px" mx="auto" pb={10}>
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box mx="auto" align="center">
            <Image
              w="100%"
              boxSize="160px"
              objectFit="contain"
              src={joinGroup}
              alt="brand"
            />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.400" pb="4">
                  Join a group
                </Box>
              </Link>
            </Heading>
            <Text>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </Text>
          </Box>
          <Box mx="auto" align="center">
            <Image
              w="100%"
              boxSize="160px"
              objectFit="contain"
              src={findEvent}
              alt="barand"
            />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.400" pb="4">
                  Find an event
                </Box>
              </Link>
            </Heading>
            <Text>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </Text>
          </Box>
          <Box mx="auto" align="center">
            <Image
              w="100%"
              boxSize="160px"
              objectFit="contain"
              src={startGroup}
              alt="barand"
            />
            <Heading as="h5" size="md">
              <Link>
                <Box color="blue.400" pb="4">
                  Start a group
                </Box>
              </Link>
            </Heading>
            <Text>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </Text>
          </Box>
        </Grid>
        <Box>
          <Box align="center" mt={16}>
            <Button
              _hover={{ opacity: "0.8" }}
              bg="blue.400"
              color="white"
              fontWeight="normal"
              size="md"
            >
              Join meetup
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
