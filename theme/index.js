// Main theme entry point
import { extendTheme } from "@chakra-ui/react";

// Foundation
import colors from "./foundations/colors";

// Components
import Button from "./components/Button";

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Mukta",
    body: "Mukta",
  },
  components: {
    Button,
  },
});

export default theme;
