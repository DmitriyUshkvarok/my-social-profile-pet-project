import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import {
  InfoUserBlock,
  PhotoUserContainer,
  InfoUserPhoto,
  InfoTextUserWrapper,
  InfoUserName,
  InfoUserEmail,
} from './InfoUserContainer.styled';

const InfoUserContainer = () => {
  const name = useSelector(authSelector.getName);
  const email = useSelector(authSelector.getEmail);
  const avatar = useSelector(authSelector.getAvatar);

  return (
    <InfoUserBlock>
      <PhotoUserContainer>
        <InfoUserPhoto src={avatar}></InfoUserPhoto>
      </PhotoUserContainer>
      <InfoTextUserWrapper>
        <InfoUserName>{name}</InfoUserName>
        <InfoUserEmail>{email}</InfoUserEmail>
      </InfoTextUserWrapper>
    </InfoUserBlock>
  );
};

export default InfoUserContainer;
