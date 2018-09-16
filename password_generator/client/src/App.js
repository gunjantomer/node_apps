import React, { Component } from 'react';
import './App.css';

class App extends Component {

  //Initialize state
  state = { passwords: [] }

  //Fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // Get the passwords and store them in state
    fetch('/api/passwords').then(res => res.json()).then(passwords => this.setState({ passwords }));
  }

  render() {
    const { passwords } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 passwords.</h1>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button className="more" onClick={this.getPasswords}>Generate more</button>
          </div>
        ) : (
            //Render a helpful message otherwise
            <div>
              <h1>No passwords :(</h1>
              <button className="more" onClick={this.getPasswords}>Try again?</button>
            </div>
          )}
      </div>
    );
  }
}

export default App;