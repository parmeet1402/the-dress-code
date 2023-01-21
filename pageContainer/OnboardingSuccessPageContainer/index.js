import Navigation from "pageContainer/Navigation";

import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";

import { HiCheckCircle, HiOutlineArrowNarrowRight } from "react-icons/hi";

import Router from "next/router";

const OnboardingSuccessPageContainer = () => {
  return (
    <Flex direction="column" px={10}>
      <Navigation />
      <Flex direction="column" align="center" gap="4">
        <Heading size="4xl" color="#623C3C" w="100%" textAlign="center">
          Congratulations!
        </Heading>
        <Icon color="#FA724C" as={HiCheckCircle} m="50px" h="100px" w="100px" />
        <Text fontWeight="bold" fontSize="3xl">
          You are now part of The Dress Code Exclusive Club!
        </Text>
        <Box position="fixed" bottom="30px" right="30px">
          <Button
            onClick={() => Router.push("/dashboard")}
            // onClick={() => Router.push("/dashboard")}
            variant="next"
            rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
          >
            Dashboard
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OnboardingSuccessPageContainer;
