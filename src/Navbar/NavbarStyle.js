import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  top: 0;
  z-index: 500;

  @media screen and (min-width: 960px) and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (min-width: 768px) and (max-width: 960px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const NavLogo = styled(Link)`
  color: #000000;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -12px;

  @media screen and (min-width: 768px) and (max-width: 960px) {
    flex: 1;
    justify-content: space-around;
  }

  @media screen and (max-width: 768px) {
    padding-inline-start: 10px;
  }

  & > .home {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  & > .salary {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  & > .resume {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  & > .match-up {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  & > .free-lancer {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  & > .AI-pass {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const NavItem = styled.li`
  height: 50px;
`;

export const NavLinks = styled(Link)`
  font-weight: bold;
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.8rem;
  height: 100%;
  cursor: pointer;

  @media screen and (min-width: 768px) and (max-width: 960px) {
    padding: 0 0.4rem;
  }

  @media screen and (min-width: 1024px) and (max-width: 1600px) {
    &:hover {
      border-bottom: 2px solid #eee;
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    margin-left: 1rem;
    z-index: 300;
  }

  @media screen and (max-width: 960px) {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }

  & > span {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.2rem;

    @media screen and (max-width: 960px) {
      font-size: 1rem;
    }
  }

  & > .icon-google {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  & > .icon-menu {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }

  & > .icon-line {
    transform: rotate(-90deg);
    padding: 0 0.3rem;
    color: #eee;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const CompanyServiceButton = styled.button`
  font-size: 13px;
  background: #fff;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 0.5px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DarkBox = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100px;
  overflow: hidden;
  transition: 0.5s;
  height: auto;
  height: ${({ handleShowMenu }) => (handleShowMenu ? 'auto' : '0')};
  background-color: ${({ handleShowMenu }) => (handleShowMenu ? 'rgba(0, 0, 0, 0.4)' : '')};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
