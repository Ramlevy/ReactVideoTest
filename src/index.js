import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCN1bEZMiZtJ0q8DKpePkp76PpNeMzg2Uo';

// Create a new component. producces some HTML
const App = () => {
    return <div>Hi!</div>;
};

// Take this component and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
