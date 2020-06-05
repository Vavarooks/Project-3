import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button } from 'semantic-ui-react';


export default (props) => (
   <Menu widths={3} inverted>

<Menu.Item  as ={Link} to="/home" content="Home" icon='home'/>

{props.authenticated ? null : 
<Menu.Item><Button primary as ={Link} to="/" content="Sign Up"/> </Menu.Item> }

{props.authenticated ? <Menu.Item as ={Link} to="/signout" content="sign Out"/> 
: <Menu.Item> <Button as ={Link} to="/signin" content="Log-in"/></Menu.Item> }

{props.authenticated ? <Menu.Item as ={Link} to="/usertodos" content="my todos"/>
:null }

{props.authenticated ? <Menu.Item as ={Link} to="/alltodos" content="all todos"/>
:null}



   </Menu>

 
 );
  
