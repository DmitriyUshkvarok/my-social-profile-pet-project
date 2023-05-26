import { toast } from 'react-toastify';

const handleAuthError = error => {
  let errorMessage = 'An error occurred';

  switch (error.code) {
    case 'auth/app-deleted':
      errorMessage = 'The authentication server was deleted';
      break;
    case 'auth/app-not-authorized':
      errorMessage = 'The authentication domain is not authorized';
      break;
    case 'auth/argument-error':
      errorMessage = 'An invalid argument was provided';
      break;
    case 'auth/invalid-api-key':
      errorMessage = 'An invalid API key was provided';
      break;
    case 'auth/invalid-user-token':
      errorMessage = 'An invalid user token was provided';
      break;
    case 'auth/network-request-failed':
      errorMessage = 'A network error occurred';
      break;
    case 'auth/operation-not-allowed':
      errorMessage = 'The requested authentication operation is not allowed';
      break;
    case 'auth/requires-recent-login':
      errorMessage =
        'The user needs to authenticate again to complete this operation';
      break;
    case 'auth/too-many-requests':
      errorMessage =
        'Too many unsuccessful login attempts. Please try again later';
      break;
    case 'auth/user-disabled':
      errorMessage = 'The user account has been disabled';
      break;
    case 'auth/user-token-expired':
      errorMessage = 'The user token has expired';
      break;
    case 'auth/web-storage-unsupported':
      errorMessage =
        'Web storage is not supported or is disabled in the browser';
      break;
    case 'auth/invalid-email':
      errorMessage = 'The email address is not valid';
      break;
    case 'auth/user-not-found':
      errorMessage = 'User not found';
      break;
    case 'auth/wrong-password':
      errorMessage = 'Wrong password';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'Email is already in use';
      break;
    case 'auth/weak-password':
      errorMessage = 'The password is too weak';
      break;
    default:
      errorMessage = 'An error occurred';
  }

  toast.error(errorMessage);
  throw new Error(errorMessage);
};

export default handleAuthError;
