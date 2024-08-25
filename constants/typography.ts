import { StyleSheet } from "react-native";

const typographyStyles = StyleSheet.create({
  bold: {
    fontFamily: "OpenSans-Bold",
  },
  md: {
    fontFamily: "OpenSans-Medium",
  },
  sm: {
    fontFamily: "OpenSans-Regular",
    fontSize: 14,
    fontWeight: "400",
  },
  xs: {
    fontFamily: "OpenSans-Regular",
    fontSize: 12,
    fontWeight: "400",
  },
});

export default typographyStyles;
