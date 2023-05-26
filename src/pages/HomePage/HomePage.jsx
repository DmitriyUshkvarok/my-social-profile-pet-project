import {
  NoPostBlock,
  HeaderProfile,
  HeaderProfileTitle,
  LogoutWrapper,
  StyleBiLogOut,
  MainPostProfileWrapper,
  UserPhotoWrapper,
  IconContainer,
  StyleAiOutlineMinusCircle,
  StyleAiOutlinePlusCircle,
  NameUser,
  ImgUserAvatar,
  EmailUser,
  ProfilPostList,
  ProfilListItem,
  ImgPostProfile,
  ProfilePostTitle,
} from './HomePage.styled';
import { authSignOutUser, authUpdateProfile } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Notiflix from 'notiflix';
import Container from 'components/Container/Container';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import authSelector from 'redux/auth/authSelector';
import { useState, useRef, useEffect } from 'react';
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from 'firebase/storage';
import { storage } from '../../firebase/config';
import { auth } from '../../firebase/config';
import { collection, query, getDocs, where, orderBy } from 'firebase/firestore';
import { firestore } from '../../firebase/config';

const HomePage = () => {
  const [avatarURL, setAvatarURL] = useState(null);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const [post, setPost] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const name = useSelector(authSelector.getName);
  const email = useSelector(authSelector.getEmail);
  const avatar = useSelector(authSelector.getAvatar);
  const userId = useSelector(authSelector.getUserId);

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (avatar) {
      setAvatarURL(avatar);
      setShowDeleteIcon(true);
    } else {
      setAvatarURL(null);
      setShowDeleteIcon(false);
      setAvatarURL(null);
    }
  }, [avatar]);

  useEffect(() => {
    const fetchPostById = async () => {
      const postCollectionIdRef = collection(firestore, 'userPost');
      const postQueryId = query(
        postCollectionIdRef,
        where('userId', '==', userId),
        orderBy('createdAt')
      );
      const snapshot = await getDocs(postQueryId);
      const fetchedPostId = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost(fetchedPostId.reverse());
    };
    fetchPostById();
  }, [userId]);

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `userAvatar/${file.name}`);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);
        setAvatarURL(downloadURL);
        setShowDeleteIcon(true);
        await dispatch(authUpdateProfile({ login: name, userAvatar: file }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteProfilePhoto = async () => {
    try {
      const user = await auth.currentUser;
      const storageRef = ref(storage, `userAvatar/${user.uid}`);

      // Установка метаданных файла, чтобы он был удален
      await deleteObject(storageRef);

      // Обновление профиля пользователя без аватара
      await dispatch(authUpdateProfile({ login: name, userAvatar: null }));
      setAvatarURL(null);
      setShowDeleteIcon(false);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    Notiflix.Confirm.show(
      'Confirmation',
      'Are you sure you want to log out?',
      'Yes',
      'No',
      () => {
        dispatch(authSignOutUser());
        navigate('/Login');
      },
      () => {}
    );
  };

  return (
    <Container>
      <HeaderProfile>
        <HeaderProfileTitle>Profile</HeaderProfileTitle>
        <LogoutWrapper>
          <StyleBiLogOut size={30} onClick={logOut} />
        </LogoutWrapper>
      </HeaderProfile>
      <MainPostProfileWrapper>
        <NameUser>{name}</NameUser>
        <UserPhotoWrapper>
          {avatarURL && <ImgUserAvatar src={avatarURL} alt="userAvatar" />}
          <IconContainer>
            {avatarURL && showDeleteIcon && (
              <StyleAiOutlineMinusCircle
                size={30}
                onClick={deleteProfilePhoto}
              />
            )}

            {!avatarURL && !showDeleteIcon && (
              <StyleAiOutlinePlusCircle
                size={30}
                onClick={() => fileInputRef.current.click()}
              />
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </IconContainer>
        </UserPhotoWrapper>
        <EmailUser>{email}</EmailUser>
        {post.length === 0 ? (
          <NoPostBlock>No posts found.</NoPostBlock>
        ) : (
          <ProfilPostList>
            {post.map(post => (
              <ProfilListItem key={post.id}>
                <ImgPostProfile src={post.imageURL} alt="Post" loading="lazy" />
                <ProfilePostTitle>{post.title}</ProfilePostTitle>
              </ProfilListItem>
            ))}
          </ProfilPostList>
        )}
        <AppNavigation />
      </MainPostProfileWrapper>
    </Container>
  );
};

export default HomePage;
