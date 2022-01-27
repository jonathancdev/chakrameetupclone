import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../extendTheme"
import Banner from "../components/Banner"
import ItWorks from "../components/ItWorks"

const IndexPage = () => (
  <ChakraProvider>
    <Banner />
    <ItWorks />
  </ChakraProvider>
)

export default IndexPage
