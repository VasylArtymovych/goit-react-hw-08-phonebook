const getIsloggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsloggedIn,
  getUserName,
};

export default authSelectors;
