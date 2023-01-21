import { Flex, Heading, Image } from "@chakra-ui/react";

import { onboardingSelectors, useOnboardingState } from "state";

import CreatorCard from "./CreatorCard";

const CreatorsList = ({ heading }) => {
  //fetching creators from store
  const creators = useOnboardingState(
    onboardingSelectors.selectOnboardingStateCreators
  );

  return (
    <Flex direction="column">
      <Heading size="lg" py="2">
        {heading}
      </Heading>

      {/* List  */}
      <Flex overflowX="scroll">
        {creators.map((creatorData, index) => {
          return <CreatorCard key={index} data={creatorData} />;
        })}
      </Flex>
    </Flex>
  );
};

export default CreatorsList;
