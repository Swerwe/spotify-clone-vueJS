<template>
  <div class="Root__nav-bar">
    <spotify-icon></spotify-icon>
    <div class="bar" @click = 'clickHandler'>
      <home-icon></home-icon>
      <div class="name" ref="home"
      >Home</div>
    </div>
    <div class="bar" @click = 'clickHandler'>
      <search-icon></search-icon>
      <div class="name"  ref="search">Search</div>
    </div>
    <div class="bar" @click = 'clickHandler'>
      <lib-icon></lib-icon>
      <div class="name" ref="yourlibrary">Your Library</div>
    </div>

  </div>

</template>

<script>
import SpotifyIcon from "@/components/UI/icons/SpotifyIcon";
import HomeIcon from "@/components/UI/icons/HomeIcon";
import SearchIcon from "@/components/UI/icons/SearchIcon";
import LibIcon from "@/components/UI/icons/LibIcon";

export default {
  name:'nav-bar',
  components: {LibIcon, SearchIcon, HomeIcon, SpotifyIcon},
  props:{
    navSelects:{
      type:Object,
      required:true
    }
  },
  methods:{
    clickHandler(e){
      this.$emit("select",[e.target.innerText.replaceAll(/\s/g,'').toLowerCase(),true])
      for (let key in this.navSelects) {
        this.$refs[key].classList.remove('selected')
        if (this.navSelects[key]){
          this.$refs[key].classList.add('selected')
        }

      }
    }
  }

}
</script>

<style scoped>
.Root__nav-bar{
  vertical-align: top;
  width: 245px;
  height: 100%;
  background-color: rgb(0,0,0);
}
.bar{
  position: relative;
  margin-top: 20px;
  display: block;
  height: 3%;
  cursor: pointer;

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
.selected{
  color: white;
}
</style>