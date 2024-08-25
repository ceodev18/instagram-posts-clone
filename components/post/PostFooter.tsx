import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Entypo, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import typographyStyles from "@/constants/typography";
import styles from "@/style/styles";
import { formatNumber } from "@/utils";
import Caption from "./Caption";

type props = {
  description: string;
  likes: number;
  comments: number;
  saved: boolean;
  liked: boolean;
};
export default function PostFooter({ description, likes, comments, saved, liked }: props) {  
  const [likedPost, setLikedPost] = useState(liked)

  return (
    <View>
      <View style={postFooterStyles.iconsContainer}>
        <View style={postFooterStyles.iconsContainerLeft}>
          <View style={postFooterStyles.iconButton}>
            <TouchableOpacity
              onPress={() => setLikedPost(!likedPost)}>
                {
                  likedPost?
                  <AntDesign name="heart" size={20} color="red"  />
                  :
                  <AntDesign name="hearto" size={20} color={likedPost?"red":"white"} />
                }
            </TouchableOpacity>
            <Text style={postFooterStyles.iconText}>{formatNumber(likes)}</Text>
          </View>
          <View style={postFooterStyles.iconButton}>
            <TouchableOpacity>
              <Feather name="message-circle" size={20} color="white" />
            </TouchableOpacity>
            <Text style={postFooterStyles.iconText}>{formatNumber(comments)}</Text>
          </View>
          <TouchableOpacity style={postFooterStyles.iconButton}>
            <Feather name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          {saved ? (
              <Feather name="bookmark" size={24} color="white" />
            ) : (
              <FontAwesome name="bookmark" size={20} color="white" />
            )}
        </TouchableOpacity>
      </View>
      <View style={postFooterStyles.captionContainer}>
        <Caption>
          {description}
        </Caption>
      </View>      
    </View>
  );
}
const postFooterStyles = StyleSheet.create({
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  iconsContainerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 0.3,
  },
  captionContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 5,
  },
  username: {
    color: "#fff",
    fontSize: 17,
  },
  likesText: {
    color: "white",
    fontSize: 16,
    marginRight: 2,
  },
  likesContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    marginTop: 10,
    flex: 1,
  },
  commentContainer: {
    paddingLeft: 15,
    marginTop: 5,
  },
  comment: {
    color: "#bbb",
    fontSize: 16,
    marginRight: 1,
  },
  addCommentContainer: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 15,
  },
  userImage: {
    marginRight: 10,
    height: 25,
    width: 25,
    overflow: "hidden",
    borderRadius: 12.5,
  },
  addCommentInput: {
    color: "#bbb",
    fontSize: 14,
    alignSelf: "center",
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    color: 'white',
    marginLeft: 5,
  },
});
