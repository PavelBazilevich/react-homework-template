import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoHomeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const StyledLink = styled(NavLink)`
display: flex;
align-items: center;

  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  text-decoration: none;
} 
@media screen and (max-width: 1279px) {
 margin-right: auto;
  }`;

export const Arrow = styled.svg`
  width: 18px;
  height: 12px;
  fill: none;
  xmlns: 'http://www.w3.org/2000/svg';
`;

export const Title = styled.p`
  margin-left: 18px;
  &:hover {
    color: #ff751d;
  }
`;
