<template>
  <footer class="text-black mt-3 py-5 text-center rounded-t-md footer">
        <!-- Conteúdo do rodapé aqui -->
        <p>&copy; {{ currentYear }} Manoel Dias. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #FCF45E;
}
</style>
