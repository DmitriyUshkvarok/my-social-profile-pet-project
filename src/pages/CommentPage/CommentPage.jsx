import Container from 'components/Container/Container';
import authSelector from 'redux/auth/authSelector';
import { authSlice } from 'redux/auth/authReducers';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  doc,
  addDoc,
  orderBy,
} from 'firebase/firestore';
import { firestore } from '../../firebase/config';
import {
  HeaderCommentPost,
  BtnBackCommentPostWrapper,
  StyleHiArrowLeftCircle,
  HeaderCommentPostTitle,
  MainPostProfileWrapper,
  CommentPostInfo,
  CommentPostImg,
  CommentPostTitle,
  CommentList,
  CommentListItem,
  UserAvatarCommentWrapper,
  UserImgComment,
  InfoCommentWrapper,
  UserCommentName,
  UserComment,
  UserCommentData,
  CommentFormWrapper,
  FedbackComment,
  CommentInput,
  CommentButton,
  StyleTfiCommentsSmiley,
} from './CommentPage.styled';

const CommentPage = () => {
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const createdAt = new Date();

  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useSelector(authSelector.getName);
  const avatar = useSelector(authSelector.getAvatar);
  const userId = useSelector(authSelector.getUserId);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollectionRef = collection(firestore, 'userPost');
      const postsQuery = query(postsCollectionRef, orderBy('createdAt'));
      const snapshot = await getDocs(postsQuery);
      const fetchedPosts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const postRef = doc(firestore, 'userPost', id);
    const commentsCollectionRef = collection(postRef, 'comments');
    const commentsQuery = query(commentsCollectionRef, orderBy('createdAt'));

    const unsubscribe = onSnapshot(commentsQuery, snapshot => {
      const fetchedComments = snapshot.docs.map(doc => doc.data());
      setAllComments(fetchedComments);
      dispatch(
        authSlice.actions.updateCommentCount({
          id: id,
          count: fetchedComments.length,
        })
      );
    });

    return unsubscribe;
  }, [dispatch, id]);

  const handleClickBack = () => {
    navigate(-1);
  };

  const createComment = async () => {
    const date = new Date();
    const formatData = format(new Date(date), 'dd MMMM, yyyy | HH:mm');

    const dbRef = doc(firestore, 'userPost', id);

    await addDoc(collection(dbRef, 'comments'), {
      comment,
      userId,
      name,
      avatar,
      formatData,
      id,
      createdAt,
    });
    setComment('');
  };

  const handleChangeComment = e => {
    setComment(e.target.value);
  };

  const post = posts.find(post => post.id === id);
  return (
    <>
      <Container>
        <HeaderCommentPost>
          <BtnBackCommentPostWrapper onClick={handleClickBack}>
            <StyleHiArrowLeftCircle size={30} />
          </BtnBackCommentPostWrapper>
          <HeaderCommentPostTitle>Comments</HeaderCommentPostTitle>
        </HeaderCommentPost>
        <MainPostProfileWrapper>
          <CommentPostInfo>
            {post && <CommentPostImg src={post.imageURL} alt="postImg" />}
            {post && <CommentPostTitle>{post.title}</CommentPostTitle>}
          </CommentPostInfo>
          <CommentList>
            {allComments.map((comment, index) => (
              <CommentListItem key={`${comment.id}-${index}`}>
                <UserAvatarCommentWrapper>
                  <UserImgComment src={comment.avatar} alt="user avatar" />
                </UserAvatarCommentWrapper>
                <InfoCommentWrapper>
                  <UserCommentName>{comment.name}</UserCommentName>
                  <UserComment>{comment.comment}</UserComment>
                  <UserCommentData>{comment.formatData}</UserCommentData>
                </InfoCommentWrapper>
              </CommentListItem>
            ))}
          </CommentList>
        </MainPostProfileWrapper>
        <CommentFormWrapper>
          <FedbackComment>
            <CommentInput
              type="text"
              value={comment}
              name="comment"
              placeholder="comment"
              onChange={handleChangeComment}
            />
            <CommentButton type="submit" onClick={createComment}>
              <StyleTfiCommentsSmiley size={20} />
            </CommentButton>
          </FedbackComment>
        </CommentFormWrapper>
      </Container>
    </>
  );
};

export default CommentPage;
