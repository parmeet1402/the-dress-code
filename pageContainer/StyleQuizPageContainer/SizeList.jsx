import { Flex } from "@chakra-ui/react";

const SizeList = ({ sizeArray, isRound = false }) => {
  return (
    <Flex gap="1em" wrap="wrap">
      {sizeArray.map((singleSizeValue) => {
        if (isRound) {
          return (
            <Flex
              h="4em"
              w="4em"
              justify="center"
              align="center"
              border="1px solid black"
              borderRadius="50%"
            >
              {singleSizeValue}
            </Flex>
          );
        } else {
          return (
            <Flex
              h="4em"
              w="4em"
              justify="center"
              align="center"
              border="1px solid black"
            >
              {singleSizeValue}
            </Flex>
          );
        }
      })}
    </Flex>
  );
};
export default SizeList;
