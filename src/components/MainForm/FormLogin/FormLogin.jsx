import { useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { authSignInUser } from 'redux/auth/authOperation';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
  StyleFormLogin,
  LoginTitle,
  FeedbackFormGroup,
  StyleInputRegistration,
  StyleErrorMessage,
  Error,
  PasswordWrapper,
  ToggleShowPasword,
  Btnwrapper,
  BtnRegistration,
  LinkOnPageLogIn,
} from './FormLogin.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
});

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(prewShowPassword => !prewShowPassword);
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(authSignInUser(values));
      navigate('/Home');
      resetForm();
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyleFormLogin>
          <LoginTitle>Login</LoginTitle>
          <FeedbackFormGroup>
            <StyleInputRegistration
              type="email"
              name="email"
              placeholder="email"
            />
            <StyleErrorMessage name="email">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <FeedbackFormGroup>
            <PasswordWrapper>
              <StyleInputRegistration
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
              />
              <ToggleShowPasword onClick={toggleShowPassword}>
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </ToggleShowPasword>
            </PasswordWrapper>
            <StyleErrorMessage name="password">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
          <Btnwrapper>
            <BtnRegistration type="submit">Sign in</BtnRegistration>
          </Btnwrapper>
          <Link to="/Registration">
            <LinkOnPageLogIn>No account? Sign up</LinkOnPageLogIn>
          </Link>
        </StyleFormLogin>
      </Formik>
    </>
  );
};

export default FormLogin;
