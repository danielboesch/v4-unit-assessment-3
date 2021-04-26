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
      books: data
    }

  }


  render(){

    return (
      <div className="App">
      <Header />
      <div class ='booklistShelf'>
        <div class ='booklist'>
          <BookList  books = {this.state.books}/>
          
        </div>
        <div class ='shelf'>
          <Shelf />
        </div>
      </div>
    </div>
  );
}
}

export default App;
