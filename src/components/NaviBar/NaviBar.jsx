import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import naviStyles from './NaviBar.module.css';

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &.active {
    color: red;
  }
`;

export const NaviBar = () => {
  return (
    <nav className={naviStyles.navi}>
      {' '}
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </nav>
  );
};
