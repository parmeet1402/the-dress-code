import { Divider, Flex, Heading, Link, Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <footer style={{ marginTop: "10px" }}>
      <Divider my="20px" />

      <Flex direction="column">
        <Heading size="md">The Dress Code</Heading>
        <Flex justify="space-between" px="10px" mt="10px">
          <Flex direction="column">
            <Heading size="sm">Address:</Heading>
            <Text>Address Line 1</Text>
            <Text>Address Line 2</Text>
            <Text>Ludhiana, Punjab, India</Text>
          </Flex>

          <Flex direction="column">
            <Heading size="sm">Contact:</Heading>
            <Text>+91 70093-89017</Text>
            <Text>+91 99011-09231</Text>
            <Link>thedresscode@gmail.com</Link>
          </Flex>

          <Flex direction="column">
            <Text>Dashboard</Text>
            <Text>Creators</Text>
            <Text>Profile</Text>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
export default Footer;
