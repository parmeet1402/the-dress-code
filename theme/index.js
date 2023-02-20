// Main theme entry point
import { extendTheme } from "@chakra-ui/react";

// Foundation
import colors from "./foundations/colors";
import textStyles from "./foundations/textStyles";

// Components
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Text from "./components/Text";

const theme = extendTheme({
  colors,
  components: {
    Button,
    Heading,
    Input,
    Text,
    NumberInput: { ...Input },
    Select: { ...Input },
  },
  fonts: {
    body: "Montserrat",
    heading: "EB Garamond",
  },
  // textStyles, {alternative to headings and text sizes}
});

export default theme;
