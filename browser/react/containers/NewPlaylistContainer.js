import React, {Component} from 'react';
import NewPlaylist from '../components/NewPlaylist'

export default class NewPlaylistContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.setState({
      name: ''
    })
  }

  render(){
    return (
       <div>
          <NewPlaylist value={this.state.name} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
       </div>
    )
  }
};
