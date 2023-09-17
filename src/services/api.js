import axios from 'axios';

const API_KEY = 'AIzaSyC-dK6hZPPy36bfpEbB2DLvP19ZTNt6FPA';

export async function searchVideos(query, maxResults) {
  try {
    const searchQuery = `${query} educacional`;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: 10,
        part: 'snippet',
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
}

export async function searchVideosByQuery(query, maxResults) {
  try {
    const searchQuery = `${query} educacional`;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: 10,
        part: 'snippet',
      },
    });

    return response.data.items;
  } catch (error) {
    throw error;
  }
}
