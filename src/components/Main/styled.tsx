import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  canvas {
    cursor: crosshair;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: 'Black Han Sans';
    text-align: center;
  }
`;
