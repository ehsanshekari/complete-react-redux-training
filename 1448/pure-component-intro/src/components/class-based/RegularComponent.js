import React from "react";

class RegularComponent extends React.Component{
  render() {
    console.log('----------- REGULAR COMPONENT -------------');
    return <div>RegularComponent: {this.props.name}</div>
  }
}

export default RegularComponent;