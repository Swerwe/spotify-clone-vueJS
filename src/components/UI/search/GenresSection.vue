<template>
  <div class="section"
       ref="genresSection"
       @mousemove="drag"
       @mousedown="this.isDragging=true"
       @mouseup="this.isDragging=false" @mouseleave="this.isDragging=false"
       @onselectstart="()=>false"
  >
    <button class="slideLeft slide" @click="scrollLeft" ref="left" v-if="scroll!=0">
      <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none"></polyline></svg>
    </button>
    <label>Your top genres</label>
    <genres-item>Pop</genres-item>
    <genres-item>Hip-Hop</genres-item>
    <genres-item>Afro</genres-item>
    <button class="slideRight slide" @click="scrollRight" ref="right" v-if="this.scroll<=1">
      <svg  viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none"></polyline></svg>
    </button>

  </div>
</template>

<script>
import GenresItem from "@/components/UI/search/GenresItem";
export default {
  name: "genres-section",
  components: {GenresItem},
  data(){
    return{
      colors:['#995d81', '#eb8258', '#f6f740', '#d8dc6a', '#6689a1'],
      scroll:0,
      timer: ms => new Promise(res => setTimeout(res, ms)),
      isDragging:false
    }
  },

  methods:{
    scrollLeft:async function (){
      for (let i = 0;i<40;i++){
        await this.timer(8)
        this.$refs.genresSection.scrollLeft-=10

      }
      const element =this.$refs.genresSection
      this.scroll =  element.scrollLeft/(element.scrollWidth-element.clientWidth)
    },
    scrollRight:async function (){
      for (let i = 0;i<40;i++){
          await this.timer(8)
          this.$refs.genresSection.scrollLeft+=10

      }
      const element =this.$refs.genresSection
      this.scroll =  element.scrollLeft/(element.scrollWidth-element.clientWidth)

    },
    drag:function (e){
      if (!this.isDragging) return
      const element =this.$refs.genresSection;
      element.scrollLeft -= e.movementX;
      this.scroll =  element.scrollLeft/(element.scrollWidth-element.clientWidth)



    }
  }
}
</script>

<style scoped>
label{
  font-family: 'Montserrat';
  color: white;
  display: block;
  margin: 20px;
  height: 10px;

}
.section{
  overflow: hidden;
  cursor: grab;
  white-space: nowrap;
  width: 99%;
  margin: 0 0;

}
.slide{
  position: absolute;
  background-color: white;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 35px;
  border: none;
}

.slideLeft{
  left: 5px;
  top:150px;
}
.slideRight{
  right: 20px;
  top: 150px;

}

</style>