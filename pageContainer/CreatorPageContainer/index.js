import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Navigation from "pageContainer/Navigation";

import { onboardingSelectors, useOnboardingState } from "state";

import ThemesList from "/pageContainer/DashboardPageContainer/ThemesList.jsx";

import router from "next/router";
import Footer from "pageContainer/Footer";
import { BsStarFill } from "react-icons/bs";
import { GoPackage } from "react-icons/go";

//Main Component
const CreatorPageContainer = ({ creatorName }) => {
  // Fetching a creator from store based on name prop
  const creatorList = useOnboardingState(
    onboardingSelectors.selectOnboardingStateCreators
  );
  const creator = creatorList.find((creator) => creator.name === creatorName);

  //Handle function for subscribe button
  const handleSubscribeClick = () => {
    router.push(`/dashboard/creator/${creatorName}/subscribe`);
  };

  return creator ? (
    <Flex
      className="1"
      direction="column"
      color="white"
      bgColor="#3431A6"
      px="10"
      minH="100vh"
      gap={10}
    >
      <Navigation />
      <Flex className="2" direction="column">
        <Flex className="3" gap={5}>
          <Flex className="4" direction="column" w="65%">
            <Heading size="4xl">{creator.name}</Heading>
            <Heading size="md" mt={2}>
              {creator.profession.split(",").join(" | ")}
            </Heading>
            <Text mt={5}>{creator.shortDescription}</Text>
          </Flex>
          <Flex className="4" w="35%">
            <Image
              border="5px solid"
              maxW="400px"
              src="https://picsum.photos/700/900"
            />
          </Flex>
        </Flex>
        <Flex className="3" direction="column" gap={2}>
          <Button
            leftIcon={<GoPackage color="#FE6439" />}
            size="lg"
            w="max-content"
            color="blackAlpha.900"
            borderRadius="none"
            onClick={() => handleSubscribeClick()}
          >
            Subscribe to Wardrobe
          </Button>
          <Button
            _hover={{ bg: "transparent" }}
            leftIcon={<BsStarFill />}
            size="lg"
            w="max-content"
            bgColor="transparent"
            border="2px solid white"
            borderRadius="none"
          >
            Add to Favourites
          </Button>
        </Flex>
      </Flex>

      <ThemesList heading={`${creator.name}'s Wardrobe Collection`} />

      {/* INSTAGRAM INTEGRATION PENDING */}
      <Footer />
    </Flex>
  ) : null;
};

export default CreatorPageContainer;
