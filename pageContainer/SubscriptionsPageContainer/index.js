import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Footer from "pageContainer/Footer";
import Navigation from "pageContainer/Navigation";

import SubscriptionsList from "./SubscriptionsList";

import { useEffect, useState } from "react";
import { onboardingSelectors, useOnboardingState } from "state";

const SubscriptionsPageContainer = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  const subscriptionsFromStore = useOnboardingState(
    onboardingSelectors.selectOnboardingStateSubscriptions
  );

  useEffect(() => {
    setSubscriptions(subscriptionsFromStore);
  }, [subscriptions]);

  return subscriptions.length !== 0 ? (
    <Flex direction="column" px="10px" minH="100vh" justify="space-between">
      <Flex direction="column" gap={10}>
        <Navigation />
        <Heading size="4xl" textAlign="center">
          Subscriptions
        </Heading>
        <Flex direction="column">
          {subscriptions.length !== 0 ? (
            <SubscriptionsList subscriptions={subscriptions} />
          ) : (
            <Flex justify="center" align="center" direction="column" gap={10}>
              <Heading>No subscriptions yet :&#40;</Heading>

              <Button
                onClick={() => router.push("/dashboard")}
                variant="next"
                rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
              >
                Dashboard
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>

      <Flex direction="column">
        <Footer />
      </Flex>
    </Flex>
  ) : (
    <Flex>LOADING</Flex>
  );
};

export default SubscriptionsPageContainer;
