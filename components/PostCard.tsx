import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { IPost } from '../models/Post';
import styles from '@/style/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PostCardProps {
  post: IPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.location}>{post.location}</Text>
        </View>
      </View>      
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.prefooter}>
        <TouchableOpacity>
          <Icon name="heart" size={24} color={post.liked ? 'red' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bookmark" size={24} color={post.saved ? 'blue' : 'black'} />
        </TouchableOpacity>
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>{post.likes} likes</Text>
        <Text style={styles.comments}>{post.comments} comments</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.description}>
          <Text style={styles.name}>{post.name} </Text>{post.description}
        </Text>
        <Text style={styles.time}>{moment(post.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default PostCard;
