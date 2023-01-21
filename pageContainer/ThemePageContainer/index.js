import { Flex, Heading } from "@chakra-ui/react";

const ThemePageContainer = ({ selectedTheme }) => {
  return (
    <Flex>
      <Heading>{selectedTheme}</Heading>
    </Flex>
  );
};

export default ThemePageContainer;
