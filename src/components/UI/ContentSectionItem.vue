<template>
  <div class="item" @mouseover="show=true" @mouseleave="show=false">
    <img class="img" :src = trackData.img>
    <div class="Name">{{ trackData.title }}</div>
    <div class="artist">{{ trackData.artist }}</div>
    <Transition>
    <div class="play" v-show="show">
        <div class="play-triangle"></div>
    </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name:"component-item",
  data(){
    return{
      show:false
    }
  },
  props:{
    trackData:{
      type:Object,
      required:true,

    }
  },
  methods:{
    loadImg(e){
      console.log(e)
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
  color: white;
  position:relative;
  top: 13.7%;
  left:11%;
  max-height: 40px;
  font-size: 12px;
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
  width: 16px;
  height: 16px;
  margin-left: 37%;
  margin-top: 33%;
  border-style: solid;
  border-width: 8px 0 8px 16px;
  border-color: transparent transparent transparent black;
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: transform 500ms;

}

.v-enter-from,
.v-leave-to {
  transform:translateY(8px);
  opacity: 0;
}
</style>