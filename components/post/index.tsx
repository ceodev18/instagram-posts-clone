import React from "react";
import PostFooter from "./PostFooter";
import PostImages from "./PostImage";
import PostHeader from "./PostHeader";
import { View, StyleSheet } from "react-native";
import { IPost } from "@/models/Post";

type props = {
  postData: IPost;
};
export default function Post({ postData }: props) {
  const {
    avatar,
    name,
    image,
    description,
    id,
    likes,
    comments,
    saved,
    liked,
    createdAt,
  
  } = postData;
   

  return (
    <View style={postMainStyles.container}>
      <PostHeader name={name} createdAt={createdAt}/>
      <PostImages images={[image]} />
      <PostFooter
        description={description}
        likes={likes}
        comments={comments}
        saved={saved}
        liked={liked}
      />
      <View style={postMainStyles.separator} />
    </View>
  );
}
const postMainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 8
  },
  separator: {
    marginTop: 8,
    height: 0.3,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});