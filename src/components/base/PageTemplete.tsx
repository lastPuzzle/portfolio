import React from 'react';
import { Layout, BackTop } from 'antd';
import Header from 'components/base/Header';
import Footer from 'components/base/Footer';
import * as S from './styled';

interface PageTemplateProps {
  children: React.ReactNode;
}

const PageTemplete = ({ children }: PageTemplateProps) => {
  return (
    <Layout className="layout">
      <Header />
      <S.CustomContent>
        <div className="site-layout-content">{children}</div>
      </S.CustomContent>
      <Footer />
      <BackTop>
        <S.CustomBackTop>UP</S.CustomBackTop>
      </BackTop>
    </Layout>
  );
};

export default PageTemplete;
