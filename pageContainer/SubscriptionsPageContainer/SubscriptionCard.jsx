import { Flex, Heading, Icon, Image } from "@chakra-ui/react";
import router from "next/router";

const SubscriptionCard = ({ subscription }) => {
  const handleClick = () => {
    router.push(`/subscriptions/${subscription.name}`);
  };

  return (
    <Flex direction="column" onClick={() => handleClick()}>
      <Image
        maxW="200px"
        alt={subscription.instagramUserName}
        src="https://picsum.photos/200/300"
      />
      <Flex justify="space-between">
        <Heading size={1}>{subscription.name}</Heading>
        <span>{subscription.age}</span>
      </Flex>
      <Flex>
        {subscription.themes.map((theme, index) => {
          return <Icon key={index} href={theme} />;
        })}
      </Flex>
    </Flex>
  );
};
export default SubscriptionCard;
