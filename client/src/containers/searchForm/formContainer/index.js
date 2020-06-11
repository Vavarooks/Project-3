import React, { Component } from 'react'
import API from "./../utils"
import Detail from './../details'
import SearchBar from './../search'
import { Grid,Message } from 'semantic-ui-react'
import Card from './../Card'
import Plot from 'react-plotly.js';
import otherUtil from './../otherutil'
  


 
export default class FormContainer extends Component {
    state = {
        result: {},
        search: "",
        xvalues:[],
        yvalues:[]
       };
      componentDidMount() {
        this.searchMovies('aapl');
 
      }

      searchMovies = (query) => {
        let xfunction=[];
        let yfunction=[];

        otherUtil.search(query)
        .then((response)=>{
          this.setState({result:response.data},()=>{
            console.log('post json',response.data)
          })
        })

         API.search(query)
        .then((response)=>{
          for(var key in response.data['Time Series (Daily)']){
            xfunction.push(key);
            yfunction.push(response.data['Time Series (Daily)'][key]['1. open'])
          }
          this.setState({xvalues:xfunction,yvalues:yfunction})
          console.log(xfunction)
          console.log(yfunction)
         })
        .catch((e)=>{
            console.log(e)
        })
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
         
      };

    render() {
      
        return (
            <div>

<div>
{/* <Grid padded='horizontally'textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}> */}

 
          <SearchBar
 value={this.state.search}
 handleInputChange={this.handleInputChange}
 handleFormSubmit={this.handleFormSubmit}
/>
<Card
exchange={this.state.result.exchange}
weburl={this.state.result.weburl}
ticker={this.state.result.ticker}
logo={this.state.result.logo}
heading={this.state.result.name || 
    
    <Message negative>
    <Message.Header>No results to display </Message.Header>
      <p>Please try again...</p>
  </Message>
 }>
 {this.state.result.name ? (
 <Detail
 exchange={this.state.result.exchange}
 shareOutstanding={this.state.result.shareOutstanding}
 finnhubIndustry={this.state.result.finnhubIndustry}
 name={this.state.result.name}
 ticker={this.state.result.ticker}
 logo={this.state.result.logo}
 />
 ) : (
  <h3> </h3>
) }
</Card>

{/* <UserTodoList/> */}
<div>
<Plot 
        data={[
          {
            x: this.state.xvalues,
            y: this.state.yvalues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
        ]}
        layout={{width: 630, height: 450, }}
       />



 </div>
 

{/* </Grid.Column>
</Grid> */}
       </div>





            </div>
        )
    }
}