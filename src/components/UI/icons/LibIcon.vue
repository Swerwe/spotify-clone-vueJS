<template>

  <svg role="img" height="24" width="24" class="icon"
       @mouseover = 'color="white"' @mouseleave = 'color="rgb(179,179,179)"'
       aria-hidden="true" viewBox="0 0 24 24">
    <path :fill="color" d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path></svg>
</template>

<script>
export default {
  name: "lib-icon",
  data(){
    return{
      color:'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.icon{
  position: absolute;
  display: inline-block;
  vertical-align: bottom;

  width: 24px;
  height: 24px;
  background-size: cover;
}
</style>