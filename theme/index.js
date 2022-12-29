// Main theme entry point
import { extendTheme } from "@chakra-ui/react";

// Foundation
import colors from "./foundations/colors";

// Components
import Button from "./components/Button";
import Input from "./components/Input";

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Mukta",
    body: "Mukta",
  },
  components: {
    Button,
    Input,
    Select: { ...Input },
  },
});

export default theme;
