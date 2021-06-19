import React, { FC } from 'react';

export const Header: FC = () => {
  return (
    <div id="header">
      <div id="nav-section">
        <a href="/">Home</a>
        <a href="/plan">Plan</a>
        <a href="/inventory">Inventory</a>
        <a href="/recipes">Recipes</a>
      </div>
    </div>
  );
};
