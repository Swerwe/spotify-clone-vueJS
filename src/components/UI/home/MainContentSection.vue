<template>
  <section>
    <div class="section-name">{{sectionName}}</div>
    <div class="more">SEE ALL</div>
    <component-item
        v-for="album in albums"
        :key="album"
        :album="album"
        :title="album.albumTitle"
        @play="([data,title])=>$emit('playplaylist',[data,sectionName,title])"></component-item>
  </section>
</template>

<script>
import ComponentItem from "@/components/UI/home/ContentSectionItem";
export default {
  name:"content-section",
  components: {ComponentItem},
  data(){
    return{
      albums:this.$store.state.albums[this.sectionName]
    }
  },

  props:{
    sectionName:{
      type:String,
      required:true
    },
  }

}
</script>
<style scoped>

.section-name{
  color:white;
  height: 15%;
  font-size: 1.20rem;
  padding-top: 0.7%;
  padding-left:1.5%;
  font-weight: bold;
  font-family: Montserrat;
  display: block;
}
section{
  height: 300px;
  width: 1250px;
  margin-top: 50px;
  position: relative;
  overflow:hidden;
}
.more{
  position:absolute;
  left: 95%;
  top:5%;
  width: 100px;
  color: gray;
}

</style>