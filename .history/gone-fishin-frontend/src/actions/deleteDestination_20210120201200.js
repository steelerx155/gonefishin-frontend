export const deleteDestination = (destinationId) => {

    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/destinations/${destinationId}`, { 
        method: 'DELETE'       
    })
     .then(response => response.json())
     .then(destination => dispatch({type: 'DELETE_DESTINATION', payload: destination}))
  }
}
