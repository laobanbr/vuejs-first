import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state:{
        videoUrl: 'https://www.youtube.com/embed/DtKCNJmARF0'
    },
    getters: {
        asteriskUrl: function(state){
            var newUrl = '*' + state.videoUrl + '*';
            return newUrl;
        }
    },
    mutations: {
        changeUrl: (state, newUrl) => {
            var temp = newUrl.split('?');
            temp = temp[temp.length-1].split('=');
            if(temp[0]=='v')
                state.videoUrl = 'https://www.youtube.com/embed/' + temp[temp.length-1];
            else if (temp[0]=='list') {
                state.videoUrl = 'https://www.youtube.com/embed/videoseries?list=' + temp[temp.length-1]
            }
        }
    },
    actions: {
        changeUrl: (context, payload) => {
            context.commit('changeUrl', payload);
        }
    }
})
