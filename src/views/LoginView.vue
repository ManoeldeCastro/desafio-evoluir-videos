<template>
  <div
    class="min-h-screen to-mvceditora-bg  flex items-center justify-around"
  >
    <img alt="Vue logo" src="./assets/logo.png" />
    <div
      class="h-screen flex flex-col justify-center space-y-7 p-8 rounded-lg bg-white backdrop-blur-lg shadow-md hover:shadow-2xl "
    >
      <div class="flex flex-col text-center font-normal text-2xl justify-center title-login">
      <h2>Seja bem-vindo!</h2>
      <h2>Entre na sua conta:</h2>
      </div>
      <login-form :emails="emails" :senha="senha" />
    </div>
  </div>
</template>

<script>
import WordTitle from "../components/WordTitle.vue";
import LoginForm from "@/components/LoginForm.vue";

// Array com os endereços de e-mail autorizados para login
const emails = [
  'vselecao@gruponeiva.com.br',
  'coordenacao.edtech@mvceditora.com.br',
  'dev03@gruponeiva.com.br',
  'edtech01@gruponeiva.com.br',
  'manoeldiasmf@gmail.com',
  'dev01@gruponeiva.com.br',
  'head.tech@mvceditora.com.br',
];

// Senha para autenticação
const senha = 'grupoNeiva';

export default {
  components: {
    WordTitle,
    LoginForm,
  },
  data() {
    return {
      emails: emails, // Passa as variáveis emails e senha para o componente LoginForm.vue
      senha: senha,
    };
  },
};
</script>

<style scoped>
.title-login {
  color: #312783;
}
.to-mvceditora-bg {
  background-color: #c4e1f460;
}

img {
  width: 1000px;
}


</style>
