import { useCallback, useEffect, useState } from 'react';
import * as S from './styled';
import Logo from './Logo';
import MenuItem from './MenuItem';

const Header = () => {
  const [activeItem, setActiveItem] = useState('top');
  const [menuItems, setMenuItems] = useState([
    {
      key: 'about',
      name: '자기소개',
      offset: 0,
    },
    {
      key: 'skills',
      name: '기술',
      offset: 0,
    },
    {
      key: 'works',
      name: '경력',
      offset: 0,
    },
  ]);

  useEffect(() => {
    getAnchorPoints();
  }, []);

  useEffect(() => {
    (() => {
      window.addEventListener('scroll', handleScroll);
    })();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuItems]);

  const getAnchorPoints = () => {
    const newState = menuItems.map((obj) => {
      const keyCont = document.getElementById(obj.key);
      if (keyCont !== null) {
        return {
          ...obj,
          offset: keyCont.offsetTop,
        };
      }
      return obj;
    });

    setMenuItems(newState);
  };

  const handleScroll = useCallback(() => {
    const curPos = window.scrollY + 64;
    let curSection: any = null;

    menuItems.some((v) => {
      curSection = curPos >= v.offset ? v.key : curSection;
      if (v.key !== curSection) {
        return true;
      }
      return false;
    });

    if (curSection !== activeItem) {
      setActiveItem(curSection);
    }
  }, [menuItems, activeItem]);

  return (
    <S.CustomHeader>
      <Logo />
      <S.CustomMenu
        mode="horizontal"
        selectedKeys={[activeItem]}
        items={menuItems.map((v) => ({
          key: v.key,
          label: (
            <MenuItem
              data={v.key}
              name={v.name}
              key={v.key}
              onClick={setActiveItem}
            />
          ),
        }))}
      />
    </S.CustomHeader>
  );
};

export default Header;
