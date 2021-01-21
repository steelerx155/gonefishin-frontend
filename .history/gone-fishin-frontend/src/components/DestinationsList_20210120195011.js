import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Button from '../styledComponents.js/Button'





const DestinationsList = (props) => {

    const handleDelete = (destination) => {
        props.deleteDestination(destination.id) 
    }

    
    
    return (
       <div>
       <h2> Fishing Lake List:</h2> {props.destinations.reverse().map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</div><Button onClick={() => handleDelete(destinations)}>Delete</Button></h5>)} 
   </div>
   
 
    )
}

export default (DestinationsList)