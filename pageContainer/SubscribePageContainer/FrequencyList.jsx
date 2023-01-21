import { Flex, Heading } from "@chakra-ui/react";

import FrequencyCard from "./FrequencyCard";

const FrequencyList = () => {
  return (
    <Flex direction="column">
      <Heading size="lg" py="2">
        Select frequency
      </Heading>

      <Flex justify="space-around">
        <FrequencyCard key={"Weekly"} title="Weekly" />
        <FrequencyCard key={"Bi-Weekly"} title="Bi-Weekly" />
        <FrequencyCard key={"Once a month"} title="Once a month" />
        <FrequencyCard key={"Yearly"} title="Yearly" />
      </Flex>
    </Flex>
  );
};

export default FrequencyList;
