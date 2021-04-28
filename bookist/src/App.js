import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import SearchBar from './components/SearchBar'
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
    this.filterBooks = this.filterBooks.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
    this.reset = this.reset.bind(this)
  }

  addToShelf(book){
    this.setState({shelf: this.state.shelf.concat([book])})
  }

  clearShelf(){
    this.setState({shelf: []})
  }

  filterBooks(input){
    let filteredBooks = this.state.books.filter((element, index) => {
      return element.title.includes(input) ||  element.author.includes(input)
    })
    this.setState({books: filteredBooks})
  }
  reset(){
    this.setState({books: data})
  }

  render(){


    return (
      <div className="App">
      <Header /> 
      <SearchBar filterTheBooks={this.filterBooks} reset={this.reset}/>
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
