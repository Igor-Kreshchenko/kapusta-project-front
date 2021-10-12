const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserPost = state => state.auth.user.email;

export default {
    getIsAuthenticated,
    getUserPost
}