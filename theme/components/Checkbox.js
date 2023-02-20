import colors from "theme/foundations/colors";
const Checkbox = {
  // The parts of the component
  parts: [],
  // The base styles for each part
  baseStyle: {
    field: {
      border: `2px solid ${colors.gray}`,
      color: colors.gray,
    },
  },
  // The size styles for each part
  sizes: {
    md: { field: { borderRadius: "0.5em" } },
  },
  // The variant styles for each part
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {
    variant: null,
  },
};

export default Checkbox;
