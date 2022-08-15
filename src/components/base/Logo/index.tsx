import * as S from './styled';

const handleClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Logo = () => {
  return <S.Wrapper onClick={handleClick}>PORTFOLIO</S.Wrapper>;
};

export default Logo;
