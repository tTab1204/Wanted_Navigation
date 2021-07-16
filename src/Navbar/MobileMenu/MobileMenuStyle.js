import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  z-index: 999;
  margin: auto;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuWrapper = styled.div`
  box-shadow: none;
  border: 1px solid #e1e2e3;
  border-radius: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;

  & > div {
    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  & > div > span {
    float: right;
    color: #999;
    margin-right: 40px;
    margin-top: 10px;
    font-size: 22px;
  }
`;

export const MobileMenuList = styled.ul`
  margin: 45px 0 15px;
  list-style: none;
  padding-inline-start: 10px;

  & > li {
    width: 100%;
    height: auto;
    padding: 15px 0;
  }

  & > hr {
    width: 94%;
    border: 1px solid #eee;
    margin-inline-start: 0;
  }

  & > li > #log-out {
    color: #999;
  }
`;

export const MobileMenuLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  color: inherit;
`;

export const MobileMenuUser = styled.div`
  background-image: url('https://lh3.googleusercontent.com/a/AATXAJwBO53MCraRT_s63SYTTkAEy6frMh9rMzVWAgR0=s96-c');
  position: absolute;
  right: 5%;
  top: 20%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ddd;
`;
