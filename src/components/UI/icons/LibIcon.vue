<template>

  <svg class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
       xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path :fill="color" d="M565 4791 c-91 -23 -173 -90 -215 -176 l-25 -50 0 -2005 0 -2005 23 -45 c35 -72 75 -114 144 -151 l63 -34 245 0 245 0 63 34 c70 38 100 69 140 145 l27 51 0 2005 0 2005 -34 63 c-37 69 -80 109 -151 144 -42 21 -59 23 -270 25 -124 1 -238 -2 -255 -6z"/>
      <path :fill="color" d="M1845 4791 c-91 -23 -173 -90 -215 -176 l-25 -50 0 -2005 0 -2005 23 -45 c35 -72 75 -114 144 -151 l63 -34 245 0 245 0 63 34 c70 38 100 69 140 145 l27 51 0 2005 0 2005 -34 63 c-37 69 -80 109 -151 144 -42 21 -59 23 -270 25 -124 1 -238 -2 -255 -6z"/>
      <path :fill="color" d="M3423 4765 c-134 -29 -360 -97 -399 -120 -87 -51 -143 -144 -151 -249 -5 -56 33 -204 491 -1916 273 -1020 506 -1883 517 -1917 27 -82 82 -143 165 -184 95 -47 152 -44 383 20 102 28 203 62 226 76 88 51 144 143 152 249 5 56 -34 208 -501 1950 -278 1038 -516 1908 -528 1933 -42 84 -147 154 -248 166 -25 3 -73 0 -107 -8z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "lib-icon",
  data(){
    return{
      color:'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.icon{
  position: absolute;
  display: inline-block;
  vertical-align: bottom;
  left: 15%;
  width: 24px;
  height: 24px;
  background-size: cover;
}
</style>