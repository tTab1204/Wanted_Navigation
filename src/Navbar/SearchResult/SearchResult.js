import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import {
  DetailLink,
  InfoCol,
  InfoRow,
  OtherMenuLink,
  SearchElementLink,
  SearchResultContainer,
} from './SearchResultStyle';
import { menus, datas } from '../../Data/Data';

const SearchResult = ({ handleShowMenu }) => {
  return (
    <div>
      <SearchResultContainer handleShowMenu={handleShowMenu}>
        <div>
          <InfoRow>
            {datas.map((data) => (
              <InfoCol key={data.id}>
                <SearchElementLink>
                  <h2>{data.title}</h2>
                  <RightOutlined />
                </SearchElementLink>
                {data.detail.map((item, i) => (
                  <DetailLink key={item._id}>
                    <h3>
                      {item.name}{' '}
                      {data.detail[i] === data.detail[data.detail.length - 1] && (
                        <span className='show-more'>
                          <RightOutlined />
                        </span>
                      )}
                    </h3>
                  </DetailLink>
                ))}
              </InfoCol>
            ))}
            <InfoCol>
              <SearchElementLink>
                <h2>금융</h2>
                <RightOutlined />
              </SearchElementLink>
              {menus.map((menu) => (
                <OtherMenuLink key={menu._id}>
                  <h2>{menu.name}</h2>
                  <RightOutlined />
                </OtherMenuLink>
              ))}
            </InfoCol>
          </InfoRow>
        </div>
      </SearchResultContainer>
    </div>
  );
};

export default SearchResult;
