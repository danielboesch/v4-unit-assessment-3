import React, {Component} from 'react';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }




    render(){
        let mappedBooks = this.props.books.map((element, index) => {
            return(
 
               <div className="book"
                    key={index}>
                    <img alt={index} onClick={() => this.props.addToTheShelf(element.title)} src={element.img} />
                    <p>{element.title} by: {element.author}</p>
                </div>
                // console.log(element.title)
                )
                
            })

        return(
            <div>
                <div className='books'>
                <span className = 'eachBook'>{mappedBooks}</span>
                </div>
            </div>
        )
    }


}
export default BookList