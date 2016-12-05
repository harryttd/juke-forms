import React, {Component} from 'react';
import NewPlaylist from '../NewPlaylist'

export default class NewPlaylistContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
      console.log(this.state.name)
    return (
       <div>
          <NewPlaylist value={this.state.name} onSubmit={this.handleSubmit} onChange={this.handleChange} />
       </div>
    )
  }
};
