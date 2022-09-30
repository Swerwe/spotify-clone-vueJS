<template>
  <div class="outer">
    <svg  role="img" height="10" width="10" aria-hidden="true" viewBox="0 0 16 16" class="plus"><path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path></svg>
  </div>
</template>

<script>
export default {
  name: "playlist-create-icon"
}
</script>

<style scoped>
.outer{
  width: 21px;
  height: 21px;
  border-radius: 2px;
  background: rgb(179,179,179);
}
.plus{
  margin-left: 6px;
}
</style>