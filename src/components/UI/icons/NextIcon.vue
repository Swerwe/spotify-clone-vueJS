<template>
  <svg
      class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
      viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color" d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
  </svg>
</template>

<script>
export default {
  name: "next-icon",
  data(){
    return{
      color:'rgb(179,179,179)'
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