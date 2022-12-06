import React from 'react';

class OptimizedComponent extends React.PureComponent {
  //  shouldComponentUpdate(nextProps, nextState){
  //   if(nextProps.name === this.props.name){
  //     return false;
  //   }

  //   return true;
  //  }

    render(){
        console.log('--------- OptimizedComponent ---------');
        return <div>Optimized Component: {this.props.name}</div>
    }
}

export default OptimizedComponent;