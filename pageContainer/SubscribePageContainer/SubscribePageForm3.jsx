import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineArrowNarrowRight } from "react-icons/hi";

import Navigation from "pageContainer/Navigation";

import { router } from "next/router";

const SubscribePageForm3 = ({ creatorName, setSubmitted }) => {
  return (
    <Flex
      direction="column"
      px={10}
      gap={10}
      bgColor="#3431A6"
      minH="100vh"
      color="white"
    >
      <Navigation />
      <Flex direction="column" align="center" gap="4">
        <Heading size="4xl" textAlign="center">
          Subscribed Successfully!
        </Heading>
        <Icon
          bgColor="white"
          borderRadius="50%"
          color="#FA724C"
          as={HiCheckCircle}
          m="50px"
          h="100px"
          w="100px"
        />
        <Text fontWeight="bold" fontSize="3xl" textAlign="center">
          Your First package from {creatorName}'s Collection would be delivered
          soon!
        </Text>
        <Box color="black">
          <Button
            onClick={() => router.push("/subscriptions")}
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
export default SubscribePageForm3;
