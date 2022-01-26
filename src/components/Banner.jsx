import React from "react"
import {
  Flex,
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
} from "@chakra-ui/react"
import brandLogo from "../assets/logo.png"
import illustration from "../assets/illustration.png"
import imageOne from "../assets/imageOne.jpg"
import imageTwo from "../assets/imageTwo.jpg"
import imageThree from "../assets/imageThree.jpg"

export default function Banner() {
  return (
    <>
      <header>
        <Flex align="center" justify="space-between" ml={10} mr={10} h="65px">
          <Box>
            <Image boxSize="100px" src={brandLogo} alt="brand" />
          </Box>
          <Box>
            <Button pr={3} colorScheme="gray.600" fontSize="m" variant="link">
              Log in
            </Button>
            <Button colorScheme="gray.600" fontSize="m" variant="link">
              Sign up
            </Button>
          </Box>
        </Flex>
      </header>
      {/* main punch line */}
      <Box>
        <Container maxWidth="container.xl">
          <Flex align="center" py="20">
            <Box>
              <Heading>
                <Box>Celebrating 20 years of real connections on Meetup</Box>
              </Heading>
              <Box mt={6} fontWeight="medium">
                Whatever you’re looking to do this year, Meetup can help. For 20
                years, people have turned to Meetup to meet people, make
                friends, find support, grow a business, and explore their
                interests. Thousands of events are happening every day—join the
                fun.
              </Box>
            </Box>
            <Box w="100%">
              <Image src={illustration} w="100%" alt="illustration"></Image>
            </Box>
          </Flex>
        </Container>
      </Box>
      {/* three boxes */}
      <Container maxWidth="container.xl" mt={10}>
        <Grid templateColumns="repeat(3, 1fr)">
          <Box>
            Make new friends
            <Image
              w="100%"
              borderRadius="lg"
              src={imageOne}
              alt="image three"
            />
          </Box>
          <Box>
            Explore the outdoors
            <Image
              w="100%"
              borderRadius="lg"
              src={imageTwo}
              alt="image three"
            />
          </Box>
          <Box>
            Connect over tech
            <Image
              w="100%"
              borderRadius="lg"
              src={imageThree}
              alt="image three"
            />
          </Box>
        </Grid>
      </Container>
      {/* pills */}
      <Container maxWidth="container.xl">
        <Flex flexWrap="wrap" justify="space-between" my={10}>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Boost your career
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Find your zen
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Get moving
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Share language + culture
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Read with friends
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Write together
          </Badge>
          <Badge
            borderRadius="3xl"
            px={4}
            py={2}
            mr={4}
            mb={4}
            textTransform="normal"
            color="ffffff"
            bg="blue.100"
          >
            Hone your craft
          </Badge>
        </Flex>
      </Container>
      {/* last header section */}
      <Container maxW="container.xl" mt="20">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Box>
            <Heading as="h3" size="lg" mb="7">
              What do you want to do?
            </Heading>
            <Flex align="center" w="100%">
              <Flex flexBasis="50%" w="100%" mr={2}>
                <FormControl>
                  <Box pos="relative">
                    <Input
                      pl={8}
                      placeholder="Search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top={3} left={2}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zzM2 8a6 6 0 1110.89 3.47614.817 4.817al 1 0 01-1.414 1.4141-4.816.4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Flex>
              <Flex flexBasis="50%" w="100%" mr={2}>
                <FormControl>
                  <Box pos="relative">
                    <Input
                      pl={8}
                      placeholder="Search for tennis"
                      type="text"
                      w="100%"
                    ></Input>
                    <Box pos="absolute" top={3} left={2}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="#c0c0c0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zzM2 8a6 6 0 1110.89 3.47614.817 4.817al 1 0 01-1.414 1.4141-4.816.4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Flex>
            </Flex>
            <Button
              _hover={{ opacity: "0.8" }}
              mt={5}
              pt={6}
              pb={6}
              w="100%"
              color="#ffffff"
              bg="red.400"
              fontSize="lg"
            >
              {" "}
              Search
            </Button>
          </Box>
          <Box>
            <Box>
              <Heading
                as="h3"
                size="lg"
                mb={7}
                display={{
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                  base: "none",
                }}
              >
                See what's happening
              </Heading>
              <Flex flexWrap="wrap" justify="flex-start">
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  Starting soon
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  Today
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  Tomorrow
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  This week
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  Online
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  In person
                </Badge>
                <Badge
                  borderRadius="3xl"
                  px={4}
                  py={2}
                  mr={4}
                  mb={4}
                  textTransform="normal"
                  color="ffffff"
                  bg="blue.100"
                >
                  Trending near you
                </Badge>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  )
}
