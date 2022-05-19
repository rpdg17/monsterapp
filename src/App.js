import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(() =>{
          return {monsters: users};
        })
      // .then((users) => console.log(response))
      // () => {
      // }
      );

    // fetch('https://jsonplaceholder.typicode.com/users').then((response) => console.log(response));
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return { searchField }
    })
  }

  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className='App'>
        <h1 className='app-title'>Monster Rolodex</h1>

        <Searchbox 
          onchangeHandler={onSearchChange} 
          placeHolderCaption={'Search Monster'} 
          className={'monster-search-box'} 
        />

        <CardList monsters={filterMonsters}/>
      </div>
    );
  }
}

export default App;
