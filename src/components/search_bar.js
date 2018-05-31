import React, { Component } from 'react';

// Class Component
class SearchBar extends Component { // class has added functionality. must use render function
  constructor(props){  // called automatically when a new class instance is created
    super(props);     // call parent method

    this.state = { term: ' '};  // record "term"
  }

// user enters text -> update state -> rerender -> value gets state value
  render() { //  render returns JSX
    return (
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})}/>
      </div>
    ) // onChange makes render run again
  }
}

export default SearchBar;
