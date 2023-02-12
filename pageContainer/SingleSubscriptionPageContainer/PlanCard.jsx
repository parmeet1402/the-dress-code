import { Button, Flex, Text } from "@chakra-ui/react";

import { useRef } from "react";

import { RxCross1 } from "react-icons/rx";
import { onboardingSelectors, useOnboardingState } from "state";

const PlanCard = ({ data }) => {
  const planIdRef = useRef();
  const plans = useOnboardingState(
    onboardingSelectors.selectOnboardingStateSubscriptionPlans
  );

  const handleCancellation = async (e) => {
    const selectedId = await planIdRef.current.innerText.split(": ")[1];

    const res = await plans.find(
      (singlePlan) => singlePlan.planId === selectedId
    );
  };

  return (
    <Flex direction="column" mt={5} border="2px solid black" p={5}>
      <Text ref={planIdRef} pl={5}>
        Plan ID: {data.planId}
      </Text>
      <Flex direction="column" pl={10}>
        <Text>Theme: {data.theme}</Text>
        <Text>Quantity: {data.quantity}</Text>
        <Text>Frequency: {data.frequency}</Text>
        <Text>Subscribed: {data.subscribed}</Text>
        <Text>Last Package: {data.lastPackage}</Text>
        <Text>Next Package: {data.nextPackage}</Text>
        <Flex justify="end">
          <Button
            onClick={(e) => handleCancellation(e)}
            bgColor="#E38989"
            variant="next"
            leftIcon={<RxCross1 />}
          >
            Cancel
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PlanCard;
