import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import {Component} from 'react'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      books: data,
      shelf: []
    }

    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

  addToShelf(book){
    this.setState({shelf: this.state.shelf.concat([book])})
  }

  clearShelf(){
    this.setState({shelf: []})
  }

  render(){


    return (
      <div className="App">
      <Header /> 
      <div className='outerBar'>
        <div className='searchButtons'>
          <input placeholder='Search for books'></input>
          <button> Search </button>
          <button> Clear Search </button>
        </div>
      </div>
      <div className ='booklistShelf'>
        <div className ='booklist'>
          <BookList  books = {this.state.books} addToTheShelf={this.addToShelf}/>
          
        </div>
        <div className ='shelf'>
          <Shelf shelfArr={this.state.shelf} clearTheShelf={this.clearShelf}/>
        </div>
      </div>
    </div>
  );
}
}

export default App;
