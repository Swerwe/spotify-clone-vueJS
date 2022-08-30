<template>
  <div class="app">

    <div class="Root__top-container">
      <div class="Root__nav-bar"></div>

      <div class="Root__main-content">
        <div class="Root__top-bar"></div>
        <content-section
            v-bind:sectionName="name"
            v-for="item of [...Array(3).keys()]"
            :key = item
            :tracks = tracksList.slice(8*item,8*item+8)
        ></content-section>



      </div>



    </div>
  </div>


</template>

<script>
import ContentSection from "@/components/UI/MainContentSection";
import tracks from "@/data/tracks";
export default {
  components: {ContentSection},
  data(){
    return {
      name:"Spotify Playlists",
      tracksList:tracks
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;

}
@font-face {
  font-family: "Montserrat";
  src: url("./components/UI/fonts/Montserrat-Regular.ttf");
}

.app{
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.Root__top-container{
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;

}
.Root__top-bar{
  height: 6%;
  width: 100%;
  background-color: rgba(16,16,16,0.5);
  display: inline-block;


}
.Root__nav-bar{
  vertical-align: top;
  position: relative;
  width: 12%;
  height: 100%;
  background-color: rgb(0,0,0);
  display: inline-block;
}
.Root__main-content{
  height: 100%;
  display: inline-block;
  background-color: rgb(29,29,29);
  width: 88%;
  overflow-y:auto;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: rgb(90,90,90);
}

</style>
