import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';


export default (props) => (
  <Menu widths={4}>
{props.authenticated ? null : <Menu.Item as ={Link} to="/" content="sign Up"/>}
{props.authenticated ? <Menu.Item as ={Link} to="/signout" content="sign Out"/> : <Menu.Item as ={Link} to="/signin" content="sign In"/>}
<Menu.Item as ={Link} to="/counter" content="main"/>
{props.authenticated ? <Menu.Item as ={Link} to="/usertodos" content="My watchList"/>:null }
{/* <Menu.Item as ={Link} to="/alltodos" content="all todos"/> */}

   </Menu>

);
  
