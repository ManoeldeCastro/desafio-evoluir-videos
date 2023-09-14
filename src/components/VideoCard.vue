<template>
  <div class="video-item" @click="openModal(video)">
    <div class="max-w-sm h-[27rem] rounded-lg overflow-hidden shadow-xl mb-4 text-white bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg shadow-zinc-800">
      <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title" class="w-full">
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2" style="color: var(--color-heading)">{{ video.snippet.title }}</div>
        <p class="text-gray-300 text-sm">
          {{ video.snippet.description ? video.snippet.description : "Vídeo sem descrição..." }}
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-mvceditora-logo/50 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2" style="background-color: var(--color-text)">
          {{ video.snippet.channelTitle }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: Object,
  },
  computed: {
    videoUrl() {
      // Retorna a URL do vídeo
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
  },
  methods: {
    openModal(video) {
      this.$emit('video-selected', this.videoUrl);
    },
  },
};
</script>

<style scoped>
  .from-mvceditora-bg {
    background-color: var(--color-background);
  }

  .to-mvceditora-bg {
    background-color: var(--color-background-soft);
  }
</style>
