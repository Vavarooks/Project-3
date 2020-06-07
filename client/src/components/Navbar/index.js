import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { white, orange } from 'color-name';


export default (props) => (
   <Menu widths={6} inverted>
<Menu.Item  as ={Link} to="/home" icon='home' content="home" />
{props.authenticated?<Menu.Item  as ={Link} icon='plus'to="/winners" content="Winners" /> : null}
{props.authenticated?<Menu.Item  as ={Link} icon='minus'to="/losers" content="Losers" />:null}

{props.authenticated ? null : 
<Menu.Item><Button primary as ={Link} to="/" content="Sign Up"/> </Menu.Item> }



{props.authenticated ? <Menu.Item as ={Link} to="/usertodos" content="WatchList" icon='eye'/>
:null }

 {props.authenticated ? <Menu.Item as ={Link} to="/popular" icon='chart line'content="popular"/>
:null} 

{props.authenticated ? <Menu.Item as ={Link} to="/signout" content="Sign out"/> 
: <Menu.Item> <Button as ={Link} to="/signin" content="Log-in"/></Menu.Item> }

   </Menu>

 
 );
  
