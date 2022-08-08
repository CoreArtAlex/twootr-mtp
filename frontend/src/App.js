// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header.jsx";
import User from "./components/User.jsx";
import Compose from "./components/Compose.jsx";
import Post from "./components/Post.jsx";
// import Main from "./components/Main,jsx";
// import axios from "axios";

function App(props) {
  return (
    <div className="App">
      <Header></Header>
      <User></User>
      {/* <Compose/> */}
      <Post></Post>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
