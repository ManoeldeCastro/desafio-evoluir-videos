<template>
  <!-- O template define a estrutura HTML do componente -->
  <button
    class="custom-button text-color-default"
    @click="$emit('click')"
  >
    <slot></slot> <!-- Inclui o conteúdo inserido no botão usando a tag <slot> -->
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
};
</script>

<style scoped>
.custom-button {
  position: relative;
  font-family: inherit;
  font-weight: 500;
  padding: 8px 24px;
  border: 2px solid  #312783;
  border-radius: 48px;
  z-index: 1;
  overflow: hidden;
  cursor: pointer;
  transition: ease 0.9s;
}

.custom-button:hover {
  color: #ffffff;
  border: 2px solid transparent;
}

.custom-button::before {
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

.custom-button:hover::before {
  width: 100%;
}
</style>
