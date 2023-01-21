import { Flex, Heading } from "@chakra-ui/react";

import { onboardingSelectors, useOnboardingState } from "state";

import ThemesCard from "./ThemesCard";

const ThemesList = ({ heading }) => {
  //importing themes data from store

  const wardrobeThemes = useOnboardingState(
    onboardingSelectors.selectOnboardingStateThemes
  );

  // const updateWardrobeThemes = useOnboardingState(
  //   onboardingSelectors.selectOnboardingStateUpdateSelectedWardrobeThemes
  // );

  return (
    <Flex direction="column">
      <Heading size="lg" py="2">
        {heading}
      </Heading>

      <Flex>
        {wardrobeThemes.map((wardrobeTheme, index) => {
          return <ThemesCard key={index} data={wardrobeTheme} />;
        })}
      </Flex>
    </Flex>
  );
};

export default ThemesList;
