import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/addFeature'



const FeaturesList = (props) => {
   // console.log(props.features)

   const handleDelete = (event) => {

   }

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><button onClick={handleDelete}>Delete</button>
            </li>
            )} 
        </div>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)