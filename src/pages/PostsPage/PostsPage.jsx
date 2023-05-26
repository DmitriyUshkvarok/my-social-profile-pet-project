import Container from 'components/Container/Container';
import AppNavigation from 'components/AppNavigation/AppNavigation';
import InfoUserContainer from 'components/InfoUserContainer/InfoUserContainer';
import { authSignOutUser } from 'redux/auth/authOperation';
import { useDispatch, useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { Link } from 'react-router-dom';
import {
  NoPostBlock,
  HeaderPosts,
  HeaderPostsTitle,
  LogoutWrapper,
  StyleBiLogOut,
  MainPostWrapper,
  InfoUserWrapp,
  InfoUserPost,
  InfoUserAvatar,
  InfoUserName,
  PostListWrapper,
  PostList,
  PostListItem,
  PostListPhoto,
  PostTitle,
  PanelPostList,
  CommentCount,
  PanelPostItem,
  StyleFaRegComment,
  StyleSlLike,
  StyleCiLocationOn,
} from './PostsPage.styled';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';
import { firestore } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [postLikes, setPostLikes] = useState({});

  const dispatch = useDispatch();

  const commentCount = useSelector(authSelector.getcommentCount);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollectionRef = collection(firestore, 'userPost');
      const postsQuery = query(postsCollectionRef, orderBy('createdAt'));
      const snapshot = await getDocs(postsQuery);
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts.reverse());
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId, userId) => {
    try {
      const postRef = doc(firestore, 'userPost', postId);

      // Получение текущего значения лайков из Firestore
      const postDoc = await getDoc(postRef);
      const currentLikes = postDoc.data().likes || 0;

      // Проверка, понравился ли пост пользователю
      const likedByUser =
        postDoc.data().likedByUser && postDoc.data().likedByUser[userId];

      // Определение типа действия (лайк или дизлайк)
      const actionType = likedByUser ? 'dislike' : 'like';

      // Обновление значения лайков в объекте поста в зависимости от типа действия
      let updatedLikes;
      if (actionType === 'like') {
        updatedLikes = currentLikes + 1;
      } else if (actionType === 'dislike') {
        updatedLikes = currentLikes - 1;
      }

      // Обновление информации о лайках для пользователя в Firestore
      const updateData = {
        likes: updatedLikes,
        [`likedByUser.${userId}`]: !likedByUser,
      };

      await updateDoc(postRef, updateData);

      // Обновление информации о лайках для пользователя на клиентской стороне
      setPostLikes(prevState => ({
        ...prevState,
        [postId]: {
          ...prevState[postId],
          [userId]: !likedByUser,
        },
      }));

      setPosts(prevPosts =>
        prevPosts.map(post => {
          if (post.id === postId) {
            return {
              ...post,
              likes: updatedLikes,
              likedByUser: !likedByUser,
            };
          }
          return post;
        })
      );
    } catch (error) {
      console.log('Ошибка при обновлении лайка:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, 'userPost'),
      snapshot => {
        const updatedPostLikes = {};

        snapshot.forEach(doc => {
          const postId = doc.id;
          const postLikesData = doc.data().likedByUser || {};
          updatedPostLikes[postId] = postLikesData;
        });

        setPostLikes(updatedPostLikes);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

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
    <>
      <Container>
        <HeaderPosts>
          <HeaderPostsTitle>Posts</HeaderPostsTitle>
          <LogoutWrapper onClick={logOut}>
            <StyleBiLogOut size={30} />
          </LogoutWrapper>
        </HeaderPosts>
        <MainPostWrapper>
          <InfoUserWrapp>
            <InfoUserContainer />
          </InfoUserWrapp>
          <PostListWrapper>
            {posts.length === 0 ? (
              <NoPostBlock>No posts found.</NoPostBlock>
            ) : (
              <PostList>
                {posts.map(post => (
                  <PostListItem key={post.id}>
                    <InfoUserPost>
                      <InfoUserAvatar src={post.userAvatar} alt="userAvatar" />
                      <InfoUserName>{post.login}</InfoUserName>
                    </InfoUserPost>
                    <PostListPhoto
                      src={post.imageURL}
                      alt="Post"
                      loading="lazy"
                    />
                    <PostTitle>{post.title}</PostTitle>
                    <PanelPostList>
                      <PanelPostItem>
                        <Link to={`/comments/${post.id}`}>
                          {commentCount[post.id] > 0 ? (
                            <StyleFaRegComment size={30} color="gold" />
                          ) : (
                            <StyleFaRegComment
                              size={30}
                              style={{
                                stroke: 'gold',
                                strokeWidth: '20px',
                                fill: 'transparent',
                              }}
                            />
                          )}
                          <CommentCount>{commentCount[post.id]}</CommentCount>
                        </Link>
                      </PanelPostItem>
                      <PanelPostItem>
                        <StyleSlLike
                          size={30}
                          color={postLikes[post.id] ? 'gold' : '#212121'}
                          onClick={() => handleLike(post.id, post.userId)}
                        />
                        {postLikes[post.id] ? post.likes : postLikes[post.id]}
                      </PanelPostItem>
                      <PanelPostItem>
                        <StyleCiLocationOn size={30} color="#212121" />
                      </PanelPostItem>
                    </PanelPostList>
                  </PostListItem>
                ))}
              </PostList>
            )}
          </PostListWrapper>
        </MainPostWrapper>
        <AppNavigation />
      </Container>
    </>
  );
};

export default PostsPage;
