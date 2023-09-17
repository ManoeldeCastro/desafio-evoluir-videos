<template>
  <!-- Estrutura HTML para exibir informações do vídeo -->
  <div class="video-item" :class="{ 'slide-in': animateCard }" @click="openModal">
    <div
      class="max-w-sm h-[21rem] rounded-lg overflow-hidden shadow-xl mb-4 text-white bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg shadow-zinc-800 cursor-pointer tit"
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
          class="snippet inline-block bg-mvceditora-logo/50 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
        >
          {{ video.snippet.channelTitle }}
        </span>
      </div>
      <div class="px-6 py-2">
        <!-- Título do vídeo truncado -->
        <div class="font-bold text-base mb-2">
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
  background-color: #c4e1f450;
}
.from-mvceditora-bg {
  background-color: var(--color-background);
}

.to-mvceditora-bg {
  background-color: var(--color-background-soft);
}

.video-item {
  transition: transform 0.5s ease; 
  opacity: .97;
}

.video-item:hover {
  transform: scale(1.05); 
  opacity: 1;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideInFromLeft 0.5s ease forwards;
}
</style>
