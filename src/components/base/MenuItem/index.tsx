import React, { useEffect, useState } from 'react';
import * as S from './styled';

interface MunuItemProps {
  name: string;
  data: string;
  onClick: (data: string) => void;
}

const MenuItem = ({ data, name, onClick }: MunuItemProps) => {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(data));
  }, [data]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.body.style.overflow = 'auto';
    if (anchorTarget !== null) {
      onClick(data);
      window.scrollTo({
        top: anchorTarget.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };

  return (
    <S.Wrapper href={`#${data}`} onClick={handleClick}>
      {name}
    </S.Wrapper>
  );
};

export default MenuItem;
