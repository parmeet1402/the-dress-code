import { useState } from "react";

import { Flex, Icon, Image, Text } from "@chakra-ui/react";

import { BsFillStarFill } from "react-icons/bs";

import router from "next/router";

const CreatorCard = ({ data }) => {
  const handleClick = () => {
    router.push(`/dashboard/creator/${data.name}`);
  };

  return (
    <Flex
      onClick={() => handleClick()}
      bgColor="white"
      mx="10px"
      color="blackAlpha.900"
    >
      <Flex direction="column" m={2}>
        <Flex>
          <Image maxW="200px" src="https://picsum.photos/200/300" />
        </Flex>
        <Flex mt="5px" justify="space-between">
          <Text>{data.name}</Text>
          <Flex align="baseline" justify="center">
            <Text mr="2px">10</Text>
            <Icon as={BsFillStarFill} />
          </Flex>
        </Flex>
        <Flex>
          {data.themes.map((theme, index) => {
            return <Icon key={index} href={theme} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CreatorCard;
