import styled from 'styled-components';
import backgroundImage from '../../images/photoBg.jpg';

export const LoginPageSection = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LoginPageWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
