import styled from 'styled-components';
import { Menu } from 'antd';
import { Footer, Content, Header } from 'antd/lib/layout/layout';

export const CustomMenu = styled(Menu)`
  justify-content: flex-end;
  border: 0;
`;

export const CustomFooter = styled(Footer)`
  background: #000;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 24px 20px;
  }
`;

export const CustomContent = styled(Content)`
  background: #fff;
  padding-top: 64px;
`;

export const CustomHeader = styled(Header)`
  background: #fff;
  position: fixed;
  z-index: 30;
  width: 100%;
  box-shadow: 0 2px 8px #f0f1f2;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CustomBackTop = styled.div`
  width: 40px;
  line-height: 40px;
  font-weight: bold;
  background: #fff;
  font-family: 'Black Han Sans';
  box-shadow: 0 2px 8px #e2e2e2;
  text-align: center;
  border-radius: 4;
`;
