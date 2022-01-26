import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../extendTheme"
import Banner from "../components/Banner"

const IndexPage = () => (
  <ChakraProvider>
    <Banner />
  </ChakraProvider>
)

export default IndexPage
