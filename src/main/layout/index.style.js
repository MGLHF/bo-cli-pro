import styled from 'styled-components';

export const MainLayoutBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  section {
    display: flex;
    background: #f0f2f5;
    #main {
      flex: 1;
      margin: 14px;
      background: #fff;
      box-sizing: border-box;
      padding: 10px;
    }
  }
`;