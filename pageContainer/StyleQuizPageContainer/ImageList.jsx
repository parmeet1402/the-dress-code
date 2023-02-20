import { Box, Flex, Image, useRadio, useRadioGroup } from "@chakra-ui/react";

const BodyType = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  const displayImages = (value) => {
    switch (value) {
      case "hour-glass-body":
        return (
          <Image
            src="https://www.dailylook.com/images/stylequiz/longquiz/hourglass-shape-label.jpg"
            alt="hour glass shaped body"
            h="200px"
            border="2px solid gray"
          />
        );

      case "full-bust-body":
        return (
          <Image
            src="https://www.dailylook.com/images/stylequiz/longquiz/full-bust-shape-label.jpg"
            alt="ful bust shaped body"
            h="200px"
            border="2px solid gray"
          />
        );
      case "pear-body":
        return (
          <Image
            src="https://www.dailylook.com/images/stylequiz/longquiz/pear-shape-label.jpg"
            alt="pear shaped body"
            h="200px"
            border="2px solid gray"
          />
        );
      case "apple-body":
        return (
          <Image
            src="https://www.dailylook.com/images/stylequiz/longquiz/apple-shape-label.jpg"
            alt="apple shaped body"
            h="200px"
            border="2px solid gray"
          />
        );
      case "straight-body":
        return (
          <Image
            src="https://www.dailylook.com/images/stylequiz/longquiz/straight-shape-label.jpg"
            alt="straight shaped body"
            h="200px"
            border="2px solid gray"
          />
        );
      case "tight-top":
        return (
          <Image
            src="https://dailylook.com/images/stylequiz/longquiz/tops-tight.jpg"
            alt="tight top fitting"
            h="200px"
            border="2px solid gray"
          />
        );
      case "fitted-top":
        return (
          <Image
            src="https://dailylook.com/images/stylequiz/longquiz/tops-fitted.jpg"
            alt="fitted top fitting"
            h="200px"
            border="2px solid gray"
          />
        );
      case "straight-top":
        return (
          <Image
            src="https://dailylook.com/images/stylequiz/longquiz/tops-straight.jpg"
            alt="straight top fitting"
            h="200px"
            border="2px solid gray"
          />
        );
      case "loose-top":
        return (
          <Image
            src="https://dailylook.com/images/stylequiz/longquiz/tops-loose.jpg"
            alt="loose top fitting"
            h="200px"
            border="2px solid gray"
          />
        );
    }
  };

  return (
    <Flex as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        _checked={{
          border: "2px solid black",
        }}
        p="1em"
        border="2px solid transparent"
      >
        {displayImages(props.value)}
      </Flex>
    </Flex>
  );
};

const ImageList = ({ valuesArray }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "bodyTypes",
    onChange: console.log,
  });

  const group = getRootProps();
  return (
    <Flex {...group} wrap="wrap">
      {valuesArray.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <BodyType key={value} {...radio}>
            {value}
          </BodyType>
        );
      })}
    </Flex>
  );
};
export default ImageList;
