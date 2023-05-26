const getIsLoggedIn = state => state.auth.isAuthenticated;

const getIsRefreshing = state => state.auth.stateChange;

const getName = state => state.auth.login;

const getEmail = state => state.auth.userEmail;

const getAvatar = state => state.auth.userAvatar;

const getUserId = state => state.auth.userId;

const getcommentCount = state => state.auth.commentCounts;

const authSelector = {
  getIsLoggedIn,
  getIsRefreshing,
  getName,
  getEmail,
  getAvatar,
  getUserId,
  getcommentCount,
};

export default authSelector;
