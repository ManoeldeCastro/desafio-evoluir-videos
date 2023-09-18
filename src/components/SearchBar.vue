<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="flex">
    <div class="flex text-center items-center py-1 px-10 ">
        <!-- Contêiner para a caixa de pesquisa -->
        <input
          type="search"
          :value="localSearchQuery"
          @input="searchVideos"
          id="searchVideos"
          class="input-search text-color-default appearance-none w-96 px-4 h-16  rounded-3xl mt-1  mx-5 focus:outline-none  placeholder:text-left"
          placeholder="Pesquisar vídeos 🔎"
        />
      </div>
    <div class="flex justify-center text-center bg-blue-500/20 pl-2 py-2 my-2 rounded-lg shadow-md">
      <!-- Contêiner para os botões e a caixa de pesquisa -->
      
      <div class="flex justify-center text-center m-2 px-2 gap-3">
        <div class="flex items-center">
          <p class="text-color-default font-bold text-base">Filtrar:</p>
        </div>
        <!-- Contêiner para os botões de pesquisa -->
        <custom-button class="text-sm" @click="searchVideosEnsinoFundamental">Ensino fundamental</custom-button>
        <!-- Botão para pesquisa de ensino fundamental -->
        <custom-button class="text-sm" @click="searchVideosEnsinoMedio">Ensino médio</custom-button>
        <!-- Botão para pesquisa de ensino médio -->
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

.input-search{
  border: 1px solid #312783;
}
.input-search::placeholder {
  color: #312783;
  font-weight: 600;
}
</style>
