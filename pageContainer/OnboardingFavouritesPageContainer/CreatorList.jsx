import { Box, Button, Flex } from "@chakra-ui/react";
import router from "next/router";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { onboardingSelectors, useOnboardingState } from "state";
import CreatorCard from "./CreatorCard";

const CreatorList = () => {
  const [clickedElements, setClickedElements] = useState([]);
  const [counter, setCounter] = useState(0);
  const [selectedCreators, setSelectedCreators] = useState([]);

  //fetching creators from store
  const creators = useOnboardingState(
    onboardingSelectors.selectOnboardingStateCreators
  );
  const updateCreators = useOnboardingState(
    onboardingSelectors.selectOnboardingStateUpdateSelectedCreators
  );

  const handleCounter = (index) => {
    if (clickedElements.includes(index)) {
      setClickedElements(
        clickedElements.filter((indexOfElement) => indexOfElement !== index)
      );
      setCounter((prevCounter) => prevCounter - 1);
      setSelectedCreators(
        selectedCreators.filter(
          (selectedCreator, indexOfElement) => indexOfElement !== index
        )
      );
    } else {
      setClickedElements([...clickedElements, index]);
      setCounter((prevCounter) => prevCounter + 1);
      setSelectedCreators([...selectedCreators, creators[index]]);
    }
  };

  const handleFormSubmit = () => {
    if (counter > 2) {
      console.log({ creators: selectedCreators });
      updateCreators(selectedCreators);
      router.push("/onboarding/success");
    } else {
      alert("Please select at least 3 creators");
    }
  };

  return (
    <Flex direction="column" h="calc(100vh - 64px - 43px)">
      <Flex overflowX="scroll">
        {creators.map((creatorData, index) => {
          return (
            <div key={index} onClick={() => handleCounter(index)}>
              <CreatorCard data={creatorData} />
            </div>
          );
        })}
      </Flex>

      <Flex justify="center" align="center" mt="30px">
        {counter <= 3 ? `${counter}/3 favourites  ` : `${counter} favourites`}
      </Flex>

      <Box position="absolute" bottom="30px" right="30px">
        <Button
          onClick={() => handleFormSubmit()}
          variant="next"
          rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default CreatorList;
