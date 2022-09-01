<template>
  <section>
    <div class="section-name">{{sectionName}}</div>
    <div class="more">SEE ALL</div>
    <component-item v-for="track of tracks" :key="track.id" v-bind:trackData="track"></component-item>

  </section>
</template>

<script>
import ComponentItem from "@/components/UI/ContentSectionItem";
export default {
  name:"content-section",
  components: {ComponentItem},
  props:{
    sectionName:{
      type:String,
      required:true
    },
    tracks:{
      type:Array,
      required: true
    }
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
  width: 1687px;
  margin-bottom: 130px;
  position: relative;
  overflow:hidden;
}
.more{
  position:absolute;
  left: 95%;
  top:5%;
  color: gray;
}

</style>