<template>
  <button
    class="custom-button"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
};
</script>

<style scoped>
.custom-button {
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

.custom-button:hover {
  color: #ffffff;
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
