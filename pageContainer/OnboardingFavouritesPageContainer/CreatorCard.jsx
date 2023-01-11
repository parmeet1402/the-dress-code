import { useState } from "react";

const { Flex, Heading, Image, Icon } = require("@chakra-ui/react");

const CreatorCard = ({ data }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Flex
      onClick={() => handleClick()}
      style={
        selected === true
          ? { border: "1px solid black" }
          : { border: "1px solid transparent" }
      }
    >
      <Flex direction="column" m={5}>
        <Image
          maxW="200px"
          alt={data.instagramUserName}
          src="https://picsum.photos/200/300"
        />
        <Flex justify="space-between">
          <Heading size={1}>{data.name}</Heading>
          <span>{data.age}</span>
        </Flex>
        <Flex>
          {data.themes.map((theme, index) => {
            return <Icon key={index} href={theme} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default CreatorCard;
