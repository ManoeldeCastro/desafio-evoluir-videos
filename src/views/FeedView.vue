<template>
  <div>
    <h1 class="text-2xl font-bold mb-4 text-blue-800">C</h1>

    <div class="mb-4">
      <input
        v-model="searchQuery"
        @input="searchVideos"
        class="border border-gray-300 rounded-md px-3 py-2 w-full text-gray-700 bg-white"
        placeholder="Pesquisar vídeos..."
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <video-card
        v-for="video in sortedVideos"
        :key="video.id"
        :video="video"
        @video-selected="openModal"
      ></video-card>
    </div>


    <div v-if="modalVideo" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="modal-close-button" @click="closeModal">&times;</span>
        <iframe
          width="854" height="480" 
          :src="modalVideo"
          frameborder="0"
          class="embedded-video"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div v-if="searchQuery && !loading && sortedVideos.length === 0">
      <p class="text-gray-700">Nenhum vídeo correspondente encontrado.</p>
    </div>

    <div v-if="loading" class="text-center">
      <p class="text-gray-700">Carregando vídeos...</p>
    </div>

    <div v-if="!loading && !searchQuery && sortedVideos.length === 0" class="text-center">
      <p class="text-gray-700">Nenhum vídeo para exibir.</p>
    </div>
  </div>
</template>

<script>
import { searchVideos } from '@/services/api';
import VideoCard from '@/components/VideoCard.vue';

export default {
  data() {
    return {
      videos: [],
      searchQuery: '',
      loading: false, 
      modalVideo: null,
    };
  },
  components: {
    VideoCard,
  },
  computed: {
    sortedVideos() {
      return this.videos.slice().sort((a, b) => b.viewCount - a.viewCount);
    },
  },
  mounted() {
    this.searchVideos();
  },
  methods: {
    async searchVideos() {
      this.loading = true;
      try {
        const videos = await searchVideos(this.searchQuery, 10);
        this.videos = videos;
      } catch (error) {
        console.error('Erro ao buscar vídeos do YouTube:', error);
      } finally {
        this.loading = false;
      }
    },
    openModal(videoUrl) {
      this.modalVideo = videoUrl;
    },
    closeModal() {
      this.modalVideo = null;
    },
  },
};
</script>

<style scoped>


input[type="text"] {
  border-color: #c4e1f4; 
  color: #4D4D4E; 
  border-radius: 0.25rem;
  padding: 0.5rem;
}



.modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: white;
  border-radius: 0.25rem;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: #4D4D4E;
  cursor: pointer;
}

.embedded-video {
  width: 854px;
  height: 480px;
}
</style>
