import React from 'react';

const Header = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <a href="/">Home</a>
    <a href="/Search"> | Search</a>
    <a href="/Mine"> | Mine</a>
    <a href="/Counter"> | Counter</a>
  </div>
);

export default Header;