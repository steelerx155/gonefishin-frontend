import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled, {ThemeProvider} from 'styled-components'
//import Button from './components/Button'

const Title = styled.h1`
color: blue;
font-size: 100px;
`

const theme =  {
  primary:'teal',
  secondary: 'green',
  font: 'sans-serif',
  background: 'blue'
};


class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/destinations/')
    .then(response => response.json())
    .then(data => console.log(data))
  }



  render(){
    return(
      <ThemeProvider theme={theme}>
        
      <div className="App"
        style={{
          backgroundImage:`url("https://images.unsplash.com/photo-1510002507184-45227b3a3524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'
         }}>
      
      <Title>Gone Fishin'</Title>
      <DestinationsContainer />        
      </div>
      </ThemeProvider>
    )
  }
}

export default App


