import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LandingPageContainer = () => {
  return (
    <div style={{ background: "green" }}>
      LANDING PAGE CONTAINER...
      <br />
      <Image src="/images/shoes-flat-lay.jpg" height={200} width={200} />
      <Button
        variant="next"
        rightIcon={<HiOutlineArrowNarrowRight size="24px" />}
      >
        HEY
      </Button>
    </div>
  );
};

export default LandingPageContainer;
