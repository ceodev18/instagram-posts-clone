
import { Dimensions } from "react-native";
function getDeviceHeight() {
    return Dimensions.get("window").height;
  }
function getDeviceWidth(){
    return Dimensions.get("window").width;
}
const formatNumber = (number: number): string => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1).replace(/\.0$/, '')} mill`;
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1).replace(/\.0$/, '')} mil`;
  } else {
    return number.toString();
  }
};

export {getDeviceHeight,getDeviceWidth,formatNumber};