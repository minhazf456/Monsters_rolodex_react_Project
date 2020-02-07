import React, {
  Component
} from 'react';
import './App.css';

class App extends Component { // component is a property on react
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  //   // we're using this componentdidmount lifecycle method that we have access to because of our class component and we are 
  // fetching from this URL we are taking a response and converting it into the Jason format that are JavaScript can understand and use and 
  // then we're going to take the users that we got back from it and set our monsters to that array of user and that's how
  // we end up with this list of in the next section we're going to now convert this to look a little bit closer to this.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {  // this is the built in method directly comes from the react component library
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;