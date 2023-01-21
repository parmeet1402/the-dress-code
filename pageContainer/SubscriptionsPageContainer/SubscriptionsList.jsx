import { Flex } from "@chakra-ui/react";

import SubscriptionCard from "./SubscriptionCard";

const SubscriptionsList = ({ subscriptions }) => {
  return subscriptions ? (
    <Flex gap={10} wrap="wrap" >
      {subscriptions.map((subscription, id) => {
        return <SubscriptionCard key={id} subscription={subscription} />;
      })}
    </Flex>
  ) : (
    <Flex>Loading</Flex>
  );
};
export default SubscriptionsList;
