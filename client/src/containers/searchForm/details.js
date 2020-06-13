import React from "react";
import { Header,Icon,Card,Image } from 'semantic-ui-react'
import './../../index.css'

const Detail = (props) => {
  return (
    <div className='detail'>
      <ul>
      <li> <a href={props.weburl}> {props.weburl}</a> </li>

      <li><strong>exchange: </strong>{props.exchange}</li>

        <li><strong>Industry: </strong>{props.finnhubIndustry}</li>
        <li><strong>shareOutstanding: </strong>{props.shareOutstanding}</li>

      </ul>
    </div>
     );
}

export default Detail;