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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [creators, setCreators] = useState([]);

  const getCreators = async () => {
    setIsLoading(true);
    try {
      const creatorId = "28m374JYEiEDqmi44TCV";
      const result = await fetch(
        `/api/get-single-creator?creatorId=${creatorId}`
      );
      if (result.status === 403) {
        setIsUserLoggedIn(false);
        localStorage.setItem("logged-in", "false");
      }
      if (result.status === 404) {
        setIsError(true);
        throw new Error("Something went wrong!");
      }
      const jsonResponse = await result.json();
      setCreators(jsonResponse.creators);
      setIsError(false);
    } catch (err) {
      console.log({ err });
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // const [addCreatorFormValues, setAddCreatorFormValues] = useState({
  //   name: "",
  //   age: 18,
  // });
  const [addUserFormValues, setUserFormValues] = useState({
    name: "",
    age: 18,
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   getCreators();
  // }, []);

  const handleClick = () => {
    Router.push("/onboarding/personal-details");
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   console.log({ addCreatorFormValues: addUserFormValues });
  //   const response = await fetch("/api/creator", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(addUserFormValues),
  //   });
  //   console.log({ response });
  // };

  // Handle submit for registeration
  const handleSubmit = async e => {
    e.preventDefault();

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUserFormValues),
    });

    // TODO: Update Global state to say user is logged in
    setIsUserLoggedIn(true);
    localStorage.setItem("logged-in", "true");
    // user.isLoggedIn = true

    console.log({ response });

    // const response = await fetch("/api/creator", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(addUserFormValues),
    // });
    // console.log({ response });
  };

  const handleLogout = async () => {
    await fetch("/api/logout");
    setIsUserLoggedIn(false);
    localStorage.setItem("logged-in", "false");
  };

  const logIn =
    typeof window !== "undefined"
      ? localStorage.getItem("logged-in") === "true"
      : null;

  console.log({ logIn });

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
      {/* <Flex
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
      </Flex> */}
      {logIn ? <Heading>LOGGED IN</Heading> : <Heading>LOGGED OUT!</Heading>}
      <Flex
        w="40"
        direction="column"
        as="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Heading size="3xl" color="#623C3C" w="100%" textAlign="center">
          Register A User
        </Heading>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            onChange={e =>
              setUserFormValues(prevState => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            placeholder="Name"
            value={addUserFormValues.name}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            onChange={e =>
              setUserFormValues(prevState => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            placeholder="Email"
            value={addUserFormValues.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={e =>
              setUserFormValues(prevState => ({
                ...prevState,
                password: e.target.value,
              }))
            }
            placeholder="Password"
            value={addUserFormValues.password}
          />
        </FormControl>
        <FormControl>
          <NumberInput
            value={addUserFormValues.age}
            allowMouseWheel
            clampValueOnBlur={false}
          >
            <NumberInputField
              onChange={e =>
                setUserFormValues(prevState => ({
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
        <Button type="submit">LOGIN</Button>
        <Button type="button" onClick={handleLogout}>
          Logout
        </Button>
        <Button type="button" onClick={getCreators}>
          GET ALL MY CREATORS!! PRIVATE API
        </Button>
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
