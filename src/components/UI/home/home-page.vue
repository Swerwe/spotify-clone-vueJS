<template>
  <div class="Root__main-content">

    <div class="Root__top-bar" >
      <svg class="back"></svg>
      <svg class="front"></svg>
    </div>

    <play-list v-if="isPlaylist" :playlist="currentPlaylist"
               @play ="(data)=>playSong(data)"

    ></play-list>
    <div v-if="!isPlaylist">
    <content-section
        @play ="(data)=>playSong(data)"
        :sectionName="item"
        v-for="item of sectionNames"
        :key = item
    ></content-section>
    </div>



  </div>

</template>

<script>
import ContentSection from "@/components/UI/home/MainContentSection";
import PlayList from "@/components/UI/home/Playlist";
export default {
  name: "home-page",
  components:{PlayList, ContentSection},
  data(){
    return {

      tracksList: this.$store.state.tracks,
      sectionNames:['Spotify Playlists','Sleep','Focus'],
      audioSrc:'',
      currentPlaylist:undefined,
      isPlaylist:false

    }
  },
  methods:{
    playSong(data){
      console.log(this.currentPlaylist)
      this.currentPlaylist = data.album
      this.audioSrc = data.link
      this.isPlaylist = true
      this.$emit('update:src',data)

    }
  }

}
</script>

<style scoped>

.Root__top-bar{
  height: 50px;
  width: 100%;
  min-height: 32px;
  background-color: rgba(16,16,16,0.5);
  display: inline-block;
  position: fixed;
  top:0;
  z-index: 2;

}

.Root__main-content{

  height: 100%;
  background-color: rgb(29,29,29);
  width: 100%;
  overflow-y:auto;
  overflow-x: hidden;
}
.back{
  width: 24px;
  height: 24px;
  background-image: url("../icons/back.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 31px;
  margin-top: 12px;
}
.front{
  width: 24px;
  height: 24px;
  background-image: url("../icons/forward.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 70px;
  margin-top: 12px;
}
</style>