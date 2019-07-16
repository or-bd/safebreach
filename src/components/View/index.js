import React from 'react';
import Header from '../Header';
import './style.scss';

const View = ({ children }) => (
  <div id="page-view-hoc">
    <Header />
    {children}
  </div>
);

export default View;
