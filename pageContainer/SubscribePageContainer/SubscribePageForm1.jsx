import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import ThemesList from "pageContainer/DashboardPageContainer/ThemesList";
import Navigation from "pageContainer/Navigation";

import { router } from "next/router";
import Footer from "pageContainer/Footer";
import FrequencyList from "./FrequencyList";
import QuantityList from "./QuantityList";

const SubscribePageForm1 = ({ creatorName, setSubmitted }) => {
  const totalAmount = 40401.0;
  const handleSubmit = () => {
    setSubmitted("form2");
  };
  return (
    <Flex direction="column" px={10} gap={10} bgColor="#3431A6" minH="100vh">
      <Navigation />
      <Flex direction="column" gap={10}>
        <Heading textAlign="center" size="4xl">
          Subscribe to {creatorName}'s Wardrobe
        </Heading>
        <ThemesList heading="Select a theme" />
        <QuantityList />
        <FrequencyList />
        <Flex justify="end">
          <Text fontSize="4xl">Total Amount : ${totalAmount}</Text>
        </Flex>
        <Flex justify="flex-end">
          <Button
            variant="next"
            rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
            onClick={() => handleSubmit()}
          >
            Adress
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default SubscribePageForm1;
