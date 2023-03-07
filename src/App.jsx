import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Topbody from "./components/Topbody";
import Subtitle from "./components/Subtitle";
import Admin from "./components/Admin";

function App() {
  const [profileData, setProfileData] = useState(null);
  const [gptData, setGPTData] = useState(null);

  function getData() {
    axios({
      method: "GET",
      url: "/profile",
    })
      .then((response) => {
        const res = response.data;
        setProfileData({
          profile_name: res.name,
          about_me: res.about,
        });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  
  // Create another function here to get the data for the openAI API.

  // function setGPTData() {
  //   axios({
  //     method:"GET",
  //     url: "/profile",
  //   })
  //   .then((response) =>{
  //     setGPTData({

  //     });
  //   })
  //   .catch((error) => {
  //     if (error.response) {
  //       console.log(error.response);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  // }

  

  return (
    <div className="App">
      <Title />
      <Header />
      <Subtitle />

      <Topbody />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* new line start*/}
        <p>To get your profile details: </p>
        <button onClick={getData}>Click me</button>
        {profileData && (
          <div>
            <p>Profile name: {profileData.profile_name}</p>
            <p>About me: {profileData.about_me}</p>
          </div>
        )}
        {/* end of new line */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
