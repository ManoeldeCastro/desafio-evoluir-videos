<template>
  <div
    class="min-h-screen to-mvceditora-bg  flex items-center justify-around"
  >
    <img alt="Vue logo" src="./assets/logo.png" />
    <div
      class="form max-w-md w-full space-y-8 p-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg shadow-md"
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
.form {
  transition: ease 2s;
}
.form:hover{
 background-color:  #B0D5E8;
}
.to-mvceditora-bg {
  background-color: #c4e1f460;
}

.focus\:ring-mvceditora-primary:focus {
  ring-color: #312783;
}
img {
  width: 1000px;
}


</style>
