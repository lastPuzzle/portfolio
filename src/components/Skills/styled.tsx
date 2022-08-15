import styled from 'styled-components';
import { Tag } from 'antd';

export const Wrapper = styled.div`
  padding: 40px 50px;
  @media screen and (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export const CustomTag = styled(Tag)`
  padding: 0 20px;
  line-height: 30px;
  font-size: 13px;
`;
