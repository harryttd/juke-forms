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

  filterArtists() {
    return axios.get('/api/artists/')
    .then(artists => {
      return artists.data.map(artist => {
        return artist;
      });
    });
  }

  // <Artists artists={filteredArtists} />

  render() {
    const input = this.state.input;
    const filteredArtists = this.filterArtists();

    const x = filteredArtists
      .then(artists => {
        return artists.filter(artist => artist.name.match(input));
      });
    console.log(x);

    return (
      <div>
        <FilterInput value={input} handleChange={this.handleChange}/>
        <Artists artists={x} />
      </div>
    );
  }
}
