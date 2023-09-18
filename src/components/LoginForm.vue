<template>
  <!-- Formulário de login -->
  <form class="mt-5 px-8 space-y-3" @submit.prevent="login">
    <div class="rounded-md flex flex-col ">
      <!-- Campo de Email -->
      <div>
        <input
          id="email-address"
          v-model="email"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="appearance-none relative input-mail text-color-default block rounded-3xl w-full bg-transparent px-8 py-2 mt-1 focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-2xl placeholder:text-center"
          placeholder="Insira aqui o seu e-mail"
        />
      </div>
      <!-- Campo de Senha -->
      <div>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          autocomplete="current-password"
          required
          class="appearance-none relative input-password block rounded-3xl w-full bg-transparent px-8 py-2 mt-2 focus:outline-none focus:ring focus:ring-mvceditora-primary focus:rounded-2xl placeholder:text-center"
          placeholder="Insira aqui o sua senha"
        />
      </div>
    </div>

    <!-- Botão de Entrar -->
    <div class="flex justify-center ">
      <custom-button @click="login" class="w-full" type="submit">
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
.input-mail{
  border: 1px solid #312783;

}
.input-mail::placeholder {
  color: #312783;
  font-weight: 600;
}
.input-password {
  color: gray;
  border: 1px solid gray;
}
</style>
