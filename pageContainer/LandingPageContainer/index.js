import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LandingPageContainer = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setIsError] = useState(false);
  // const [creators, setCreators] = useState([]);

  // const getCreators = async () => {
  //   setIsLoading(true);
  //   try {
  //     const creatorId = "28m374JYEiEDqmi44TCV";
  //     const result = await fetch(
  //       `/api/get-single-creator?creatorId=${creatorId}`
  //     );
  //     if (result.status === 404) {
  //       setIsError(true);
  //       throw new Error("Something went wrong!");
  //     }
  //     const jsonResponse = await result.json();
  //     setCreators(jsonResponse.creators);
  //     setIsError(false);
  //   } catch (err) {
  //     console.log({ err });
  //     setIsError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const [addCreatorFormValues, setAddCreatorFormValues] = useState({
    name: "",
    age: 18,
  });

  useEffect(() => {
    // getCreators();
  }, []);

  const handleClick = () => {
    Router.push("/onboarding/personal-details");
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log({ addCreatorFormValues });
    const response = await fetch("/api/creator", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addCreatorFormValues),
    });
    console.log({ response });
  };

  return (
    <div style={{ background: "green" }}>
      LANDING PAGE...
      <br />
      {/* {isLoading && (
        <span style={{ fontSize: "90px", color: "red" }}>LOADING...</span>
      )}
      {error && <span>ERROR...</span>}
      {!isLoading &&
        !error &&
        creators.length > 0 &&
        creators.map(creator => (
          <div key={creator.age}>
            <h1>{creator.name}</h1>
            <h1>{creator.age}</h1>
          </div>
        ))} */}
      <Flex
        w="40"
        direction="column"
        as="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Heading size="3xl" color="#623C3C" w="100%" textAlign="center">
          Add Creator
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={e =>
              setAddCreatorFormValues(prevState => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            placeholder="Name"
            value={addCreatorFormValues.name}
          />
        </FormControl>
        <FormControl>
          <NumberInput
            value={addCreatorFormValues.age}
            allowMouseWheel
            clampValueOnBlur={false}
          >
            <NumberInputField
              onChange={e =>
                setAddCreatorFormValues(prevState => ({
                  ...prevState,
                  age: +e.target.value,
                }))
              }
              placeholder="Age"
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button type="submit">ADD CREATOR</Button>
      </Flex>
      <Image
        src="/images/shoes-flat-lay.jpg"
        alt="Landing Image"
        height={200}
        width={200}
      />
      <Button
        onClick={() => {
          handleClick();
        }}
        variant="next"
        rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
      >
        HEY
      </Button>
    </div>
  );
};

export default LandingPageContainer;
