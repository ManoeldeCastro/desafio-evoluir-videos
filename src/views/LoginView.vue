<template>
  <!-- O template define a estrutura HTML do componente -->
  <div
    class="min-h-screen bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg to-white flex items-center justify-around"
  >
    <img alt="Vue logo" src="./assets/logo.png" />
    <div
      class="max-w-md w-full space-y-8 p-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl"
    >
      <div class="word-waves">
        <span
          class=""
        >
          Faça seu Login:
      </span>
        <span>Faça seu Login:</span>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md -space-y-px">
          <div>
            <label for="email-address" class="text-mvceditora-font"
              >Endereço de E-mail</label
            >
            <input
              id="email-address"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none relative block w-full px-3 py-2 mt-1 text-mvceditora-font bg-transparent border-b border-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
              placeholder="Seu E-mail"
            />
          </div>
          <div>
            <label for="password" class="text-mvceditora-font">Senha</label>
            <input
              id="password"
              v-model="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none relative block w-full px-3 py-2 mt-1 text-mvceditora-font bg-transparent border-b border-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
              placeholder="Sua Senha"
            />
          </div>
        </div>

        <div class="">
          <custom-button @click="login"
            type="submit"
            class="button-styled"
          >
            Entrar
          </custom-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

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

// Define a flag 'authenticated' como false no localStorage
localStorage.setItem('authenticated', JSON.stringify(false));

// Armazena os endereços de e-mail e a senha no localStorage
localStorage.setItem('emails', JSON.stringify(emails));
localStorage.setItem('senha', JSON.stringify(senha));

export default {
  data() {
    return {
      email: '', // Armazena o e-mail inserido pelo usuário
      password: '', // Armazena a senha inserida pelo usuário
    };
  },
  methods: {
    // Função chamada quando o formulário de login é enviado
    login() {
      // Verifica se o e-mail inserido está na lista de e-mails autorizados e se a senha está correta
      if (emails.includes(this.email) && this.password === senha) {
        // Define a flag 'authenticated' como true no localStorage
        localStorage.setItem('authenticated', JSON.stringify(true));

        // Redireciona o usuário para a página '/feed'
        this.$router.push('/feed');
      } else {
        // Exibe um alerta se as credenciais forem inválidas
        alert('Credenciais inválidas');
      }
    },
  },
  components: {
    CustomButton,
  }
};
</script>

<style scoped>
.word-waves span {
  position: absolute;
  left: 50%;
  color: #312783;
  font-size: 2rem;
  transform: translate(-50%, -50%);
}

.word-waves span:nth-child(1){
  color: transparent;
  -webkit-text-stroke: 0.3px #312783;
}
.word-waves span:nth-child(2){
  color: #312783;
  -webkit-text-stroke: 1px #312783;
  animation: animation 3s ease-in-out infinite;
}

@keyframes animation {
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 50%, 100% 52%, 100% 100%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 60%, 10% 65%, 34% 66%, 51% 62%, 67% 50% 84% 45%, 100% 46%, 100% 46%, 100% 100%, 0% 100%);
  }
}
.button-styled {
  color: #312783;
  position: relative;
  left: 35%;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  padding: 12px 24px;
  border: none;
  border-radius: 48px;
  box-shadow: 6px 6px 12 #c5c5c5, 6px 6px 12px #ffffff;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
}
.button-styled:hover {
  color: #ffffff;
}
.button-styled::before {
  content: "";
  display: block;
  position: absolute;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  border-radius: 48px;
  background-image: linear-gradient(to right, #3bd9d9 0%, #312783 100%);
  transition: 0.5s ease;
  z-index: -1;
}
.button-styled:hover::before {
  width: 100%;
}



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

.hover\:bg-mvceditora-font:hover {
  background-color: #4d4d4e;
}

.hover\:shadow:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
