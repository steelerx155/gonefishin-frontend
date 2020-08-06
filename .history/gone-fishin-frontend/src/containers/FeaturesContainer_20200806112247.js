import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'


class FeaturesContainer extends React.Component {
    

    render(){
        return (
            <div>
                <FeaturesInput/>
                 <FeaturesList features={this.props.destinations && this.props.destination.features}/>
            </div>
        )
    }
}

export default FeaturesContainer