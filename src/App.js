import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import logo from "./components/breaking-bad-logo.png";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    font-family: 'Raleway';
`


class App extends React.Component {
    
      state = {
        characterData: []
      }


      componentDidMount() {
        console.log("component did mount running")

        axios
          .get("https://www.breakingbadapi.com/api/characters?limit=27&offset=0")
          .then(res => {
            console.log(res);
            this.setState({ characterData: res.data})
          })
          .catch(err => console.log(err));
      }

  render() {
    return (
      <Container>
        <Header>
        <img width="200" src={logo} />
        <h1>Characters</h1>
        </Header>
        <CharacterList characterData={this.state.characterData} />
      </Container>
    )
  }
}

export default App
