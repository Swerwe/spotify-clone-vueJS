<template>
  <div>
    <svg class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
         xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt"  viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path :fill="color" d="M2410 4829 c-708 -44 -1360 -425 -1752 -1024 -411 -626 -486 -1412 -203 -2108 266 -651 825 -1144 1509 -1332 373 -102 799 -104 1172 -6 636 168 1178 610 1464 1196 159 327 232 645 232 1015 -1 1105 -800 2046 -1897 2234 -82 14 -158 21 -335 30 -36 1 -121 -1 -190 -5z m402 -314 c347 -46 675 -181 953 -394 90 -68 269 -246 340 -336 558 -714 569 -1689 28 -2413 -72 -96 -225 -256 -320 -334 -725 -594 -1766 -598 -2493 -11 -89 72 -257 243 -321 328 -122 159 -235 368 -299 550 -200 572 -124 1222 203 1723 112 173 298 376 452 493 274 209 605 348 940 393 136 19 380 19 517 1z"/>
        <path :fill="color" d="M1900 2560 l0 -760 155 0 155 0 -2 758 -3 757 -152 3 -153 3 0 -761z"/>
        <path :fill="color" d="M2917 3313 c-4 -3 -7 -345 -7 -760 l0 -753 155 0 155 0 0 760 0 760 -148 0 c-82 0 -152 -3 -155 -7z"/>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "stop-icon",
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
  width: 40px;
  height: 40px;

  bottom: 10px;
  right: 5px;
  background-size: cover;
}
</style>