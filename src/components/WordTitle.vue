<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="text-center text-3xl font-semibold text-color-default">
    <!-- Um elemento de título -->
    <h1>
      {{ text }}
      <!-- Renderiza o texto fornecido como propriedade -->
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    text: String, // Propriedade para o texto a ser exibido
  },
};
</script>
<style scoped>

</style>

