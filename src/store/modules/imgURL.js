const state = {
    article_picture: '',
    isUpLoad:'',
}

const mutations = {
    updateImgURL(state,imgurl) {
        state.article_picture = imgurl;
    },
    changeUpLoad(state,TupLoad) {
      state.isUpLoad = TupLoad;
    }
}

const actions = {
    postupdateImgURL(context,imgurl){
        context.commit("updateImgURL",imgurl);
    },
    postUpLoad(context,TupLoad){
        context.commit("changeUpLoad",TupLoad);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}