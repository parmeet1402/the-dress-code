import { Box, Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
import Navigation from "pageContainer/Navigation";

import Footer from "pageContainer/Footer";
import { onboardingSelectors, useOnboardingState } from "state";
import CreatorsList from "./CreatorsList";
import ThemesList from "./ThemesList";

const DashboardPageContainer = () => {
  const currentUser = useOnboardingState(
    onboardingSelectors.selectOnboardingStateCurrentUser
  );

  return (
    <Flex direction="column" bgColor="#3431A6" p="5" color="white">
      <Navigation />
      <Heading py="10" size="4xl" textAlign="center">
        &#128075; Hi {currentUser.userName}, Welcome!
      </Heading>
      <Flex direction="column" my="0px" p="0px" gap="10">
        <CreatorsList heading="Checkout your favourite Creator's style sense" />
        <CreatorsList heading="In the Spotlight" />

        {/* // Themes  */}
        <ThemesList heading="Find as per your Theme" />

        <CreatorsList heading="Upcoming Creators" />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default DashboardPageContainer;
