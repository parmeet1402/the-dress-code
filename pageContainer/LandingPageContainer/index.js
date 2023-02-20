import { Button } from "@chakra-ui/react";
import Image from "next/image";
import router from "next/router";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LandingPageContainer = () => {
  const handleClick = () => {
    router.push("/onboarding/personal-details");
  };

  return (
    <div style={{ background: "green" }}>
      LANDING PAGE CONTAINER...
      <br />
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
