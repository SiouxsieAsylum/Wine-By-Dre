import React, {Component} from 'react';
// import ListItem from './list-item.jsx';

class List extends Component {
  render(){
    return(
      <div className="wine-list">
        <div onClick={() => this.props.addWine()} className="list-item">
        <img className="list-pic" src={'images/wine.jpg'} alt="New Wine" />
        <h6>Add Wine</h6>
        </div>
        {this.props.list.map((wine, index) =>{

         return( <div key={index} onClick={() => this.props.setId(wine.id)} className="list-item">
            <img src={wine.picture} alt={wine.name}/>
              <div className="wine-price">
                <h6>{wine.name}</h6>
                <h5>{wine.price}</h5>
              </div>
          </div> )

        })}
      </div>
      )
    }
  }


export default List;
