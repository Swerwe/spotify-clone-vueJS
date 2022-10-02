<template>
  <div class="player">
    <img :src="img" class="song-image" v-if="img">
    <div class="title">{{title}}</div>
    <div class="artist">{{artist}}</div>
    <div class="time current">{{ Math.floor(Math.round(currentTime) /60  || 0) }}:{{('0'+Math.round(this.audio.currentTime || 0)%60  ).slice(-2)}}</div>
    <shuffle-icon class="player-button"></shuffle-icon>
    <prev-icon class="player-button" @click="$store.commit('prevTrack')"></prev-icon>
    <div class="play" @click="togglePlaying">
      <svg v-if="!isPlaying" class="play-triangle"  viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="black"></polygon></svg>
      <svg v-if="isPlaying" viewBox="0 0 16 16" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="black"></path></svg>
    </div>
    <next-icon class="player-button" @click="$store.commit('nextTrack')"></next-icon>
    <loop-icon class="player-button"></loop-icon>
    <div class="bar">
      <input type="range" class="slider" min="1"
             ref="bar"
             max="1000"
             value="1"
             @input="progressHandler"
             @mousedown="isDragging=true"
             @mouseup="isDragging=false"
      >
    </div>
    <div class="time duration">{{ Math.floor(Math.round(audio.duration) /60) || 0}}:{{('0'+(Math.round(audio.duration)||0)%60).slice(-2)}}</div>
    <playlist-icon class="playlist"></playlist-icon>
    <volume-icon class="volumeicon"
                 :muted = "muted"
                 @update:muted="(s)=>this.muted = !s"
    ></volume-icon>
    <input
        type="range" class="volumerange" ref="volumebar"


        @input = 'volumeProgress'

    >
  </div>
</template>

<script>

import NextIcon from "@/components/UI/icons/NextIcon";
import PrevIcon from "@/components/UI/icons/PrevIcon";
import ShuffleIcon from "@/components/UI/icons/ShuffleIcon";
import LoopIcon from "@/components/UI/icons/LoopIcon";
import PlaylistIcon from "@/components/UI/icons/playlistIcon";
import VolumeIcon from "@/components/UI/icons/volumeIcon";
export default {
  name: "custom-player",
  components: {VolumeIcon, PlaylistIcon, LoopIcon, ShuffleIcon, PrevIcon, NextIcon,},

  computed:{
    isPlaying(){
      return this.$store.state.audio.isPlaying
    },
    src(){
      return this.$store.state.audio.audioSrc
    }
  },
  watch:{
    isPlaying:function () {

      if (this.isPlaying){
        this.audio.play()
        this.playPause = 'pause'
      }else{
        this.audio.pause()
        this.playPause = 'play'
      }
    },
    src:function updateAudio(){
      console.log(2)
      this.audio.pause()
      this.audio = new Audio()
      this.artist = this.$store.state.audio.audioArtist
      this.title  = this.$store.state.audio.audioTitle
      this.audio.addEventListener('ended',()=>{this.$store.commit('nextTrack')})
      this.img = this.$store.state.audio.audioImg
      this.audio.setAttribute('preload','none')
      this.audio.src = this.src
      this.audio.ontimeupdate = ()=>{
        this.currentTime=this.audio.currentTime
        this.duration = this.audio.duration
        this.progressHandler()
      }
      this.audio.play();
      this.$store.commit('setPlayingStatus',true)

    },
    isDragging: function (){
        if (!this.isDragging){
          this.currentTime = this.duration * this.$refs.bar.value/1000
          this.audio.currentTime = this.currentTime
        }

    },
    muted: function (){
      if (this.muted){
        this.$refs.volumebar.value = '0'
        this.volumeProgress()
      }
    }


    },

  data(){
    return {
      audio: new Audio(),
      playPause:'play',
      currentTime:0,
      duration:0,
      thumbOffset:0,
      isDragging:false,
      muted:false,
      title:'',
      artist:'',
      img:''

    }
  },
  methods:{
    togglePlaying(){
      this.$store.commit('setPlayingStatus',!this.$store.state.audio.isPlaying)

    },
    widthHandler(e){
      this.playerWidth =e.target.document.documentElement.clientWidth*0.4
    },
    progressHandler(e){

      if (!e && !this.isDragging){
        this.$refs.bar.value = Math.round(((this.currentTime/this.duration)*1000 || 0))
      }

      let value = (this.$refs.bar.value-this.$refs.bar.min)/(this.$refs.bar.max-this.$refs.bar.min)*100
      this.$refs.bar.style.background = 'linear-gradient(to right, rgb(179,179,179) 0%, rgb(179,179,179) ' + value + '%, black ' + value + '%, black 100%)'
    },
    volumeProgress(){

      let value = this.$refs.volumebar.value
      this.audio.volume = value/100
      if (value =='0'){
        this.muted = true

      }else{
        this.muted = false
      }

      this.$refs.volumebar.style.background = 'linear-gradient(to right, rgb(179,179,179) 0%, rgb(179,179,179) ' + value + '%, black ' + value + '%, black 100%)'
    }
  }
}
</script>

<style scoped>
*{
  color: rgb(179,179,179);
  font-family: Montserrat;
}
.player{
  position: sticky;
  display: flex;
  justify-content: center;
  bottom:0;
  border: none;
  height: 70px;
  background-color:rgb(35,35,35);
}
.player-button{
  top:20px;
  margin: 15px;
  height: 20px;
  width: 20px;
}
.bar{
  position: absolute;
  width: 40%;
  margin: 0 0;
  background-color: black;
  height: 3px;
  bottom: 10px;
}

.time{
  position: absolute;
  max-height: 10px;
  color: rgb(179,179,179);
  bottom: 10px;
}
.current{

  color: rgb(179,179,179);
  right: 71%;

}
.duration{
  left: 71%;

}

.slider{
  background: linear-gradient(to right, rgb(179,179,179) 0%, rgb(179,179,179) 0%, black 0%, black 100%);
  border-radius: 8px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  position: absolute;
  top:0;
  width: 100%;

}
.slider::-webkit-slider-thumb {
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  -webkit-appearance: none;
  appearance: none;
  background: rgb(179,179,179);
  cursor: pointer;
}
.playlist{
  position: absolute;
  left: 80%;
  top:30px
}
.volumeicon{
  position: absolute;
  left: 84%;
  top:30px;
}
.volumerange{
  position: absolute;
  width: 60px;
  left: 88.5%;
  top:40px;
  height: 3px;
  background: linear-gradient(to right, rgb(179,179,179) 0%, rgb(179,179,179) 50%, black 50%, black 100%);
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}
.volumerange::-webkit-slider-thumb{
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  background: rgb(179,179,179);
  width: 10px;
  height: 10px;
  border-radius: 5px;
}
.song-image{
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
  top: 10px;
}
.title{
  color: white;
  position: absolute;
  left: 70px;
  top:10px
}
.artist{
  position: absolute;
  left: 70px;
  top:30px
}
.play{
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: white;
}
</style>