import React from 'react';
import { Outlet } from 'react-router-dom';
import { NaviBar } from 'components/NaviBar/NaviBar';

export const SharedLayout = () => {
  return (
    <div>
      <NaviBar />
      <dispatchEvent>
        <Outlet />
      </dispatchEvent>
    </div>
  );
};
