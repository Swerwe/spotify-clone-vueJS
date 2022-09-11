<template>
  <div class="title-row" v-if="isSearching">
    <div class="index">#</div>
    <div class="title">Title</div>
    <div class="duration">
      <svg role="img" height="16" width="16" viewBox="0 0 16 16" class="Svg-ytk21e-0 jAKAlG"><path fill="rgba(170,170,170)" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path fill="rgba(170,170,170)" d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg>
    </div>
  </div>
  <section class="tracks-section">
    <search-track class="track"
                  :data="track"
                  v-for="track of data"
                  :key="data.indexOf(track)"
                  @play="(data)=>$emit('play',data)"
                  @st="console.log('2')"
    ></search-track>

  </section>
</template>
<script>
import SearchTrack from "@/components/UI/search/search-track";
export default {
  name: "search-results",
  components: {SearchTrack},
  props:{
    request:{
      type:String,
      required:true
    },
    isSearching:{}
  },
  data(){
    return{
      data:[]
    }
  },
  methods:{
    getData:async function (){
      this.data=[]
      let songs = await fetch('http://localhost:8100',{
        method:'POST',
        body:this.request
      })
      songs =await songs.json()
      console.log(songs)
      this.data=songs
    }
  }
}
</script>

<style scoped>
  .tracks-section{
    margin-top: 2px;
    width: 100%;
    height: 600px;
  }
  .title-row{
    width: 100%;
    border-bottom: 1px solid rgba(170,170,170,0.5);
    height: 25px;
    color: rgba(170,170,170);
    font-family: Montserrat;
  }
  .index{
    position: absolute;
    left: 6px;
    width: 15px;
    height: 15px;
  }
  .title{
    position: absolute;
    left: 60px;
    height: 15px;
  }
  .duration{
    position: absolute;
    right: 15px;
    top: 5px;
    width: 15px;
    height: 15px;
  }

</style>