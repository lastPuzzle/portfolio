import React from 'react';
import * as S from './styled';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default Title;
