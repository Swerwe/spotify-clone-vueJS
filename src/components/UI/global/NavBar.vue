<template>
  <div class="Root__nav-bar">
    <spotify-icon class="spot_icon"></spotify-icon>
    <div class="bar homebar" @click = 'clickHandler'>
      <home-icon class="navicon"></home-icon>
      <div class="name" ref="home"
      >Home</div>
    </div>
    <div class="bar searchbar" @click = 'clickHandler'>
      <search-icon class="navicon"></search-icon>
      <div class="name"  ref="search">Search</div>
    </div>
    <div class="bar libbar" @click = 'clickHandler'>
      <lib-icon class="navicon"></lib-icon>
      <div class="name" ref="yourlibrary">Your Library</div>
    </div>
    <div class="bar playbar">
      <playlist-create-icon class="playlist"></playlist-create-icon>
      <div class="name">Create Playlist</div>
    </div>
    <div class="bar likedbar">
      <liked-songs-icon class="liked-songs"></liked-songs-icon>
      <div class="name">Liked Songs</div>
    </div>



  </div>

</template>

<script>
import SpotifyIcon from "@/components/UI/icons/SpotifyIcon";
import HomeIcon from "@/components/UI/icons/HomeIcon";
import SearchIcon from "@/components/UI/icons/SearchIcon";
import LibIcon from "@/components/UI/icons/LibIcon";
import PlaylistCreateIcon from "@/components/UI/icons/PlaylistCreateIcon";
import LikedSongsIcon from "@/components/UI/icons/LikedSongsIcon";

export default {
  name:'nav-bar',
  components: {LikedSongsIcon, PlaylistCreateIcon, LibIcon, SearchIcon, HomeIcon, SpotifyIcon},
  props:{
    navSelects:{
      type:Object,
      required:true
    }
  },
  methods:{
    clickHandler(e){
      this.$emit("select",[e.target.innerText.replaceAll(/\s/g,'').toLowerCase(),true])
      this.$store.commit('setIsPlaylist',false)
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
  display: block;
  height: 20px;
  cursor: pointer;

}
.name{
  position: absolute;
  color: #a7a7a7;
  display: inline-block;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 0.685rem;
  left: 55px;
  top: 3px;

}
.name:hover{
  color: white;
  transition: 0.5s;
}
.svg path{
  fill: white;
}
.spot_icon{
  margin-left: 21px;
  margin-top: 18px;
  position: relative;
}
.navicon{
  width: 20px;
  height: 20px;
  left: 20px;
}
.homebar{
  margin-top: 23px;
}
.searchbar{
  margin-top: 15px;
}
.libbar{
  margin-top: 14px;
}
.playlist{
  margin-left: 20px;
}
.liked-songs{
  margin-left: 20px;
}
.playbar{
  margin-top:33px;
}
.likedbar{
  margin-top: 15px;
}
</style>