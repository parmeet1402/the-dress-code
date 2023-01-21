import { Flex, Image, Text } from "@chakra-ui/react";

import { onboardingSelectors, useOnboardingState } from "state";

const FrequencyCard = ({ title }) => {
  //fetching frequency variable from store
  const updateFrequency = useOnboardingState(
    onboardingSelectors.selectOnboardingStateUpdateSelectedFrequency
  );

  const handleSelect = (title) => {
    updateFrequency(title);
  };

  //   console.log(selectedFrequency);
  return (
    <div onClick={(e) => handleSelect(title)}>
      <Flex minW="120px" direction="column" m={5} align="center">
        <Image src="https://picsum.photos/600/600" borderRadius="50%" />
        <Text fontWeight="extrabold" mt="5px">
          {title}
        </Text>
      </Flex>
    </div>
  );
};
export default FrequencyCard;
