import React from 'react';
import ReactDOM from 'react-dom';

import Child from './Child';

class Parent extends React.Component {
    state = {fromChild: ''};

    getData = (data) => {
        this.setState({
            fromChild: data
        })
    }
    
    render() {
      return (<div>
        <h2>Child's input</h2>
        <Child sendToParent={this.getData} />
        <h2>State passed from Child to Parent</h2>
        {this.state.fromChild}
      </div>);
    }
}
  
  ReactDOM.render(<Parent  />, document.getElementById('root'));