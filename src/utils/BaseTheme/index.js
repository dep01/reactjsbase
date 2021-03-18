import ic_react from "../../assets/icons/ic_react.png";

class BaseTheme {
  static staticIcons = {
    ic_react: ic_react,
  };
  static baseColor = {
    primary: "#072A47",
    secondary: "#ffffff",
    text: {
      white: "#072A47",
      black: "#ffffff",
    },
    icon: {
      active: "#C8AF73",
      unactive: "#d5d5d5",
    },
    border: {
      primary: "#f5f5f5",
      secondary: "#000",
    },
  };
  static baseStyles = {
    content: {
      minHeight: "100%",
      backgroundColor: this.baseColor.primary,
      width: "100%",
      padding: 20,
    },
  };
}

export default BaseTheme;
