import styled from 'styled-components';

export const WelcomeBox = styled.div`
  @keyframes xuanzhuan {
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  min-height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    animation: xuanzhuan infinite 20s linear;
  }
`;