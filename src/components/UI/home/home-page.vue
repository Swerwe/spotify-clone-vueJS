<template>
  <div class="Root__main-content">

    <div class="Root__top-bar" >
      <svg class="back"></svg>
      <svg class="front"></svg>
    </div>
    <content-section
        @play ="(data)=>playSong(data)"
        v-bind:sectionName="sectionNames[item]"
        v-for="item of [...Array(3).keys()]"
        :key = item
        :tracks = tracksList.slice(8*item,8*item+8)
    ></content-section>


  </div>

</template>

<script>
import ContentSection from "@/components/UI/home/MainContentSection";
export default {
  name: "home-page",
  components:{ContentSection},
  data(){
    return {

      tracksList: this.$store.state.tracks,
      sectionNames:['Spotify Playlists','Sleep','Focus'],
      audioSrc:'',

    }
  },
  methods:{
    playSong(data){

      this.audioSrc = data.link
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