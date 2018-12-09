import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

//Amplify
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

import awsconfig from './aws-exports';

// Amplify init
Amplify.configure(awsconfig);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">AWS Amplify with Authentication Sample </h1>
        </header>
        <div className="App-content">
          <p>Congratulations! You have deployed an AWS Backend resources along with your Front end Amplify Console project.</p>
        </div>
      </div>
    );
  }
}

const AppWithAuth = withAuthenticator(App, true);

export default () => (
      <AppWithAuth />
);
