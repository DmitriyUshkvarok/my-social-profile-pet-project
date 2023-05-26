import { useState, useRef } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { authSignUpUser } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../../firebase/config';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import * as yup from 'yup';
import {
  MainLoader,
  RegisterLoaderWraper,
  RegisrLoader,
  StyleFormRegistration,
  RegistrationImgContainer,
  IconContainer,
  ImageContainer,
  ImgAvatar,
  StyleAiOutlinePlusCircle,
  StyleAiOutlineMinusCircle,
  RegistrationTitle,
  FeedbackFormGroup,
  StyleInputRegistration,
  StyleErrorMessage,
  Error,
  PasswordWrapper,
  ToggleShowPasword,
  Btnwrapper,
  BtnRegistration,
  LinkOnPageLogIn,
} from './FormRegistration.styled';

const initialValues = {
  login: '',
  email: '',
  password: '',
  userAvatar: null,
};

const schema = yup.object().shape({
  login: yup.string().min(4).max(20).required(),
  email: yup.string().required(),
  password: yup.string().min(10).max(20).required(),
  userAvatar: yup.mixed().optional(),
});

const FormRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [dowmloadImg, setDownloadImg] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegistrLoading, setIsRegistrLoading] = useState(false);

  const navigate = useNavigate();

  const fileInputRef = useRef(null);
  const formikRef = useRef(null);

  const dispatch = useDispatch();

  const toggleShowPassword = () => {
    setShowPassword(prewShowPassword => !prewShowPassword);
  };

  const toggleDownloadImg = () => {
    if (showImage) {
      // Если фото уже отображено, скрываем его и инпут
      setUploadedImage(null);
      fileInputRef.current.value = '';
      setShowImage(false);
    } else {
      // Иначе открываем файловый загрузчик
      fileInputRef.current.click();
      setShowImage(true);
    }
    setDownloadImg(prewShowImg => !prewShowImg);
  };

  const handleFileChange = async e => {
    const file = e.target.files[0];

    try {
      setLoading(true);
      // Загрузка данных файла в Firebase Storage
      const storageRef = ref(storage, `userAvatar/${file.name}`);
      await uploadBytes(storageRef, file);

      // Получение URL загруженного файла
      const downloadURL = await getDownloadURL(storageRef);
      setUploadedImage(downloadURL);

      // Обновление значения userAvatar в форме
      formikRef.current.setFieldValue('userAvatar', file); // Здесь используется file, а не downloadURL
    } catch (error) {
      console.log('Ошибка при загрузке файла:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsRegistrLoading(true);

      const { userAvatar, ...userData } = values;

      // Если пользователь выбрал аватар, загружаем его в Storage и получаем URL
      let downloadURL = null;
      if (userAvatar) {
        const storageRef = ref(storage, `userAvatar/${userAvatar.name}`);
        await uploadBytes(storageRef, userAvatar);
        downloadURL = await getDownloadURL(storageRef);
      }

      // Добавляем URL аватара в данные пользователя и отправляем на сервер
      const userDataWithAvatar = downloadURL
        ? { ...userData, userAvatar: downloadURL }
        : userData;
      formikRef.current.setFieldValue('userAvatar', downloadURL); // Обновляем значение userAvatar в форме
      await dispatch(authSignUpUser(userDataWithAvatar));
      navigate('/Home');
      resetForm();
    } catch (error) {
      console.log('Sign-in error:', error);
    } finally {
      setIsRegistrLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        <StyleFormRegistration>
          {isRegistrLoading && (
            <RegisterLoaderWraper>
              <RegisrLoader size={350} color="gold" />
            </RegisterLoaderWraper>
          )}
          <RegistrationImgContainer>
            <IconContainer onClick={toggleDownloadImg}>
              {uploadedImage && (
                <ImageContainer>
                  <ImgAvatar src={uploadedImage} alt="Uploaded Avatar" />
                </ImageContainer>
              )}
              {loading && <MainLoader size={50} fill="gold" />}
              {dowmloadImg ? (
                <StyleAiOutlineMinusCircle size={30} />
              ) : (
                <StyleAiOutlinePlusCircle size={30} />
              )}
            </IconContainer>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              ref={fileInputRef}
              name="userAvatar"
            />
          </RegistrationImgContainer>
          <RegistrationTitle>Registration</RegistrationTitle>
          <FeedbackFormGroup>
            <StyleInputRegistration
              type="text"
              name="login"
              placeholder="name"
            ></StyleInputRegistration>
            <StyleErrorMessage name="login">
              {msg => <Error>{msg}</Error>}
            </StyleErrorMessage>
          </FeedbackFormGroup>
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
            <BtnRegistration type="submit">Registration</BtnRegistration>
          </Btnwrapper>
          <Link to="/Login">
            <LinkOnPageLogIn>Already have an account? Sign in</LinkOnPageLogIn>
          </Link>
        </StyleFormRegistration>
      </Formik>
    </>
  );
};

export default FormRegistration;
