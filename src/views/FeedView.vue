<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="p-5" v-if="authenticated">
    <!-- Verifica se o usuário está autenticado -->
    <div class="flex text-center justify-center">
      <img class="imgLogo text-center justify-center" alt="Vue logo" src="./assets/logo.png"> 
    </div>
    <div class="text-end">
    </div>
    <div class="flex justify-between">
      <div>
        <h1 class="mx-5 text-center text-3xl font-extrabold text-mvceditora-font bg-blue-500/25 p-2 rounded-lg">Página de vídeos</h1>
      </div>
      <div class="flex justify-end text-center items-center mx-5 bg-blue-500/25 pl-2 py-2 rounded-lg">
        <label for="searchVideos" class="">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
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

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-5 gap-4 mt-6 justify-center">
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

    <div v-if="!loading && !searchQuery && sortedVideos.length === 0" class="text-center">
      <!-- Exibe uma mensagem se não houver vídeos para exibir -->
      <p class="text-gray-700">Nenhum vídeo para exibir.</p>
    </div>
  </div>
  <div v-else class="text-center items-center justify-center mt-10 text-lg">
    <!-- Exibe uma mensagem de erro se o usuário não estiver autenticado -->
    <h1 class="text-gray-700 text-center items-center justify-center">Você não tem permissão para acessar esta página. Faça login primeiro.</h1>
    <button class="p-2 justify-center items-center text-center py-2 mt-4 text-sm font-medium text-white bg-mvceditora-logo border rounded-lg hover:bg-mvceditora-font hover:shadow focus:outline-none focus:ring focus:ring-mvceditora-primary" @click="backToLogin">Voltar para página de login</button>
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
      authenticated: false, // Adicione um estado de autenticação inicialmente falso
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
    this.checkAuthentication(); // Verifique a autenticação quando a página for carregada
  },
  methods: {
    async checkAuthentication() {
      // Verifique se o usuário está autenticado (você pode usar localStorage ou Vuex)
      const isAuthenticated = localStorage.getItem('authenticated') === 'true';

      if (isAuthenticated) {
        this.authenticated = true;
        this.searchVideos();
      } else {
        // Se o usuário não estiver autenticado, você pode redirecioná-lo para a página de login
        // this.$router.push('/login');
        // Ou simplesmente definir o estado como falso e exibir uma mensagem de erro
        this.authenticated = false;
      }
    },
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
    backToLogin() {
      this.$router.push('/'); // Redireciona o usuário de volta para a página de login
    },
  },
};
</script>

<style scoped>


input[type="search"] {
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

.imgLogo {
  width: 30rem;
}
</style>
