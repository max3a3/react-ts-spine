import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import EventTest from './EventTest'
interface AppProps { }
interface AppState {
  name: string;
} 

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Rexxtsact'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <EventTest/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
