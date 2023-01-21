import { useState } from "react";
import SubscribePageForm1 from "./SubscribePageForm1";
import SubscribePageForm2 from "./SubscribePageForm2";
import SubscribePageForm3 from "./SubscribePageForm3";

const SubscribePageContainer = ({ creatorName }) => {
  const [submitted, setSubmitted] = useState("form1");
  switch (submitted) {
    case "form1":
      return (
        <SubscribePageForm1
          creatorName={creatorName}
          setSubmitted={setSubmitted}
        />
      );
    case "form2":
      return (
        <SubscribePageForm2
          creatorName={creatorName}
          setSubmitted={setSubmitted}
        />
      );
    case "form3":
      return (
        <SubscribePageForm3
          creatorName={creatorName}
          setSubmitted={setSubmitted}
        />
      );
    default:
      break;
  }
};

export default SubscribePageContainer;
