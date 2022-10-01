<template>
<div class="track" ref="track" @mouseover="selected=true" @mouseleave="selected=false" @click="$emit('play',data)">
  <div class="id"
       v-show="!selected"
  >{{this.$.vnode.key+1}}</div>
  <img class="image"
       :src="data.img"

  >
  <div class="title">{{data.title}}</div>
  <a class="artist">{{data.artist}}</a>
  <div class="play-triangle"
       v-show="selected"
  ></div>
  <like-icon class="like"></like-icon>
  <label class="duration">{{ Math.floor(Math.round(audio.duration) /60) || 0}}:{{('0'+(Math.round(audio.duration)||0)%60).slice(-2)}}</label>

</div>
</template>

<script>
import LikeIcon from "@/components/UI/icons/likeIcon";

export default {
  name: "search-track",
  components: {LikeIcon},
  props:{
    data:{
      type:Object,

    }
  },
  data(){
    return{
      selected:false,
      audio:new Audio(this.data.link)
    }
  },
  methods:{


  }
}
</script>

<style scoped>
*{
  font-family: Montserrat;
  color: rgb(167,167,167);
  font-size: 10px;
}
.track{
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 1px;
  border-radius: 4px;
  overflow: hidden;
  display: inline-block;
  float: left;

}
.track:hover{
  background-color: rgb(40,40,40);
}
.image{
  position: absolute;
  width:30px ;
  height: 30px;
  left: 25px;
  top:5px;
}
.title{
  position: absolute;
  left: 60px;
  top:5px;
  width:270px;
  height: 15px;
  color: white;
  overflow: hidden;
}
.artist{
  position: absolute;
  left: 60px;
  top:20px;
  height: 16px;
  width: 250px;
  overflow: hidden;
}

.play-triangle{
  width: 8px;
  height: 8px;
  border-style: solid;
  border-width: 4px 0 4px 8px;
  border-color: transparent transparent transparent white;
  position: absolute;
  left: 8px;
  top:15px;
  z-index: 2;
}
.duration{
  position: absolute;
  right: 20px;
  color: rgb(167,167,167);
  top:15px;
  height: 10px;
  width: 10px;
}
.like{
  margin-left: auto;
  position: absolute;
  right: 40px;
  top:15px;
  width: 15px;
  height: 15px;
}
.id{
  float: left;
  margin-top: 14px;
  margin-left: 8px;
}
</style>