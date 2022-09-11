<template>
  <svg
      class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
      viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" :fill="color"></path>
  </svg>
</template>

<script>
export default {
  name: "prev-icon",
  data() {
    return {
      color: 'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.icon{
  margin: 0 0;
  display: inline-block;
  vertical-align: bottom;
  width: 30px;
  height: 30px;
  margin-top: 20px;
  background-size: cover;
}
</style>