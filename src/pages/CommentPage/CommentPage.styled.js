import styled from 'styled-components';
import { HiArrowLeftCircle } from 'react-icons/hi2';
import { TfiCommentsSmiley } from 'react-icons/tfi';

export const HeaderCommentPost = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  z-index: 20;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 30px 10px rgba(10, 216, 244, 0.2);
`;

export const HeaderCommentPostTitle = styled.h3`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px #28a745;
  color: #28a745;
  letter-spacing: 2px;
`;

export const BtnBackCommentPostWrapper = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const StyleHiArrowLeftCircle = styled(HiArrowLeftCircle)`
  margin-left: 10px;
  fill: gold;
  transition: fill 0.4s;

  &:hover {
    fill: aqua;
  }
`;

export const MainPostProfileWrapper = styled.div`
  margin-top: 80px;
  max-height: 530px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const CommentPostInfo = styled.div`
  /* margin-top: 90px; */
  width: 100%;
  max-width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const CommentPostImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const CommentPostTitle = styled.h3`
  font-weight: 500;
  font-size: 35px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: green;
  text-shadow: 1px 1px 10px orange;
`;

export const CommentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 40px;
`;

export const CommentListItem = styled.li`
  display: flex;
  width: 100%;
  gap: 10px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }
`;

export const UserAvatarCommentWrapper = styled.div``;
export const UserImgComment = styled.img`
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const InfoCommentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 5px;
`;

export const UserCommentName = styled.p`
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: aqua;
  text-shadow: 1px 1px 10px orange;
  margin-bottom: 15px;
`;

export const UserComment = styled.p`
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: gold;
  text-shadow: 1px 1px 10px orange;
  margin-bottom: 10px;
`;

export const UserCommentData = styled.p`
  display: flex;
  justify-content: flex-end;
  text-shadow: 1px 1px 10px orange;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 1.16;
  letter-spacing: 0.01em;
`;

export const CommentFormWrapper = styled.div`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  left: 10px;
  right: 10px;
  z-index: 5;
  background-color: rgba(0, 128, 0, 0.4);
  box-shadow: 0px 0px 30px 10px rgba(10, 216, 244, 0.6);
`;

export const FedbackComment = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
`;

export const CommentInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  padding-right: 50px;
  color: gold;
  font-size: 18px;
  background-color: transparent;
  box-shadow: 0px 0px 30px 10px rgba(10, 216, 244, 0.7);
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const StyleTfiCommentsSmiley = styled(TfiCommentsSmiley)`
  fill: gold;
`;

export const CommentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 30px;
  background-color: green;
  border: 1px solid gold;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background-color: aqua;
    border-color: green;

    > ${StyleTfiCommentsSmiley} {
      fill: green;
    }
  }
`;
