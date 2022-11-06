import React, {Component} from 'react';
import  './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
// import 'tachyons';

export default class App extends Component {
  render() {
    return (
    <div className="App">
      <Navigation/>
      {<Logo/>}
      {/* <ImageLinkForm />
      <FaceRecognition /> */}
    </div>
    );
  } 
}

