import { TouchableOpacity, View, StyleSheet,Image, Text } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import moment from "moment";

type props ={
  name: string;
  createdAt: string;
}
export default function PostHeader({
    name,
    createdAt,
  }: props) {
    const formattedDate = moment(createdAt).fromNow(); 
    return (
      <View style={PostHeaderStyles.container}>
        <View style={PostHeaderStyles.userContainer}>
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={[PostHeaderStyles.profileUsername]}>{name}</Text>
          <Text style={PostHeaderStyles.dot}>•</Text>
          <Text style={[PostHeaderStyles.dateText]}>{formattedDate}</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  }
  const PostHeaderStyles = StyleSheet.create({
    container: {
      backgroundColor: "black",
      flexDirection: "row",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      marginVertical:10,
    },
    userContainer:{
      flexDirection: "row",
      alignItems:'center',
    },
    profileImg: {
      height: 40,
      width: 40,
      borderRadius: 20,
      resizeMode: "contain",
      marginRight: 10,
    },
    profileUsername: {
      marginLeft: 8,
      fontWeight: "600",
      fontSize: 16,
      color: "white",
      textDecorationColor:"#fff"
    },
    dateText: {
    fontSize: 14,
    color: "#bbb",
    },
    dot: {
      fontSize: 16,
      color: "#bbb",
      marginHorizontal: 5,
    },
  });