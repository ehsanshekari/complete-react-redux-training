import React from "react";

class OptimizedComponent extends React.PureComponent{
  // shouldComponentUpdate(nexProps, nextState) {
  //   if(nexProps.name === this.props.name) {
  //     return false
  //   }

  //   return true;
  // }
  
  render() {
    console.log('----------- OPTIMIZED COMPONENT -------------');
    return <div>RegularComponent: {this.props.name}</div>
  }
}

export default OptimizedComponent;