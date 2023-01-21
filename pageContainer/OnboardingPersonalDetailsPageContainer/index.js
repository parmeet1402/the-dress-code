import { Flex } from "@chakra-ui/react";
import Navigation from "pageContainer/Navigation";
import InputForm from "./InputForm";

const OnboardingPersonalDetailsPageContainer = () => {
  return (
    <Flex direction="column" px={10}>
      <Navigation />
      <InputForm />
    </Flex>
  );
};

export default OnboardingPersonalDetailsPageContainer;
