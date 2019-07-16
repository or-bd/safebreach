import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.scss';

const Header = ({ history }) => (
  <h1 id="page-header" onClick={() => history.push('/')}>starwars</h1>
);

export default withRouter(Header);
