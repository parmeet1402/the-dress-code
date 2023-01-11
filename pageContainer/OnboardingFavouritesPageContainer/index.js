import Navigation from "pageContainer/Navigation";

import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import CreatorList from "./CreatorList";

const OnboardingFavouritesPageContainer = () => {
  return (
    <>
      <Navigation />
      <Heading color="#623C3C" w="100%" textAlign="center">
        Select your fashion icon (at least 3)
      </Heading>
      <CreatorList />
    </>
  );
};

export default OnboardingFavouritesPageContainer;
