<template>
  <div class="">
    <header
      class="flex  rounded-lg justify-between px-5 py-3 items-centers  mb-6"
    >
      <img
        src="https://mvceditora.com.br/wp-content/themes/portalv4.0/img/logo.png"
        alt="Logo"
        class="logo-mvc"
      />
      <h2 class="text-color-default font-bold text-3xl mt-4">Vídeos</h2>
      <nav class="">
        <custom-button class="text-base" @click="logout">Sair</custom-button>
      </nav>
    </header>

    <!-- Componente SearchBar -->
    <search-bar
      :searchQuery="searchQuery"
      @searchVideosEnsinoFundamental="searchVideosEnsinoFundamental"
      @searchVideosEnsinoMedio="searchVideosEnsinoMedio"
      @searchVideos="searchVideos"
    ></search-bar>

    <div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 gap-4 mt-6 justify-center"
      >
        <!-- Lista de vídeos -->
        <video-card
          v-for="video in sortedVideos"
          :key="video.id"
          :video="video"
          @video-selected="openModal"
        ></video-card>
      </div>

      <!-- Modal de Vídeo -->
      <ModalVideo :modalVideo="modalVideo" @close="modalVideo = null" />

      <div v-if="searchQuery && !loading && sortedVideos.length === 0">
        <!-- Exibe uma mensagem se nenhum vídeo for encontrado na pesquisa -->
        <p class="text-gray-700">Nenhum vídeo correspondente encontrado.</p>
      </div>
      <div v-if="loading" class="text-center">
        <!-- Exibe uma mensagem de carregamento -->
        <p class="text-gray-700">Carregando vídeos...</p>
      </div>
      <div
        v-if="!loading && !searchQuery && sortedVideos.length === 0"
        class="text-center"
      >
        <!-- Exibe uma mensagem se não houver vídeos para exibir -->
        <p class="text-gray-700">Nenhum vídeo para exibir.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { searchVideos } from '@/services/api';
import VideoCard from '@/components/VideoCard.vue';
import CustomButton from '@/components/CustomButton.vue';
import WordTitle from '@/components/WordTitle.vue';
import SearchBar from '@/components/SearchBar.vue'; 
import ModalVideo from '@/components/ModalVideo.vue';

export default {
  data() {
    return {
      videos: [],
      searchQuery: '',
      loading: false,
      modalVideo: null,
      authenticated: false,
    };
  },
  components: {
    VideoCard,
    CustomButton,
    WordTitle,
    SearchBar,
    ModalVideo,
  },
  computed: {
    sortedVideos() {
      return this.videos.slice().sort((a, b) => b.viewCount - a.viewCount);
    },
  },
  methods: {
    async searchVideos() {
      this.loading = true;
      try {
        const videos = await searchVideos(this.searchQuery, 12);
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
      this.modalVideo = false;
    },
    logout() {
      localStorage.setItem('authenticated', JSON.stringify(false));
      this.$router.push('/');
    },
    async searchVideosByQuery(query) {
      this.loading = true;
      try {
        const videos = await searchVideos(query, 10);
        this.videos = videos;
      } catch (error) {
        console.error('Erro ao buscar vídeos do YouTube:', error);
      } finally {
        this.loading = null;
      }
    },
    searchVideosEnsinoFundamental() {
      this.searchVideosByQuery('ensino fundamental');
    },
    searchVideosEnsinoMedio() {
      this.searchVideosByQuery('ensino medio');
    },
  },
  created() {
    this.searchVideos();
  },
};
</script>

<style scoped>
.logo-mvc {
  width: 6rem;
}
</style>
