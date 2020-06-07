// import React from "react" 
// import { Link } from "react-router-dom"
// // import "../App.css"
// import { Table } from 'semantic-ui-react'


// const LoserListItems = props => (

//     <div>

//     <Table widths={4}>
//      <Table.Header>
//        <Table.Row>
//        <Table.HeaderCell>companyName</Table.HeaderCell>
//        <Table.HeaderCell>price</Table.HeaderCell>

//          <Table.HeaderCell>Changes</Table.HeaderCell>
//          <Table.HeaderCell>changesPercentage</Table.HeaderCell>

//        </Table.Row>
//      </Table.Header>
//      <Table.Body>
      
//  {props.losers.map(({index,ticker,changes,price,changesPercentage,companyName})=>(
//     <Table.Row >
//         <Table.Cell > <h1>{companyName} [{ticker}]</h1></Table.Cell>
//         <Table.Cell>${price} </Table.Cell>

//         <Table.Cell negative>{changes} </Table.Cell>
//         <Table.Cell negative>{changesPercentage} </Table.Cell>


//         {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}
 
//         </Table.Row>
//   ))}
     
//      </Table.Body>
//     </Table>
 
  
 
//   </div>
// );

// export default LoserListItems;





import React from "react" 
import { Link } from "react-router-dom"
// import "../App.css"
import { Table } from 'semantic-ui-react'


const LoserListItems = props => (

    <div>

    <Table widths={4}>
    <Table.Header>
       <Table.Row>

       <Table.HeaderCell><h2> Company [ticker]</h2></Table.HeaderCell>

       <Table.HeaderCell>Last price</Table.HeaderCell>
       <Table.HeaderCell>price change</Table.HeaderCell>

         <Table.HeaderCell>percent change</Table.HeaderCell>

       </Table.Row>
     </Table.Header>
     <Table.Body>
      

 {props.losers.map(({performanceId,standardName,lastPrice,priceChange,percentChange,ticker})=>(
       <Table.Row key={performanceId}>

       <Table.Cell > <h3>{standardName} [{ticker}]</h3></Table.Cell>
       <Table.Cell>${lastPrice} </Table.Cell>
       <Table.Cell >${priceChange} </Table.Cell>

       <Table.Cell negative>{percentChange}% </Table.Cell>


       {/* <DeleteTodoModal handleDelete={props.handleDelete} id={_id} text={text}/> */}

       </Table.Row>
  ))}
     
     </Table.Body>
    </Table>
 
  
 
  </div>
);

export default LoserListItems;