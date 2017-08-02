import React from 'react';
import ReactDOM from 'react-dom';
// both of the above come form the node_modules directory by default.

import SearchBar from './components/search_bar';
// this one NEEDS the path of where the file is that I created.

const API_KEY = 'AIzaSyCRIVKyQtDyr2YXN3W7LjtMU-p-igDNcFw';

// STEP 1: Create New Component.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};


// STEP 2: Place into Dom
ReactDOM.render(<App />, document.querySelector('.container'));