<template>
  <svg
      class="icon" @mouseover="color = 'white'" @mouseleave="color = 'rgb(179,179,179)'"
      xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
      <path :fill="color" d="M789 4532 c-39 -20 -62 -41 -84 -77 l-30 -48 0 -551 0 -551 28 -47 c47 -80 147 -122 232 -99 34 9 769 424 908 513 58 37 96 98 104 167 5 42 1 59 -21 104 -14 30 -34 61 -43 69 -23 20 -842 493 -908 524 -67 32 -120 31 -186 -4z"/>
      <path :fill="color" d="M2250 3982 c-99 -49 -107 -188 -13 -249 26 -17 84 -18 1056 -21 991 -2 1030 -2 1071 17 33 14 48 29 65 63 26 54 26 71 1 126 -15 33 -29 47 -62 62 -42 19 -74 20 -1063 20 -951 0 -1022 -1 -1055 -18z"/>
      <path :fill="color" d="M739 2477 c-90 -60 -88 -181 4 -237 31 -20 65 -20 1817 -20 1752 0 1786 0 1817 20 92 56 94 177 4 237 l-34 23 -1787 0 -1787 0 -34 -23z"/>
      <path :fill="color" d="M782 1000 c-67 -16 -121 -97 -108 -162 9 -43 44 -88 82 -104 28 -12 317 -14 1804 -14 1944 0 1814 -4 1861 61 47 66 28 149 -45 203 l-27 21 -1767 2 c-972 0 -1782 -2 -1800 -7z"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: "playlist-icon",
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