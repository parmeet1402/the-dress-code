import { Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "pageContainer/Footer";
import Navigation from "pageContainer/Navigation";
import { useEffect, useState } from "react";
import { onboardingSelectors, useOnboardingState } from "state";

const SingleSubscriptionPageContainer = ({ subscriptionId }) => {
  const [selectedSubscriptions, setSelectedSubscriptions] = useState({});

  const fetchedDataForSubscriptions = useOnboardingState(
    onboardingSelectors.selectOnboardingStateSubscriptions
  );
  useEffect(() => {
    const result = fetchedDataForSubscriptions.find(
      (singleData) => singleData.name === subscriptionId
    );
    setSelectedSubscriptions(result);
  }, [selectedSubscriptions]);

  return selectedSubscriptions ? (
    <Flex direction="column" gap={10}>
      <Navigation />
      <Flex direction="column" align="center">
        <Heading>{selectedSubscriptions.name}'s Active Plans</Heading>
        <Text>Plan1</Text>
        <Text>Plan2</Text>
        <Text>Plan3</Text>
      </Flex>
      <Footer />
    </Flex>
  ) : (
    <Flex>Loading</Flex>
  );
};

export default SingleSubscriptionPageContainer;
