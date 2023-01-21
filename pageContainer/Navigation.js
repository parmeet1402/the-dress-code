import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";

const Navigation = () => {
  return (
    <Flex justifyContent="space-between" >
      <Box
        onClick={() => router.push("/dashboard")}
        display="flex"
        alignItems={"center"}
      >
        <Image
          my={3}
          mr={2}
          src="https://pic.onlinewebfonts.com/svg/img_181677.png"
          h={10}
          w={6}
          alt="logo"
          bgColor="white"
        />
        <Text my={3} minW="max-content">
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
