import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import { onboardingSelectors, useOnboardingState } from "state";

const QuantityCard = ({ title }) => {
  const [themeQuantity, setThemeQuantity] = useState({
    outdoorCasual: 0,
    western: 0,
    formal: 0,
    dress: 0,
    sports: 0,
    holiday: 0,
  });
  const updateSelectedQuantity = useOnboardingState(
    onboardingSelectors.selectOnboardingStateUpdateSelectedQuantity
  );

  useEffect(() => {
    updateSelectedQuantity(themeQuantity);
  }, [themeQuantity]);

  const displayCounter = (title) => {
    switch (title) {
      case "outdoor-casual":
        return <Text>{themeQuantity.outdoorCasual}</Text>;
      case "western":
        return <Text>{themeQuantity.western}</Text>;
      case "formal":
        return <Text>{themeQuantity.formal}</Text>;
      case "dress":
        return <Text>{themeQuantity.dress}</Text>;
      case "sports":
        return <Text>{themeQuantity.sports}</Text>;
      case "holiday":
        return <Text>{themeQuantity.holiday}</Text>;
      default:
        break;
    }
  };

  const handleQuantityIncrease = (title) => {
    switch (title) {
      case "outdoor-casual":
        themeQuantity.outdoorCasual < 10
          ? setThemeQuantity({
              ...themeQuantity,
              outdoorCasual: themeQuantity.outdoorCasual + 1,
            })
          : null;
        break;
      case "western":
        themeQuantity.western < 10
          ? setThemeQuantity({
              ...themeQuantity,
              western: themeQuantity.western + 1,
            })
          : null;
        break;
      case "formal":
        themeQuantity.formal < 10
          ? setThemeQuantity({
              ...themeQuantity,
              formal: themeQuantity.formal + 1,
            })
          : null;
        break;
      case "dress":
        themeQuantity.dress < 10
          ? setThemeQuantity({
              ...themeQuantity,
              dress: themeQuantity.dress + 1,
            })
          : null;
        break;
      case "sports":
        themeQuantity.sports < 10
          ? setThemeQuantity({
              ...themeQuantity,
              sports: themeQuantity.sports + 1,
            })
          : null;
        break;
      case "holiday":
        themeQuantity.holiday < 10
          ? setThemeQuantity({
              ...themeQuantity,
              holiday: themeQuantity.holiday + 1,
            })
          : null;
        break;
      default:
        break;
    }
  };
  console.log(themeQuantity);
  const handleQuantityDecrease = (title) => {
    switch (title) {
      case "outdoor-casual":
        themeQuantity.outdoorCasual > 0
          ? setThemeQuantity({
              ...themeQuantity,
              outdoorCasual: themeQuantity.outdoorCasual - 1,
            })
          : null;
        break;
      case "western":
        themeQuantity.western > 0
          ? setThemeQuantity({
              ...themeQuantity,
              western: themeQuantity.western - 1,
            })
          : null;
        break;
      case "formal":
        themeQuantity.formal > 0
          ? setThemeQuantity({
              ...themeQuantity,
              formal: themeQuantity.formal - 1,
            })
          : null;
        break;
      case "dress":
        themeQuantity.dress > 0
          ? setThemeQuantity({
              ...themeQuantity,
              dress: themeQuantity.dress - 1,
            })
          : null;
        break;
      case "sports":
        themeQuantity.sports > 0
          ? setThemeQuantity({
              ...themeQuantity,
              sports: themeQuantity.sports - 1,
            })
          : null;
        break;
      case "holiday":
        themeQuantity.holiday > 0
          ? setThemeQuantity({
              ...themeQuantity,
              holiday: themeQuantity.holiday - 1,
            })
          : null;
        break;
      default:
        break;
    }
  };
  return (
    <Flex m={5} align="center" direction="column">
      <Image src="https://picsum.photos/500/500" borderRadius="50%" />
      <Text fontWeight="extrabold" mt="5px">
        {title}
      </Text>
      <Flex gap="3" align="center">
        <Button
          size="sm"
          fontSize="large"
          onClick={() => handleQuantityIncrease(title)}
        >
          +
        </Button>
        {displayCounter(title)}
        <Button
          size="sm"
          fontSize="large"
          onClick={() => handleQuantityDecrease(title)}
        >
          -
        </Button>
      </Flex>
    </Flex>
  );
};
export default QuantityCard;
