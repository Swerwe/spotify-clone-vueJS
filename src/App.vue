<template>
  <div class="app">
    <div class="Root__top-container">
      <nav-bar @select="selectPage" :nav-selects="navSelects"></nav-bar>

      <home-page @update:src="update"
                 v-show="navSelects.home"></home-page>
      <search-page v-show="navSelects.search"
                   @update:src="update"

      ></search-page>
      <lib-page v-show="navSelects.yourlibrary"></lib-page>
    </div>

    <custom-player
        :src="$store.state.audio.audioSrc"
        :title="$store.state.audio.audioTitle"
        :artist="$store.state.audio.audioArtist"
        :img="$store.state.audio.audioImg"
    ></custom-player>
  </div>


</template>

<script>

import NavBar from "@/components/UI/global/NavBar";
import CustomPlayer from "@/components/UI/global/player";
import HomePage from "@/components/UI/home/home-page";
import SearchPage from "@/components/UI/search/search-page";
import LibPage from "@/components/UI/lib/lib-page";
export default {
  components: {LibPage, SearchPage,HomePage, CustomPlayer, NavBar},
  data(){
    return {

      sectionNames:['Sleep','Mood','Focus'],
      audioSrc:'',
      audioTitle:'',
      audioArtist:'',
      audioImg:'',
      navSelects:{
        home:true,
        search:false,
        yourlibrary:false
      }

    }
  },
  methods:{
    selectPage:function (d){
      for (let key in this.navSelects){
        this.navSelects[key] = false
      }
      this.navSelects[d[0]] = true;

    },
    update: function (data){
      this.$store.commit('setAudioSrc',data.link)
      this.$store.commit('setAudioTitle',data.title)
      this.$store.commit('setAudioArtist',data.artist)
      this.$store.commit('setAudioImg',data.img)
      this.$store.commit('setPlayingStatus',true)
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

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



::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-thumb{
  background-color: rgb(90,90,90);
}


</style>
