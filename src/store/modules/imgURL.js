const state = {
    article_picture: '',
}

const mutations = {
    updateImgURL(state,imgurl) {
        state.article_picture = imgurl;
    }
}

const actions = {
    postupdateImgURL(context,imgurl){
        context.commit("updateImgURL",imgurl);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}