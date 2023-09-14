<template>
  <!-- O template define a estrutura HTML do componente -->
  <div class="min-h-screen bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg to-white flex items-center justify-around">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="max-w-md w-full space-y-8 p-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-mvceditora-font">
          Faça seu Login:
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md -space-y-px">
          <div>
            <label for="email-address" class="text-mvceditora-font">Endereço de E-mail</label>
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

        <div>
          <button
            type="submit"
            class="relative w-full flex justify-center py-2 mt-4 text-sm font-medium text-white bg-mvceditora-logo border rounded-lg hover:bg-mvceditora-font hover:shadow focus:outline-none focus:ring focus:ring-mvceditora-primary"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// Array com os endereços de e-mail autorizados para login
const emails = [
  'vselecao@gruponeiva.com.br',
  'coordenacao.edtech@mvceditora.com.br',
  'dev03@gruponeiva.com.br',
  'edtech01@gruponeiva.com.br',
  'manoeldiasmf@gmail.com',
  'dev01@gruponeiva.com.br',
  'head.tech@mvceditora.com.br'
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
};
</script>

<style scoped>
  /* Estilos CSS específicos do componente */
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
