import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import router from "next/router";

// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import ImageList from "./ImageList";
import SizeList from "./SizeList";

import {
  bodyTypesArray,
  dressHeightArray,
  dressWidthArray,
  pantHeightArray,
  pantTypesArray,
  pantWidthArray,
  topHeightArray,
  topTypesArray,
  topWidthArray,
} from "./values";

const StyleQuizPageContainer = () => {
  const handleClick = () => {
    router.push("/onboarding/personal-details");
  };

  return (
    <Flex direction="column" minH="100vh" p="0 3.5em" bgColor="#FEF0EB">
      <Flex as="form" direction="column" m="2em">
        {/* Height Question */}
        <FormControl isRequired p="20px 10px">
          <Flex align="baseline" gap="1em" wrap="wrap">
            <FormLabel as="text" fontWeight="bold">
              How tall are you?
            </FormLabel>
            <Flex align="baseline" gap="0.5em">
              <Input type="number" w="4em" />
              <Text variant="caption">Feet</Text>
            </Flex>
            <Flex align="baseline" gap="0.5em">
              <Input type="number" w="4em" />
              <Text variant="caption">Inches</Text>
            </Flex>
          </Flex>
        </FormControl>
        {/* BodyType Question */}
        <FormControl isRequired p="20px 10px">
          <FormLabel as="text" fontWeight="bold">
            Which of these body types matches you the best?
          </FormLabel>
          <Flex align="center" gap="0.5em">
            <ImageList valuesArray={bodyTypesArray} />
          </Flex>
        </FormControl>
        {/* Dress Size Question */}
        <FormControl isRequired p="20px 10px">
          <Heading variant="h6">What dress sizes do you wear?</Heading>
          <FormLabel as="text" fontWeight="bold">
            Select both size types
          </FormLabel>
          <Flex direction="column" gap="2em">
            <SizeList sizeArray={dressHeightArray} />
            <SizeList sizeArray={dressWidthArray} isRound={true} />
          </Flex>
        </FormControl>
        {/* Top Size Question */}
        <FormControl isRequired p="20px 10px">
          <Heading variant="h6">
            What sizes do you normally wear for blouses and shirts?
          </Heading>
          <FormLabel as="text" fontWeight="bold">
            Select both size types
          </FormLabel>
          <Flex direction="column" gap="2em">
            <SizeList sizeArray={topHeightArray} />
            <SizeList sizeArray={topWidthArray} isRound={true} />
          </Flex>
        </FormControl>
        {/* Top types Question */}
        <FormControl isRequired p="20px 10px">
          <Heading variant="h6">How do you prefer your tops to fit?</Heading>
          <FormLabel as="text" fontWeight="bold">
            Select all that apply
          </FormLabel>
          <Flex align="center" gap="0.5em">
            <ImageList valuesArray={topTypesArray} />
          </Flex>
        </FormControl>
        {/* Pants Size Question */}
        <FormControl isRequired p="20px 10px">
          <FormLabel as="text" fontWeight="bold">
            What size do you normally wear for pants and jeans?
          </FormLabel>
          <Flex direction="column" gap="2em">
            <Flex direction="column" gap="0.5em">
              <Text variant="body2">Pants</Text>
              <SizeList sizeArray={pantHeightArray} />
            </Flex>
            <Flex direction="column" gap="0.5em">
              <Text variant="body2">Jeans</Text>
              <SizeList sizeArray={pantWidthArray} isRound={true} />
            </Flex>
          </Flex>
        </FormControl>
        {/* Jeans length Question */}
        <FormControl isRequired p="20px 10px">
          <Heading variant="h6">What length jeans do you prefer?</Heading>
          <FormLabel as="text" fontWeight="bold">
            Select all that apply
          </FormLabel>
          <Flex direction="column" gap="2em">
            <Flex direction="column" gap="0.5em">
              <CheckboxGroup>
                <Checkbox
                  border="black"
                  iconColor="black"
                >{`Crop < 27"`}</Checkbox>
                <Checkbox
                  border="black"
                  iconColor="black"
                >{` Ankle 28" - 29"`}</Checkbox>
                <Checkbox border="black" iconColor="black">
                  {` Regular 30" - 32"`}
                </Checkbox>
                <Checkbox
                  border="black"
                  iconColor="black"
                >{` Long 33" - 35"`}</Checkbox>
              </CheckboxGroup>
            </Flex>
          </Flex>
        </FormControl>
        {/* Jean Rise level Question */}
        <FormControl isRequired p="20px 10px">
          <Heading variant="h6">What rise jeans do you prefer?</Heading>
          <FormLabel as="text" fontWeight="bold">
            Select all that apply
          </FormLabel>
          <Flex direction="column" gap="2em">
            <Flex direction="column" gap="0.5em">
              <CheckboxGroup>
                <Checkbox border="black" iconColor="black">{`Low`}</Checkbox>
                <Checkbox border="black" iconColor="black">{`Mid`}</Checkbox>
                <Checkbox border="black" iconColor="black">{`High`}</Checkbox>
              </CheckboxGroup>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default StyleQuizPageContainer;
