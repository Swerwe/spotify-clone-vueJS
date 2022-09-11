<template>
  <div class="outer">
  <svg class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
       xmlns="http://www.w3.org/2000/svg" version="1.0" width="512pt" height="512pt" viewBox="0 0 512 512" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path :fill="color" d="M2375 5113 c-685 -58 -1304 -370 -1744 -879 -234 -270 -401 -566 -510 -907 -289 -905 -46 -1912 624 -2582 210 -210 474 -392 745 -515 1036 -468 2265 -199 3000 656 554 644 756 1494 550 2315 -188 748 -709 1372 -1410 1689 -341 154 -716 233 -1085 228 -71 -1 -148 -3 -170 -5z m544 -218 c411 -65 807 -242 1136 -508 103 -84 294 -280 372 -382 252 -334 406 -693 470 -1097 25 -159 25 -537 0 -696 -64 -404 -218 -763 -470 -1097 -78 -102 -269 -298 -372 -382 -333 -269 -726 -444 -1147 -510 -159 -25 -537 -25 -696 0 -421 66 -814 241 -1147 510 -103 84 -294 280 -372 382 -251 333 -406 694 -470 1097 -25 159 -25 537 0 696 66 421 241 814 510 1147 36 44 118 132 183 195 375 365 839 589 1357 655 147 19 501 13 646 -10z"/>
      <path :fill="color" d="M1782 3859 c-20 -6 -40 -22 -52 -42 -20 -31 -20 -58 -20 -1250 0 -1354 -4 -1274 66 -1303 33 -14 42 -14 73 -2 67 27 2106 1209 2129 1234 15 17 22 38 22 64 0 26 -7 47 -22 64 -17 19 -1759 1033 -2073 1206 -64 36 -83 40 -123 29z"/>
    </g>
  </svg>
  </div>
</template>

<script>
export default {
  name: "play-icon",
  data(){
    return{
      color:'rgb(179,179,179)'
    }
  }
}
</script>

<style scoped>
.icon{
  margin: 0 0;
  display: inline-block;
  position: relative;
  width: 35px;
  height: 35px;
  bottom: 8px;
  right: 4px;
  background-size: cover;
}
.outer{
  width: 35px;
  height: 35px;
}
</style>