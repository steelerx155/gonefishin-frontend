import React from 'react'
import {connect} from 'react-redux'


class DestinationsInput extends React.Component {

    state = {name: '', city: '', state: '', description: ''}

    render() {
        return (
            <div>
                <form > 
                <label>Lake Name: </label>
                <input type="text" placeholder="Lake Name"></input>
                <label>City: </label>   
                <input type="text" placeholder="City: "></input>
                <label>State: </label>   
                <input type="text" placeholder="State: "></input>
                <label>Description: </label>   
                <input type="text" placeholder="Description: ">
                </input>
                </form>
            </div>


// t.string "name"
// t.string "city"
// t.string "state"
// t.string "description"

        )
    }
}

export default connect()(DestinationsInput)