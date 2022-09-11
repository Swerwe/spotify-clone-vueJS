<template>
  <svg class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path :fill="color" d="M2200 4704 c-308 -35 -498 -88 -720 -199 -185 -93 -323 -190 -473 -334 -606 -582 -765 -1489 -390 -2236 410 -816 1319 -1232 2199 -1005 242 63 451 165 700 345 11 7 111 -87 426 -401 456 -454 455 -453 560 -441 132 16 213 142 178 274 -12 44 -46 81 -429 466 -317 318 -413 421 -406 431 195 268 309 518 371 808 32 153 44 440 25 594 -34 272 -125 542 -256 759 -202 333 -475 583 -820 750 -189 91 -345 140 -543 170 -97 15 -356 27 -422 19z m433 -453 c392 -83 718 -302 938 -629 340 -506 340 -1155 2 -1666 -90 -136 -273 -319 -409 -409 -284 -188 -614 -274 -947 -247 -526 43 -980 347 -1214 813 -346 690 -118 1522 533 1939 164 105 397 189 605 218 109 15 381 5 492 -19z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "search-icon",
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