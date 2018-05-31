import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCN1bEZMiZtJ0q8DKpePkp76PpNeMzg2Uo';


// Create a new component. producces some HTML
// Functional Component (no state)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'Souvide'}, (videos) => {
      this.setState({videos});  // this.setState ({videos: videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos ={this.state.videos} />
      </div>
    );
  }
}

// Take this component and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
