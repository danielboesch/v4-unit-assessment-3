import React, {Component} from 'react';

class Shelf extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        let mappedTitles = this.props.shelfArr.map((element, index) => {
            return(
                
                <div key={index}>
                <p>{element}</p>
                {/* {console.log(element.title)} */}
                </div>
            )
        })
        return(
            <div>
                <h3>Your Shelf</h3>
                <button onClick={() => this.props.clearTheShelf()}>Clear Shelf</button>
                <span>{mappedTitles}</span>
            </div>
        )
    }


}

export default Shelf