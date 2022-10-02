<template>
  <div id="playlist">
    <div v-if="playlist.headImg!=playlist.albumImg" class="head" :style="{'background-image':`url(${playlist.headImg})`}">
      <h3 class="playlist__span">PLAYLIST</h3>
      <h1 class="albumTitle">{{playlist.albumTitle}}</h1>
      <span class="description">{{playlist.albumDescription}}</span>
      <div class="info">Spotify, {{playlist.tracks.length}} songs</div>
    </div>
    <div v-if="playlist.headImg==playlist.albumImg" class="head">
      <div class="albumImg" :style="{'background-image':`url(${playlist.headImg})`}"></div>
      <h3 class="playlist__span right">PLAYLIST</h3>
      <h1 class="albumTitle right">{{playlist.albumTitle}}</h1>
      <span class="description right">{{playlist.albumDescription}}</span>
      <div class="info right">Spotify, {{playlist.tracks.length}} songs</div>
    </div>
    <div class="content" :style="{'background': `linear-gradient(rgba(${color.r},${color.g},${color.b},0.25) 15%, rgb(29,29,29) 38%)`}">
      <div class="playbutn" @click="toggleIsPlaying">
        <svg v-if="!$store.state.audio.isPlaying" role="img" height="28" width="28" viewBox="0 0 24 24" class="triangle"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
        <svg v-if="$store.state.audio.isPlaying" viewBox="0 0 16 16" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>

      </div>
      <playlist-like class="like"></playlist-like>
      <dots-icon class="dots"></dots-icon>
      <div class="title-row">
        <div class="index">#</div>
        <div class="title">TITLE</div>
        <div class="duration">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG"><path fill="rgba(170,170,170)" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path fill="rgba(170,170,170)" d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg>
                  </div>
      </div>
      <div class="track__content">
      <search-track
          v-for="track of playlist.tracks"
          :key="playlist.tracks.indexOf(track)"
          :data="track"
          class="track"
          @play="(data)=>{
            data.album = playlist
            $emit('play',data)
            }
          "
      ></search-track>
        <div class="mrg"></div>
      </div>
    </div>
  </div>

</template>

<script>
import PlaylistLike from "@/components/UI/icons/PlaylistLikeIcon";
import DotsIcon from "@/components/UI/icons/DotsIcon";
import SearchTrack from "@/components/UI/search/search-track";
export default {
  name: "play-list",
  components: {SearchTrack, DotsIcon, PlaylistLike},
  data(){
    return{
      color:{r:26,g:29,b:29}

    }
  },
  async mounted() {
    let base = await this.getBase64FromUrl(this.playlist.headImg)
    let imgEl = document.createElement('img')
    imgEl.src = base;
    imgEl.onload = async ()=>{
      this.color = this.getAverageRGB(imgEl)
      console.log(this.color)
    }


  },
  props:{
    playlist:{
      type:Object,
      required:true
    }
  },
  methods:{
    toggleIsPlaying(){
      this.$store.commit('setPlayingStatus',!this.$store.state.audio.isPlaying)

    },
    getBase64FromUrl : async (url) => {
      const data = await fetch(url);
      const blob = await data.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        }
      });
    },
    getAverageRGB:  function (imgEl) {

        var blockSize = 5, // only visit every 5 pixels
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
      console.log('No context')
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch(e) {
      /* security error, img on diff domain */
      console.log(e)
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i+1];
      rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}

  }

}
</script>

<style scoped>
#playlist{

}
.head{
  height: 43%;
  background-size: 100%;
  padding: 10px;
  background-position: 0% 10% ;
  background-repeat:   no-repeat;
  font-family: Montserrat;
  color: white;

}

.content{
  background: linear-gradient(rgba(49,100,100,0.15) 15%, rgb(29,29,29) 38%);

}
.playlist__span{
  width: 40px;
  height: 10px;
  font-size: 10px;
  position: relative;
  top:90px;
}
.playlist__span.right{
  position: relative;
  left:250px;
  top:-45px;
}
.albumTitle{
  height: 20px;
  position: relative;
  top:100px;
  font-size: 60px;
  font-weight: bolder;
}
.albumTitle.right{
  position: relative;
  left:250px;
  top:-30px
}
.description{
  text-overflow: ellipsis;
  width: 700px;
  height: 10px;
  left: 10px;
  position: relative;
  top: 190px;
  z-index: 2;
  color: rgb(220,220,220);
}
.description.right{
  position: relative;
  left:250px;
  top:30px
}
.playbutn{
  width: 48px;
  height: 48px;
  background: #1ed760;
  border-radius: 30px;
  position: relative;
  top:20px;
  left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.like{
  width: 27px;
  height: 27px;
  position: relative;
  left: 105px;
  bottom: 17px;
}
.triangle{
  width: 24px;
  height: 24px;

}
.dots{
  width: 30px;
  height: 30px;
  left: 153px;
  bottom: 43px;
  position: relative;
}
.title-row{
  width: 98%;
  border-bottom: 1px solid rgba(200,200,200,0.7);
  height: 25px;
  color: rgba(170,170,170);
  font-family: Montserrat;
  position: relative;
  bottom: 9px;
  left: 30px;
}
.index{
  position: absolute;
  left: 16px;
  width: 15px;
  height: 15px;
  font-size: 15px;
}
.title{
  position: absolute;
  top:2px;
  left: 43px;
  height: 15px;
  font-size: 11px;
}
.duration{
  position: absolute;
  right: 8.9%;
  top: 2px;
  width: 15px;
  height: 15px;

}
.track{
  width: 90%;
  left: 40px;
}
.info{
  position: relative;
  font-size: 11px;
  height: 10px;
  top:200px;
  left: 10px;
}
.info.right{
  top:50px;
  left: 255px;
}
.albumImg{
  width: 180px;
  height: 180px;
  position: relative;
  top: 100px;
  left: 30px;
  background-size: cover;
}
.mrg{
  height: 10%;
  width: 90%;
  position: relative;
  display: inline-block;
}
</style>