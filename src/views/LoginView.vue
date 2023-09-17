<template>
  <div
    class="min-h-screen bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg to-white flex items-center justify-around"
  >
    <img alt="Vue logo" src="./assets/logo.png" />
    <div
      class="max-w-md w-full space-y-8 p-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl"
    >
      <word-waves text="Faça seu login:"/>
      <login-form :emails="emails" :senha="senha" />
    </div>
  </div>
</template>

<script>
import WordWaves from "../components/WordWaves.vue";
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
    WordWaves,
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
.from-mvceditora-bg {
  background-color: #c4e1f4;
}

.to-white {
  background-color: white;
}

.to-mvceditora-bg {
  background-color: #c4e1f4;
}

.bg-mvceditora-logo {
  background-color: #312783;
}

.border-mvceditora-font {
  border-color: #4d4d4e;
}

.focus\:ring-mvceditora-primary:focus {
  ring-color: #312783;
}



</style>
