<template>
  <div class="min-h-screen bg-gradient-to-b from-mvceditora-bg to-mvceditora-bg to-white flex items-center justify-center">
    <div class="max-w-md w-full space-y-8 p-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-mvceditora-font">
          Faça Login
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm -space-y-px">
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
export default {
  data() {
    return {
      email: '',
      password: '',
      mockUser: {
        email: 'usuario@exemplo.com', // E-mail fictício para fins de demonstração
        senha: 'senha123', // Senha fictícia para fins de demonstração
      },
    };
  },
  methods: {
    login() {
      // Lógica de autenticação aqui
      // Neste exemplo, vamos apenas verificar se os dados inseridos correspondem aos dados mockados
      if (this.email === this.mockUser.email && this.password === this.mockUser.senha) {
        // Redirecionar o usuário para a página de feed após o login bem-sucedido
        this.$router.push('/feed');
      } else {
        alert('Credenciais inválidas');
      }
    },
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

  .text-mvceditora-font {
    color: #4d4d4e;
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
