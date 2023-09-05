import styled from '@emotion/styled';

export const CatigoryList = styled.ul`
  margin-bottom: 40px;
  margin-top: 40px;
  padding-top: 40px;
  display: grid;
  justify-items: center;
  
  grid-template-columns: repeat(1, 1fr);
  li:not(:first-of-type) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 14px;
    li:nth-of-type(2) {
      display: grid;
    }
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    li:not(:first-of-type) {
      display: grid;
    }
  
  }
`;

export const ButtonContainer = styled.div`
  max-width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  padding: 80px 0px;
  display: flex-inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding: 140px 0px;
  }
`;
