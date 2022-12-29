import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

import { BsCircleFill } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const InputForm = () => {
  return (
    <Flex direction="column" px={10}>
      <Heading color="#623C3C" w="100%" textAlign="center">
        Let's get you onboard!
      </Heading>

      <Flex justify="space-around" width="100%" p={5}>
        <FormControl p={5}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" />
        </FormControl>
        <FormControl p={5}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="someone@something.com" />
        </FormControl>
      </Flex>

      <Flex justify="space-around" alignItems="center" width="100%" p={5}>
        <FormControl p={5}>
          <FormLabel>Height</FormLabel>
          <Flex justify="space-between">
            <Input placeholder="Feet" w="45%" />
            <Input placeholder="Inches" w="45%" />
          </Flex>
        </FormControl>
        <FormControl p={5}>
          <FormLabel>Body Type</FormLabel>
          <Select>
            <option>Round</option>
            <option>Inverse-Triangle</option>
            <option>Long Rectangle</option>
            <option>Pear</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex width="100%" direction="column" p={5}>
        <Text>Complexion</Text>
        <Box>
          <Icon m={2} as={BsCircleFill} color={"pink"} />
          <Icon m={2} as={BsCircleFill} color={"pink"} />
          <Icon m={2} as={BsCircleFill} color={"pink"} />
          <Icon m={2} as={BsCircleFill} color={"pink"} />
        </Box>
      </Flex>
      <Flex justify="flex-end">
        <Button
          variant="next"
          rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default InputForm;
