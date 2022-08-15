import styled from 'styled-components';
import { Divider, Timeline } from 'antd';

export const Wrapper = styled.div`
  padding: 40px 50px;
  @media screen and (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const LogoImg = styled.img`
  max-width: 160px;
  width: 100%;
`;

export const CustomDivider = styled(Divider)`
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  p {
    font-size: 14px;
    color: #aaa;
    font-weight: normal;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.06);
`;

export const CustomTimeLine = styled(Timeline)`
  margin-top: 24px;
`;

export const TimeLineTitle = styled.div`
  font-weight: bold;
  font-size: 17px;
`;

export const TimeLineDate = styled.div`
  color: #aaa;
`;

export const TimeLineText = styled.div`
  margin-top: 12px;
  font-size: 14px;
`;
