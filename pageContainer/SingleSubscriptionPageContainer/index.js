import { Flex, Heading, Text } from "@chakra-ui/react";

import Footer from "pageContainer/Footer";
import Navigation from "pageContainer/Navigation";
import PlanCard from "./PlanCard";

import { useEffect, useState } from "react";
import { onboardingSelectors, useOnboardingState } from "state";

const getPlans = () => {
  return useOnboardingState(
    onboardingSelectors.selectOnboardingStateSubscriptionPlans
  );
};

const SingleSubscriptionPageContainer = ({ subscriptionId }) => {
  const [selectedSubscriptions, setSelectedSubscriptions] = useState({});
  const plans = getPlans();
  const fetchedDataForSubscriptions = useOnboardingState(
    onboardingSelectors.selectOnboardingStateSubscriptions
  );
  useEffect(() => {
    const result = fetchedDataForSubscriptions.find(
      (singleData) => singleData.name === subscriptionId
    );
    setSelectedSubscriptions(result);
  }, [selectedSubscriptions, plans]);

  return selectedSubscriptions ? (
    <Flex direction="column" gap={10}>
      <Navigation />
      <Flex direction="column" gap={10}>
        <Heading textAlign="center">
          {selectedSubscriptions.name}'s Active Plans
        </Heading>
        <Flex direction="column" gap={5}>
          {plans.map((singlePlan, index) => {
            return <PlanCard data={singlePlan} key={index} />;
          })}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  ) : (
    <Flex>Loading</Flex>
  );
};

export default SingleSubscriptionPageContainer;
