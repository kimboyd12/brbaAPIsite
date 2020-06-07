import React from "react";

class CharacterCard extends React.Component {
    render() {
        console.log("characters")
    return (
        <div className="char-card">
            {this.props.characterData.map(character => {
                return (
                    <div className="card">
                        <img width="200" src={character.img} />
                        <h4>{character.name}</h4>
                        <p>Alias:{character.nickname}</p>
                        <p>{character.occupation}</p>
                        <p>{character.status}</p>
                    </div>
                )
            })}
        </div>
    )
  }
}

export default CharacterCard;