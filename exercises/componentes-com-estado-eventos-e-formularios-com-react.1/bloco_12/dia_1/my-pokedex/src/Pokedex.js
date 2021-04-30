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

  render() {
    const { pokeList, index } = this.state;
    
    return (
      <div>
        <div className="pokedex">
          {<Pokemon key={pokeList[index].id} pokemon={pokeList[index]} />}
          {this.buttons()}
        </div>
      </div>
    );
  }
}

export default Pokedex;