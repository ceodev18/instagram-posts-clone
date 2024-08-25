import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  location: {
    color: 'gray',
    fontSize: 12,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  prefooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
  liked: {
    color: 'red',
  },
  saved: {
    color: 'green',
  },
  likesContainer: {
    paddingHorizontal: 10,
  },
  likes: {
    fontWeight: 'bold',
  },
  comments: {
    color: 'gray',
    fontSize: 12,
  },
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  description: {
    marginTop: 5,
  },
  time: {
    color: 'gray',
    marginTop: 5,
    fontSize: 12,
  },
});

export default styles;
