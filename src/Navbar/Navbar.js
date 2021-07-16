import React, { useState } from 'react';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavLinks,
  NavItem,
  NavIcons,
  CompanyServiceButton,
  DarkBox,
} from './NavbarStyle';
import {
  BellOutlined,
  GoogleOutlined,
  LineOutlined,
  MenuOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import SearchResult from './SearchResult/SearchResult';

import MobileMenu from './MobileMenu/MobileMenu';

function Navbar() {
  const [handleShowMenu, setHandleShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onHandleMouseOverNav = () => {
    setHandleShowMenu(true);
  };

  const onHandleMouseOverDarkBox = () => {
    setHandleShowMenu(false);
  };

  const onShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>wanted</NavLogo>
          <NavMenu>
            <NavItem className='home'>
              <NavLinks to='/'>홈</NavLinks>
            </NavItem>
            <NavItem className='search' onMouseOver={onHandleMouseOverNav}>
              <NavLinks to='/'>탐색</NavLinks>
            </NavItem>
            <NavItem className='career'>
              <NavLinks to='/'>커리어 성장</NavLinks>
            </NavItem>
            <NavItem className='salary'>
              <NavLinks to='/'>직군별 연봉</NavLinks>
            </NavItem>
            <NavItem className='resume'>
              <NavLinks to='/'>이력서</NavLinks>
            </NavItem>
            <NavItem className='match-up'>
              <NavLinks to='/'>매치업</NavLinks>
            </NavItem>
            <NavItem className='free-lancer'>
              <NavLinks to='/'>프리랜서</NavLinks>
            </NavItem>
            <NavItem className='AI-pass'>
              <NavLinks to='/'>AI 합격예측</NavLinks>
            </NavItem>
          </NavMenu>
          {/* Icons */}
          <NavIcons>
            <SearchOutlined />
            <BellOutlined />
            <GoogleOutlined className='icon-google' />
            <MenuOutlined className='icon-menu' onClick={onShowMobileMenu} />
            <LineOutlined className='icon-line' />
            <CompanyServiceButton>기업 서비스</CompanyServiceButton>
          </NavIcons>
          <DarkBox handleShowMenu={handleShowMenu} onMouseOver={onHandleMouseOverDarkBox}></DarkBox>
        </NavbarContainer>
      </Nav>
      {/* Mobile Menu */}
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      <SearchResult handleShowMenu={handleShowMenu} />
    </div>
  );
}

export default Navbar;
