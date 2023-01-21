import Navigation from "pageContainer/Navigation";

import { Flex, Heading } from "@chakra-ui/react";
import FavouritesList from "./FavouritesList";

const OnboardingFavouritesPageContainer = () => {
  return (
    <Flex direction="column" h="100vh" px={10}>
      <Navigation />
      <Heading color="#623C3C" w="100%" textAlign="center">
        Select your fashion icon (at least 3)
      </Heading>
      <FavouritesList />
    </Flex>
  );
};

export default OnboardingFavouritesPageContainer;
