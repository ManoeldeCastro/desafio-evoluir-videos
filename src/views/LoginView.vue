<template>
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
const emails = ['vselecao@gruponeiva.com.br',
'coordenacao.edtech@mvceditora.com.br',
'dev03@gruponeiva.com.br',
'edtech01@gruponeiva.com.br',
'manoeldiasmf@gmail.com',
'dev01@gruponeiva.com.br',
'head.tech@mvceditora.com.br']

const senha = 'grupoNeiva'
localStorage.setItem('authenticated', JSON.stringify(false));

localStorage.setItem('emails', JSON.stringify(emails));
localStorage.setItem('senha', JSON.stringify(senha));
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      if (emails.includes(this.email) && this.password === senha) {
        localStorage.setItem('authenticated', JSON.stringify(true))
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
