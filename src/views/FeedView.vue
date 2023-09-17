<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="p-5 ">
    <header class="flex bg-white shadow-lg rounded-lg justify-between px-20 py-3 items-centers mx-16 mb-5">
     <img src="https://mvceditora.com.br/wp-content/themes/portalv4.0/img/logo.png" alt="Logo" class="logo-mvc">
     <word-waves class="mt-5" text="Página de Vídeos"/>
    <nav class="">
      <custom-button
          class="text-black"
          @click="logout"
        >
          Logout
        </custom-button>
    </nav>
  </header>
    <!-- Verifica se o usuário está autenticado -->
    <div class="flex justify-between">

      <div
        class="flex justify-end text-center items-center mx-5 bg-blue-500/25 pl-2 py-2 rounded-lg"
      >
        <label for="searchVideos" class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 512 512"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
        </label>
        <input
          type="search"
          v-model="searchQuery"
          @input="searchVideos"
          id="searchVideos"
          class="border border-gray-300 w-50 rounded-md px-3 py-2 text-gray-700 bg-white mx-5 appearance-none text-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
          placeholder="Pesquisar vídeos..."
        />
      </div>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-5 gap-4 mt-6 justify-center"
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
    <div v-if="modalVideo" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="modal-close-button" @click="closeModal">&times;</span>
        <iframe
          :src="modalVideo"
          frameborder="0"
          class="embedded-video"
          allowfullscreen
        ></iframe>
      </div>
    </div>

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
</template>

<script>
import { searchVideos } from '@/services/api';
import VideoCard from '@/components/VideoCard.vue';
import CustomButton from "@/components/CustomButton.vue";
import WordWaves from "@/components/WordWaves.vue";

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
    WordWaves,
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
    logout() {
      localStorage.setItem('authenticated', JSON.stringify(false));
      this.$router.push('/');
    },
    backToLogin() {
      this.$router.push('/');
    },
  },
  created() {
    this.searchVideos();
  },
};
</script>



<style scoped>
input[type='search'] {
  border-color: #c4e1f4;
  color: #4d4d4e;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.logo-mvc{
  width: 6rem;
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
  color: #4d4d4e;
  cursor: pointer;
}

.embedded-video {
  width: 854px;
  height: 480px;
}

.imgLogo {
  width: 30rem;
}

</style>
