<template>
  <div class="item" @mouseover="show=true" @mouseleave="show=false">
    <img class="img" :src = 'album.albumImg'>
    <div class="Name">{{ title }}</div>
    <div class="artist">{{ album.albumDescription }}</div>
    <Transition>
    <div class="play" v-show="show" @click="playSong">
        <play-triangle class="play-triangle"></play-triangle>
    </div>
    </Transition>
  </div>
</template>

<script>
import PlayTriangle from "@/components/UI/icons/play-triangle";
export default {
  name:"component-item",
  components: {PlayTriangle},
  data(){
    return{
      show:false
    }
  },
  props:{
    album:{
      type:Object,
      required:true,

    },
    title:{
      type:String
    }
  },
  methods:{

    playSong(){
      let track = this.album.tracks[0]
      this.$emit('play',{link:track.link,title:track.title,img:track.img,artist:track.artist,album:this.album})

    }
  }
}
</script>

<style scoped>
.item{
  margin-left: 1.5%;
  margin-top:0.6%;
  border-radius: 6px;
  display: inline-block;
  width: 177px;
  height: 261px;
  background-color: rgb(16,16,16);
  position: relative;
  transition: 500ms;
}
.item:hover{
  background-color: rgb(40,40,40);
}
.img{
  width: 80%;
  height: 57.2%;
  position: relative;
  left:10%;
  top:4.5%;
  background-color: black;
}
.Name{
  font-family: Montserrat;
  color: white;
  position:relative;
  top: 11.7%;
  left:11%;
  height: 10%;
  font-size: 12px;
  font-weight: bold;
}
.artist{
  font-family: Montserrat;
  color: rgb(179,179,179);
  position:relative;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 25px;
  top: 30px;
  left:11%;
  max-width: 150px;
  font-size: 10px;
  font-weight: inherit;
}
.play{
  position: absolute;
  top:105px;
  left: 103px;
  border-radius: 55px;
  width: 50px;
  height: 50px;
  background-color: rgb(30,215,96);
  transition: opacity 500ms;


}
.play:hover{
  top:104px;
  left: 102px;
  background-color: rgb(31,223,100);
  width: 52px;
  height: 52px;
}
.play-triangle{
  margin-left: 37%;
  margin-top: 33%;
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