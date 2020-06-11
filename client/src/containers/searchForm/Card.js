import React from "react";
import { Header,Icon,Image } from 'semantic-ui-react'

function Card(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <Header as='h2' icon textAlign='center'>
        <Image circular src={props.logo} size='small' /><a href={props.weburl}> {props.heading} {props.ticker} </a>
 </Header>
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
}

export default Card;
