import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import {
  MobileMenuContainer,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuUser,
  MobileMenuWrapper,
} from './MobileMenuStyle';
import wanted_logo from '../../assets/wanted_logo.png';

const MobileMenu = ({ showMobileMenu, setShowMobileMenu }) => {
  const onCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      {showMobileMenu && (
        <MobileMenuContainer>
          <MobileMenuWrapper>
            <div>
              <img src={wanted_logo} alt='wanted_logo' />
              <CloseOutlined onClick={onCloseMobileMenu} />
            </div>
            <MobileMenuList>
              <li>
                <MobileMenuLink>MY 원티드</MobileMenuLink>
                <MobileMenuUser></MobileMenuUser>
              </li>
              <li>
                <MobileMenuLink>프로필</MobileMenuLink>
              </li>
              <hr />
              <li>
                <MobileMenuLink>이력서</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink>매치업</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink>추천</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink>지원 현황</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink>프리랜서</MobileMenuLink>
              </li>
              <hr />
              <li>
                <MobileMenuLink>직군별 연봉</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink>커리어 성장</MobileMenuLink>
              </li>
              <hr />
              <li>
                <MobileMenuLink>기업 서비스</MobileMenuLink>
              </li>
              <li>
                <MobileMenuLink id='log-out'>로그아웃</MobileMenuLink>
              </li>
            </MobileMenuList>
          </MobileMenuWrapper>
        </MobileMenuContainer>
      )}
    </div>
  );
};

export default MobileMenu;
