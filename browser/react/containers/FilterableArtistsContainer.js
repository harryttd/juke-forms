import React, {Component} from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';
import axios from 'axios';

export default class FilterableArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  // <Artists artists={filteredArtists} />

  render() {
    const input = this.state.input;
    const filteredArtists = this.props.artists.filter(artist =>   artist.name.match(input));

    return (
      <div>
        <FilterInput value={input} handleChange={this.handleChange}/>
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}
