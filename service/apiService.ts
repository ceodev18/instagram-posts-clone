import axios from 'axios';
import { IPost } from '../models/Post';

const API_URL = 'https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts';

export const fetchPosts = async (page: number, limit: number): Promise<IPost[]> => {
  try {
    const response = await axios.get<IPost[]>(API_URL, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};