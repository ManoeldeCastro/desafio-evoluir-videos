import axios from 'axios';

const API_KEY = 'AIzaSyAcuibdQ7gDzz4Uk3o9FJGS8I0ogYbLiug';

export async function searchVideos(query, maxResults) {
  try {
    const searchQuery = `Educativo ${query}`;

    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: API_KEY,
        q: searchQuery,
        type: 'video',
        maxResults: 10,
        part: 'snippet',
      },
    });

    // Mapear os IDs dos vídeos
    const videoIds = response.data.items.map(item => item.id.videoId);

    // Consultar estatísticas dos vídeos para obter viewCount
    const videoStatsResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: API_KEY,
        id: videoIds.join(','),
        part: 'statistics',
      },
    });

    // Mapear os vídeos e adicionar as estatísticas de visualizações
    const videosWithStats = response.data.items.map(item => {
      const stats = videoStatsResponse.data.items.find(video => video.id === item.id.videoId).statistics;
      return {
        ...item,
        statistics: stats,
      };
    });

    // Filtrar os vídeos que têm informações completas (incluindo viewCount)
    const validVideos = videosWithStats.filter(item => item.statistics && item.statistics.viewCount);

    // Ordenar os vídeos por contagem de visualizações (viewCount) em ordem decrescente
    const sortedVideos = validVideos.sort((a, b) => {
      const viewCountA = parseInt(a.statistics.viewCount);
      const viewCountB = parseInt(b.statistics.viewCount);
      return viewCountB - viewCountA;
    });

    return sortedVideos;
  } catch (error) {
    throw error;
  }
}

