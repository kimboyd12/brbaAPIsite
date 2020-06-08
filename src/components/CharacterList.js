import React from "react";
import styled from "styled-components";

const Cards = styled.div`
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-around;
`

const CharCard = styled.div`
    border: 2px solid aqua;
    padding: 30px;
    margin: 20px;
    text-align: center;
`

const Name = styled.h3`
    font-family: 'Zilla Slab';
`
const Info = styled.div`
    font-family: 'Raleway';
    line-height: 0.8;
`

const Image = styled.img`
    border-radius: 3px;
`

class CharacterList extends React.Component {
    render() {
        console.log("characters")
    return (
        <Cards>
            {this.props.characterData.map(character => {
                return (
                    <CharCard>
                        <Image width="200" height="250" src={character.img} />
                        <Name>{character.name}</Name>
                        <Info>
                        <p>Nickname: {character.nickname}</p>
                        <p>{character.occupation[0]}</p>
                        <p>Appeared in {character.appearance.length} seasons</p>
                        <p>Status: {character.status}</p>
                        <p>Played by {character.portrayed}</p>
                        </Info>
                    </CharCard>
                )
            })}
        </Cards>
    )
  }
}

export default CharacterList;