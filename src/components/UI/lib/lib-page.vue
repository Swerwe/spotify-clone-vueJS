<template>
  <div class="Root__main-content">

    <div class="Root__top-bar">
      <svg class="back"></svg>
      <svg class="front"></svg>
    </div>
    <div class="content">
      <span class="title">Playlists</span>
      <div class="liked-songs" @mouseover="hover=true" @mouseleave="hover=false">
        <div class="liked-description">{{Array.from($store.state.liked).map((x) => x.title).join(', ')}}</div>
        <div class="liked-title">Liked Songs</div>
        <div class="liked-count">{{$store.state.liked.size}} liked songs</div>
        <Transition>
        <div class="playbutn" @click="playLiked" v-if="hover">
          <svg v-if="!$store.state.audio.isPlaying" role="img" height="24" width="24" viewBox="0 0 24 24" class="triangle"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
          <svg v-if="$store.state.audio.isPlaying" viewBox="0 0 16 16" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>
        </div>
        </Transition>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "lib-page",
  data(){
    return{
      hover:false
    }
  },
  methods:{
    playLiked(){
      if (this.$store.state.audio.isPlaying){
        this.$store.commit('setPlayingStatus',!this.$store.state.audio.isPlaying)
        return
      }
      let qeque = Array.from(this.$store.state.liked)
      this.$store.commit('updateAudio',qeque[0])
      qeque.shift()
      this.$store.commit('setQeque', qeque)
      this.$store.commit('setPlayingStatus',!this.$store.state.audio.isPlaying)

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
  padding-top:50px;
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
.content{

  height: 300px;
  width: 1687px;
  margin-bottom: 130px;
  position: relative;
  overflow:hidden;
  color: white;

}
.title{
  font-family: Montserrat;
  font-size: 20px;
  position: relative;
  top:30px;
  left: 30px;
  height: 20px;
  width: 100px;
  font-weight: 1000;
}
.liked-songs{
  font-family: Montserrat;
  position: relative;
  left: 35px;
  top:40px;
  width: 300px;
  height: 200px;
  border-radius: 4px;
  background: linear-gradient(rgb(59,41,235),rgb(136,133,223));
  padding:20px;
}
.liked-description{
  font-size: 14px;
  max-width: 280px;
  max-height: 50px;
  overflow-wrap: anywhere;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(179,179,179);

}
.liked-title{
  margin-top: 40px;
  width: 300px;
  height: 20px;
  font-size: 20px;
}
.liked-count{
  margin-top: 10px;
  margin-left: 3px;
  font-size: 12px;
  color:rgb(179,179,179);
  width: 160px;
  height: 10px;
}
.playbutn{
  width: 48px;
  height: 48px;
  background: #1ed760;
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 200px;
  top:-20px;
}
.v-enter-active,
.v-leave-active {
  transition: all 300ms;



}
.v-enter-from,
.v-leave-to {
  transform:translateY(8px);
  opacity: 0;
}
</style>