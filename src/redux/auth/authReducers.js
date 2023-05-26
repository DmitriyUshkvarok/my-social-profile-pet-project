import { createSlice } from '@reduxjs/toolkit';

const state = {
  userId: null,
  login: null,
  userAvatar: null,
  stateChange: false,
  userEmail: null,
  isAuthenticated: false,
  token: null,
  commentCounts: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      login: payload.login,
      userEmail: payload.userEmail,
      userAvatar: payload.userAvatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => state,
    setToken: (state, { payload }) => ({
      ...state,
      token: payload,
    }),
    authSignUpSuccess: state => {
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    updateAvatar: (state, { payload }) => {
      return {
        ...state,
        userAvatar: payload,
      };
    },
    updateCommentCount(state, action) {
      const { id, count } = action.payload;
      state.commentCounts[id] = count;
    },
  },
});
