import axios from 'axios';

const API_KEY = 'AIzaSyAkTmnITis-LOyTID-fmN-bcR2bSRp-Css';

export async function searchVideos(query, maxResults) {
  try {
    const searchQuery = `${query} educacional ensino fundamental ensino médio`;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: 30,
        part: 'snippet',
      },
    });
    
    return response.data.items;
  } catch (error) {
    throw error;
  }
}
