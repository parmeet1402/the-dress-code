import { Flex, Heading } from "@chakra-ui/react";

import { onboardingSelectors, useOnboardingState } from "state";
import QuantityCard from "./QuantityCard";

const QuantityList = () => {
  const wardrobeThemes = useOnboardingState(
    onboardingSelectors.selectOnboardingStateThemes
  );

  return (
    <Flex direction="column">
      <Heading size="lg" py="2">
        Select quantity
      </Heading>

      <Flex>
        {wardrobeThemes.map((singleTheme) => (
          <QuantityCard key={singleTheme} title={singleTheme} />
        ))}
      </Flex>
    </Flex>
  );
};

export default QuantityList;
