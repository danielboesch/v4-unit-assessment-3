import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state ={
            input: '',
        }
        this.handleClear = this.handleClear.bind(this)

    }

    handleClear(){
        this.setState({input: ''})
        this.props.reset()
    }




    render(){
        return(
            <div>
            <div className='outerBar'>
                    <div className='searchButtons'>
                    <input 
                    onChange={(e) => this.state.input = e.target.value} placeholder='Search for books'
                    // value={this.state.input}
                    ></input>
                    <button onClick={() => this.props.filterTheBooks(this.state.input)}> Search </button>
                    <button onClick={() => this.handleClear()}> Clear Search </button>
                </div>
            </div>
            </div>
        )
    }
}
export default SearchBar