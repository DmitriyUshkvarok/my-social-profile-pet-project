import styled from 'styled-components';
import { SiReactivex } from 'react-icons/si';

export const LoaderWraper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: var(--background-body);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainLoader = styled(SiReactivex)`
  animation: rotate 5s infinite linear;
  -webkit-animation: rotate 5s infinite linear;
  display: block;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
