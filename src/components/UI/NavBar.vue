<template>
  <div class="Root__nav-bar">
    <spotify-icon></spotify-icon>
    <div class="bar">
      <home-icon></home-icon>
      <div class="name">Home</div>
    </div>
    <div class="bar">
      <search-icon></search-icon>
      <div class="name">Search</div>
    </div>
    <div class="bar">
      <lib-icon></lib-icon>
      <div class="name">Your Library</div>
    </div>

  </div>

</template>

<script>
import SpotifyIcon from "@/components/UI/SpotifyIcon";
import HomeIcon from "@/components/UI/HomeIcon";
import SearchIcon from "@/components/UI/SearchIcon";
import LibIcon from "@/components/UI/LibIcon";

export default {
  name:'nav-bar',
  components: {LibIcon, SearchIcon, HomeIcon, SpotifyIcon},
  props:{
    home:{
      required:true
    },
    search:{
      required:true
    },
    lib:{
      required:true
    },
  }
}
</script>

<style scoped>
.Root__nav-bar{
  vertical-align: top;
  width: 245px;
  height: 100%;
  background-color: rgb(0,0,0);
}
.bar{
  position: relative;
  margin-top: 30px;
  display: block;
  height: 3%;
  cursor: pointer;

}
.name{
  position: absolute;
  color: #a7a7a7;
  display: inline-block;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 0.875rem;
  left: 35%;
  top: 4px;

}
.name:hover{
  color: white;
  transition: 0.5s;
}
.svg path{
  fill: white;
}
</style>