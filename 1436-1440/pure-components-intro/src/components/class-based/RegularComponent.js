import React from 'react';

class RegularComponent extends React.Component {
    render(){
        console.log('--------- RegularComponent ---------');
        return <div>Regular Component: {this.props.name}</div>
    }
}

export default RegularComponent;