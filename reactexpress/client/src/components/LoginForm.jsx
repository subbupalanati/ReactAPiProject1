import  React from 'react';
import {browserHistory} from 'react-router';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userName: ''};
    this.state={Password:''};

    this.handleChange = this.handleChange.bind(this);
    this.handlepasswordChange=this.handlepasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({userName: event.target.value});
  
    
  }
  handlepasswordChange(event)
  {
  this.setState({Password: event.target.value});
  }

  handleSubmit(event) {
  browserHistory.push('/mainpage');

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          UserName:
          <input type="text" value={this.state.userName} onChange={this.handleChange} />
        </label>
        <label>
          Pasword:
          <input type="Password" value={this.state.Password} onChange={this.handlepasswordChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;