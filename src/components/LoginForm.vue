<template>
  <form class="mt-5 space-y-4" @submit.prevent="login">
    <div class="rounded-md flex flex-col gap-5">
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
          class="appearance-none relative block rounded-md w-full px-3 py-2 mt-1 text-mvceditora-font bg-transparent border-b border-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
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
          class="appearance-none relative block w-full px-3 rounded-md py-2 mt-1 text-mvceditora-font bg-transparent border-b border-mvceditora-font focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-md"
          placeholder="Sua Senha"
        />
      </div>
    </div>

    <div>
      <custom-button @click="login" type="submit" class="button-styled">
        Entrar
      </custom-button>
    </div>
  </form>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  props: {
    emails: Array, // Define emails como uma propriedade
    senha: String, // Define senha como uma propriedade
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Agora, você pode acessar as propriedades emails e senha aqui
      if (this.emails.includes(this.email) && this.password === this.senha) {
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
  },
};
</script>

<style scoped>

.border-mvceditora-font {
  border-color: #4d4d4e;
}
.focus\:ring-mvceditora-primary:focus {
  ring-color: #312783;
}
.hover\:bg-mvceditora-font:hover {
  background-color: #4d4d4e;
}

</style>