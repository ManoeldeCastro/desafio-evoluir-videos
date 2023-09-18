<template>
  <div class=" text-center text-3xl font-semibold text-mvceditora-font">
    <h1>
      {{ text }}
    </h1>

  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
};
</script>
<style scoped>
.text-mvceditora-font{
  color:  #312783;
}
</style>

