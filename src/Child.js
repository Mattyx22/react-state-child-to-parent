import React from 'react';

class Child extends React.Component {
    state = { text: ' ' };
    
    submitHandler =(e) => {
        e.preventDefault();
        this.props.sendToParent(this.state.text);
        this.setState({text: ''});
    }

    changeHandler = (e) => {
        this.setState({text: e.target.value})
    }

    render() {
      return (
        <div>
          <form onSubmit={this.submitHandler}>
            <input type="text" value={this.state.text} onChange={this.changeHandler}/>
            <input type="submit" />
          </form>
        </div>
      )
    }
  }

export default Child;