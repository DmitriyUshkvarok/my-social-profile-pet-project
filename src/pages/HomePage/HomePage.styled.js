import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
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

export const HeaderProfile = styled.div`
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

export const HeaderProfileTitle = styled.h3`
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

export const MainPostProfileWrapper = styled.div`
  margin-top: 75px;
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

export const UserPhotoWrapper = styled.div`
  position: relative;
  max-width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 5px;
  background-image: var(--background-body);
  border-radius: 25px;
`;

export const IconContainer = styled.div`
  width: 100%;
`;

export const StyleAiOutlinePlusCircle = styled(AiOutlinePlusCircle)`
  position: absolute;
  bottom: 10px;
  right: -15px;
  fill: gold;
  cursor: pointer;
`;

export const StyleAiOutlineMinusCircle = styled(AiOutlineMinusCircle)`
  position: absolute;
  bottom: 10px;
  right: -15px;
  fill: red;
  cursor: pointer;
`;

export const NameUser = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: green;
  text-shadow: 1px 1px 10px orange;
`;

export const ImgUserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

export const EmailUser = styled.p`
  text-align: center;
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: green;
  text-shadow: 1px 1px 10px orange;
  margin-bottom: 10px;
`;

export const ProfilPostList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 90px;
`;

export const ProfilListItem = styled.li`
  width: 100%;
  max-width: 320px;
  height: 320px;
  border-radius: 10px;
`;

export const ImgPostProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const ProfilePostTitle = styled.h3`
  margin-top: 2px;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 700;
  color: green;
  text-shadow: 1px 1px 10px orange;
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
