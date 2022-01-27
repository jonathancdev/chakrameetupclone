import React from "react"
import {
  Flex,
  Box,
  Image,
  Button,
  Link,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input,
} from "@chakra-ui/react"
import upcomingOne from "../assets/upcomingOne.png"
import upcomingTwo from "../assets/upcomingTwo.png"
import upcomingThree from "../assets/upcomingThree.png"
import upcomingFour from "../assets/upcomingFour.png"

export default function Upcoming() {
  return (
    <Box mt={20}>
      <Container maxWidth="container.xl">
        <Flex mb={7} align="center" justify="space-between">
          <Box>
            <Heading align="center" as="h3" size="lg">
              Upcoming online events
            </Heading>
          </Box>
          <Box>
            <Link fontWeight="semibold" color="teal.500">
              Explore more events
            </Link>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box width="100%" align="left">
            <Box pos="relative">
              <Image pos="relative" w="100%" src={upcomingOne} alt="brand" />
              <Flex
                pos="absolute"
                align="center"
                borderRadius="5px"
                top={0}
                bg="white"
                fontSize="sm"
                m={2}
                px={3}
                py={1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                    fill="black"
                  />
                </svg>
                <Box ml={2} color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Flex>
            </Box>
            <Box>Sat, Feb 3 @ 7:45 PM EST</Box>
            <Heading align="center" as="h6" mt="1" fontWeight="black" size="sm">
              Upcoming online event
            </Heading>
            <Box my={3} size="xs">
              Remote-Working Group
            </Box>
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Box ml="16px" color="#757575">
                  87
                </Box>
              </Flex>
              <Box>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    fill="black"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box width="100%" align="left">
            <Box pos="relative">
              <Image pos="relative" w="100%" src={upcomingTwo} alt="brand" />
              <Flex
                pos="absolute"
                align="center"
                borderRadius="5px"
                top={0}
                bg="white"
                fontSize="sm"
                m={2}
                px={3}
                py={1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                    fill="black"
                  />
                </svg>
                <Box ml={2} color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Flex>
            </Box>
            <Box>Sat, Feb 3 @ 7:45 PM EST</Box>
            <Heading align="center" as="h6" mt="1" fontWeight="black" size="sm">
              Upcoming online event
            </Heading>
            <Box my={3} size="xs">
              Remote-Working Group
            </Box>
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Box ml="16px" color="#757575">
                  87
                </Box>
              </Flex>
              <Box>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    fill="black"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box width="100%" align="left">
            <Box pos="relative">
              <Image pos="relative" w="100%" src={upcomingThree} alt="brand" />
              <Flex
                pos="absolute"
                align="center"
                borderRadius="5px"
                top={0}
                bg="white"
                fontSize="sm"
                m={2}
                px={3}
                py={1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                    fill="black"
                  />
                </svg>
                <Box ml={2} color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Flex>
            </Box>
            <Box>Sat, Feb 3 @ 7:45 PM EST</Box>
            <Heading align="center" as="h6" mt="1" fontWeight="black" size="sm">
              Upcoming online event
            </Heading>
            <Box my={3} size="xs">
              Remote-Working Group
            </Box>
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Box ml="16px" color="#757575">
                  87
                </Box>
              </Flex>
              <Box>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    fill="black"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
          <Box width="100%" align="left">
            <Box pos="relative">
              <Image pos="relative" w="100%" src={upcomingFour} alt="brand" />
              <Flex
                pos="absolute"
                align="center"
                borderRadius="5px"
                top={0}
                bg="white"
                fontSize="sm"
                m={2}
                px={3}
                py={1}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H14C15.1046 20 16 19.1046 16 18V15.1869C16 15.107 16.089 15.0593 16.1555 15.1036L20.4453 17.9635C21.1099 18.4066 22 17.9302 22 17.1315V6.86852C22 6.06982 21.1099 5.59343 20.4453 6.03647L16.1555 8.89635C16.089 8.94066 16 8.89302 16 8.81315V6C16 4.89543 15.1046 4 14 4H4Z"
                    fill="black"
                  />
                </svg>
                <Box ml={2} color="#757575" fontWeight="semibold">
                  Online Event
                </Box>
              </Flex>
            </Box>
            <Box>Sat, Feb 3 @ 7:45 PM EST</Box>
            <Heading align="center" as="h6" mt="1" fontWeight="black" size="sm">
              Upcoming online event
            </Heading>
            <Box my={3} size="xs">
              Remote-Working Group
            </Box>
            <Flex align="center" justify="space-between">
              <Flex align="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="person"
                />
                <Box ml="16px" color="#757575">
                  87
                </Box>
              </Flex>
              <Box>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8232 5.23741C10.9807 5.07992 11.25 5.19146 11.25 5.41419L11.25 14.25C11.25 14.6642 11.5858 15 12 15C12.4142 15 12.75 14.6642 12.75 14.25V5.41418C12.75 5.19146 13.0193 5.07992 13.1768 5.23741L15.9697 8.0303C16.2626 8.32319 16.7374 8.32319 17.0303 8.0303C17.3232 7.73741 17.3232 7.26253 17.0303 6.96964L13.2374 3.17675C12.554 2.49333 11.446 2.49333 10.7626 3.17675L6.96967 6.96964C6.67678 7.26253 6.67678 7.73741 6.96967 8.0303C7.26256 8.32319 7.73744 8.32319 8.03033 8.0303L10.8232 5.23741ZM9.25 10H6C4.89543 10 4 10.8954 4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12C20 10.8954 19.1046 10 18 10H14.75V11.5H18C18.2761 11.5 18.5 11.7239 18.5 12V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V12C5.5 11.7239 5.72386 11.5 6 11.5H9.25V10Z"
                    fill="black"
                  />
                </svg>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
