import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.setUp = this.setUp.bind(this);
    this.state = {
      index: 0,
      pokeList: this.props.pokemons.map(pokemon => pokemon),
  
    };
  }
  setUp() {
    const { index, pokeList } = this.state;
    if (index === pokeList.length - 1) {
      this.setState(() => ({ index: 0 }))
    } else this.setState((prev) => ({ index: prev.index + 1}) )
  }
  buttons() {
    const { pokeList } = this.state;

    if (pokeList.length > 1) {
      return (
        <div>
          <button onClick={this.setUp}>Proximo Pokemon</button>
        </div>
      )
    }
  }
  setType(type) {
    this.setState(() => ({ index: 0 }))
    const { pokemons } = this.props;
    if (type !== 'All') {
      this.setState(() => ({ pokeList: pokemons.filter(pokemon => pokemon.type === type) }))
    } else this.setState(() => ({ pokeList: pokemons.map(pokemon => pokemon) }))
  }

  render() {
    const { pokeList, index } = this.state;
    const typeList = ['All', 'Fire', 'Psychic', 'Electric', 'Normal', 'Bug', 'Poison', 'Dragon'];
    return (
      <div>
        <div className="pokedex">
          {<Pokemon key={pokeList[index].id} pokemon={pokeList[index]} />}
          {this.buttons()}
        </div>
        <div>
          {typeList.map(type => <button key={type} className={type} onClick={this.setType.bind(this, type)}>{type}</button>)}
        </div>
      </div>
    );
  }
}

export default Pokedex;