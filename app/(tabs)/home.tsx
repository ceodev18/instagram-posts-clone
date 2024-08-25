import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { IPost } from '@/models/Post';
import { fetchPosts } from '@/service/apiService';
import Post from '@/components/post';
import Loader from '@/components/LoaderPost';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const loadPosts = async () => {
    if (loading || isEndReached) return;

    setLoading(true);
    try {
      const postsData = await fetchPosts(page, 20); // Fetch 20 posts at a time
      if (postsData.length > 0) {
        setPosts((prevPosts) => [...prevPosts, ...postsData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setIsEndReached(true);
      }
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Loader isLoading={loading} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post postData={item} />}
        contentContainerStyle={{ paddingTop: 20 }}
        onEndReached={loadPosts}
        onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default Home;
