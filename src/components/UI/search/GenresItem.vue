<template>
<div class="item" :style="{background:randColor()}">
  <div class="genre-name">
    <slot></slot>
  </div>

</div>
</template>

<script>
export default {
  name: "genres-item",
  props:{
    label:{
      type:String
    }
  },
  data(){
    return{
      colors:["#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff","#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93"]
    }
  },
  methods:{
    randColor:function (){
      return this.colors[Math.floor(Math.random()*this.colors.length)];
    }
  }

}
</script>

<style scoped>
.item{
  margin-left: 1.5%;
  margin-top:0.6%;
  border-radius: 6px;
  display: inline-flex;
  justify-content: space-around;
  width: 500px;
  height: 261px;
  background-color: rgb(16,16,16);
  position: relative;

}
.genre-name{
  position: absolute;
  color: white;
  width: 100px;
  height: 30px;
  font-family: 'Montserrat';
  font-size: 50px;
  font-weight: 1000;
  left: 10px;
  top:20px;

}
</style>

