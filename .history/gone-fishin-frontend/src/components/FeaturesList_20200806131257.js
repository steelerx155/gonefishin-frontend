import React from 'react'


const FeaturesList = (props) => {
    console.log(props.features)

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}{feature.destination_id}
            </li>
            )} 
        </div>
    )
}

export default FeaturesList