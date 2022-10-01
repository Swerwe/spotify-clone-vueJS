<template>
  <div>
  <svg
      @mouseover="color = 'white'" @mouseleave = 'color="rgb(179,179,179)"'
      role="img" height="32" width="32" viewBox="0 0 24 24" class="icon">
    <path :fill="color" d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  </div>
</template>

<script>
export default {
  name: "dots-icon",
  data(){
    return{
      color:'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.icon{
  display: inline-block;
  vertical-align: bottom;
  width: 28px;
  height: 28px;
  background-size: cover;
}
</style>