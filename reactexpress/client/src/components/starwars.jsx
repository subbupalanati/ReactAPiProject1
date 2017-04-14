import React from 'react';
import ReactDOM from 'react-dom';
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
  };
  }
  
  
  componentWillMount() {
    const URL = 'http://swapi.co/api/people/?format=json';
    fetch(URL)
      .then(response => response.json())
      .then(({results:users}) => 
        this.setState({users})
  );
      
  }
  render() {
    let users=this.state.users;
    return (
      <div>
      {users.map(user => <h1>{user.name}</h1>)}
          
      </div>
    );
  }
}

export default Main;