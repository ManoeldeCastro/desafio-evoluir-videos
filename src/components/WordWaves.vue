<template>
  <div class="word-waves ">
    <span>
      {{ text }}
    </span>
    <span>{{ text }}</span>
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

.word-waves span {
  position: absolute;
  left: 50%;
  color: #312783;
  font-size: 2rem;
  transform: translate(-50%, -50%);
}
.word-waves span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px #312790;
}
.word-waves span:nth-child(2) {
  color: #312783;
  -webkit-text-stroke: 1px #312790;
  animation: animation 3s ease-in-out infinite;
}
@keyframes animation {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      15% 44%,
      32% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      16% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
</style>

