import { auth } from '../../firebase/config';
import { authSlice } from './authReducers';
import handleAuthError from 'authError/authError';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase/config';

const authSignUpUser =
  ({ email, password, login, userAvatar }) =>
  async dispatch => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
        photoURL: userAvatar,
      });

      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
        userAvatar: user.photoURL,
        userEmail: user.email,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.setToken(user.accessToken));
      dispatch(authSlice.actions.authSignUpSuccess());
    } catch (error) {
      handleAuthError(error);
    }
  };

const authUpdateProfile =
  ({ login, userAvatar }) =>
  async dispatch => {
    try {
      const user = await auth.currentUser;

      const storageRef = ref(storage, `userAvatar/${user.uid}`);
      await uploadBytes(storageRef, userAvatar);

      const downloadURL = await getDownloadURL(storageRef);

      await updateProfile(user, {
        displayName: login,
        photoURL: downloadURL,
      });

      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
        userAvatar: user.photoURL,
        userEmail: user.email,
      };

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      // Дополнительные действия, которые вы хотите выполнить после обновления профиля
    } catch (error) {
      handleAuthError(error);
    }
  };

const authSignInUser =
  ({ email, password }) =>
  async dispatch => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        dispatch(authSlice.actions.setToken(user.accessToken));
        dispatch(authSlice.actions.authSignUpSuccess());
      })
      .catch(error => {
        handleAuthError(error);
      });
  };

const authStateChangeUser = () => async dispatch => {
  await onAuthStateChanged(auth, user => {
    if (user) {
      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
        userEmail: user.email,
        userAvatar: user.photoURL,
      };
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

const authSignOutUser = () => async dispatch => {
  dispatch(authSlice.actions.authStateChange({ stateChange: false }));
  await signOut(auth);
  dispatch(authSlice.actions.authSignOut());
};

export {
  authSignUpUser,
  authUpdateProfile,
  authSignInUser,
  authStateChangeUser,
  authSignOutUser,
};
