import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";

import QuizModal from "pageContainer/QuizModal";

import { BsChevronRight } from "react-icons/bs";

const test = () => {
  return (
    <Flex
    //   direction="column-reverse"
      gap="10px"
      border="40px solid black"
      p={10}
      h="100vh"
    >
      <QuizModal />
      {/* <Flex my="3em" justify="center" align="center" gap="10px">
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
      <Flex gap="20px" justify="center">
        <IconButton
          icon={<BsChevronRight />}
          size="desktopLarge"
          variant="primary"
        />
        <IconButton
          icon={<BsChevronRight />}
          size="desktopRegular"
          variant="outline"
        />
        <IconButton
          icon={<BsChevronRight />}
          size="mobileLarge"
          variant="ghost"
        />
        <IconButton
          icon={<BsChevronRight />}
          size="mobileRegular"
          variant="outline"
        />
      </Flex>
      <Flex gap="20px" justify="space-around">
        <Flex direction="column">
          <Heading textStyle="h1">Hello</Heading>
          <Heading variant="h6">Hello</Heading>
          <Heading variant="h5">Hello</Heading>
          <Heading variant="h4">Hello</Heading>
          <Heading variant="h3">Hello</Heading>
          <Heading variant="h2">Hello</Heading>
          <Heading variant="h1">Hello</Heading>
        </Flex>

        <Flex direction="column">
          <Text variant="caption">I am text</Text>
          <Text variant="body2">I am text</Text>
          <Text variant="body1">I am text</Text>
        </Flex>
      </Flex>
      <Flex direction="column">
        <Flex justify="space-around" gap="30px">
          <Input type="email" placeholder="Enter Email Here!" />
          <Input type="password" placeholder="Enter Password Here!" />
          <Input type="datetime-local" />
        </Flex>
        <Flex justify="space-around" gap="30px">
          <Checkbox defaultChecked colorScheme="black">
            Enter Email Here!
          </Checkbox>
          <Input type="password" placeholder="Enter Password Here!" />
          <Input type="datetime-local" />
        </Flex>
      </Flex> */}
    </Flex>
  );
};
export default test;
