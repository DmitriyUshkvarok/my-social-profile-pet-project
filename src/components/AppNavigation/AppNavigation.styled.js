import styled from 'styled-components';
import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlinePlus } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const StyleNavigation = styled.nav`
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  bottom: 10px;
  left: 10px;
  right: 10px;
  z-index: 5;
  background-color: rgba(0, 128, 0, 0.4);
  box-shadow: 0px 0px 30px 10px rgba(10, 216, 244, 0.6);
`;
export const NavigationList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const NavigatiomItem = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyleCgProfile = styled(CgProfile)`
  fill: currentColor;
  transition: 0.4s;

  &:hover {
    color: aqua;
  }
`;

export const StyleAiOutlinePlus = styled(AiOutlinePlus)`
  fill: currentColor;
  transition: 0.4s;

  &:hover {
    fill: aqua;
  }
`;

export const StyleTfiLayoutGrid3 = styled(TfiLayoutGrid3)`
  fill: currentColor;
  transition: 0.4s;

  &:hover {
    fill: aqua;
  }
`;

export const StyleNavigationLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  border: 1px solid gold;
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  transition: background-color 0.4s;

  &:hover {
    border-color: aqua;
  }

  &.active {
    color: aqua;
    border-color: aqua;

    > ${StyleCgProfile}, > ${StyleAiOutlinePlus}, > ${StyleTfiLayoutGrid3} {
      fill: aqua;
    }
  }
`;
