<template>
  <!-- Estrutura HTML para exibir informações do vídeo -->
  <div class="video-item text-color-default"  @click="openModal">
    <div
      class="max-w-sm h-[20rem] rounded-lg overflow-hidden shadow-sm mb-4 text-white text-color-default  bg-blue-500/60 shadow-zinc-800 cursor-pointer"
      title="Clique para assistir"
    >
      <!-- Exibe a imagem em miniatura do vídeo -->
      <img
        :src="video.snippet.thumbnails.medium.url"
        :alt="video.snippet.title"
        class="w-full video-thumbnail"
      />
      <div class="px-6 pt-2 pb-1">
        <!-- Título do canal -->
        <span
          class="snippet text-color-default inline-block bg-mvceditora-logo/50 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
        >
          {{ video.snippet.channelTitle }}
        </span>
      </div>
      <div class="px-6 py-2">
        <!-- Título do vídeo truncado -->
        <div class="font-bold text-base mb-2 leading-5">
          {{  capitalizeFirstLetter(video.snippet.title) }}
        </div>
        <!-- Descrição do vídeo truncada -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Propriedade que recebe o objeto de vídeo como entrada
    video: Object,
    animateCard: Boolean,
  },
  computed: {
    videoUrl() {
      // Retorna a URL incorporada do vídeo
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
  },
  methods: {
    capitalizeFirstLetter(str) {
      // Função para capitalizar a primeira letra e tornar o restante minúsculo
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
.snippet {
  background-color: white;
}
.video-item {
  transition: transform 0.5s ease; 
  opacity: .97;
}

.video-item:hover {
  transform: scale(1.05); 
  opacity: 1;
}
</style>
