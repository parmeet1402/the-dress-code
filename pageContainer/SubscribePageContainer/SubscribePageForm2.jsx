import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import Navigation from "pageContainer/Navigation";

import { router } from "next/router";
import Footer from "pageContainer/Footer";

import { useState } from "react";
import { countries } from "./countries";

const SubscribePageForm2 = ({ creatorName, setSubmitted }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    street: "",
    city: "",
  });

  //handle methods
  const handleSubmit = () => {
    setSubmitted("form3");
  };

  const handleName = (text) => {
    setFormValues((prevState) => ({
      ...prevState,
      name: text,
    }));
  };
  const handleStreet = (text) => {
    setFormValues((prevState) => ({
      ...prevState,
      street: text,
    }));
  };
  const handleCity = (text) => {
    setFormValues((prevState) => ({
      ...prevState,
      city: text,
    }));
  };

  return (
    <Flex direction="column" px={10} gap={10} bgColor="#3431A6" minH="100vh">
      <Navigation />
      <Flex direction="column" gap={10}>
        <Heading textAlign="center" size="4xl">
          Subscribe to {creatorName}'s Wardrobe
        </Heading>
        <Flex justify="space-around" className="form container" w="100%">
          <Flex direction="column" className="form-left" w="50%">
            <Heading size="xl">Address Details</Heading>

            <FormControl>
              <Flex direction="column" gap={6} p={5}>
                <FormLabel maxW="65%">
                  Name
                  <Input
                    placeholder="Name"
                    onChange={(e) => {
                      handleName(e.target.value);
                    }}
                  />
                </FormLabel>
                <FormLabel maxW="65%">
                  Street
                  <Input
                    onChange={(e) => {
                      handleStreet(e.target.value);
                    }}
                  />
                </FormLabel>
                <FormLabel maxW="65%">
                  City
                  <Input
                    onChange={(e) => {
                      handleCity(e.target.value);
                    }}
                  />
                </FormLabel>
                <FormLabel maxW="65%">
                  Country
                  <Select placeholder="Select a country">
                    {countries.map((country) => (
                      <option value={country} key={country}>
                        {country}
                      </option>
                    ))}
                  </Select>
                </FormLabel>
                <FormLabel maxW="65%">
                  Email
                  <Input placeholder="someone@something.com" />
                </FormLabel>
              </Flex>
            </FormControl>
          </Flex>

          <Flex
            className="page"
            // transform="rotate(5deg)"
            w="35%"
            // h="max-content"
            justify="center"
            align="center"
          >
            <Flex
              // transform="skew(20deg,10deg)"
              direction="column"
              bgColor="white"
              py={20}
              px={10}
            >
              <Flex justify="end">
                <Image
                  justifyContent="end"
                  w="100px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/20041204_15sant_Latvia_Postage_Stamp_B.jpg/640px-20041204_15sant_Latvia_Postage_Stamp_B.jpg"
                />
              </Flex>
              <Flex direction="column">
                <Text>From</Text>
                <Text>&emsp;The Dress Code</Text>
                <Text>&emsp;The122-B Model House, Model Town</Text>
                <Text>&emsp;TheLudhiana, 141002</Text>
                <br />
                <Text>To</Text>
                <Text>&emsp;{formValues.name}</Text>
                <Text>&emsp;{formValues.street}</Text>
                <Text>&emsp;{formValues.city}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex justify="flex-end">
          <Button
            variant="next"
            rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
            onClick={() => handleSubmit()}
          >
            PAY
          </Button>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
};

export default SubscribePageForm2;
