import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { authStateChangeUser } from 'redux/auth/authOperation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authSelector from 'redux/auth/authSelector';
import { LoaderWraper, MainLoader } from './App.styled';

const RegistrationPage = lazy(() =>
  import('../../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));

const CreatePostPage = lazy(() =>
  import('../../pages/CreatePostPage/CreatePostPage')
);

const PostsPage = lazy(() => import('../../pages/PostsPage/PostsPage'));

const CommentPage = lazy(() => import('../../pages/CommentPage/CommentPage'));

const App = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Suspense
        fallback={
          <LoaderWraper>
            <MainLoader size={350} color="gold" />
          </LoaderWraper>
        }
      >
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <HomePage /> : <RegistrationPage />}
          />
          <Route path="Registration" element={<RegistrationPage />} />
          <Route path="Login" element={<LoginPage />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="create-post" element={<CreatePostPage />} />
          <Route path="Posts" element={<PostsPage />} />
          <Route path="comments/:id" element={<CommentPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
