<template>
  <div class="video-item" @click="openModal">
    <div class="max-w-sm h-[27rem] rounded-lg overflow-hidden shadow-xl mb-4 text-white bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg shadow-zinc-800">
      <img :src="video.snippet.thumbnails.medium.url" :alt="video.snippet.title" class="w-full">
      <div class="px-6 py-4">
        <div class="font-bold text-lg mb-2" style="color: var(--color-heading)">
          {{ truncateTitle(video.snippet.title) }}
        </div>
        <p class="text-gray-300 text-sm">
          {{ truncateDescription(video.snippet.description) }}
        </p>
      </div>
      <div class="px-6 py-4">
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
    video: Object,
  },
  computed: {
    videoUrl() {
      // Retorna a URL do vídeo
      return `https://www.youtube.com/embed/${this.video.id.videoId}`;
    },
  },
  methods: {
    truncateTitle(title) {
      if (title.length > 25) {
        return title.slice(0, 25) + '...';
      }
      return title;
    },
    truncateDescription(description) {
      if (!description || description.length === 0) {
        return 'Vídeo sem descrição';
      }
      if (description.length > 100) {
        return description.slice(0, 100) + '...';
      }
      return description;
    },
    openModal() {
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
</style>
