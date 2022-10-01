import {createStore} from 'vuex';
import {albums} from "@/store/albums";
export default createStore({
    state:{
        audio:{
            audioSrc:'',
            audioTitle:'',
            audioArtist:'',
            audioImg:'',
            isPlaying:false
        },
    },
    getters:{

    },
    mutations:{
        setAudioSrc(state, src){
            state.audio.audioSrc = src
        },
        setAudioTitle(state, title){
            state.audio.audioTitle = title
        },
        setAudioArtist(state, artist){
            state.audio.audioArtist = artist
        },
        setAudioImg(state, img){
            state.audio.audioImg = img
        },
        setPlayingStatus(state,val){
            state.audio.isPlaying = val;
        }
    },
    actions:{
        updateAudio(data){
            this.setAudioSrc(data.link)
        }

    },
    modules:{
        albums:albums
    }


})