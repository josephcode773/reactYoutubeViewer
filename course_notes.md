# udemy Modern React with Redux - Course Notes
Instructor: Stephen Grider

### Section: 1 - An Intro to React

#### Section 1, Lesson 9: React vs ReactDom
ReactDom is used to send a component to the DOM, while React is used to create and manage our componenets

#### Section 1, Lesson 10:
const App is a (factory) function that produces stuff to the DOM.

Must create an instance before it goes to the DOM

#### Section 1, Lesson 11: Render Targets
ReactDom.render(Instance of our Component, Where to render (or place) it on the DOM)

Use FAT arrow functions whenever possible.

#### Section 1, Lesson 12: Component Structure
component is a function or object that returns something to our HTML.

react knows how to render multiple components at one time, by spreading it out to diffrent (or seperate) components.

- search_bar component
- video_list_item component(s)
- video_list compponents
- video_detail compponents

always make 1 component per file

created src/components/"componentName"

#### Section 1, Lesson 13: Youtube Search API Signup
https://console.developers.google.com is where to go to obtain google api keys and credentials, for free. we used it for "youtube search".

npm install --save youtube-api-search
save, means to save it to the package.json file

#### Section 1, Lesson 14: Export Statements
exporting modules = ex: export default SearchBar

import React from 'react';
import ReactDOM from 'react-dom';
// both of the above come form the node_modules directory by default.

import SearchBar from './components/search_bar';
// this one NEEDS the path of where the file is that I created.


console?
state

#### Section 1, Lesson 15: Class Based Components
Two diffrent types of components; Functional Based and Class Based.

````
import React, { Component } from 'react';

// functional component
const SearchBar = () => {
	return <input />;
};

// class component:  when you want it to have some type of record keeping
class SearchBar extends Component {
	render() {
		// this is the syntaxt to use to define a methond on a task.
		// every class must have a render function AND return some jsx.
		return <input />;
	} 
}

export default SearchBar;
````

#### Section 1, Lesson 16: Handling User Events

````
// This will make monitor the input value by using an Event Handler

import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		// pass the event handler to the element you want to monitor...
		return <input onChange={this.onInputChange} />;
		// on(name of the "event")={this."event handler"}
	} 

	// event handler
	onInputChange(event) { // event: has usefull properties inside
		// whenever input changes, run the code in here...
		console.log(event.target.value);
	}
}

export default SearchBar;

// REFACTOR #1 !!!

import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		// pass the event handler to the element you want to monitor...
		return <input onChange={ event => console.log(event.target.value) } />;
		// on(name of the "event")={this."event handler"}
	} 

	// event handler
	onInputChange(event) { // event: has usefull properties inside
		// whenever input changes, run the code in here...
	}
}

export default SearchBar;

````
#### Section 1, Lesson 17: Introduction to State

````
// State: is a plain javasciript object that is used to Record and React to user events
// each class based compont has it's own state object. partents and all childen get reinitialzed as well.


import React, { Component } from 'react';

class SearchBar extends Component {
	// constructor function get's called first, everytime
	constructor(props) {
		super(props);
		// Component (from above) is the Parent method. It's lets us use props from it by putting "super" in front of it. now i got two props.

		this.state = { term: '' };
		//  initiize state by createing a new object and assing it to this.state. the object we pass must include property terms.  whenever the User updates (or types inside input) we want it to become the value of "term: ", which is '' right now.
	}

	render() {
		return <input onChange={ event => console.log(event.target.value) } />;
	} 

}

export default SearchBar;

````
#### Section 1, Lesson 18: More on State
````
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' }
        // only do state, equals, in Constuctor.
    }

	render() {
		return (
            <div>
                <input onChange={event => this.setState({ term: event.target.value })} />;
                // Change state using this.setState
                Value of the input: {this.state.term}
                // This "Value of the input:" shows the this.state.term on the DOM
            </div>
        );
	}
}

export default SearchBar;

````
#### Section 1, Lesson 19: Controlled Components
````
render() {
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={event => this.setState({ term: event.target.value })}
				/>
			</div>
		);
	}
	// input is a Controlled Component (look up defination)
````

#### Section 1, Lesson 20: Breather and Review

Builing an application that allows users to search for youtube videos

core react topics:
-jsx
-components
-state (inside search_bar.js)

es6:
- classes
- arrow functions
- inport and export statements
- signed up for the youtube api

app current structor:
- app starts in index.js
- base component called App
- imports SearchBar and renders it inside of App component
- it is a functional component, because it does not have any concept of state
- SearchBar compoonet is a class based compoent - whenever we have a compoentnt that needs to be aware of state.
- App componenet is a functional component - whenver were just taking in some information and spitting out some jsx. also can contain a class based component.
- Makes use of state by updating the user input whenever the state changes.
- user enters text, updates state, causisng entime component to re-render.

### Section: 2

#### Section 2, Lesson 21: Youtube Search Response
- Downwards Data Flow: Only the most parent component is responsible for fetching data. (from api, flux, redux...)
- index is the most parent in my app.
- //This line above was added to import the youtube api search
- //this is a sample test search for 'surfboards'

````
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//This line above was added to import the youtube api search

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyCRIVKyQtDyr2YXN3W7LjtMU-p-igDNcFw';

YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
	console.log(data);
})
//this is a sample test search for 'surfboards'

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};


ReactDOM.render(<App />, document.querySelector('.container'));
````
#### Section 2, Lesson 22: Refactoring Functional Components to a Class Component
- Changed from Functional Based Component to Class Based Component
- Exteneded { Component } under import line.

````
import React, { Component } from 'react';
// import Component object, so we can Extend from it
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCRIVKyQtDyr2YXN3W7LjtMU-p-igDNcFw';



// will restruct app based component from functional to class based component
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			// Refactored: When you have the vaiable and the value being the same, you can just use the variable
			// this.setState({ videos: videos }); - This is the old Way
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}	
};

ReactDOM.render(<App />, document.querySelector('.container'));
````

#### Section 2, Lesson 23: Props


````

````

#### Section 2, Lesson 24: Building Lists with Map
- created video_list_item.js

````
import React from 'react';

const VideoListItem = (props) => {
	return <li>Video</li>
};

export default VideoListItem;
````

- changed video_list.js
````
import React from 'react';
import VideoListItem from './video_list_item'


const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return <VideoListItem video={video} />
	});
	// added javascript value of 'videoItems' to store the results of the map function

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};
// made list using Map instead of for loop

export default VideoList;

````
