<template>
  <div class="Root__main-content">

    <div class="Root__top-bar">
      <svg class="back"></svg>
      <svg class="front"></svg>
    </div>
    <div class="content">
      LibPage
    </div>


  </div>
</template>

<script>
export default {
  name: "lib-page"
}
</script>

<style scoped>
.Root__top-bar{
  height: 64px;
  width: 100%;
  min-height: 32px;
  background-color: rgba(16,16,16,0.5);
  display: inline-block;
  position: relative;

}
.Root__top-bar{
  height: 64px;
  width: 100%;
  min-height: 32px;
  background-color: rgba(16,16,16,0.5);
  display: inline-block;
  position: relative;

}

.Root__main-content{
  height: 100%;
  background-color: rgb(29,29,29);
  width: 100%;
  overflow-y:auto;
  overflow-x: hidden ;
}
.back{
  width: 32px;
  height: 32px;
  background-image: url("../icons/back.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 20px;
  margin-top: 18px;
}
.front{
  width: 32px;
  height: 32px;
  background-image: url("../icons/forward.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 60px;
  margin-top: 18px;
}
.content{

  height: 300px;
  width: 1687px;
  margin-bottom: 130px;
  position: relative;
  overflow:hidden;
  color: white;

}

</style>