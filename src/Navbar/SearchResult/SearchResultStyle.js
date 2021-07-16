import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultContainer = styled.div`
  position: relative;
  height: ${({ handleShowMenu }) => (handleShowMenu ? '400px' : '0px')};
  overflow: hidden;
  background: #fff;
  z-index: 200;
  margin-top: 3rem;
  padding: 0 24px;
  display: flex;
  justify-content: center;

  transition: 0.3s ease;

  & > div {
    max-width: 1100px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InfoRow = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
`;

export const InfoCol = styled.div`
  float: left;
  height: 270px;
  padding: 40px 20px 0 0;
  text-align: left;
  padding: 0px 10px;
`;

export const SearchElementLink = styled(Link)`
  display: flex;
  text-decoration: none;

  & > h2 {
    position: relative;
    font-size: 17px;
    color: #000000;
    line-height: 20px;
    vertical-align: top;
    padding-right: 20px;
    padding-bottom: 15px;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }

  & > span {
    margin-top: 17px;
    font-size: 12px;
    color: #999;
  }
`;

export const OtherMenuLink = styled(Link)`
  display: flex;
  text-decoration: none;

  & > h2 {
    position: relative;
    font-size: 17px;
    color: #000000;
    line-height: 20px;
    vertical-align: top;
    padding: 0 20px 0 0;
    width: 100%;
    margin: 6px 0px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }

  & > span {
    margin-top: 11px;
    font-size: 12px;
    color: #999;
  }
`;

export const DetailLink = styled(Link)`
  text-decoration: none;
  display: block;

  & > h3 {
    position: relative;
    font-size: 13px;
    color: #999;
    margin: 0.5rem 0;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
  }

  & > span {
    position: relative;
    font-size: 20px;
    color: #999;
  }

  & > h3 > .show-more {
    float: right;
  }
`;
