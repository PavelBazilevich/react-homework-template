import styled from 'styled-components';
export const ReportBalance = styled.form`
  @media screen and (min-width: 320px) {
    display: table-footer-group;
    font-size: 12px;
    color: rgba(82, 85, 95, 0.7);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    margin-right: auto;
  }
`;

export const BalanceLabel = styled.label`
  @media screen and (min-width: 320px) {
    position: relative;
    display: block;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding-top: 30px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;
    padding-top: 0px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
  }
`;
export const ButtonsGroup = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    margin-top: 12px;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const BalanceInput = styled.input`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #000;
  max-height: 44px;
  max-width: 140px;
  border: 2px solid #ffffff;
  background-color: transparent;
  border-radius: 22px 0 0 22px;
  font-weight: 700;
  padding-left: 20px;
  padding-right: 20px;
  outline: none;

  @media screen and (min-width: 768px) {
    margin-left: 21px;
    margin-top: 0px;
    min-width: 125px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 1.17;
    font-weight: bold;
    color: black;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 40px;
    margin-right: 15px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 1.17;
    font-weight: bold;
    color: black;
  }
`;

export const BalanceButton = styled.button`
  @media screen and (min-width: 320px) {
    width: 125px;
    height: 44px;
    border: 2px solid #ffffff;
    border-left: 1px;
    background-color: transparent;
    border-radius: 0 22px 22px 0;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    cursor: pointer;
  }

  &:hover {
    background-color: #cfd1d4;
    color: #f5f6fb;
    transition: 0.5s linear;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 125px;
    background-color: transparent;
    border-radius: 16px;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 0px;
  }
`;
