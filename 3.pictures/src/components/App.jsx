import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit (term) {
        axios.get('https://api.unsplash.com/serach/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID urIrXxelCoQeoga04hUqsVXkjH6SKa_4EHAy-SAqOZg'
            }
        });
    }
    render () {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }

};

export default App;
