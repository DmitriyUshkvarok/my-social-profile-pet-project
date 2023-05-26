import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { FaComment } from 'react-icons/fa';
import { SlLike } from 'react-icons/sl';
import { CiLocationOn } from 'react-icons/ci';

export const NoPostBlock = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 35px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: green;
  text-shadow: 1px 1px 10px orange;
`;

export const HeaderPosts = styled.div`
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

export const HeaderPostsTitle = styled.h3`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px #28a745;
  color: #28a745;
  letter-spacing: 2px;
`;

export const LogoutWrapper = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

export const StyleBiLogOut = styled(BiLogOut)`
  fill: #28a745;
  transition: 0.4s;

  &:hover {
    fill: #ff4c00;
  }
`;

export const InfoUserPost = styled.div`
  display: flex;
  align-items: center;
  max-width: 200px;
  margin-bottom: 5px;
`;

export const InfoUserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 5px;
`;

export const InfoUserName = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-shadow: 0px 0px 20px #28a745;
  color: aqua;
  letter-spacing: 2px;
`;

export const MainPostWrapper = styled.div`
  margin-top: 80px;
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const InfoUserWrapp = styled.div`
  margin-left: 50px;
`;

export const PostListWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 110px;
`;

export const PostList = styled.ul`
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const PostListItem = styled.li`
  width: 100%;
  max-width: 900px;
  border-radius: 30px;
  min-height: 400px;
`;

export const PostListPhoto = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

export const PostTitle = styled.p`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  color: #212121;
`;

export const PanelPostList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const PanelPostItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: auto;
  }
`;

export const CommentCount = styled.span`
  margin-left: 5px;
  font-size: 19px;
  font-weight: bold;
  text-shadow: 0px 0px 20px #28a745;
  color: gold;
  letter-spacing: 2px;
`;

export const StyleFaRegComment = styled(FaComment)`
  cursor: pointer;
`;

export const StyleSlLike = styled(SlLike)`
  cursor: pointer;
`;

export const StyleCiLocationOn = styled(CiLocationOn)`
  cursor: pointer;
`;
