<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="flex justify-center">
    <div class="flex justify-center text-center bg-blue-500/25 pl-2 mx-5 py-2 rounded-lg shadow-md">
      <!-- Contêiner para os botões e a caixa de pesquisa -->
      <div class="flex m-2 px-2 gap-3">
        <!-- Contêiner para os botões de pesquisa -->
        <custom-button class="text-sm" @click="searchVideosEnsinoFundamental">Ensino fundamental</custom-button>
        <!-- Botão para pesquisa de ensino fundamental -->
        <custom-button class="text-sm" @click="searchVideosEnsinoMedio">Ensino médio</custom-button>
        <!-- Botão para pesquisa de ensino médio -->
      </div>

      <div class="flex text-center items-center mx-1 py-1 rounded-lg">
        <!-- Contêiner para a caixa de pesquisa -->
        <input
          type="search"
          :value="localSearchQuery"
          @input="searchVideos"
          id="searchVideos"
          class="border border-gray-300 w-50 rounded-md px-2 text-gray-700 bg-white mx-3 appearance-none text-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
          placeholder="Pesquisar vídeos..."
        />
        <!-- Caixa de pesquisa -->
        <label for="searchVideos">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <path
              d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
          </svg>
          <!-- Ícone de pesquisa -->
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue';
export default {
  props: {
    searchQuery: String, // Propriedade para a consulta de pesquisa
  },
  components: {
    CustomButton, // Componente do botão personalizado
  },
  data() {
    return {
      localSearchQuery: this.searchQuery, // Variável local para a caixa de pesquisa
    };
  },
  watch: {
    localSearchQuery(newSearchQuery) {
      // Assista a mudanças na variável local e emita um evento quando ela mudar
      this.$emit("update:searchQuery", newSearchQuery);
    },
  },
  methods: {
    searchVideosEnsinoFundamental() {
      // Método para pesquisa de ensino fundamental
      this.$emit("searchVideosEnsinoFundamental");
    },
    searchVideosEnsinoMedio() {
      // Método para pesquisa de ensino médio
      this.$emit("searchVideosEnsinoMedio");
    },
    searchVideos() {
      // Método para acionar a pesquisa
      this.$emit("searchVideos", this.localSearchQuery);
    },
  },
};
</script>

<style scoped>
input[type='search'] {
  border-color: #c4e1f4;
  color: #4d4d4e;
  border-radius: 0.25rem;
  padding: 0.3rem;
}
</style>
