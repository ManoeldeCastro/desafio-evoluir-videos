<template>
  <!-- Estrutura HTML para exibir informações do vídeo -->
  <div class="video-item" @click="openModal">
    <div class="max-w-sm h-[27rem] rounded-lg overflow-hidden shadow-xl mb-4 text-white bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg shadow-zinc-800">
      <!-- Exibe a imagem em miniatura do vídeo -->
      <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title" class="w-full">
      <div class="px-6 py-4">
        <!-- Título do vídeo truncado -->
        <div class="font-bold text-lg mb-2" style="color: var(--color-heading)">
          {{ truncateTitle(video.snippet.title) }}
        </div>
        <!-- Descrição do vídeo truncada -->
        <p class="text-gray-300 text-sm">
          {{ truncateDescription(video.snippet.description) }}
        </p>
      </div>
      <div class="px-6 py-4">
        <!-- Título do canal -->
        <span class="snippet inline-block bg-mvceditora-logo/50 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          {{ video.snippet.channelTitle }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Propriedade que recebe o objeto de vídeo como entrada
    video: Object,
  },
  computed: {
    videoUrl() {
      // Retorna a URL incorporada do vídeo
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
  },
  methods: {
    truncateTitle(title) {
      // Função para truncar o título do vídeo se for muito longo
      if (title.length > 25) {
        return title.slice(0, 30) + '...';
      }
      return title;
    },
    truncateDescription(description) {
      // Função para truncar a descrição do vídeo se for muito longa
      if (!description || description.length === 0) {
        return 'Vídeo sem descrição';
      }
      if (description.length > 100) {
        return description.slice(0, 100) + '...';
      }
      return description;
    },
    openModal() {
      // Função para emitir um evento quando o componente é clicado
      // O evento 'video-selected' é emitido com a URL do vídeo incorporado
      this.$emit('video-selected', this.videoUrl);
    },
  },
};
</script>

<style scoped>
  /* Estilos CSS específicos do componente */
  .snippet {
    background-color: #c4e1f450;
  }
  .from-mvceditora-bg {
    background-color: var(--color-background);
  }

  .to-mvceditora-bg {
    background-color: var(--color-background-soft);
  }
</style>
