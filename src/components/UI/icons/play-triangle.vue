<template>
  <div class="play-triangle"></div>
</template>

<script>
export default {
  name: "play-triangle"
}
</script>

<style scoped>
.play-triangle{
  width: 16px;
  height: 16px;
  border-style: solid;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent black;
}
</style>