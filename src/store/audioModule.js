

export const audioModule ={
    state: function (){
        return{
            audio:{
                audioSrc:'',
                audioTitle:'',
                audioArtist:'',
                audioImg:'',
            }
        }
    },
    getters:{

    },
    mutations:{
        setAudioSrc(state, src){
            state.audio.audioSrc = src
        },
        setAudioTitle(state, title){
            state.audio.audioSrc = title
        },
        setAudioArtist(state, artist){
            state.audio.audioSrc = artist
        },
        setAudioImg(state, img){
            state.audio.audioSrc = img
        },
    },
    actions:{

    }
}