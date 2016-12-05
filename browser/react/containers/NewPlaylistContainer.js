import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      change: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }
  handleChange(event){
    this.setState({
      name: event.target.value,
      change: true
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      name: '',
      change: false
    });
  }

  isDisabled() {
    return !this.state.name || this.state.name.length > 16;
  }

  render(){

    const state = this.state.name;
    function warning() {
      let message;
      let warningMessage = <div className="alert alert-warning">message</div>;

      if (state.length > 16) message = 'Name is too long';
      if (state.change && !state.name.length) message = 'Please enter a name';

      if (message) return warningMessage;
    }

    return (
       <div>
          <NewPlaylist
            value={this.state.name}
            handleSubmit={this.handleSubmit} handleChange={this.handleChange}
            warning={warning}
            isDisabled={this.isDisabled}
            change={this.state.change}
           />
       </div>
    );
  }
}
