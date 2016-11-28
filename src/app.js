import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>react-to-pdf</h1>
      </div>
    )
  }
}

const ROOT = document.getElementById('root');

render(<App />, ROOT);
