const getters = {
    username: state => state.user.name,
    token: state => state.user.token,
    email: state => state.user.email,
    roles: state => state.user.role,
    imgURL: state => state.imgURL.article_picture,
    sex: state => state.user.sex,
    phone: state => state.user.phone,
    birthdata: state => state.user.birthdata,
    sign: state => state.user.sign,
}

export default getters
