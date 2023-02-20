import colors from "../foundations/colors";

const buttonOverrides = {
  sizes: {
    desktopLarge: {
      fontSize: "24px",
      padding: "24px 140px",
    },
    desktopRegular: {
      fontSize: "18px",
      padding: "20px 130px",
    },
    mobileLarge: {
      fontSize: "18px",
      padding: "18px 130px",
    },
    mobileRegular: {
      fontSize: "16px",
      padding: "12px 34px",
    },
  },
  variants: {
    //--------------------------- Primary Buttons -----------------------------//

    primary: {
      backgroundColor: colors.black,
      borderRadius: "40px",
      color: colors.white,
    },

    //--------------------------- Outline Buttons -----------------------------//

    outline: {
      backgroundColor: "transparent",
      border: `3px solid ${colors.black}`,
      borderRadius: "40px",
      color: colors.black,
    },

    //--------------------------- Ghost Buttons -----------------------------//

    ghost: {
      backgroundColor: "transparent",
      borderRadius: "40px",
      border: "none",
      color: colors.black,
    },
    next: {
      backgroundColor: colors.cream,
      border: `1px solid ${colors.black}`,
      borderRadius: "none",
      fontSize: "20px",
      h: "64px",
      textTransform: "uppercase",
      w: "252px",
    },
  },
};

export default buttonOverrides;
