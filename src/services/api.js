import axios from 'axios';

const API_KEY = 'AIzaSyD1x1C-XpCxA8gp2LPFDJihdVpE5HyOL2s';

export async function searchVideos(query, maxResults) {
  try {
    // Adicione os termos "ensino fundamental" e "ensino médio" à consulta
    const searchQuery = `${query} ensino fundamental ensino médio`;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: maxResults,
        part: 'snippet',
      },
    });
    
    return response.data.items;
  } catch (error) {
    throw error;
  }
}
