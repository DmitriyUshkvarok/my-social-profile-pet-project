import AppNavigation from 'components/AppNavigation/AppNavigation';
import Container from 'components/Container/Container';
import authSelector from 'redux/auth/authSelector';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useState } from 'react';
import { storage, firestore } from '../../firebase/config';
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import {
  LoaderContainer,
  MainLoader,
  HeaderCreatePost,
  BtnBackCreatePostWrapper,
  StyleHiArrowLeftCircle,
  HeaderCreatePostTitle,
  MainCreatePostWrapper,
  StyleFormCreatePost,
  CustomFileInput,
  ImagePostContainer,
  ImgPost,
  StyleInputFileCreatePost,
  StyleMdAddAPhoto,
  TextLabel,
  LabelInputTitle,
  StyleInputTitle,
  TextTitle,
  ButtonSendPost,
  ButtonClearWrapper,
  StyleFaTrashAlt,
  NavigationWrapper,
} from './CreatePostPage.styled';

const initialValues = {
  userPost: null,
  postTitle: '',
};

const CreatePostPage = () => {
  const [loading, setLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [postTitle, setPostTitle] = useState('');

  const inputElement = document.getElementById('postImg');

  const navigate = useNavigate();

  const userId = useSelector(authSelector.getUserId);
  const login = useSelector(authSelector.getName);
  const userAvatar = useSelector(authSelector.getAvatar);

  const imgId = uuidv4();

  const createdAt = new Date();

  const handleClickBack = () => {
    navigate(-1);
  };

  const handleClearState = () => {
    setUploadedImage(null);
    setPostTitle('');
    inputElement.value = '';
  };

  const handleChangeTitle = e => {
    setPostTitle(e.target.value);
  };

  const handleFileChange = async e => {
    try {
      setLoading(true);
      setUploadedImage(null);

      const file = e.target.files[0];
      const storageRef = ref(storage, `userPost/${file.name}`);

      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);

      setUploadedImage(downloadURL);
    } catch (error) {
      console.log('Ошибка при загрузке файла:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePhoto = () => {
    inputElement.value = '';
    setUploadedImage(null);
  };

  const uploadPhotoToServer = async () => {
    try {
      if (uploadedImage) {
        setLoading(true);

        const postTitleVar = postTitle;

        const docRef = await addDoc(collection(firestore, 'userPost'), {
          title: postTitleVar,
          imageURL: uploadedImage,
          userId,
          createdAt: createdAt,
          login,
          userAvatar,
          likes: 0,
          imgId,
        });

        console.log('Документ успешно добавлен с ID:', docRef.id);

        // Очистка формы и загруженного изображения
        setUploadedImage(null);
        inputElement.value = '';
        setPostTitle('');

        toast.success('Post created successfully');
      }
    } catch (error) {
      console.log('Ошибка при загрузке фото на сервер:', error);
      toast.error('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <HeaderCreatePost>
          <BtnBackCreatePostWrapper onClick={handleClickBack}>
            <StyleHiArrowLeftCircle size={30} />
          </BtnBackCreatePostWrapper>
          <HeaderCreatePostTitle>Create Post</HeaderCreatePostTitle>
        </HeaderCreatePost>
        <MainCreatePostWrapper>
          <Formik initialValues={initialValues}>
            <StyleFormCreatePost>
              <CustomFileInput htmlFor="postImg">
                {uploadedImage && (
                  <ImagePostContainer>
                    <ImgPost src={uploadedImage} alt="Uploaded Avatar" />
                  </ImagePostContainer>
                )}
                {loading && (
                  <LoaderContainer>
                    <MainLoader size={200} fill="gold" />
                  </LoaderContainer>
                )}
                <StyleInputFileCreatePost
                  type="file"
                  name="postImg"
                  id="postImg"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  disabled={!!uploadedImage}
                />
                {!loading && !uploadedImage && <StyleMdAddAPhoto size={100} />}
              </CustomFileInput>
              <TextLabel
                onClick={handleDeletePhoto}
                style={{
                  cursor: uploadedImage ? 'pointer' : 'default',
                  color: uploadedImage ? 'red' : 'green',
                }}
              >
                {uploadedImage ? 'Edit Photo' : 'Download Photo'}
              </TextLabel>
              <LabelInputTitle htmlFor="inputTitle">
                <TextTitle>title...</TextTitle>
                <StyleInputTitle
                  type="text"
                  name="postTitle"
                  id="inputTitle"
                  value={postTitle}
                  onChange={handleChangeTitle}
                />
              </LabelInputTitle>
            </StyleFormCreatePost>
          </Formik>
          <ButtonSendPost
            type="button"
            style={{
              backgroundColor: uploadedImage ? 'gold' : 'gray',
              color: uploadedImage ? 'green' : 'white',
            }}
            onClick={uploadPhotoToServer}
          >
            Publish
          </ButtonSendPost>
          <ButtonClearWrapper onClick={handleClearState}>
            <StyleFaTrashAlt
              size={30}
              color={uploadedImage ? 'gold' : 'gray'}
            />
          </ButtonClearWrapper>
        </MainCreatePostWrapper>
        <NavigationWrapper>
          <AppNavigation />
        </NavigationWrapper>
      </Container>
    </>
  );
};

export default CreatePostPage;
