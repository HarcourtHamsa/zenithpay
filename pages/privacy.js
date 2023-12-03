import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import {
  Stack,
  Heading,
  Container,
  Box,
  Text,
  SimpleGrid,
  Button,
  Center,
  List,
  ListIcon,
  ListItem,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import CryptoChartTape from "../components/common/CryptoChartTape";
import { mining_place } from "../assets/images/list";

function Privacy() {
  return (
    <Box>
      <Head>
        <title>Privacy Policy - ZedPay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Box
        w="full"
        h={{ base: "xs", md: "xs" }}
        // bg="blue.400"
        id="contact"
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <VStack
          w={"full"}
          h="full"
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, blackAlpha.600)"}
        >
          <Center w="inherit" h="inherit">
            <Box maxW="3xl" textAlign="left" px={{ base: 12, md: 0 }}>
              <Heading
                // fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                lineHeight={"110%"}
                color="white"
              >
                <Text>Privacy Policy</Text>
              </Heading>
            </Box>
          </Center>
        </VStack>
      </Box>

      <Container maxW={"6xl"} my={10}>
        <Box>
          <Stack as={Container} maxW={"6xl"} mt={10}>
            <Heading
              lineHeight={"110%"}
              fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
              fontWeight="bold"
              mb={3}
            >
              <Text>Privacy Policy for ZedPay</Text>
            </Heading>
            <Text mt={10}>
              At ZedPay, accessible from https://zenithpay.network, one of our
              main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by ZedPay and how we use it. If you have additional
              questions or require more information about our Privacy Policy, do
              not hesitate to contact us through email at
              support@zenithpay.network
            </Text>
          </Stack>

          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "xl", sm: "xl", md: "xl" }}
            fontWeight="bold"
            // mb={3}
            mt={10}
            p={4}
          >
            <Text>Log Files</Text>
          </Heading>
          <Text p={4}>
            ZedPay follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services&apos; analytics. The
            information collected by log files include internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamp, referring/exit pages, and possibly the number of clicks.
            These are not linked to any information that is personally
            identifiable. The purpose of the information is for analyzing
            trends, administering the site, tracking users&apos; movement on the
            website, and gathering demographic information.
          </Text>

          <Heading
            lineHeight={"110%"}
            fontSize={{ base: "xl", sm: "xl", md: "xl" }}
            fontWeight="bold"
            // mb={3}
            mt={10}
            p={4}
          >
            <Text>Cookies and Web Beacons</Text>
          </Heading>
          <Text p={4}>
            Like any other website, ZedPay uses &apos; cookies&apos; . These
            cookies are used to store information including visitors&apos;
            preferences, and the pages on the website that the visitor accessed
            or visited. The information is used to optimize the users&apos;
            experience by customizing our web page content based on
            visitors&apos; browser type and/or other information.
          </Text>
        </Box>
      </Container>

      <CryptoChartTape />
      <Footer />
    </Box>
  );
}

export default Privacy;
