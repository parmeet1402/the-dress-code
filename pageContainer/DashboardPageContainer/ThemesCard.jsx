import { Flex, Image, Text } from "@chakra-ui/react";

import router from "next/router";
const ThemesCard = ({ data }) => {
  const handleClick = () => {
    router.push(`/dashboard/theme/${data}`);
  };

  return (
    <Flex onClick={() => handleClick()}>
      <Flex direction="column" m={5} justify="space-around" align="center">
        <Image src="https://picsum.photos/200/200" borderRadius="50%" />
        <Text fontWeight="extrabold" mt="5px">
          {data}
        </Text>
      </Flex>
    </Flex>
  );
};
export default ThemesCard;
