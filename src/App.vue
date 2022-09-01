<template>
  <div class="app">

    <div class="Root__top-container">
      <nav-bar :home="home" :search = "search" :lib="lib"></nav-bar>

      <div class="Root__main-content">
        <div class="Root__top-bar">
          <svg class="back"></svg>
          <svg class="front"></svg>
        </div>
        <content-section
            v-bind:sectionName="sectionNames[item]"
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
import NavBar from "@/components/UI/NavBar";
import homeFile from '@/components/UI/icons/homepage.svg'
import searchFile from '@/components/UI/icons/search.png'
import libFile from '@/components/UI/icons/lib.png'
export default {
  components: {NavBar, ContentSection},
  data(){
    return {

      tracksList:tracks,
      home:homeFile,
      search:searchFile,
      lib:libFile,
      sectionNames:['Sleep','Mood','Focus']

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
  display: flex;
  justify-content: flex-start;

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
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: rgb(90,90,90);
}
.back{
  width: 32px;
  height: 32px;
  background-image: url("./components/UI/icons/back.png");
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
  background-image: url("./components/UI/icons/forward.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 60px;
  margin-top: 18px;
}

</style>
