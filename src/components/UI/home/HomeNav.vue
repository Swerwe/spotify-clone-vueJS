<template>

  <div class="bar">
    <home-icon :color></home-icon>
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
import HomeIcon from "@/components/UI/icons/HomeIcon";
export default {
  name:'home-nav',
  components: {HomeIcon},
  props:{
    name:{
      type:String,
      required:true,
    },
    iconSrc:{
      type:String,
      required: true
    }
  },
  data(){
    return{
      color: 'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.bar{
  position: relative;
  margin-top: 30px;
  display: block;
  height: 3%;
  cursor: pointer;

}
.icon{
  position: absolute;
  display: inline-block;
  vertical-align: bottom;
  left: 15%;
  width: 24px;
  height: 24px;
  background-size: cover;
}
.name{
  position: absolute;
  color: #a7a7a7;
  display: inline-block;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 0.875rem;
  left: 35%;
  top: 4px;

}
.name:hover{
  color: white;
  transition: 0.5s;
}
.svg path{
  fill: white;
}
</style>