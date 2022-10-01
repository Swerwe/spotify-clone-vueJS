<template>
  <div class="Root__main-content">

    <div class="Root__top-bar">
      <svg class="back"></svg>
      <svg class="front"></svg>
      <input
          class="search-input"
          placeholder="Songs"
          v-model="request"
          @keydown="search"
      >
    </div>
    <div class="content">

      <genres-section v-show="!isSearching"></genres-section>
      <search-results
          ref="results"
          v-show="isSearching"
          :isSearching="isSearching"
          :request="request"
          @play="(x)=>$emit('update:src',x)"
      ></search-results>
    </div>


  </div>
</template>

<script>
import GenresSection from "@/components/UI/search/GenresSection";
import SearchResults from "@/components/UI/search/search-results";
export default {
  name: "search-page",
  components: {SearchResults, GenresSection},
  data(){
    return{
      isSearching:false,
      request:'',

    }
  },
  methods:{
    search:function (e){
      if (e.key =='Enter'){
        this.isSearching = true;
        console.log(this.$refs)
        this.$refs.results.getData()
      }

    }

  }
}
</script>

<style scoped>
.Root__top-bar{
  height: 50px;
  width: 100%;
  min-height: 32px;
  background-color: rgba(16,16,16,0.5);
  display: inline-block;
  position: fixed;
  top:0;
  z-index: 2;

}

.Root__main-content{
  height: 100%;
  background-color: rgb(29,29,29);
  padding-top: 50px;
  width: 100%;
  overflow-y:auto;
  overflow-x: hidden ;
}
.back{
  width: 24px;
  height: 24px;
  background-image: url("../icons/back.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 31px;
  margin-top: 12px;
}
.front{
  width: 24px;
  height: 24px;
  background-image: url("../icons/forward.png");
  background-size: cover;
  border-radius: 40px;
  cursor: pointer;
  position: absolute;
  margin-left: 70px;
  margin-top: 12px;
}
.content{

  height: 500px;
  width: 100%;
  margin-bottom: 130px;
  position: relative;
  overflow:hidden;

}
.search-input{
  position: absolute;
  left: 110px;
  height: 2px;
  width: 300px;
  outline: none;
  border-radius: 25px;
  border: none;
  vertical-align: middle;
  padding: 17px;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

}

</style>