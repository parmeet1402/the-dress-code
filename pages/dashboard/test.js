import { Button, Flex, Icon } from "@chakra-ui/react";

import { BsChevronRight } from "react-icons/bs";

const test = () => {
  return (
    <>
      <Flex my="3em" justify="center" align="center" gap="10px" wrap="wrap">
        <Flex direction="column" justify="center" align="center" gap="50px">
          <Button variant="primary" size="mobileRegular">
            mobileRegular
          </Button>
          <Button variant="primary" size="mobileLarge">
            mobileLarge
          </Button>
          <Button variant="primary" size="desktopRegular">
            desktopRegular
          </Button>
          <Button variant="primary" size="desktopLarge">
            desktopLarge
          </Button>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="50px">
          <Button variant="ghost" size="mobileRegular">
            mobileRegular
          </Button>
          <Button variant="ghost" size="mobileLarge">
            mobileLarge
          </Button>
          <Button variant="ghost" size="desktopRegular">
            desktopRegular
          </Button>
          <Button variant="ghost" size="desktopLarge">
            desktopLarge
          </Button>
        </Flex>
        <Flex direction="column" justify="center" align="center" gap="50px">
          <Button variant="outline" size="mobileRegular">
            mobileRegular
          </Button>
          <Button variant="outline" size="mobileLarge">
            mobileLarge
          </Button>
          <Button variant="outline" size="desktopRegular">
            desktopRegular
          </Button>
          <Button variant="outline" size="desktopLarge">
            desktopLarge
          </Button>
        </Flex>
      </Flex>
      <Flex justify="center">
        <Icon as={BsChevronRight} boxSize="50px" />
      </Flex>
    </>
  );
};
export default test;
