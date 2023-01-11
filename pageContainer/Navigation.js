import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import Router from "next/router";

const Navigation = () => {
  return (
    <Flex justifyContent="space-between" px={10}>
      <Box display="flex" alignItems={"center"}>
        <Image
          my={3}
          mr={2}
          src="https://pic.onlinewebfonts.com/svg/img_181677.png"
          h={10}
          w={6}
          alt="logo"
        />
        <Text onClick={()=>Router.push("/onboarding/personal-details")} my={3} minW="max-content">
          THE DRESS CODE
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Link href="/login">Log in</Link>
      </Box>
    </Flex>
  );
};
export default Navigation;
