// importing Chakra UI Components
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";

//importing react-icons
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import router from "next/router";
import { useState } from "react";

//importing validations
import {
  validateEmail,
  validateForm,
  validateHeightInFeet,
  validateHeightInInches,
  validateName,
} from "pageContainer/Validation";

//importing abstracted methods from store
import { onboardingSelectors, useOnboardingState } from "state";

//creating an error css for handeling errors
const errorCss = {
  borderColor: "red",
};

//Application Component
const InputForm = () => {
  //imported method initialized
  const updateUsers = useOnboardingState(
    onboardingSelectors.selectOnboardingStateUpdateUsers
  );

  //internal states
  const [clickedColor, setClickedColor] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    heightInFeet: "",
    heightInInches: "",
  });
  const [personalDetails, setPersonalDetails] = useState({
    userName: "",
    userEmail: "",
    userBodyType: "",
    height: {
      feet: "",
      inches: "",
    },
    complexion: "",
  });

  //intializing toast
  const toast = useToast();

  //--------------------methods to handle submitted data and error data of form -----------------------//

  //METHOD TO DISPLAY ERRORS
  const displayErrors = (value) => {
    return value !== "" ? (
      <FormErrorMessage>{value}</FormErrorMessage>
    ) : (
      <Box h="23.33px" w="100%"></Box>
    );
  };

  //NAME
  const handleNameSubmit = (name) => {
    setPersonalDetails({ ...personalDetails, userName: name });
  };
  const handleNameErrors = (name) => {
    const result = validateName(name);
    if (!(result === "")) {
      setErrors((prevErrState) => ({ ...prevErrState, name: result }));
    } else {
      setErrors((prevErrState) => ({ ...prevErrState, name: "" }));
    }
  };

  //EMAIL
  const handleEmailSubmit = (email) => {
    setPersonalDetails({ ...personalDetails, userEmail: email });
  };
  const handleEmailErrors = (email) => {
    const result = validateEmail(email);
    if (!(result === "")) {
      setErrors((prevErrState) => ({ ...prevErrState, email: result }));
    } else {
      setErrors((prevErrState) => ({ ...prevErrState, email: "" }));
    }
  };

  //HEIGHT-FEET
  const handleHeightInFeetSubmit = (ft) => {
    setPersonalDetails({
      ...personalDetails,
      height: {
        ...personalDetails.height,
        feet: ft,
      },
    });
  };
  const handleHeightInFeetErrors = (ft) => {
    console.log({ feet: ft });
    const result = validateHeightInFeet(ft);
    if (!(result === "")) {
      setErrors((prevErrState) => ({ ...prevErrState, heightInFeet: result }));
    } else {
      setErrors((prevErrState) => ({ ...prevErrState, heightInFeet: "" }));
    }
  };

  //HEIGHT-INCHES
  const handleHeightInInches = (inches) => {
    setPersonalDetails({
      ...personalDetails,
      height: {
        ...personalDetails.height,
        inches: inches,
      },
    });
  };
  const handleHeightInInchesErrors = (inches) => {
    const result = validateHeightInInches(inches);
    if (!(result === "")) {
      setErrors((prevErrState) => ({
        ...prevErrState,
        heightInInches: result,
      }));
    } else {
      setErrors((prevErrState) => ({ ...prevErrState, heightInInches: "" }));
    }
  };

  //BODY - TYPE
  const handleBodyType = (bodyType) => {
    setPersonalDetails({ ...personalDetails, userBodyType: bodyType });
  };

  //COMPLEXION
  const handleComplexion = (color) => {
    switch (color) {
      case color:
        setPersonalDetails({ ...personalDetails, complexion: color });
        setClickedColor(color);
      default:
        null;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(personalDetails);
    // console.log({ name: personalDetails.userName });
    if (formErrors === "") {
      console.log({
        logStatement: "logged for true",
        result: formErrors,
        localState: personalDetails,
      });
      updateUsers(personalDetails);
      router.push("/onboarding/favourites");
    } else {
      console.log({
        logStatement: "logged for false",
        result: formErrors,
        localState: personalDetails,
      });
      // alert("Fill the required fields first");

      toast({
        title: "Error!!",
        description: "Fill the required fields first",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  //----------------------------------MAIN - COMPONENT-----------------------------------------//

  //----------------------------------Logging errs-----------------------------------------//
  console.log({ errors, personalDetails });

  return (
    <Flex
      as="form"
      autoComplete="off"
      noValidate
      direction="column"
      minH="calc(100vh - 65px)"
      onSubmit={handleFormSubmit}
    >
      <Heading size="3xl" color="#623C3C" w="100%" textAlign="center">
        Let's get you onboard!
      </Heading>

      <Flex justify="space-around" width="100%">
        <FormControl isRequired isInvalid={errors.name !== ""}>
          <FormLabel>Name</FormLabel>
          <Input
            minLength={3}
            maxLength={15}
            onChange={(e) => handleNameSubmit(e.target.value)}
            onBlur={(e) => handleNameErrors(e.target.value)}
            placeholder="Name"
            value={personalDetails.userName}
          />
          {displayErrors(errors.name)}
        </FormControl>

        <FormControl isRequired isInvalid={errors.email !== ""}>
          <FormLabel>Email</FormLabel>
          <Input
            onChange={(e) => handleEmailSubmit(e.target.value)}
            onBlur={(e) => handleEmailErrors(e.target.value)}
            type="email"
            placeholder="someone@something.com"
            value={personalDetails.userEmail}
          />
          {displayErrors(errors.email)}
        </FormControl>
      </Flex>

      <Flex justify="space-between" alignItems="center" width="100%">
        {/* HEIGHT */}
        <Flex width="50%" direction="column">
          <FormControl isRequired>
            <FormLabel>Height</FormLabel>
          </FormControl>

          <Flex justify="space-between" alignItems="center" w="100%">
            {/* HEIGHT IN Feet */}
            <Flex direction="column" mr="20px">
              <FormControl
                isRequired
                isInvalid={errors.heightInFeet !== "" ? true : false}
              >
                <NumberInput
                  min={0}
                  max={10}
                  allowMouseWheel
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    style={errors.heightInFeet !== "" ? errorCss : {}}
                    onChange={(e) => handleHeightInFeetSubmit(e.target.value)}
                    placeholder="Feet"
                    value={personalDetails.height.feet}
                    onBlur={(e) => handleHeightInFeetErrors(e.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Flex>{displayErrors(errors.heightInFeet)}</Flex>
              </FormControl>
            </Flex>
            {/* HEIGHT IN INCHES */}
            <Flex direction="column">
              <FormControl
                isRequired
                isInvalid={errors.heightInInches !== "" ? true : false}
              >
                <NumberInput
                  min={0}
                  max={11}
                  allowMouseWheel
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    style={errors.heightInInches !== "" ? errorCss : {}}
                    onChange={(e) => handleHeightInInches(e.target.value)}
                    placeholder="Inches"
                    value={personalDetails.height.inches}
                    onBlur={(e) => handleHeightInInchesErrors(e.target.value)}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Flex m={0} p={0}>
                  {displayErrors(errors.heightInInches)}
                </Flex>
              </FormControl>
            </Flex>
          </Flex>
        </Flex>

        {/* BODY - TYPE */}
        <Flex width="50%">
          <FormControl>
            <FormLabel>Body Type</FormLabel>
            <Select onChange={(e) => handleBodyType(e.target.value)}>
              <option>Round</option>
              <option>Inverse-Triangle</option>
              <option>Long Rectangle</option>
              <option>Pear</option>
            </Select>
          </FormControl>
        </Flex>
      </Flex>

      <Flex width="100%" direction="column">
        <Text>Complexion</Text>
        <Box>
          <Icon
            onClick={() => handleComplexion("#C69A9A")}
            style={
              clickedColor === "#C69A9A"
                ? { border: "2px solid black", borderRadius: "50%" }
                : null
            }
            m={2}
            as={BsCircleFill}
            color={"#C69A9A"}
            boxSize={7}
          />
          <Icon
            onClick={() => handleComplexion("#BB8181")}
            style={
              clickedColor === "#BB8181"
                ? { border: "2px solid black", borderRadius: "50%" }
                : null
            }
            m={2}
            as={BsCircleFill}
            color={"#BB8181"}
            boxSize={7}
          />
          <Icon
            onClick={() => handleComplexion("#9D5F5F")}
            style={
              clickedColor === "#9D5F5F"
                ? { border: "2px solid black", borderRadius: "50%" }
                : null
            }
            m={2}
            as={BsCircleFill}
            color={"#9D5F5F"}
            boxSize={7}
          />
          <Icon
            onClick={() => handleComplexion("#5C3737")}
            style={
              clickedColor === "#5C3737"
                ? { border: "2px solid black", borderRadius: "50%" }
                : null
            }
            m={2}
            as={BsCircleFill}
            color={"#5C3737"}
            boxSize={7}
          />
        </Box>
      </Flex>
      <Box position="absolute" bottom="30px" right="30px">
        <Button
          type="submit"
          // onClick={(e) => handleFormSubmit(e)}
          variant="next"
          rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
        >
          Next
        </Button>
      </Box>
    </Flex>
  );
};

export default InputForm;
