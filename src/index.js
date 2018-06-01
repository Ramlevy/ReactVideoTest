import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCN1bEZMiZtJ0q8DKpePkp76PpNeMzg2Uo';


// Create a new component. producces some HTML
// Functional Component (no state)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("dog");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); // this.setState ({videos: videos})
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    
    return (
      <div>
        <SearchBar onSearchTermChange={term => videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
