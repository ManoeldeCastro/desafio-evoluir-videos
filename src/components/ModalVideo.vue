<template>
  <!-- O template define a estrutura HTML do componente -->
  <div v-if="modalVideo" class="modal" @click="closeModal">
    <!-- Modal exibido se a prop 'modalVideo' for verdadeira -->
    <div class="modal-content" @click.stop>
      <!-- Conteúdo do modal -->
      <span class="modal-close-button" @click="closeModal">&times;</span>
      <!-- Botão de fechar o modal -->
      <iframe
        :src="modalVideo"
        frameborder="0"
        class="embedded-video"
        allowfullscreen
      ></iframe>
      <!-- Iframe para exibir o vídeo -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalVideo: String,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>

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
</style>
