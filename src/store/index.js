import {createStore} from 'vuex';
import {albums} from "@/store/albums";
export default createStore({
    state:{
        audio:{
            audioSrc:'',
            audioTitle:'',
            audioArtist:'',
            audioImg:'',
            isPlaying:false,
            qeque:[],
            prevtracks:[]
        },
        isPlaylist:false,
        liked:new Set()
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
        },
        clearQeque(state){
            state.audio.qeque = []
        },
        setQeque(state,arr){
            state.audio.qeque = arr
        },
        shiftQeque(state){
            state.audio.qeque.shift()
        },
        updateAudio(state,obj){
            state.audio.audioSrc = obj.link;
            state.audio.audioImg = obj.img;
            state.audio.audioTitle = obj.title;
            state.audio.audioArtist = obj.artist;
        },
        nextTrack(state){
            if (! state.audio.qeque) return
            let current = {link:state.audio.audioSrc,img:state.audio.audioImg,title:state.audio.audioTitle,artist:state.audio.audioArtist};
            state.audio.prevtracks.push(current)
            this.commit('updateAudio',state.audio.qeque[0])
            state.audio.qeque.shift()
            console.log(state.audio.prevtracks[state.audio.prevtracks.length-1].title,state.audio.qeque[0].title)
        },
        prevTrack(state){
            //говнокод
            if (! state.audio.prevtracks) return
            let current = {link:state.audio.audioSrc,img:state.audio.audioImg,title:state.audio.audioTitle,artist:state.audio.audioArtist};
            state.audio.qeque.unshift(current)
            this.commit('updateAudio',state.audio.prevtracks[state.audio.prevtracks.length-1])
            state.audio.prevtracks.pop()
            console.log(state.audio.prevtracks[state.audio.prevtracks.length-1].title,state.audio.qeque[0].title)


        },
        setIsPlaylist(state,val){
            state.isPlaylist = val
        },
        addToLiked(state,obj){
            state.liked.add(obj)
            state.albums["Uniquely Yours"]["Liked Songs"].tracks = Array.from(state.liked);
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