const getters = {
    username: state => state.user.name,
    token: state => state.user.token,
    roles: state => state.user.role,
    imgURL: state => state.imgURL.article_picture,
}

export default getters
